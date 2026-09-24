/**
 * Copy the integration -- backend and built dashboard -- to a Home Assistant
 * over SSH, then reload it. For trying a change on a real instance before a
 * release; users install through HACS instead.
 *
 *   npm run build && npm run deploy
 *
 * Reads VITE_SSH_USERNAME / VITE_SSH_PASSWORD / VITE_SSH_HOSTNAME from .env,
 * and VITE_HA_URL + VITE_HA_TOKEN (from .env.development) to reload or
 * restart afterwards. None of these files is committed.
 */
import { Client, type ScpClient } from 'node-scp';
import { config } from 'dotenv';
import chalk from 'chalk';
import { access, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { createInterface } from 'node:readline/promises';

config({ path: '.env', quiet: true });
config({ path: '.env.development', quiet: true });

const DOMAIN = 'better_wall_dashboard';
const LOCAL = join('..', 'custom_components', DOMAIN);
const {
  VITE_SSH_USERNAME: USERNAME,
  VITE_SSH_PASSWORD: PASSWORD,
  VITE_SSH_HOSTNAME: HOST,
  VITE_HA_URL: HA_URL,
  VITE_HA_TOKEN: TOKEN,
} = process.env;

async function ensureRemoteDir(client: ScpClient, target: string): Promise<void> {
  let current = '';
  for (const segment of target.split('/').filter(Boolean)) {
    current += `/${segment}`;
    if (!(await client.exists(current).catch(() => false))) await client.mkdir(current);
  }
}

async function upload(client: ScpClient, local: string, remote: string): Promise<number> {
  let count = 0;
  for (const entry of await readdir(local, { withFileTypes: true })) {
    // Python's caches are this machine's, and meaningless on the other one.
    if (entry.name === '__pycache__') continue;
    const from = join(local, entry.name);
    const to = `${remote}/${relative(local, from).replace(/\\/g, '/')}`;
    if (entry.isDirectory()) {
      await ensureRemoteDir(client, to);
      count += await upload(client, from, to);
    } else if (entry.isFile()) {
      await client.uploadFile(from, to);
      count += 1;
    }
  }
  return count;
}

async function ha(path: string, init?: RequestInit): Promise<Response> {
  return fetch(new URL(path, HA_URL), {
    ...init,
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
  });
}

async function main(): Promise<void> {
  if (!USERNAME || !PASSWORD || !HOST) throw new Error('Set VITE_SSH_USERNAME, VITE_SSH_PASSWORD and VITE_SSH_HOSTNAME in .env');
  await access(join(LOCAL, 'frontend', 'better_wall_dashboard.js')).catch(() => {
    throw new Error('No build found. Run `npm run build` first.');
  });

  const client = await Client({ host: HOST, port: 22, username: USERNAME, password: PASSWORD });
  // The add-on mounts the config at /config on older installs, /homeassistant on newer.
  const base = (await client.exists('/homeassistant/configuration.yaml').catch(() => false)) ? '/homeassistant' : '/config';
  const remote = `${base}/custom_components/${DOMAIN}`;
  const fresh = !(await client.exists(remote).catch(() => false));
  if (!fresh) {
    // Mirror exactly: a chunk from the last build must not linger beside
    // this one's, or the directory grows with every deploy.
    await client.rmdir(`${remote}/frontend`).catch(() => undefined);
  }
  await ensureRemoteDir(client, remote);
  const count = await upload(client, LOCAL, remote);
  client.close();
  console.info(chalk.green(`Uploaded ${count} files to ${remote}.`));

  if (!HA_URL || !TOKEN) {
    console.info(chalk.yellow('No VITE_HA_URL / VITE_HA_TOKEN: reload the integration (or restart Home Assistant) yourself.'));
    return;
  }

  const entries = (await (await ha('/api/config/config_entries/entry')).json()) as { entry_id: string; domain: string }[];
  const entry = entries.find(item => item.domain === DOMAIN);
  if (entry && !fresh) {
    const response = await ha(`/api/config/config_entries/entry/${entry.entry_id}/reload`, { method: 'POST' });
    console.info(response.ok ? chalk.green('Integration reloaded.') : chalk.red(`Reload failed: ${response.status}`));
    console.info(chalk.gray('Python changes need a restart; frontend changes are live after a reload of the page.'));
    return;
  }

  // A custom integration Home Assistant has never seen is only discovered at
  // startup, so the first install needs a restart. Asked, because it
  // interrupts everything else the house is doing.
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question(chalk.yellow('First install: restart Home Assistant now so it finds the integration? [y/N] '));
  rl.close();
  if (answer.trim().toLowerCase() === 'y') {
    await ha('/api/services/homeassistant/restart', { method: 'POST', body: '{}' });
    console.info(chalk.green('Restarting. Then: Settings → Devices & services → Add integration → Better Wall Dashboard.'));
  } else {
    console.info('Restart Home Assistant yourself, then add the integration under Settings → Devices & services.');
  }
}

main().catch(error => {
  console.error(chalk.red(error instanceof Error ? error.message : String(error)));
  process.exit(1);
});
