# cdmx-trip-2026-05

Personal trip companion for Jonathan + Jacob — Mexico City, May 2–8, 2026.

Live: https://jcpeters08.github.io/cdmx-trip-2026-05/

## What it is

Single-page interactive briefing for the CDMX week. Built as a phone-first companion: countdown, day-by-day schedule, map of every booked location, hourly weather + UV, confirmation codes.

## Stack

Static. Vanilla HTML / CSS / JS. No build step, no frameworks.

- Map: Leaflet 1.9.4 + OpenStreetMap tiles (no API key)
- Weather: Open-Meteo hourly forecast (no API key)
- Hosting: GitHub Pages

## Files

- `index.html` — markup + section structure
- `styles.css` — palette, layout, mobile-first
- `app.js` — data (trip, pins, bookings) + renderers (days, map, weather, countdown)

Trip data is embedded directly in `app.js`. Source-of-truth is the Obsidian vault note `2026-04-cdmx.md`.

## Local dev

```
python3 -m http.server 8000
```

Then open http://localhost:8000.
