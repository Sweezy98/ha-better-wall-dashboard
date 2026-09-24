# Home Assistant + HACS integration — hard-won spec

Everything in here was learned by getting it wrong first, in a real HACS custom
integration (`better_lighting`, HA 2026.x, Python 3.14). Each item is a rule
followed by **the failure it prevents**, because a rule without its failure gets
argued away in six months.

Drop this in a new integration repo (as `CLAUDE.md`, or `docs/HA_SPEC.md` and
referenced from `CLAUDE.md`) so an assistant working there starts from the far
side of these bugs.

Verified against Home Assistant 2026.9 unless noted. Where something is a fact
about HA's own source, the file is named so it can be re-checked.

---

## 1. Repository and packaging

- **Everything shippable lives under `custom_components/<domain>/`.** HACS
  copies that one directory for an integration repository and nothing else.
  *Failure: assets kept in `docs/` or repo-root `www/` simply do not exist on a
  user's install.*
- **There is no build step.** HACS copies files and runs nothing. All frontend
  code is plain JS, no bundler, no TypeScript, no npm.
  *Failure: a `dist/` that only exists on your machine.*
- **`/hacsfiles/…` is not available to an integration.** That URL is a static
  route HACS registers onto `config/www/community`, and only *plugin*
  (Lovelace) repositories are downloaded there — see `hacs/base.py`,
  `async_setup_frontend_endpoint_plugin`, and `URL_BASE = "/hacsfiles"` in
  `hacs/const.py`. An integration that ships a dashboard card **must serve it
  itself**.
  *Failure: copying a card's URL style from a HACS plugin and getting a 404.*
- **`hacs.json`** needs at least `name` and the `homeassistant` version floor.
  Repository **topics**, a **description** and **releases** are what make it
  listable.
- **Docs that both GitHub and the app read should be one file**, shipped inside
  the component and fetched by the frontend at runtime.
  *Failure: a copy in `docs/` and a copy in the component, which drift within a
  month.*

---

## 2. Manifest

- Required for a custom integration: `domain`, `name`, `version`,
  `documentation`, `issue_tracker`, `codeowners`, `config_flow`, `iot_class`,
  `integration_type`. `version` is mandatory for custom components and HACS
  reads it.
- **`"single_config_entry": true`** if one hub entry owns everything — HA then
  hides "add entry".
- `"dependencies": ["http", "websocket_api", …]` for anything you call during
  setup. `"after_dependencies": ["recorder"]` for optional ones.
  *Failure: `hass.http` missing during setup because `http` was only an
  after-dependency.*
- Do **not** add `frontend`/`panel_custom` as dependencies if the integration
  must survive a headless install. Call
  `await async_setup_component(hass, "panel_custom", {})` and degrade
  gracefully when it returns `False`.
  *Failure: the whole integration refuses to load on a system with no frontend,
  costing the user their automations to save their settings page.*

---

## 3. Config entries and subentries

All verified against a real install rather than assumed:

- `async_add_subentry(entry, subentry)`,
  `async_update_subentry(entry, subentry, *, data, title, unique_id) -> bool`,
  `async_remove_subentry(entry, subentry_id)` all exist and behave as named.
- **Subentry mutations DO fire the parent entry's update listeners** — all three
  route through `_async_update_entry` / `_async_save_and_notify`. No explicit
  `async_schedule_reload` needed.
- **`async_update_subentry` cannot change `subentry_type`.** Plan the type
  taxonomy before shipping; changing it later means delete + recreate, which
  loses the id every reference is keyed on.
- **`async_remove_subentry` already calls `async_clear_config_subentry` on both
  the device and entity registries.** Do not hand-clean.
- **There is no pre-delete hook for a subentry.** So cross-references must be
  *lenient at runtime*: a dangling reference raises a fixable repair issue and
  the slot is skipped, never raises.
  *Failure: deleting a scene three switches point at takes down the integration
  with a `KeyError`.*
