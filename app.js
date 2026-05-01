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
  { name: "Embarcadero Nuevo Nativitas", cat: "sightseeing", lat: 19.2527, lng: -99.0936, addr: "C. del Mercado 133, San Jerónimo, Xochimilco, 16420 CDMX", note: "Tue 5/5 · 2-hr trajinera ride · 750 MXN/hr walk-up" },
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
    title: "Xochimilco trajineras with friend",
    summary: "2-hr trajinera ride at Embarcadero Nuevo Nativitas. Walk-up @ 750 MXN/hr official tarifa. Tuesday = quiet, peaceful canals over the festive weekend chaos.",
    events: [
      { when: "07:30–09:00", title: "Workout", detail: "Smart Fit Roma Norte" },
      { when: "09:00–09:30", title: "Quick breakfast" },
      { when: "~09:30", title: "Meet friend", detail: "At Colima 325 or directly at the embarcadero" },
      { when: "09:45", title: "Uber to Embarcadero Nuevo Nativitas", detail: "Roma → Xochimilco · ~45–60 min · ~$250–400 MXN · type 'Embarcadero Nuevo Nativitas' into Uber" },
      { when: "~10:45", title: "Pay at official kiosk", detail: "Walk past the price board to the kiosk · 750 MXN/hr per boat (flat rate up to 18 people) · cash preferred · ignore touts in parking lot" },
      { when: "10:45–12:45", title: "2-hr trajinera ride", detail: "Chinampas + canals + axolotl-habitat detour depending on the remero's route. Vendor canoes pull alongside (food, micheladas, mariachi à la carte — quieter on a Tuesday)." },
      { when: "~13:00", title: "Tip remero · Uber back to Roma", detail: "~50–100 MXN tip if the ride was good" },
      { when: "~13:45", title: "Long lunch with friend", detail: "Roma options · Lardo, Café Nin, Páramo, Taquería Orinoco, Rosetta" },
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
  { item: "MXN cash for Tue Xochimilco trip", note: "Pull pesos in Roma Mon 5/4 evening · ~1,500 MXN trajinera fee + ~500–1,000 buffer for vendor canoes + tip" },
];

const READING = [];

// =================== DEEP DIVES ===================

