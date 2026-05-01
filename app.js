// CDMX Trip — May 2–8, 2026 — interactive companion
// All trip data lives in this file. Source-of-truth: Obsidian vault note 2026-04-cdmx.md

const TRIP = {
  title: "CDMX",
  // PXM departure: Sat 2026-05-02 14:24 local (Mexico CST = America/Mexico_City)
  departureISO: "2026-05-02T14:24:00-06:00",
  // Teotihuacán cancellation deadline: Tue 2026-05-05 07:00 CST
  teoCancelISO: "2026-05-05T07:00:00-06:00",
  // CDMX coords for weather
  weatherLat: 19.4326,
  weatherLon: -99.1332,
  travelers: ["Jonathan", "Jacob"],
  dates: { start: "2026-05-02", end: "2026-05-08" },
};

// Pin categories: lodging, haircut, medical, shopping, fitness, entertainment, food, transit, sightseeing
const CATEGORIES = {
  lodging:       { label: "Lodging",       color: "#d97757", icon: "▲" },
  haircut:       { label: "Haircut",       color: "#e8b34a", icon: "✂" },
  medical:       { label: "Medical",       color: "#c43d3d", icon: "✚" },
  shopping:      { label: "Shopping",      color: "#9c6ad9", icon: "●" },
  fitness:       { label: "Fitness",       color: "#6b8e5a", icon: "■" },
  entertainment: { label: "Entertainment", color: "#2d5a87", icon: "◆" },
  food:          { label: "Food",          color: "#e8b34a", icon: "◉" },
  transit:       { label: "Transit",       color: "#8db5db", icon: "▶" },
  sightseeing:   { label: "Sightseeing",   color: "#d97757", icon: "★" },
};

// All map pins. Coordinates verified via OpenStreetMap Nominatim where exact;
// addresses without exact street # in OSM are flagged with `approx: true`.
const PINS = [
  { name: "Hotel Geneve",            cat: "lodging",       lat: 19.4248918, lng: -99.1641018, addr: "Londres 130, Col. Juárez", note: "Sat 5/2 night only" },
  { name: "Airbnb · Colima 325",     cat: "lodging",       lat: 19.4185323, lng: -99.1669917, addr: "Colima 325, Roma Norte",    note: "Sun 5/3 → Fri 5/8" },
  { name: "Hair Studio Christoph Freisler", cat: "haircut", lat: 19.4139929, lng: -99.1645881, addr: "Calle Querétaro 121, Roma Norte", note: "Sun 5/3 · 13:00 + 14:00", approx: true },
  { name: "Soprano Skin",            cat: "medical",       lat: 19.4258310, lng: -99.1612668, addr: "Liverpool 89, Piso 2, Col. Juárez", note: "Mon 5/4 · 18:30" },
  { name: "Brantano · Antara Polanco", cat: "shopping",    lat: 19.4393996, lng: -99.2018178, addr: "Av. Ejército Nacional 843-B, Local D-104", note: "Mon 5/4 · ~11:00" },
  { name: "Koti Wellness Roma Norte", cat: "fitness",      lat: 19.4125040, lng: -99.1564762, addr: "Coahuila 44, Roma Norte", note: "Mon 5/4 · 15:00–15:50 thermocycling", approx: true },
  { name: "Smart Fit Roma Norte",    cat: "fitness",       lat: 19.4206459, lng: -99.1710355, addr: "Puebla 326, Roma Norte", note: "Workout option" },
  { name: "Cinépolis Diana",         cat: "entertainment", lat: 19.4258794, lng: -99.1715780, addr: "Reforma 423, Col. Cuauhtémoc", note: "Sun 5/3 · Devil Wears Prada 2 (SUB) 16:30" },
  { name: "Cablebús — Constitución de 1917", cat: "transit", lat: 19.3448, lng: -99.0626, addr: "Línea 2 west terminus, Iztapalapa", note: "Tue 5/5 · 10:30 board east" },
  { name: "Panadería Rosetta",       cat: "food",          lat: 19.4199737, lng: -99.1606103, addr: "Colima 179, Roma Norte", note: "Wed 5/6 · Teotihuacán pickup at 07:00" },
  { name: "Teotihuacán",             cat: "sightseeing",   lat: 19.6902654, lng: -98.8767276, addr: "Zona Arqueológica, San Juan Teotihuacán", note: "Wed 5/6 · 6.5-hr archaeologist tour" },
  { name: "MEX · Benito Juárez Intl",cat: "transit",       lat: 19.4342349, lng: -99.0733121, addr: "Calzada Ignacio Zaragoza 1075", note: "Sat 5/2 arrive · Fri 5/8 depart 08:40" },
];

