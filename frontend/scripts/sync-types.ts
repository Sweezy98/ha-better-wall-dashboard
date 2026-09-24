/**
 * Generate TypeScript types for the services of one Home Assistant
 * (ha-component-kit's type sync). The output, supported-types.d.ts, describes
 * that particular instance, so it is gitignored.
 *
 *   npm run sync
 */
import { typeSync } from '@hakit/core/sync';
import { config } from 'dotenv';

config({ path: '.env', quiet: true });
config({ path: '.env.development', quiet: true });

const url = process.env.VITE_HA_URL;
const token = process.env.VITE_HA_TOKEN;
if (!url || !token) {
  console.error('Set VITE_HA_URL in .env and VITE_HA_TOKEN in .env.development first.');
  process.exit(1);
}
await typeSync({ url, token });
