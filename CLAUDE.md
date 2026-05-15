# CLAUDE.md — CDMX Trip 2026-05

If you're a new Claude session opening this repo, read this first.

## What this is

Single-page interactive briefing for a Mexico City week (May 2–8, 2026). Phone-first companion: countdown, day-by-day schedule, map of every booked location, hourly weather + UV, confirmation codes.

Live: https://jcpeters08.github.io/cdmx-trip-2026-05/

## Architecture

Static. Vanilla HTML / CSS / JS. No build, no framework.

- `index.html` — markup + section structure
- `styles.css` — palette, layout, mobile-first
- `app.js` — data (trip, pins, bookings) + renderers (days, map, weather, countdown)

External services (no API keys needed):
- **Map**: Leaflet 1.9.4 + OpenStreetMap tiles
- **Weather**: Open-Meteo hourly forecast

## Critical conventions — DON'T BREAK

1. **Trip data is embedded in `app.js`.** Source-of-truth is the vault note `2026-04-cdmx.md`. Don't refactor to fetch from elsewhere.
2. **No API keys.** Both external services are key-free. Don't add a backend.
3. **Phone-first.** Mobile-first CSS, large tap targets, no hover-only UI.

## Status

This was a one-off trip companion for May 2–8, 2026. The trip has passed (as of mid-May 2026, Jonathan is back in Minneapolis). Repo is **historical / reference** — no active development expected. Keep it deployed as a reference for the next trip-companion template.

## Where to look for more

- `README.md` — basics
- Vault note `2026-04-cdmx.md` — source-of-truth trip data
- Related: `pxm-overnight-escapes` (sibling trip-companion built off the same pattern)

## CLAUDE.md update workflow

No active development expected. If reactivated as a template for a new trip, the active session should offer to update.