const DAYS = [
  {
    id: "sat",
    date: "Sat · May 2",
    iso: "2026-05-02",
    title: "Arrival from PXM",
    summary: "Volaris PXM → MEX, settle at Hotel Geneve.",
    events: [
      { when: "13:39", title: "Boarding · Volaris Y4 361 PXM", detail: "Jonathan seat 39F · conf QMNBNR · Jacob seat TBD (separate PNR)", badge: "booked" },
      { when: "14:24", title: "Depart PXM", detail: "Local PXM time · ~51 min flight, ~1h 20m gate-to-gate" },
      { when: "~15:45", title: "Land MEX", detail: "Domestic claim, no customs. Out by ~16:30." },
      { when: "~16:40", title: "Uber to Hotel Geneve", detail: "Londres 130, Zona Rosa · ~30–60 min Sat traffic" },
      { when: "~17:30", title: "Settle in", detail: "Light evening. Dinner near hotel or short walk into Roma Norte." },
      { when: "evening", title: "Dinner — spontaneous", detail: "Pick day-of, no pre-booking", badge: "tbd" },
    ],
  },
  {
    id: "sun",
    date: "Sun · May 3",
    iso: "2026-05-03",
    title: "Move to Roma · Haircuts · Devil Wears Prada 2",
    summary: "Geneve → Airbnb, both haircuts, then movie at Cinépolis Diana.",
    events: [
      { when: "~9:30", title: "Hotel breakfast", detail: "Slow morning, pack" },
      { when: "~11:30", title: "Check out Geneve", detail: "Hotel checkout 13:00 — leave earlier to make haircut" },
      { when: "~12:00", title: "Drop bags at Airbnb (Colima 325)", detail: "Host confirmed noon bag drop · ph +52 55 1748 6618", badge: "booked" },
      { when: "~12:15", title: "Quick lunch in Roma", detail: "Tip: leave by 12:55 to walk over" },
      { when: "13:00", title: "Jonathan — haircut", detail: "Hair Studio Christoph Freisler · Calle Querétaro 121", badge: "booked" },
      { when: "14:00", title: "Jacob — haircut", detail: "Same studio", badge: "booked" },
      { when: "~15:00", title: "Back to Airbnb", detail: "Formal check-in · freshen up" },
      { when: "~15:30", title: "Uber to Cinépolis Diana", detail: "Reforma 423 · ~5–8 min" },
      { when: "16:30", title: "Devil Wears Prada 2 (SUB)", detail: "Cinépolis Diana · Spanish subtitles version", badge: "booked" },
      { when: "~18:30", title: "Movie ends", detail: "Relaxed Roma dinner after" },
    ],
  },
  {
    id: "mon",
    date: "Mon · May 4",
    iso: "2026-05-04",
    title: "Workout · Brantano · Thermocycling · Derm · Farmacia",
    summary: "Heaviest day. Polanco shoe run, Koti session, then Jacob's derm appt.",
    events: [
      { when: "08:00–09:30", title: "Workout", detail: "Smart Fit Roma Norte · ~9 min walk · day pass at desk" },
      { when: "~11:00", title: "Brantano @ Antara Polanco", detail: "Av. Ejército Nacional 843-B, Local D-104 · Sun–Thu 11:00–20:30 · ~15–20 min Uber" },
      { when: "~13:00", title: "Lunch near Antara", detail: "Spontaneous · Polanco options" },
      { when: "~14:30", title: "Back to Roma", detail: "Quick reset at Airbnb" },
      { when: "15:00–15:50", title: "Koti Wellness — Thermocycling", detail: "Coahuila 44 · 50-min private sauna + cold plunge · Jonathan only · booked via Acuity", badge: "booked" },
      { when: "~16:00", title: "Rest / Jacob has free time", detail: "Decompress before evening" },
      { when: "18:30–19:30", title: "Jacob — Soprano Skin derm appt", detail: "Liverpool 89 P2 · Dr. Marino Huánuco Pérez · skin tags · sun spots · axillary hyperpigmentation", badge: "booked" },
      { when: "~19:45", title: "Farmacia run (Jonathan)", detail: "Closest Farmacia Guadalajara / San Pablo / del Ahorro · LRP UVMune 400 Tinted SPF50+ + Finacea Gel 15% (OTC at major chains)" },
      { when: "evening", title: "Late dinner — flex", detail: "Aunt or friend slot if scheduled", badge: "flex" },
    ],
  },
  {
    id: "tue",
    date: "Tue · May 5",
    iso: "2026-05-05",
    title: "Cablebús Línea 2 with friend",
    summary: "Iztapalapa cable-car ride east to Santa Marta + back. Mural views, Sierra de Santa Catarina.",
    events: [
      { when: "07:30–09:00", title: "Workout", detail: "Smart Fit Roma Norte" },
      { when: "09:00–09:30", title: "Quick breakfast" },
      { when: "~09:30", title: "Meet friend", detail: "At Colima 325 or directly at the station" },
      { when: "09:45", title: "Uber to Constitución de 1917", detail: "Roma → Iztapalapa · ~25–40 min · ~$200–350 MXN" },
      { when: "~10:30", title: "Top up Tarjeta MI · board east", detail: "3 cards (Jonathan + Jacob + friend) · cash at vending machines" },
      { when: "10:30–11:15", title: "Ride east · transfer at Xalpa", detail: "Murals + Sierra de Santa Catarina + Popo on clear days" },
      { when: "11:15–11:45", title: "Disembark Santa Marta", detail: "Brief walk + photos" },
      { when: "11:45–12:30", title: "Return ride west", detail: "Different angle, different light" },
      { when: "~12:45", title: "Uber back to Roma" },
      { when: "~13:30", title: "Long lunch with friend", detail: "Roma options · Lardo, Café Nin, Páramo, Taquería Orinoco, Rosetta" },
      { when: "afternoon/evening", title: "Free / spontaneous" },
    ],
  },
  {
    id: "wed",
    date: "Wed · May 6",
    iso: "2026-05-06",
    title: "Teotihuacán + Aunt's early dinner",
    summary: "Pre-dawn pickup at Rosetta, full archaeologist tour, back by 13:15. Aunt at ~17:00.",
    events: [
      { when: "07:00", title: "Pickup at Rosetta bakery", detail: "Colima 179 · 4 blocks from Airbnb", badge: "booked" },
      { when: "07:00–13:15", title: "Teotihuacán: Explore the City of Gods", detail: "Airbnb Experience · Hosts: Giovanni · Jasmyn · María Gabriela · 2 adults · 6.25 hr", badge: "booked" },
      { when: "~13:15", title: "Back in Roma", detail: "Afternoon rest at Airbnb" },
      { when: "~17:00", title: "Early dinner with Jacob's aunt", detail: "Penciled · venue still to be confirmed with her", badge: "flex" },
    ],
  },
  {
    id: "thu",
    date: "Thu · May 7",
    iso: "2026-05-07",
    title: "Last full day · open",
    summary: "Workout, optional museum, send-off dinner picked day-of.",
    events: [
      { when: "08:00–09:30", title: "Workout (final)" },
      { when: "day", title: "Open", detail: "Optional cultural picks: Frida Kahlo Museum (Coyoacán, often sells out — book ahead) · Museo Nacional de Antropología (Chapultepec) · Templo Mayor + Centro Histórico walk" },
      { when: "evening", title: "Send-off dinner — spontaneous", detail: "Casual, day-of pick · reserved for Jonathan + Jacob alone", badge: "tbd" },
      { when: "night", title: "Pack", detail: "08:40 flight tomorrow" },
    ],
  },
  {
    id: "fri",
    date: "Fri · May 8",
    iso: "2026-05-08",
    title: "Departure · pre-dawn",
    summary: "Volaris MEX → DEN → Frontier DEN → MSP, lands 19:44 CT.",
    events: [
      { when: "~05:30", title: "Wake · final pack" },
      { when: "~06:00", title: "Uber to MEX", detail: "Verify Terminal on Volaris app the night before · Sala F1/F3 intl check-in · 2 hr buffer" },
      { when: "08:40", title: "Volaris Y4 760 MEX → DEN", detail: "Lands 12:19 MT", badge: "booked" },
      { when: "17:38", title: "Frontier 2113 DEN → MSP", detail: "Lands 19:44 CT", badge: "booked" },
    ],
  },
];