// Image attribution helper — every photo in the gallery is CC-licensed and we
// credit the source per the Wikimedia/Commons license terms.
const DEEP_DIVES = {
  xochimilco: {
    eyebrow: "Tue · May 5",
    title: "Xochimilco — Aztec canals, chinampas, axolotls",
    lede: "What's left of Tenochtitlán's lake system. UNESCO inscribed Xochimilco in 1987 (alongside Mexico City's historic centre) for these chinampas — pre-Columbian floating-garden plots still farmed today. The trajinera ride is the front door; the real story is the wetland underneath.",
    practical: [
      { label: "Where", value: "Embarcadero Nuevo Nativitas · C. del Mercado 133" },
      { label: "Cost", value: "750 MXN/hr per boat · official 2026 tarifa" },
      { label: "Capacity", value: "Up to 18/boat · flat rate regardless of group size" },
      { label: "Hours", value: "Trajineras 8 AM – 5 PM · venue 6 AM – 10 PM" },
      { label: "Booking", value: "Walk-up only · don't pre-book online" },
      { label: "Cash", value: "Bring small/medium MXN bills · pull pesos in Roma before Uber" },
    ],
    facts: [
      "UNESCO World Heritage since 1987 — recognized specifically for the chinampas, the only place in the Americas with this kind of pre-Columbian agricultural system still in continuous use.",
      "The Xochimilcas were the first of seven Nahua tribes to arrive in the Basin of Mexico. Once Tenochtitlán expanded the canals, ~60% of the Aztec capital's food and flowers came up these waterways from chinampas.",
      "Chinampas are not actually floating — they're rectangular plots built up from reeds, sticks, and lake-bottom mud, anchored to the lakebed by ahuejote (willow) trees. Soil regenerates itself when farmers dredge fresh lake mud onto the beds.",
      "Lake Xochimilco is the last native habitat of the axolotl (Ambystoma mexicanum), the salamander that never grows up — it stays in larval form its whole life (a trait called neoteny) and can regenerate entire limbs, parts of its heart, and sections of its brain.",
      "The axolotl population in the wild has crashed from ~6,000 per square kilometer in 1998 to ~36 per square kilometer today (IUCN critically endangered since 2006). The drop is driven by water pollution, urban sprawl, and the carp/tilapia the Mexican government introduced as a food source — they eat axolotl eggs.",
      "The name axolotl comes from Nahuatl: ātl (\"water\") + xōlōtl (\"monster\" / dog-headed Aztec god of lightning and death). Roughly: \"water monster.\"",
    ],
    images: [
      { src: "assets/images/xochimilco/trajinera.jpg", caption: "Trajinera at a Xochimilco canal embarcadero", credit: "Juan Carlos Fonseca Mata · CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Trajinera_de_Xochimilco_-_Ciudad_de_M%C3%A9xico.jpg" },
      { src: "assets/images/xochimilco/trajineras-canal.jpg", caption: "Trajineras moored along the canal system", credit: "Wotancito · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Trajineras_en_Xochimilco,_CDMX.jpg" },
      { src: "assets/images/xochimilco/chinampa.jpg", caption: "Farmer working a chinampa plot — water hyacinth dredged from the canal becomes fertilizer", credit: "Emmanuel Eslava · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Agricultor_de_la_chinampa.JPG" },
      { src: "assets/images/xochimilco/axolotl.jpg", caption: "Axolotl (Ambystoma mexicanum) — Lake Xochimilco's most famous endangered resident", credit: "Stan Shebs · CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Ambystoma_mexicanum_1.jpg" },
    ],
    video: { id: "l5TA_pW5jFc", title: "The Ancient Aztec Practice Protecting Axolotls — BBC America" },
    readings: [
      { title: "Lake Xochimilco — Wikipedia", src: "Comprehensive overview · history, ecology, axolotl conservation", url: "https://en.wikipedia.org/wiki/Lake_Xochimilco" },
      { title: "Restoring chinampas saves axolotls and ecosystems", src: "Resilience · 2024 — chinampero collective + UNAM partnership", url: "https://www.resilience.org/stories/2024-07-03/restoring-chinampas-in-mexico-saves-axolotls-and-ecosystems/" },
      { title: "Scientists and farmers restore Aztec-era floating farms", src: "Mongabay · 2024", url: "https://news.mongabay.com/2024/05/scientists-and-farmers-restore-aztec-era-floating-farms-that-house-axolotls/" },
      { title: "Tarifa oficial 2026 — Xochimilco trajineras", src: "Grupo Hoy México · official municipal rate posting", url: "https://grupohoymexico.com/2026/03/02/cuanto-cuesta-subirse-a-una-trajinera-en-xochimilco-este-2026/" },
    ],
    onTheBoat: [
      "Vendor canoes will pull alongside selling food (quesadillas, elote, micheladas), drinks, and mariachi songs (~150–250 MXN/song — negotiate before they start playing). All à la carte. Tuesday = far fewer than weekends.",
      "Watch out for the parking-lot tout scam: a person offering to \"walk you to the boats\" or to a different entrance routes you past the official price board to a captain who tries to charge 2× the tarifa. Walk straight to the official kiosk.",
      "Bring sunscreen + a hat — the trajinera roof is for shade but the sides are open, and Tuesday's quiet rides mean longer stretches in the sun.",
      "Tip the remero (boatman) ~50–100 MXN at the end if the ride was good. Standard, not required.",
    ],
  },

  teotihuacan: {
    eyebrow: "Wed · May 6",
    title: "Teotihuacán — the City of Gods nobody can identify",
    lede: "Built ~150 BCE, peaked ~450 CE at 125,000+ residents (one of the largest cities in the world at the time), and abandoned by ~700 CE. The Aztecs found it empty centuries later, named it Teōtīhuacān (\"the place where the gods were created\"), and adopted it as a pilgrimage site. Who actually built it remains an open archaeological question.",
    practical: [
      { label: "Tour pickup", value: "Wed 5/6 · 07:00 · Panadería Rosetta (Colima 179)" },
      { label: "Tour", value: "Airbnb Experience: City of Gods · ~6.5 hr · conf TAN3BZEJ" },
      { label: "Pyramid of Sun", value: "65 m tall · 3rd-largest pyramid in the world by volume" },
      { label: "Avenue of Dead", value: "~2.5 km long ceremonial axis · aligned 15.5° east of north" },
      { label: "Distance from CDMX", value: "~50 km NE · ~1 hr drive" },
      { label: "Cancellation", value: "Tue 5/5 07:00 CST for full refund" },
    ],
    facts: [
      "The builders are unknown. Best guesses are some mix of Totonac, Otomí, Nahua, Maya, and Mixe-Zoque influences — Teotihuacán may have been a multi-ethnic city-state, the first true cosmopolitan capital in the Americas. The original name is lost.",
      "The Pyramid of the Sun (65 m) was constructed in two main phases starting ~100 CE. It's built on top of a natural cave system the Teotihuacanos likely considered sacred — a portal to the underworld in Mesoamerican cosmology.",
      "The Avenue of the Dead isn't a street of tombs — the Aztecs gave it the name centuries after Teotihuacán was abandoned because they assumed the platforms lining it were burial mounds. They were ceremonial buildings.",
      "The Pyramid of the Moon was completed in stages from ~1 CE to ~250 CE. Each rebuild buried offerings — animals (jaguars, eagles, serpents), human sacrifice victims, jade, obsidian — sealed inside the structure.",
      "The site's astronomical alignment is precise: the Avenue of the Dead points to the setting of the Pleiades on the day of the sun's zenith passage. This was a working calendar built into the city.",
      "Teotihuacán's collapse around 550–700 CE wasn't from invasion — interior elite buildings were burned in a coordinated act, suggesting an internal uprising or political collapse. The mystery is who against whom.",
    ],
    images: [
      { src: "assets/images/teotihuacan/pyramid-sun.jpg", caption: "Pyramid of the Sun — 65 m, 3rd-largest pyramid in the world by volume", credit: "Peachseltzer · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Pyramid_of_the_Sun_at_Teotihuacan.jpg" },
      { src: "assets/images/teotihuacan/pyramid-sun-front.jpg", caption: "Frontal view of the Pyramid of the Sun", credit: "HighVibrationStation · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Teotihuacan_Pyramid_of_the_sun_from_the_front.jpg" },
      { src: "assets/images/teotihuacan/pyramid-moon.jpg", caption: "Pyramid of the Moon — completed in stages over 250 years", credit: "Jarek Tuszyński · CC BY 4.0", source: "https://commons.wikimedia.org/wiki/File:Wiki_Loves_Pyramids_-_Teotihuacan_-_Pyramid_of_the_Moon_-_1.JPG" },
      { src: "assets/images/teotihuacan/avenue-of-dead.jpg", caption: "Avenue of the Dead — the 2.5 km ceremonial axis", credit: "AnbyG · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Avenue_of_the_Dead_at_Teotihuacan2.jpg" },
    ],
    video: { id: "ZUHaf7iSe3Q", title: "Pyramids of Teotihuacan Explained — Manuel Bravo" },
    readings: [
      { title: "Teotihuacan — Wikipedia", src: "Most thorough English-language overview · history, archaeology, decline", url: "https://en.wikipedia.org/wiki/Teotihuacan" },
      { title: "Who built the great city of Teotihuacan?", src: "National Geographic · the multi-ethnic capital theory", url: "https://www.nationalgeographic.com/history/article/teotihuacan" },
      { title: "Pyramid of the Sun — Wikipedia", src: "Construction history, the cave underneath, Aztec-era reuse", url: "https://en.wikipedia.org/wiki/Pyramid_of_the_Sun" },
      { title: "Smarthistory — Pyramids of the Moon and Sun", src: "Art-history framing · alignments + iconography", url: "https://smarthistory.org/moon-and-sun-pyramid-teotihuacan/" },
    ],
    onTheTour: [
      "Climbing access is currently restricted on both pyramids (post-pandemic INAH policy). You walk the Avenue of the Dead, ascend partway up the lower platforms, and circumnavigate the structures. Tour guide will know what's open the day of.",
      "Wear layers + a hat. The site sits at ~2,300 m elevation; mornings are cool, midday sun is brutal, no shade. Sunscreen non-negotiable.",
      "Bring 1.5–2 L of water per person. There are vendors near the entrances but not throughout the site. Cash for snacks.",
      "Watch for the obsidian/silver vendors near the parking — much of it is inauthentic. Decide your spending position before tour starts.",
    ],
  },

  "roma-norte": {
    eyebrow: "Sun 5/3 → Fri 5/8",
    title: "Roma Norte — Porfirian bones, hipster wave, food capital",
    lede: "Roma was planned ~1900 as a Porfirian-era upper-class enclave with Parisian boulevards and tree-lined plazas. It collapsed (literally) in the 1985 earthquake, sat dormant for decades, then reinvented itself as CDMX's hipster-creative core in the 2000s. The 2017 earthquake hit it again — the bones are still here, but the layered character (Art Nouveau buildings, taquerías next to natural-wine bars, gentrification debates loud and ongoing) is the actual neighborhood.",
    practical: [
      { label: "Your base", value: "Airbnb · Colima 325 (Sun 5/3 → Fri 5/8)" },
      { label: "Walking radius", value: "Most picks below = ≤10 min walk · the area is dense" },
      { label: "Plaza Río de Janeiro", value: "~3 min walk · the David replica fountain centerpiece" },
      { label: "Casa Lamm", value: "Av. Álvaro Obregón 99 · 1911 Porfirian arts center" },
      { label: "Mercado Medellín", value: "~12 min walk south into Roma Sur · Latin American produce, fondas" },
      { label: "Safety", value: "Roma Norte is among the safest CDMX neighborhoods; standard urban awareness applies after midnight" },
    ],
    facts: [
      "Casa Lamm (1911) is named after Cassius C. Lamm, one of the original Porfirian-era developers of the colonia. It's now an arts center with rotating exhibitions, a bookshop, and an academy — drop-in friendly during the day.",
      "Plaza Río de Janeiro was originally called Plaza Roma. Renamed in 1922 when Mexico was invited to Brazil's centennial — instead of building a new park, they rebadged this one. The David replica fountain in the center is the photo everyone takes.",
      "Roma was developed by an unusual team: British circus owner Edward Walter Orrin, the famous clown Ricardo Bell, U.S. engineer Cassius Lamm + sons, and Mexican lawyer Pedro Lascuráin. Several streets are named after cities where the Orrin Circus performed.",
      "The 1985 earthquake (8.0) flattened or damaged ~30% of Roma's buildings. The neighborhood emptied; rents collapsed. Artists, writers, and queer creatives moved in through the 90s, which seeded the current character.",
      "The 2017 earthquake (7.1) damaged or destroyed dozens more buildings — including some on Álvaro Obregón. Many vacant lots you'll see are still 2017 sites. It's part of why the gentrification debate is so charged.",
      "Roma Norte is the heart of CDMX's third-wave coffee scene. Buna roasters supply Quintonil and Rosetta (both Michelin-starred); Cardinal sources directly from Oaxaca, Veracruz, and Chiapas farms; Café Nin gets fresh pastries shuttled over from Panadería Rosetta daily.",
    ],
    images: [
      { src: "assets/images/roma-norte/plaza-rio.jpg", caption: "Plaza Río de Janeiro — the heart of Roma, with surrounding Porfirian-era buildings", credit: "Haakon S. Krohn · CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Plaza_R%C3%ADo_de_Janeiro.jpg" },
      { src: "assets/images/roma-norte/david-replica.jpg", caption: "Michelangelo's David replica in Plaza Río de Janeiro's central fountain", credit: "LEG95 · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:R%C3%A9plica_del_David_en_Plaza_R%C3%ADo_de_Janeiro,_Ciudad_de_M%C3%A9xico.jpg" },
      { src: "assets/images/roma-norte/roma-architecture.jpg", caption: "Porfirian-era residential architecture around Plaza Río de Janeiro", credit: "Pedro Camilo Márquez Vallarta · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Arquitectura_de_los_alrededores_de_la_Plaza_R%C3%ADo_de_Janeiro_de_la_colonia_Roma.jpg" },
    ],
    video: { id: "CjLpC5nNWQM", title: "4K Walking Tour: Roma Norte — Take Time To Travel" },
    food: [
      { name: "Cardinal Casa de Café", cat: "coffee", why: "Mexican single-origins from Oaxaca, Veracruz, Chiapas. Pour-over, Aeropress, Chemex — baristas walk you through method choice. In-house roasted beans for sale.", addr: "Córdoba 132, Roma Norte" },
      { name: "Buna", cat: "coffee", why: "Minimalist roastery that supplies Michelin-starred Quintonil and Rosetta. Single-origin focus, ecologically sourced. The fastest path to understanding why CDMX coffee is having a moment.", addr: "Orizaba 42, Roma Norte" },
      { name: "Qūentin Café", cat: "coffee", why: "Multiple Mexico City locations. Flat whites are widely cited as the best in the neighborhood. Pastry program is no slouch either — sit-in or grab-and-go.", addr: "Av. Álvaro Obregón 64, Roma Norte (flagship)" },
      { name: "Café Nin", cat: "coffee", why: "Panadería Rosetta's pastries without the line. Add chilaquiles, huevos rancheros, breakfast cocktails. Stylish, lingering-friendly. Sister concept to Rosetta from chef Elena Reygadas.", addr: "Calle Havre 73, Col. Juárez (5 min walk from Roma Norte)" },
      { name: "Panadería Rosetta", cat: "pastry", why: "Chef Elena Reygadas's bakery. The guava roll (rol de guayaba) is the iconic CDMX pastry — has its own Instagram cult following. Lines on weekends. Hit on a weekday morning if possible.", addr: "Colima 179, Roma Norte (4 blocks from Colima 325)" },
      { name: "Lardo", cat: "dinner", why: "All-day café from Elena Reygadas. Wood-fired pizzas, breakfast through dinner, organic-leaning. No reservations — go off-peak or wait. Calm, plant-filled room.", addr: "Agustín Melgar 6, Condesa (next door to Roma)" },
      { name: "Máximo Bistrot", cat: "dinner", why: "French-Mexican fine dining; one of CDMX's hardest reservations. Book 1–3 weeks ahead. Worth it once if the budget allows. Chef Eduardo García.", addr: "Av. Álvaro Obregón 65 Bis, Roma Norte" },
      { name: "Contramar", cat: "dinner", why: "Lunch only, but the lunch is legendary. Tuna tostadas + the whole-fish red-and-green sauce are the canonical orders. Sprawling all-out dining room — book ahead.", addr: "Calle de Durango 200, Roma Norte" },
      { name: "Páramo", cat: "dinner", why: "Tacos in a more atmospheric setting than a street cart — wide range from meaty to vegan, killer drinks program, no reservations. Drink at the bar while you wait. Discreet street-level door, restaurant on the second floor.", addr: "Av. Yucatán 84, Roma Norte" },
      { name: "Taquería Orinoco", cat: "street", why: "Monterrey-style tacos: trompo (al pastor), arrachera (steak), chicharrón. The 'pirata' (grilled steak quesadilla) is a must. Two CDMX locations near you.", addr: "Av. Álvaro Obregón 100, Roma Norte (flagship) · Av. Yucatán 3, Hipódromo" },
      { name: "El Hidalguense", cat: "street", why: "Barbacoa de borrego (lamb) cooked traditionally in agave leaves. Featured on Netflix's Taco Chronicles. Open Fri–Sun ONLY (07:00–18:00). Worth planning around — locals drive across the city for this.", addr: "Campeche 155, Roma Sur (~10 min walk south)" },
      { name: "Mercado Medellín", cat: "street", why: "Latin American grocery market — Cuban, Argentine, Colombian, Brazilian goods alongside Mexican. The fonda food court does ~100 MXN comidas corridas (3 courses + drink). Try Meche y Rafael's carnitas.", addr: "Calle Medellín 234, Roma Sur" },
    ],
    readings: [
      { title: "Colonia Roma — Wikipedia", src: "Neighborhood history · architecture · post-quake transformations", url: "https://en.wikipedia.org/wiki/Colonia_Roma" },
      { title: "History of Colonia Roma — Wikipedia", src: "Deeper Porfirian-era development story · the Orrin/Bell/Lamm/Lascuráin team", url: "https://en.wikipedia.org/wiki/History_of_Colonia_Roma" },
      { title: "The 22 Best Restaurants in Roma — The Infatuation", src: "Rotating professional list · keep next to this page for backup picks", url: "https://www.theinfatuation.com/mexico-city/guides/roma-restaurants-mexico-city" },
      { title: "Best Tacos in Roma & Condesa — Slight North", src: "Independent food writer · ranks Orinoco, Páramo, Hidalguense in context", url: "https://slightnorth.com/best-tacos-roma-condesa-mexico-city/" },
    ],
  },

  "hotel-geneve": {
    eyebrow: "Sat · May 2 night",
    title: "Hotel Geneve — 1907, witness to the Revolution",
    lede: "Londres 130 has been a hotel since 1907 — opened during Porfirio Díaz's presidency, it became a neutral zone during the Mexican Revolution and hosted ambassadors and revolutionary figures alike. It's been the first hotel in Mexico to offer a long list of services that are normal now (taxis, an elevator, in-room phones, in-room bathrooms). Now owned by Carlos Slim's Ostar Group.",
    practical: [
      { label: "Address", value: "Londres 130, Col. Juárez (Zona Rosa)" },
      { label: "Founded", value: "1907 · Porfirio Díaz era" },
      { label: "Conf #", value: "H-LSBX9KH9HQX7" },
      { label: "Phone", value: "+52 55 5080 0800" },
      { label: "Walk to Roma Norte", value: "~10 min · ~800 m southeast to the Colima 325 area" },
      { label: "Nearest Metro", value: "Insurgentes (Línea 1) · 5 min walk" },
    ],
    facts: [
      "Porfirio Díaz personally lobbied a Canadian architect to come build Hotel Geneve, modeling it on European hotels of the era. It opened 1907 — three years before the Revolution that ended his presidency.",
      "During the Mexican Revolution (1910–1920), Hotel Geneve was declared a neutral zone. It hosted foreign ambassadors and their families plus prominent revolutionary figures — basically the safest set of beds in Mexico City for a stretch of years.",
      "The hotel was a 'first' for many things in Mexico: first to offer a hotel taxi service, first with an in-house operator, first dry cleaner, first travel agency, first elevator, first tennis court, first hairdresser, and first to put a telephone and a private bathroom in every room. Most of those were unusual in 1907 hotels worldwide.",
      "The Phone Bar inside the hotel has a curated collection of antique telephones — inspired (per the hotel's own history) by Winston Churchill's visit. It's a low-key time-capsule space worth a drink for the photos alone.",
      "Now owned by Carlos Slim Helú (the Mexican telecom magnate, briefly the world's richest person in the 2010s) through his Grupo Ostar hotel chain. The historic preservation has stayed largely intact.",
    ],
    images: [
      { src: "assets/images/hotel-geneve/hotel-facade.jpg", caption: "Hotel Geneve exterior — Londres street, Zona Rosa", credit: "Horacio Fernandez · CC BY 3.0", source: "https://commons.wikimedia.org/wiki/File:Hotel_Geneve,_Mexico_D.F._-_panoramio.jpg" },
      { src: "assets/images/hotel-geneve/hotel-historical.jpg", caption: "Historical collection inside the hotel — Mexican Revolution era memorabilia", credit: "Ertly · CC BY 4.0", source: "https://commons.wikimedia.org/wiki/File:Hotel_Geneve_historical_collection_about_Mexican_revolution.jpg" },
    ],
    readings: [
      { title: "Hotel Geneve Mexico City — Wikipedia", src: "Founding, architecture, current ownership", url: "https://en.wikipedia.org/wiki/Hotel_Geneve_Mexico_City" },
      { title: "Hotel Geneve — official history (PDF)", src: "Their own 1907→present timeline · Porfirio Díaz, the Revolution, the firsts", url: "https://www.hotelgeneve.com.mx/uploads/files/cms_apps/pdf/historiageneve/Geneve_History.pdf" },
      { title: "Mexican Revolution and Hotel Geneve", src: "Hotel Geneve blog · the neutral-zone period in detail", url: "https://www.hotelgeneve.com.mx/en/blog/mexican-revolution-and-hotel-geneve/" },
    ],
    zonaRosa: {
      title: "Zona Rosa — the surrounding neighborhood",
      blurb: "Zona Rosa was CDMX's first cosmopolitan zone — opened up in the 50s/60s as a mixed-use cluster of cafés, galleries, and boutiques modeled on European pedestrian zones. Today it's the heart of CDMX's LGBTQ+ scene (the Pride march starts/ends here) and home to the city's Korea Town — Korean diaspora restaurants, BBQ joints, and grocers cluster on and around Florencia, Hamburgo, and Génova streets.",
      nearby: [
        { name: "Korea Town", note: "Florencia / Hamburgo / Génova streets · K-BBQ, jjajangmyeon, banchan delis, Korean grocery" },
        { name: "Glorieta de los Insurgentes", note: "Major roundabout 5 min north · transit hub + late-night taquerías" },
        { name: "Paseo de la Reforma", note: "Iconic boulevard 8 min walk · Sunday cycling closures, Ángel de la Independencia" },
        { name: "Walk to Roma Norte", note: "~10 min southeast · the move on Sunday morning to Colima 325" },
      ],
      arrivalDinner: [
        { name: "Korea Town options", why: "Flat 5–8 min walk from the hotel. K-BBQ is reliable comfort food after a travel day. Look for Casa Madrid-area Korean spots on Hamburgo/Florencia.", cat: "dinner" },
        { name: "Walk into Roma Norte", why: "10 min southeast gets you to the Roma food density covered in the Roma Norte tab. If energy holds, this is the more interesting choice.", cat: "dinner" },
        { name: "Hotel restaurant (Salon Frances)", why: "Lowest-effort option after a flight. The hotel's own restaurant is serviceable, atmospheric, doesn't require leaving the building. Phone Bar drink to wrap.", cat: "dinner" },
      ],
    },
  },
};

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