- **Reference other subentries by `subentry_id`** (HA's auto ULID), never by
  name. Store a `slug` snapshot alongside for logs and service calls only.
- `async_add_entities(..., config_subentry_id=…)` is on
  `AddConfigEntryEntitiesCallback`, and `ConfigFlow.async_get_supported_subentry_types`
  exists. One device per subentry is the clean shape.
- **Every stored key is forever.** When a concept is renamed in the UI, keep the
  stored key and rename only what the user sees, or write an additive migration
  that touches no stored data. Prove it with a literal diff of the stored dict
  before and after an upgrade.
- **Watch for form-key collisions between subentry types.** Two types that both
  want `zone` will collide in a shared schema table; namespace one of them
  (`room_zone`).

---

## 4. Strings, translations, selectors

- **Custom integrations load `translations/`, not `strings.json`.** Ship both
  and assert `translations/en.json == strings.json` in a test.
  *Failure: every string shows as its key in production while looking perfect in
  the repo.*
- **A missing entity translation key silently collapses the entity's name onto
  its device's.** Two entities in one device become `switch.kitchen` and
  `switch.kitchen_2`, and every automation naming them breaks on the next
  rename.
  *Guard: every `_attr_translation_key = "x"` in `<platform>.py` has
  `entity.<platform>.x` in strings.json.*
- **hassfest rejects a `selector.<name>` block that is not exactly
  `{"options": {…}}`.** Checking the key exists is not enough.
- Translated selects need their options translated or users see raw slugs.
  Free-text selects (`custom=True`) are the only exemption.
- **Every language file must have exactly the same key set**, and the same
  `{placeholders}` per key. HA falls back per missing key, so a partial
  translation produces a form that is half one language and half the other.
- `SelectSelectorConfig` exposes `sort` but **no `reorder`**; only
  `EntitySelectorConfig` has `reorder`. Ordered lists need a menu loop or a
  custom UI.

---

## 5. Entities

- **An entity whose attributes come from something other than its own state
  must subscribe to that thing.** Give the controller/coordinator an
  `async_add_listener`, and in `async_added_to_hass` do
  `self.async_on_remove(controller.async_add_listener(self.async_write_ha_state))`.
  *Failure: every derived attribute is only as fresh as the last unrelated state
  change, so a dashboard shows yesterday's answer and nothing looks broken.*
- **`None` and `False` are different answers.** "This room has no sensor" is not
  "nobody is in this room". Publish `None` and let the frontend draw nothing.
  *Failure: a badge for a sensor the user does not own.*
- **Never let a derived attribute's icon imply a source it does not have.** An
  "on automatically" badge drawn as a motion sensor is read as presence
  detection, and it flickers into view during the window before a
  "held by hand" flag catches up.
- Vendor a `GroupEntity`-style base rather than subclassing
  `homeassistant.components.group.light.LightGroup`: not public API, signature
  moves across releases.

---

## 6. Shipping frontend code — the biggest source of pain

This section is most of the bugs.

### Serving files

- **Track each served file separately**, not one "static routes are done" flag
  in `hass.data`.
  ```python
  done: set[str] = hass.data.setdefault(KEY, set())
  wanted = [n for n in names if n not in done]
  ```
  *Failure: a file added by an upgrade is never served, because the flag was set
  earlier in the same run — and reloading the integration rather than restarting
  HA is exactly how people take an upgrade. This shipped a card nobody could
  fetch.*
- **Put a content fingerprint in the query string**, not in the route:
  `f"{ROUTE}/{name}?v={sha256(bytes)[:12]}"`. Hash the *contents*, not the
  version, so it is right when the same version is installed twice.
  *Failure: `cache_headers=True` plus a stable URL means an upgrade silently
  serves the old script forever.*
- Register with `hass.http.async_register_static_paths([StaticPathConfig(url, path, True)])`.

### Getting a card actually loaded

- **`frontend.add_extra_js_url` is not enough on its own.** It writes a
  `<script type="module">` into the page HA serves — so it only reaches pages
  served *after* your setup ran. A browser holding an older page, or one served
  while HA was still starting, never loads the card and Lovelace reports
  "Custom element doesn't exist".
  *Symptom: the card works, then doesn't, then does. Nothing was deleted.*
- **Also register a Lovelace resource** (storage mode only). A dashboard fetches
  its resource list over the websocket every time it is opened, so there is no
  window in which it can be missed:
  ```python
  resources = getattr(hass.data.get("lovelace"), "resources", None)
  if resources is None or not hasattr(resources, "async_create_item"):
      return                       # YAML mode, or no Lovelace: not ours to edit
  await resources.async_get_info() # loads the store
  ...  # create / update / delete by URL path, keeping exactly one row per file
  ```
  Own its lifetime: rewrite it when the fingerprint changes, delete duplicates
  (including one the user added by hand while debugging), and remove it in
  `async_remove_entry` — **not** in `async_unload_entry`, which runs on every
  restart.
- **Remove the stale `extra_js_url` when the fingerprint changes.** Track what
  you added in `hass.data` and call `frontend.remove_extra_js_url` for anything
  no longer wanted.
  *Failure: after an upgrade + reload, two versions of the card load and
  whichever arrives first wins the `customElements.define`.*
- Lovelace may not be set up when your entry is. Retry on
  `EVENT_HOMEASSISTANT_STARTED` if `hass.data["lovelace"]` is absent.
- For the card picker: push to `window.customCards`, and implement
  `static getConfigElement()` and `static getStubConfig(hass)` so it is
  UI-configurable rather than YAML-only.
- Guard every definition: `if (!customElements.get(tag)) customElements.define(tag, Cls)`.
  Two copies of the script will happen.
- **`setConfig` must tolerate an empty entity**, because the card picker draws a
  preview before anything is chosen.

### Borrowing Home Assistant's own components

- **`ha-selector`, `ha-entity-picker`, `ha-switch`, `ha-icon-picker`,
  `ha-markdown`, `ha-chart-base` are registered lazily with the dashboard's
  editors.** A custom panel opened on its own may never have them.
  - Reach for them through `window.loadCardHelpers()` →
    `helpers.createCardElement({type: "entities", entities: []})` →
    `await card.constructor.getConfigElement()`. The button card brings the icon
    picker; the history-graph card brings the chart.
  - **Always `customElements.get(tag)` before `createElement(tag)`, and always
    have a plain fallback.** Enforce it with a test: every `createElement("ha-…")`
    must have a matching `customElements.get("…")` in the same file.
  - For long-form content, write your own tiny renderer rather than depend on
    `ha-markdown`.
- **A chart canvas cannot resolve CSS custom properties.** Handing ECharts
  `var(--success-color)` silently falls back to its own palette. Resolve the
  variable to a real colour first (`getComputedStyle(el).getPropertyValue(name)`).
  *Guard: forbid `var(--` inside the chart-building method.*

### The service worker, and "reload" not working

- HA installs a service worker that answers from its own cache before the
  network. A plain `location.reload()` does not beat it, and **on a phone there
  is no hard refresh**. Ship a "reload the frontend" action.
- **Do not empty every cache and unregister the worker.** That throws away HA's
  whole precached frontend — megabytes over mobile data, for files named after
  their own contents and therefore incapable of being stale — and reloads the
  page through a worker whose cache was just pulled out from under it. One chunk
  failing to arrive is enough, and a module that fails to load is never retried.
  *Failure: the "fix it" button breaks the frontend.*
- Do this instead: delete only cache **entries** whose path is under your own
  route or has no file extension (i.e. documents, which carry the script tags),
  call `registration.update()` rather than `unregister()`, then reload. And
  check the file is actually being served first (`fetch(url, {cache: "reload"})`)
  so a genuinely missing file is reported rather than refreshed at.

### Icons in the sidebar

- The sidebar takes an icon *name*, not an image. Register your own set:
  ```js
  window.customIconsets = window.customIconsets || {};
  window.customIconsets["my-domain"] = async (name) => ({ path: PATHS[name] || FALLBACK });
  ```
  and use `"my-domain:thing"` as `sidebar_icon`. Serve and `add_extra_js_url` the
  icon script alongside the panel, or the name resolves to a blank square.

---

## 7. Brand images and the HACS store icon

- **Since HA 2026.3 a custom integration ships brand images in
  `custom_components/<domain>/brand/`** — no configuration, no pull request.
  Sizes are still the brands repository's: `icon.png` 256², `icon@2x.png` 512²,
  landscape `logo.png` / `dark_logo.png` with a 128–256 short side and `@2x`
  doubled, all RGBA.
- **That folder does not fix the HACS store listing.** HACS's bundled frontend
  asks `brands.home-assistant.io` and gets a placeholder. For an icon there you
  need a PR to `home-assistant/brands`.
- **`home-assistant/brands` no longer accepts new custom-integration folders.**
  Its PR template says so (`.github/PULL_REQUEST_TEMPLATE.md`, and the README
  calls `custom_integrations` a "Legacy folder"). The record backs it up: ~1,870
  new `custom_integrations` folders in the twelve months before that change, and
  effectively none since. Track HACS adopting the brands proxy instead
  (`hacs/frontend#949`, `hacs/integration#5223`).
- Serve a copy of the icon from your own route too, so an About dialog works on
  cores older than 2026.3.

---

## 8. Browser and CSS traps (for a panel or card)

- **A panel that animates screens has a transformed ancestor**, and
  `position: fixed` resolves against *that*, not the viewport. Park the element
  at `top:0;left:0`, measure `getBoundingClientRect()`, and offset from there.
  *Failure: a popup at `left=1314` on a 1280-wide window.*
- **`position: fixed` still paints in its host's place in the stacking order.**
  For anything that must be over everything, use the top layer:
  `el.popover = "manual"; el.showPopover();`
- **`position: absolute` inside a scroll container both clips the popup and adds
  its height to the container's scroll area**, which stretches the row it
  belongs to instead of covering it.
- **Measure the chrome, never guess it.** A popup sized `rows * rowHeight + 12`
  is two pixels short once the border is counted, which is a scrollbar for
  nothing. Read `paddingTop/Bottom` and `borderTopWidth/BottomWidth` from
  `getComputedStyle`.
- **Rows are not all the same height.** Sum the actual heights of the rows you
  intend to show rather than multiplying one of them, and `Math.ceil` the total
  — a box asked for a fractional height is laid out at the pixel below while its
  contents keep the fraction.
  *Failure: five 40px rows in a box sized for five 42px rows shows eight pixels
  of a sixth behind a scrollbar.*
- **A grid cell must be occupied even when empty**, and given a height.
  An absent element lets the neighbour take its column (a list of modes rendered
  as "p."); a zero-height one makes exactly the selected row taller than the
  rest and every row count wrong.
- **`box-sizing: border-box`** on anything whose width you set to match another
  element.
- **`focus({ preventScroll: true })`** when a scroll handler closes the popup —
  focusing a row scrolls the container and the menu shuts the instant it opens.
  Arm scroll/resize listeners in `requestAnimationFrame`.
- **Your page CSS leaks into embedded content.** Prose lists inside a panel that
  styles `li` as ruled rows come out as a table. Reset explicitly in the prose
  container.
- Keep one shared element (dropdown, dialog) used by both panel and card, and
  assert in a test that there is only one definition.

---

## 9. Optional integrations

- Import them inside the function, in a `try/except ImportError`, and degrade:
  ```python
  try:
      from homeassistant.components.recorder import get_instance
      from homeassistant.components.recorder.history import get_significant_states
  except ImportError:
      return []
  states = await get_instance(hass).async_add_executor_job(lambda: get_significant_states(...))
  ```
- Recorder queries **must** go through `get_instance(hass).async_add_executor_job`.
- Decide which direction failure goes and write it down. Failing *closed* is
  usually right: an unreadable sensor blocks rather than allows.

---

## 10. Testing

- `pytest-homeassistant-custom-component`, in a **uv-managed venv** on a Python
  new enough for current HA. A distro Python is usually too old.
- **Keep a pure layer with no `homeassistant` imports** — the decision logic,
  the state machine, the maths. It is a third of the code, most of the
  interesting behaviour, and it tests in milliseconds with no fixtures.
- **Packaging guard tests pay for themselves.** Worth copying wholesale:
  - `translations/en.json == strings.json`
  - every language has the same keys and the same `{placeholders}`
  - every `_attr_translation_key` has a name in strings.json
  - every `selector.<name>` is exactly `{"options": {...}}`
  - every declared service is in `services.py`, `services.yaml` **and**
    strings.json
  - every menu step named in strings.json has an `async_step_*` behind it
  - every `__all__` entry resolves (catches a rename that missed one)
  - every UI string key the frontend asks for exists, and none is unread
  - the manifest and `hacs.json` are complete
- **Tests that read source are brittle — anchor them properly.**
  - `source.split("some_call(")[1].split(")")[0]` matches the *function
    definition* the moment the call is reformatted. Use a regex that pins the
    call's own shape, and hoist it to a module constant.
  - A test asserting a pattern is absent will match its own explanatory comment.
    Strip comments, or assert on quoted string literals.
- **Run frontend logic under node** where the same rule exists in Python and JS.
  Lift the function out of the file by string slice and execute it against the
  cases the Python test pins. This caught a chart that disagreed with its engine
  and a Markdown renderer that left `**` as text.
- **Verify by measurement, not by eye.** A headless Chrome harness that prints
  numbers — `getBoundingClientRect`, `scrollHeight` vs `clientHeight`, computed
  colours, element counts — found every layout bug in this project, usually
  after a screenshot had looked fine. Keep small harness pages in a scratch
  directory and drive them with
  `google-chrome --headless --disable-gpu --no-sandbox --virtual-time-budget=6000 --dump-dom`.
  `--dump-dom` plus a `<pre>` of measurements beats a screenshot.
- **`node --check` every shipped `.js`** in CI. No build step means no other
  syntax check.
- CI: `hassfest` and `hacs/action` workflows. hassfest needs Docker locally.

---

## 11. Working method

- **Answer "is this actually true?" from the source, not from memory.** Several
  confident beliefs in this project were wrong: that a brands PR was
  unnecessary, that `/hacsfiles/` would serve an integration's files, that
  emptying the browser cache was a safe way to force a reload. Each cost a
  release. HA's own source is in the venv; HACS's and the Android app's are a
  fetch away.
- **When a symptom is intermittent, suspect *where* something was registered,
  not *whether*.** Twice the answer was "the page was the wrong page".
- Prefer additive change to migration. A feature that changes no stored data
  needs no migration and can be proved not to with a diff.
- Comments should say **why**, and name the failure that made the line
  necessary. Every rule above exists because someone deleted a line that looked
  pointless.