const BOOKINGS = [
  {
    name: "Volaris Y4 361 — PXM → MEX",
    when: "Sat 5/2 · 14:24 PXM",
    detail: "Both travelers on same flight, separate PNRs. Jonathan: seat 39F. Baggage: 1 personal + 1 carry-on + 1 checked (55 lb).",
    conf: "QMNBNR (Jonathan)",
    links: [{ label: "Volaris", url: "https://www.volaris.com/" }],
  },
  {
    name: "Hotel Geneve — Sat 5/2 night",
    when: "1 night",
    detail: "Londres 130, Zona Rosa · checkout 13:00 Sun.",
    conf: "H-LSBX9KH9HQX7",
    phone: "+52 55 5080 0800",
    links: [{ label: "Hotel Geneve", url: "https://hotelgeneve.com.mx/" }],
  },
  {
    name: "Airbnb — Colima 325 loft",
    when: "Sun 5/3 → Fri 5/8 (5 nights)",
    detail: "Roma Norte loft. Bag drop confirmed for ~12:00 Sun.",
    conf: "HM95T2ESPW",
    phone: "+52 55 1748 6618",
    links: [],
  },
  {
    name: "Hair Studio Christoph Freisler",
    when: "Sun 5/3 · 13:00 (Jonathan) + 14:00 (Jacob)",
    detail: "Calle Querétaro 121, Roma Norte. German stylist, premium Aveda coloring, modern men's cuts.",
    links: [{ label: "Studio site", url: "https://www.hairstudiochristophfreisler.mx/" }],
  },
  {
    name: "Koti Wellness — thermocycling",
    when: "Mon 5/4 · 15:00–15:50",
    detail: "Coahuila 44, Roma Norte. 50-min private sauna + cold plunge. Jonathan only.",
    links: [{ label: "Koti Wellness", url: "https://www.kotiwellness.com/" }],
  },
  {
    name: "Soprano Skin — Jacob's derm appt",
    when: "Mon 5/4 · 18:30–19:30",
    detail: "Liverpool 89 P2, Col. Juárez. Lead physician: Dr. Marino Huánuco Pérez (UNAM-trained, Q-switched Nd:YAG specialty). Goals: skin tag removal, sun-spot consult, axillary hyperpigmentation.",
    links: [],
  },
  {
    name: "Devil Wears Prada 2 — Cinépolis Diana",
    when: "Sun 5/3 · 16:30 (SUB)",
    detail: "Reforma 423, Col. Cuauhtémoc. Spanish-subtitled showing.",
    links: [{ label: "Cinépolis Diana showtimes", url: "https://cinepolis.com/mx/horarios?country=mx&cinema=cinepolis-diana-cdmx" }],
  },
  {
    name: "Teotihuacán — City of Gods (Airbnb Experience)",
    when: "Wed 5/6 · 07:00–13:15",
    detail: "Pickup at Panadería Rosetta, Colima 179. Hosts: Giovanni · Jasmyn · María Gabriela. 2 adults · 6.25 hr. Cancellation deadline: Tue 5/5 07:00 CST for full refund.",
    conf: "TAN3BZEJ",
    links: [],
  },
  {
    name: "Volaris Y4 760 — MEX → DEN",
    when: "Fri 5/8 · 08:40",
    detail: "Lands 12:19 MT. Verify terminal on Volaris app night before — primary T1, intl check-in Sala F1/F3.",
    links: [{ label: "Volaris", url: "https://www.volaris.com/" }, { label: "AICM terminals", url: "https://aeropuerto-mex.com/en/terminals" }],
  },
  {
    name: "Frontier 2113 — DEN → MSP",
    when: "Fri 5/8 · 17:38 → 19:44 CT",
    detail: "Connection from Volaris Y4 760.",
    links: [{ label: "Frontier", url: "https://www.flyfrontier.com/" }],
  },
];

