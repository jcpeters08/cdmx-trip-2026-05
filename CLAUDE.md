# CLAUDE.md — CDMX Trip 2026-05

If you're a new Claude session opening this repo, read this first.

## What this is

Single-page interactive briefing for a Mexico City week (May 2–8, 2026). Phone-first companion: countdown, day-by-day schedule, Leaflet map of every booked location, hourly weather + UV, confirmation codes, four "Deep Dives" tabs (Xochimilco · Teotihuacán · Roma Norte · Hotel Geneve), Mon errand cluster, and pre-trip reading.

Live: https://jcpeters08.github.io/cdmx-trip-2026-05/ — entry point: `index.html` → `app.js` (single file, ~1000 lines) → `styles.css`.

## Architecture

Static. Vanilla HTML / CSS / JS. No build, no framework.

- `index.html` — section scaffolding, Leaflet CDN refs, cache-busted CSS/JS refs
- `styles.css` — palette, layout, mobile-first; light-mode overrides at **end of file** (cascade order matters — see commit `e1d1b63`)
- `app.js` — all data (`TRIP`, `CATEGORIES`, `PINS`, `DAYS`, `BOOKINGS`, `FLEX_TBD`, `READING`, `DEEP_DIVES`) plus all renderers, sections separated by `===` banner comments
- `assets/images/` — CC-licensed photos for the Deep Dives tabs (4 topics, ~13 images)

External services (no API keys):
- **Map**: Leaflet 1.9.4 + OpenStreetMap tiles (URLs + SRI hashes pinned in `index.html`)
- **Weather**: Open-Meteo `/v1/forecast` — hourly `temperature_2m,uv_index,precipitation_probability,weather_code` + daily summary, fahrenheit, `timezone=America/Mexico_City`

## Critical conventions — DON'T BREAK

1. **Trip data is embedded in `app.js`.** Source-of-truth was the vault note `2026-04-cdmx.md`. Don't refactor to fetch from elsewhere.
2. **No API keys, no backend, no localStorage.** Both external services are key-free; the page is stateless every load.
3. **Phone-first.** Mobile-first CSS, 44px+ tap targets, no hover-only UI.
4. **Cache-bust on CSS/JS changes.** `index.html` refs `styles.css?v=YYYY-MM-DDx` and `app.js?v=...`. Bump the query string when editing either — GitHub Pages caches aggressively (commit `e734f65`).
5. **Light-mode overrides live at the end of `styles.css`.** Earlier mid-file overrides got beaten by later base declarations. Add new light-mode rules to the end-block.
6. **Image attribution is mandatory.** Every entry in `DEEP_DIVES.<topic>.images` must include `credit:` (creator + license) and `source:` (Wikimedia/Commons URL). Don't add a photo without both.
7. **Approx pins stay flagged.** Pins where the exact street # isn't in OSM Nominatim carry `approx: true`; popup renders "· pin approx". Two today (Hair Studio Querétaro 121, Koti Coahuila 44) — don't quietly drop the flag if you re-pin.
8. **Deep Dives are URL-routable.** `#dive=<id>` (e.g. `/#dive=teotihuacan`) deep-links + scrolls into view (commit `82e42b5`). Treat hash IDs as a public contract: `xochimilco · teotihuacan · roma-norte · hotel-geneve`.

## Glossary

| Term | Meaning |
|---|---|
| PXM / MEX / MSP / DEN | Puerto Escondido / CDMX Benito Juárez / Minneapolis–St. Paul / Denver airports |
| Roma Norte · Condesa · Polanco · Zona Rosa | CDMX neighborhoods (Airbnb is Roma Norte) |
| trajinera · chinampa · embarcadero | Xochimilco canal boat / floating-garden plot / boat dock |
| Tarjeta MI | CDMX integrated transit card |
| Y4 / F9 | Volaris / Frontier IATA airline codes |
| SUB | subtitled (Spanish subs over English audio — Devil Wears Prada 2) |
| OTC / Rx | over-the-counter / prescription (Finacea sells OTC at major Mexican farmacias despite being Fracción IV) |

## Schema highlights

```js
// PINS[] — map markers
{ name: "Hotel Geneve", cat: "lodging", lat: 19.4248918, lng: -99.1641018,
  addr: "Londres 130, Col. Juárez", note: "Sat 5/2 night only", approx?: true }

// DAYS[] — day-by-day cards
{ id: "sat", date: "Sat · May 2", iso: "2026-05-02",
  title: "Arrival from PXM", summary: "...",
  events: [{ when: "14:24", title: "...", detail: "...", badge?: "booked"|"tbd"|"flex" }] }
```

`CATEGORIES` keys (lodging · haircut · medical · shopping · fitness · entertainment · food · transit · sightseeing) drive both pin colors and the map filter chips. `DEEP_DIVES` is keyed by hash-ID with shape `{ eyebrow, title, lede, practical[], facts[], images[], video, readings[], onTheBoat[]? }`.

## Operational pointers

- **Deploy:** push to `main` → GitHub Pages serves from `/` (no Actions, no build step).
- **Pages enable** (one-time, already done): `echo '{"source":{"branch":"main","path":"/"}}' | gh api -X POST repos/jcpeters08/cdmx-trip-2026-05/pages --input -`
- **Local dev:** `python3 -m http.server 8000`
- **No env vars, no secrets, no auth.** Repo is public; all content non-sensitive.
- **Open-Meteo failure UX:** wrapped in try/catch — surfaces a "couldn't load, refresh to retry" warn box rather than breaking the page.

## Known quirks / gotchas

- **Map fit-bounds excludes Teotihuacán.** `markers.filter(m => m.getLatLng().lat < 19.5)` — Teo at 19.69 would skew bounds north (`renderMap`).
- **Day-card auto-open:** if no `DAYS[i].iso` matches today's local date, the first card auto-opens so first load isn't 7 collapsed cards (`renderDays`).
- **Light-mode hero gradient washed out** until `45e1d1b` added a darker terracotta-to-warm-brown override. If you change hero background, re-test light mode.
- **Unclear — verify with user:** Tue 5/5 was swapped from Cablebús → Xochimilco mid-build (commit `4f2047a`). The vault note `2026-04-cdmx.md` may still reference Cablebús. If reactivating as a template, confirm which version reflects what actually happened.

## Status

Historical / reference. The trip has passed (mid-May 2026, Jonathan back in Minneapolis). No active development expected — keep deployed as a reference for the next trip-companion build.

## Where to look for more

- `README.md` — short user-facing summary
- `app.js` lines 1–235 — trip data (TRIP/CATEGORIES/PINS/DAYS/BOOKINGS/FLEX_TBD/READING)
- `app.js` lines 237–445 — DEEP_DIVES content (4 topics)
- `app.js` lines 447–end — render functions (countdown, days, map, weather, deep-dives, etc.)
- Vault note `2026-04-cdmx.md` — original source-of-truth (may lag the Tue 5/5 swap)
- Sibling repo `pxm-overnight-escapes` — same vanilla-HTML/Leaflet pattern

## CLAUDE.md update workflow

No active development expected. If reactivated as a template for a new trip, the active session should offer to update this file in the same commit as the trip-data swap.