// ---- DEEP DIVES ----
function renderDeepDives() {
  Object.entries(DEEP_DIVES).forEach(([key, dive]) => {
    const panel = $(`#panel-${key}`);
    if (!panel) return;
    panel.innerHTML = buildDiveHtml(dive);
  });

  // Tab switching
  $$(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      $$(".tab").forEach(t => {
        const active = t === tab;
        t.classList.toggle("active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
      $$(".tab-panel").forEach(p => {
        p.classList.toggle("active", p.id === `panel-${target}`);
      });
    });
  });
}

function buildDiveHtml(d) {
  const parts = [];

  // Hero
  parts.push(`
    <div class="dive-hero">
      <h3>${escapeHtml(d.eyebrow)}</h3>
      <h2 class="dive-title">${escapeHtml(d.title)}</h2>
      <p class="lede">${escapeHtml(d.lede)}</p>
    </div>
  `);

  // Practical info
  if (d.practical && d.practical.length) {
    parts.push(`
      <div class="dive-section">
        <h3>Need to Know</h3>
        <div class="practical-grid">
          ${d.practical.map(p => `
            <div class="practical-cell">
              <div class="label">${escapeHtml(p.label)}</div>
              <div class="value">${escapeHtml(p.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `);
  }

  // Image gallery
  if (d.images && d.images.length) {
    parts.push(`
      <div class="dive-section">
        <h3>Photos</h3>
        <div class="gallery">
          ${d.images.map(img => `
            <figure>
              <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.caption)}" loading="lazy">
              <figcaption>
                ${escapeHtml(img.caption)}
                <div class="credit"><a href="${escapeHtml(img.source)}" target="_blank" rel="noopener">${escapeHtml(img.credit)}</a></div>
              </figcaption>
            </figure>
          `).join("")}
        </div>
      </div>
    `);
  }

  // Interesting facts
  if (d.facts && d.facts.length) {
    parts.push(`
      <div class="dive-section">
        <h3>What to Know</h3>
        <ul class="fact-list">
          ${d.facts.map(f => `<li>${escapeHtml(f)}</li>`).join("")}
        </ul>
      </div>
    `);
  }

  // Video embed
  if (d.video && d.video.id) {
    parts.push(`
      <div class="dive-section">
        <h3>Video</h3>
        <div class="video-frame">
          <iframe src="https://www.youtube.com/embed/${escapeHtml(d.video.id)}" title="${escapeHtml(d.video.title)}" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
      </div>
    `);
  }

  // Food (Roma Norte specifically — and Hotel Geneve has its own arrival-dinner picks)
  if (d.food && d.food.length) {
    parts.push(`
      <div class="dive-section">
        <h3>Where to Eat (Roma Norte · 12 picks)</h3>
        <div class="food-grid">
          ${d.food.map(f => `
            <div class="food-card">
              <span class="cat-tag ${escapeHtml(f.cat)}">${escapeHtml(f.cat)}</span>
              <h4>${escapeHtml(f.name)}</h4>
              <p class="why">${escapeHtml(f.why)}</p>
              ${f.addr ? `<p class="addr">${escapeHtml(f.addr)}</p>` : ""}
              <div class="actions">
                <a class="link-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f.name + ", " + (f.addr || "") + ", CDMX")}" target="_blank" rel="noopener">Maps ↗</a>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `);
  }

  // Hotel Geneve "On the boat" / "On the tour" / Zona Rosa block
  if (d.onTheBoat && d.onTheBoat.length) {
    parts.push(`
      <div class="dive-section">
        <h3>On the Boat</h3>
        <ul class="fact-list">
          ${d.onTheBoat.map(t => `<li>${escapeHtml(t)}</li>`).join("")}
        </ul>
      </div>
    `);
  }
  if (d.onTheTour && d.onTheTour.length) {
    parts.push(`
      <div class="dive-section">
        <h3>On the Tour</h3>
        <ul class="fact-list">
          ${d.onTheTour.map(t => `<li>${escapeHtml(t)}</li>`).join("")}
        </ul>
      </div>
    `);
  }
  if (d.zonaRosa) {
    const zr = d.zonaRosa;
    parts.push(`
      <div class="dive-section">
        <h3>${escapeHtml(zr.title)}</h3>
        <p>${escapeHtml(zr.blurb)}</p>
        <h3 style="margin-top:14px;">Walking Distance</h3>
        <ul class="fact-list">
          ${zr.nearby.map(n => `<li><b>${escapeHtml(n.name)}</b> — ${escapeHtml(n.note)}</li>`).join("")}
        </ul>
        <h3 style="margin-top:14px;">Sat 5/2 Arrival-Night Dinner Picks</h3>
        <div class="food-grid">
          ${zr.arrivalDinner.map(f => `
            <div class="food-card">
              <span class="cat-tag ${escapeHtml(f.cat)}">${escapeHtml(f.cat)}</span>
              <h4>${escapeHtml(f.name)}</h4>
              <p class="why">${escapeHtml(f.why)}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `);
  }

  // Readings
  if (d.readings && d.readings.length) {
    parts.push(`
      <div class="dive-section">
        <h3>Readings</h3>
        <ul class="link-list">
          ${d.readings.map(r => `
            <li>
              <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener">${escapeHtml(r.title)} ↗</a>
              <div class="src">${escapeHtml(r.src)}</div>
            </li>
          `).join("")}
        </ul>
      </div>
    `);
  }

  return parts.join("");
}

// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
  renderCountdown();
  renderDays();
  renderMap();
  renderBooked();
  renderFlex();
  renderDeepDives();
  renderWeather();
});