const FLEX_TBD = [
  { item: "Aunt's Wed 5/6 ~17:00 dinner venue", note: "Time penciled, venue still to confirm with her" },
  { item: "Sat 5/2 night dinner", note: "Spontaneous near Hotel Geneve / Roma Norte" },
  { item: "Thu 5/7 send-off dinner", note: "Spontaneous, day-of pick. Reserved for Jonathan + Jacob alone." },
  { item: "Tarjeta MI metro cards · 3x", note: "Buy + load with cash at Constitución de 1917 station Tue morning" },
];

const READING = [
  {
    title: "Iztapalapa Mural program transforms gray into bursts of color",
    src: "Mexico News Daily · Leigh Thelmadatter, Dec 2023",
    note: "Background for Tue's Cablebús ride. ~10,000 murals across ~250 neighborhoods since 2018 — community-built urban-equity project, not tourism.",
    url: "https://mexiconewsdaily.com/culture/iztapalapa-mural-program-transforms-grey-into-bursts-of-color/",
  },
  {
    title: "Cerro de la Estrella National Park — Wikipedia",
    src: "English Wikipedia",
    note: "Aztec sacred mountain · New Fire Ceremony every 52 years pre-Conquest · today the Passion of Christ reenactment site (1M+ attendees).",
    url: "https://en.wikipedia.org/wiki/Cerro_de_la_Estrella_National_Park",
  },
  {
    title: "Cablebús — Wikipedia",
    src: "English Wikipedia",
    note: "System overview. Three lines today (GAM, Iztapalapa, Chapultepec). Why CDMX built them.",
    url: "https://en.wikipedia.org/wiki/Cableb%C3%BAs",
  },
  {
    title: "El Cerro de la Estrella e Iztapalapa, de guerras y conquistas",
    src: "UNAM Noticonquista · Miguel Pérez Negrete (Spanish)",
    note: "Deeper academic context. New Fire Ceremony 1507, strategic role during the conquest of Tenochtitlán.",
    url: "https://www.noticonquista.unam.mx/amoxtli/2217/2200",
  },
];

// =================== RENDERING ===================

function $(sel, root = document) { return root.querySelector(sel); }
function $$(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }
function el(tag, attrs = {}, children = []) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") e.className = v;
    else if (k === "html") e.innerHTML = v;
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  }
  for (const c of (Array.isArray(children) ? children : [children])) {
    if (c == null) continue;
    e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  }
  return e;
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function gmapsLink(p) {
  // Search format if we have an address, directions if approx (lat/lng more reliable)
  const q = encodeURIComponent(`${p.name}, ${p.addr}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
function gmapsDirLink(p) {
  return `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}&destination_place_id=`;
}

// ---- COUNTDOWN ----
function renderCountdown() {
  const cells = ["days", "hours", "minutes", "seconds"];
  const root = $("#countdown");
  if (!root) return;
  cells.forEach(label => {
    const cell = el("div", { class: "countdown-cell" }, [
      el("div", { class: "num", id: `cd-${label}` }, "—"),
      el("div", { class: "label" }, label),
    ]);
    root.appendChild(cell);
  });

  function tick() {
    const now = Date.now();
    const target = new Date(TRIP.departureISO).getTime();
    let diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86400000); diff -= days * 86400000;
    const hrs  = Math.floor(diff / 3600000);  diff -= hrs * 3600000;
    const mins = Math.floor(diff / 60000);    diff -= mins * 60000;
    const secs = Math.floor(diff / 1000);
    $("#cd-days").textContent = days;
    $("#cd-hours").textContent = String(hrs).padStart(2, "0");
    $("#cd-minutes").textContent = String(mins).padStart(2, "0");
    $("#cd-seconds").textContent = String(secs).padStart(2, "0");

    // Teotihuacán cancel deadline (only show if upcoming)
    const teoEl = $("#teo-cancel");
    if (teoEl) {
      const teoDiff = new Date(TRIP.teoCancelISO).getTime() - now;
      if (teoDiff > 0) {
        const td = Math.floor(teoDiff / 86400000);
        const th = Math.floor((teoDiff % 86400000) / 3600000);
        teoEl.textContent = `Teotihuacán full-refund cancel deadline: ${td}d ${th}h away (Tue 5/5 07:00 CST)`;
      } else {
        teoEl.textContent = "Teotihuacán cancellation window closed.";
      }
    }
  }
  tick();
  setInterval(tick, 1000);
}

// ---- TODAY HIGHLIGHT ----
function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// ---- DAYS ----
function renderDays() {
  const root = $("#days");
  if (!root) return;
  const today = todayISO();
  // If no day matches "today" (pre-trip), default-open the first day so the
  // user sees something on first load instead of 7 collapsed cards.
  const anyToday = DAYS.some(d => d.iso === today);
  DAYS.forEach((d, i) => {
    const isToday = d.iso === today;
    const openByDefault = isToday || (!anyToday && i === 0);
    const card = el("div", { class: `day-card${isToday ? " today" : ""}${openByDefault ? " open" : ""}`, id: `day-${d.id}` });
    const head = el("div", { class: "day-head" });
    head.innerHTML = `
      <div>
        <div class="day-date">${escapeHtml(d.date)}</div>
        <div class="day-title">${escapeHtml(d.title)}</div>
        <div class="muted small mt-2" style="margin-top:4px;">${escapeHtml(d.summary)}</div>
      </div>
      <div class="day-toggle" aria-label="toggle">▾</div>
    `;
    head.addEventListener("click", () => card.classList.toggle("open"));
    card.appendChild(head);

    const body = el("div", { class: "day-body" });
    d.events.forEach(ev => {
      const row = el("div", { class: "event" });
      const what = el("div", { class: "what" });
      const titleHtml = `<span class="title">${escapeHtml(ev.title)}</span>${ev.badge ? `<span class="badge ${ev.badge}">${ev.badge}</span>` : ""}`;
      what.innerHTML = titleHtml + (ev.detail ? `<div class="detail">${escapeHtml(ev.detail)}</div>` : "");
      row.appendChild(el("div", { class: "when" }, ev.when));
      row.appendChild(what);
      body.appendChild(row);
    });
    card.appendChild(body);
    root.appendChild(card);
  });
}

// ---- MAP ----
let map, markers = [];
function renderMap() {
  const root = $("#map");
  if (!root || typeof L === "undefined") return;

  // CDMX center, zoomed to Roma Norte
  map = L.map("map", { scrollWheelZoom: false }).setView([19.42, -99.16], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map);
  // Enable scroll-wheel zoom on map click (avoids accidental scroll-zoom while reading)
  map.on("focus", () => map.scrollWheelZoom.enable());
  map.on("blur",  () => map.scrollWheelZoom.disable());

  PINS.forEach(p => {
    const cat = CATEGORIES[p.cat] || { color: "#999", label: p.cat, icon: "•" };
    const icon = L.divIcon({
      className: "pin-icon",
      html: `<div style="background:${cat.color};color:#fff;width:30px;height:30px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.4);font-size:14px;font-weight:700;"><span style="transform:rotate(45deg);">${cat.icon}</span></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -28],
    });
    const m = L.marker([p.lat, p.lng], { icon })
      .bindPopup(`
        <b>${escapeHtml(p.name)}</b><br>
        <span style="color:#b39e87;font-size:12px;">${escapeHtml(cat.label)}${p.approx ? " · pin approx" : ""}</span><br>
        <span style="font-size:12px;">${escapeHtml(p.addr)}</span><br>
        ${p.note ? `<span style="font-size:12px;color:#b39e87;">${escapeHtml(p.note)}</span><br>` : ""}
        <a href="${gmapsLink(p)}" target="_blank" rel="noopener">Open in Maps</a> · <a href="${gmapsDirLink(p)}" target="_blank" rel="noopener">Directions</a>
      `);
    m.cat = p.cat;
    m.addTo(map);
    markers.push(m);
  });

  // Fit bounds to CDMX-area markers only (Teotihuacán at 19.69 would skew bounds north)
  const cityMarkers = markers.filter(m => m.getLatLng().lat < 19.5);
  if (cityMarkers.length) {
    const group = L.featureGroup(cityMarkers);
    map.fitBounds(group.getBounds().pad(0.15));
  }

  // Filters
  const filtersEl = $("#map-filters");
  const allChip = el("div", { class: "filter-chip active", "data-cat": "all" }, [
    el("span", { class: "dot", style: "background:#b39e87" }),
    document.createTextNode("All"),
  ]);
  allChip.addEventListener("click", () => filterPins("all"));
  filtersEl.appendChild(allChip);
  Object.entries(CATEGORIES).forEach(([key, c]) => {
    const chip = el("div", { class: "filter-chip", "data-cat": key }, [
      el("span", { class: "dot", style: `background:${c.color}` }),
      document.createTextNode(c.label),
    ]);
    chip.addEventListener("click", () => filterPins(key));
    filtersEl.appendChild(chip);
  });
}
function filterPins(cat) {
  $$(".filter-chip").forEach(c => c.classList.toggle("active", c.dataset.cat === cat));
  markers.forEach(m => {
    if (cat === "all" || m.cat === cat) {
      if (!map.hasLayer(m)) m.addTo(map);
    } else {
      if (map.hasLayer(m)) map.removeLayer(m);
    }
  });
}

// ---- BOOKED LIST ----
function renderBooked() {
  const root = $("#booked-list");
  if (!root) return;
  BOOKINGS.forEach(b => {
    const item = el("div", { class: "booked-item" });
    item.innerHTML = `
      <div class="head">
        <span class="name">${escapeHtml(b.name)}</span>
        <span class="when">${escapeHtml(b.when)}</span>
      </div>
      <div class="detail">${escapeHtml(b.detail)}</div>
      ${b.conf ? `<div><span class="conf">${escapeHtml(b.conf)}</span>${b.phone ? ` <span class="muted small">· ${escapeHtml(b.phone)}</span>` : ""}</div>` : (b.phone ? `<div class="muted small">${escapeHtml(b.phone)}</div>` : "")}
      ${b.links && b.links.length ? `<div class="actions">${b.links.map(l => `<a class="link-btn" href="${l.url}" target="_blank" rel="noopener">${escapeHtml(l.label)} ↗</a>`).join("")}</div>` : ""}
    `;
    root.appendChild(item);
  });
}

// ---- FLEX / TBD ----
function renderFlex() {
  const root = $("#flex-list");
  if (!root) return;
  FLEX_TBD.forEach(f => {
    const item = el("div", { class: "booked-item" });
    item.innerHTML = `
      <div class="head"><span class="name">${escapeHtml(f.item)}</span><span class="badge tbd">TBD</span></div>
      <div class="detail">${escapeHtml(f.note)}</div>
    `;
    root.appendChild(item);
  });
}

// ---- READING ----
function renderReading() {
  const root = $("#reading-list");
  if (!root) return;
  READING.forEach(r => {
    const item = el("div", { class: "reading-item" });
    item.innerHTML = `
      <div class="title"><a href="${r.url}" target="_blank" rel="noopener">${escapeHtml(r.title)} ↗</a></div>
      <div class="src">${escapeHtml(r.src)}</div>
      <div class="note">${escapeHtml(r.note)}</div>
    `;
    root.appendChild(item);
  });
}

// ---- WEATHER ----
function uvClass(uv) {
  if (uv == null) return "";
  if (uv < 3) return "";
  if (uv < 6) return "med";
  if (uv < 8) return "high";
  return "vhigh";
}
function wxIcon(code) {
  // Open-Meteo WMO weather codes — minimal mapping using Unicode
  if (code == null) return "·";
  if (code === 0) return "☀";
  if (code <= 2) return "⛅";
  if (code === 3) return "☁";
  if (code <= 48) return "≋";    // fog
  if (code <= 57) return "·";
  if (code <= 67) return "☂";    // rain
  if (code <= 77) return "❄";    // snow
  if (code <= 82) return "☂";    // showers
  if (code <= 86) return "❄";    // snow showers
  if (code <= 99) return "⚡";    // thunder
  return "·";
}
async function renderWeather() {
  const root = $("#weather");
  if (!root) return;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${TRIP.weatherLat}&longitude=${TRIP.weatherLon}` +
              `&hourly=temperature_2m,uv_index,precipitation_probability,weather_code` +
              `&daily=temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max,weather_code` +
              `&temperature_unit=fahrenheit&timezone=America/Mexico_City&forecast_days=7`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("weather fetch failed");
    const data = await res.json();
    renderWeatherSummary(data);
    renderWeatherHourly(data);
  } catch (err) {
    root.innerHTML = `<div class="note-box warn">Weather forecast couldn't load (Open-Meteo). It's a free no-key endpoint — refresh to retry, or check while on Wi-Fi.</div>`;
  }
}
function renderWeatherSummary(data) {
  const root = $("#weather-summary");
  if (!root || !data.daily) return;
  const d = data.daily;
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  d.time.forEach((iso, i) => {
    const dt = new Date(iso + "T12:00:00");
    const dn = dayNames[dt.getDay()];
    const md = `${dt.getMonth() + 1}/${dt.getDate()}`;
    const cell = el("div", { class: "weather-day" });
    cell.innerHTML = `
      <div class="label">${dn} ${md}</div>
      <div style="font-size:18px;margin-top:2px;">${wxIcon(d.weather_code[i])}</div>
      <div class="temps">${Math.round(d.temperature_2m_max[i])}° <span class="muted">/ ${Math.round(d.temperature_2m_min[i])}°</span></div>
      <div class="uv">UV ${Math.round(d.uv_index_max[i])}</div>
      <div class="rain">${Math.round(d.precipitation_probability_max[i])}% rain</div>
    `;
    root.appendChild(cell);
  });
}
function renderWeatherHourly(data) {
  const root = $("#weather-hourly-track");
  if (!root || !data.hourly) return;
  const h = data.hourly;
  const now = Date.now();
  // Show every 3rd hour for next 7 days
  let lastDay = null;
  h.time.forEach((iso, i) => {
    const dt = new Date(iso);
    if (dt.getTime() < now - 3600000) return;          // skip past hours
    if (dt.getHours() % 3 !== 0) return;                // every 3rd hour
    const dn = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][dt.getDay()];
    const dayKey = dt.getDate();
    const isNewDay = dayKey !== lastDay;
    lastDay = dayKey;
    const hr = dt.getHours();
    const hrLabel = hr === 0 ? "12a" : hr < 12 ? `${hr}a` : hr === 12 ? "12p" : `${hr - 12}p`;
    const cell = el("div", { class: `hour-cell${isNewDay ? " day-divider" : ""}` });
    const uv = h.uv_index[i];
    cell.innerHTML = `
      <div class="h">${isNewDay ? `${dn} ` : ""}${hrLabel}</div>
      <div style="font-size:14px;">${wxIcon(h.weather_code[i])}</div>
      <div class="t">${Math.round(h.temperature_2m[i])}°</div>
      <div class="uv ${uvClass(uv)}">UV ${uv == null ? "—" : uv.toFixed(1)}</div>
      <div style="color:#8db5db;font-size:10px;">${Math.round(h.precipitation_probability[i] || 0)}%</div>
    `;
    root.appendChild(cell);
  });
}

// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
  renderCountdown();
  renderDays();
  renderMap();
  renderBooked();
  renderFlex();
  renderReading();
  renderWeather();
});
