const destinations = {
  Beach: [
    { name: "Tulum", country: "Mexico", region: "CARIBBEAN", detail: "Clifftop ruins, turquoise cenotes, boho beach clubs", img: "https://images.unsplash.com/photo-1501855901885-8b29fa615daf?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVsdW0lMjBtZXhpY298ZW58MHx8MHx8fDA%3D" },
    { name: "Santorini", country: "Greece", region: "EUROPE", detail: "White-washed cliffs, sunset views, volcanic beaches", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80" },
    { name: "Bali", country: "Indonesia", region: "ASIA", detail: "Rice terraces, temple ceremonies, surf breaks", img: "https://plus.unsplash.com/premium_photo-1661878915254-f3163e91d870?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Maldives", country: "Maldives", region: "INDIAN OCEAN", detail: "Overwater bungalows, coral reefs, crystal lagoons", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80" },
    { name: "Amalfi Coast", country: "Italy", region: "EUROPE", detail: "Pastel villages, lemon groves, azure sea", img: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=80" },
  ],
  City: [
    { name: "Tokyo", country: "Japan", region: "ASIA", detail: "Neon nights, ancient shrines, world-class ramen", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80" },
    { name: "Paris", country: "France", region: "EUROPE", detail: "Art museums, Seine walks, perfect croissants", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80" },
    { name: "New York", country: "USA", region: "AMERICAS", detail: "Skyline views, Central Park, endless energy", img: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D" },
    { name: "Barcelona", country: "Spain", region: "EUROPE", detail: "Gaudí architecture, tapas bars, beach city life", img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFyY2Vsb25hfGVufDB8fDB8fHww" },
    { name: "Istanbul", country: "Turkey", region: "EURASIA", detail: "Bazaars, mosques, Bosphorus sunsets", img: "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXN0YW5idWwlMkMlMjB0dXJrZXl8ZW58MHx8MHx8fDA%3D" },
  ],
  Nature: [
    { name: "Patagonia", country: "Argentina/Chile", region: "S. AMERICA", detail: "Glaciers, condors, endless hiking trails", img: "https://images.unsplash.com/photo-1584782494342-19b561a6340d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGF0YWdvbmlhJTIwYXJnZW50aW5hfGVufDB8fDB8fHww" },
    { name: "Iceland", country: "Iceland", region: "NORDIC", detail: "Northern lights, geysers, black sand beaches", img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlbGFuZHxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Queenstown", country: "New Zealand", region: "PACIFIC", detail: "Fjords, bungee jumping, Lord of the Rings scenery", img: "https://images.unsplash.com/photo-1565690482729-9290df702689?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHF1ZWVuc3Rvd258ZW58MHx8MHx8fDA%3D" },
    { name: "Costa Rica", country: "Costa Rica", region: "C. AMERICA", detail: "Cloud forests, sloths, volcano hot springs", img: "https://images.unsplash.com/photo-1586640866012-8273df34e593?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29zdGElMjByaWNhfGVufDB8fDB8fHww" },
    { name: "Norway", country: "Norway", region: "NORDIC", detail: "Fjords, midnight sun, Viking heritage", img: "https://images.unsplash.com/photo-1518124880777-cf8c82231ffb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vcndheXxlbnwwfHwwfHx8MA%3D%3D" },
  ],
  Cultural: [
    { name: "Kyoto", country: "Japan", region: "ASIA", detail: "Geisha districts, bamboo groves, tea ceremonies", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80" },
    { name: "Rome", country: "Italy", region: "EUROPE", detail: "Colosseum, cobblestone piazzas, Vatican art", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80" },
    { name: "Marrakech", country: "Morocco", region: "AFRICA", detail: "Souks, riads, the call to prayer at dusk", img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80" },
    { name: "Petra", country: "Jordan", region: "MIDDLE EAST", detail: "Rose-red city carved in rock, ancient Nabataean trails", img: "https://images.unsplash.com/photo-1615811648503-479d06197ff3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0cmElMkMlMjBqb3JkYW58ZW58MHx8MHx8fDA%3D" },
    { name: "Havana", country: "Cuba", region: "CARIBBEAN", detail: "Classic cars, salsa nights, crumbling grandeur", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioNZJsvyirAyMvCW541KGj_zpyHPsBnzPtA&s" },
    { name: "Varanasi", country: "India", region: "ASIA", detail: "Sacred Ganges rituals, ancient temples, one of the world’s oldest living cities", img: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D" },
  ],
  Luxury: [
    { name: "Amalfi Coast", country: "Italy", region: "EUROPE", detail: "Private yachts, cliff-side villas, fresh seafood", img: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=80" },
    { name: "St. Barts", country: "France", region: "CARIBBEAN", detail: "Celebrity hideaway, pristine beaches, French dining", img: "https://images.unsplash.com/photo-1551213365-54cb536fb765?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3QlMjBiYXJ0aHN8ZW58MHx8MHx8fDA%3D0" },
    { name: "Dubai", country: "UAE", region: "MIDDLE EAST", detail: "Sky-high hotels, desert safaris, gold everything", img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1YmFpfGVufDB8fDB8fHww" },
    { name: "Tuscany", country: "Italy", region: "EUROPE", detail: "Wine estates, hilltop villas, truffle hunts", img: "https://images.unsplash.com/photo-1760681556160-59d74d81a2e6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Bora Bora", country: "French Polynesia", region: "PACIFIC", detail: "Overwater bungalows, lagoon snorkeling, Mt. Otemanu", img: "https://images.unsplash.com/photo-1672812407183-001d3533f49a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvcmElMjBib3JhfGVufDB8fDB8fHww" },
  ],
  Adventure: [
    { name: "Nepal", country: "Nepal", region: "ASIA", detail: "Everest base camp, monasteries, yak butter tea", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80" },
    { name: "Patagonia", country: "Chile", region: "S. AMERICA", detail: "Multi-day treks, condors, raw wilderness", img: "https://images.unsplash.com/photo-1715273157640-b0c2a2bec178?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF0YWdvbmlhJTIwY2hpbGV8ZW58MHx8MHx8fDA%3D" },
    { name: "Peru", country: "Peru", region: "S. AMERICA", detail: "Machu Picchu, Inca trails, Amazon basin", img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80" },
    { name: "Tanzania", country: "Tanzania", region: "AFRICA", detail: "Serengeti safari, Kilimanjaro, Zanzibar escape", img: "https://images.unsplash.com/photo-1613864309738-9102a9e22883?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRhbnphbmlhfGVufDB8fDB8fHww" },
    { name: "Vietnam", country: "Vietnam", region: "ASIA", detail: "Ha Long Bay kayaking, motorbike routes, street food", img: "https://images.unsplash.com/photo-1531737212413-667205e1cda7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "New Zealand", country: "New Zealand", region: "PACIFIC", detail: "Hiking, fjords, adrenaline sports, and epic landscapes", img: "https://plus.unsplash.com/premium_photo-1661962302792-4b05d3e08513?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Banff", country: "Canada", region: "AMERICAS", detail: "Turquoise lakes, mountain hikes, and wildlife in the Rockies", img: "https://images.unsplash.com/photo-1561134643-668f9057cce4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZmYlMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D" },
  ],
  Social:   [
    { name: "Ibiza", country: "Spain", region: "EUROPE", detail: "World-class clubs, beach parties, sunset sessions", img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWJpemElMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Miami", country: "USA", region: "AMERICAS", detail: "Rooftop bars, Art Deco vibes, nonstop nightlife", img: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlhbWklMjBmbG9yaWRhfGVufDB8fDB8fHww" },
    { name: "Rio de Janeiro", country: "Brazil", region: "S. AMERICA", detail: "Carnival energy, beach culture, samba nights", img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80" },
    { name: "Berlin", country: "Germany", region: "EUROPE", detail: "Underground clubs, street art, 72-hour raves", img: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVybGlufGVufDB8fDB8fHww" },
    { name: "Las Vegas", country: "USA", region: "AMERICAS", detail: "Casinos, pool parties, celebrity residencies", img: "https://images.unsplash.com/photo-1577334928618-2ff2bf09e827?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFzJTIwdmVnYXN8ZW58MHx8MHx8fDA%3D" },
  ],
  Foodie:   [
    { name: "Tokyo", country: "Japan", region: "ASIA", detail: "More Michelin stars than anywhere, ramen to omakase", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80" },
    { name: "San Sebastián", country: "Spain", region: "EUROPE", detail: "Pintxos bars, the most Michelin stars per capita", img: "https://images.unsplash.com/photo-1723529816376-b0a08e212263?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FuJTIwc2ViYXN0aWFufGVufDB8fDB8fHww" },
    { name: "Bangkok", country: "Thailand", region: "ASIA", detail: "Street food paradise, floating markets, bold flavors", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80" },
    { name: "Bologna", country: "Italy", region: "EUROPE", detail: "Pasta birthplace, ragu, mortadella, food markets", img: "https://images.unsplash.com/photo-1635469019177-7264fc1e013c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9sb2duYXxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Mexico City", country: "Mexico", region: "AMERICAS", detail: "Tacos, mole, mezcal bars, world-class fine dining", img: "https://images.unsplash.com/photo-1601585144584-2a53183be14c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWV4aWNvJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "New Orleans", country: "USA", region: "AMERICAS", detail: "Creole and Cajun classics, gumbo, po’boys, and beignets", img: "https://images.unsplash.com/photo-1635352934507-cd4ad73275c6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwb3JsZWFuc3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Lima", country: "Peru", region: "S. AMERICA", detail: "Ceviche, Nikkei fusion, and one of the world’s top fine dining scenes", img: "https://images.unsplash.com/photo-1580530719837-952e0515b69a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGltYSUyMHBlcnV8ZW58MHx8MHx8fDA%3D" },
  ]
};

let currentVibe = null, pendingMode = null, currentSwipeIndex = 0, swipeStack = [],
    wheelAngle = 0, isSpinning = false, bracketMatches = [], bracketRound = 0,
    bracketMatchIndex = 0, likedDestinations = [];

const wheelColors = ['#3B7DD8','#C9A84C','#1A2B3C','#E8C87A','#2A5AA8','#BA7517','#3B7DD8','#C4A882'];

function goTo(id) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(id).classList.add('active'); }
function startMode(mode) { pendingMode = mode; goTo('vibe-picker'); }
function selectVibe(el, vibe) { document.querySelectorAll('.vibe-chip').forEach(c => c.classList.remove('selected')); el.classList.add('selected'); currentVibe = vibe; document.getElementById('continue-btn').classList.add('ready'); }
function launchMode() { if (!currentVibe) return; if (pendingMode === 'swipe') initSwipe(); else if (pendingMode === 'spin') initSpin(); else if (pendingMode === 'bracket') initBracket(); else if (pendingMode === 'ai') initQuiz(); }

// ─── SWIPE ────────────────────────────────────────────────────────────────────

let activeDragCard = null;
let dragStartX = 0, dragStartY = 0, dragCurrentX = 0, dragIsDragging = false;

document.addEventListener('mousemove', onGlobalMove);
document.addEventListener('touchmove', onGlobalMove, { passive: false });
document.addEventListener('mouseup', onGlobalEnd);
document.addEventListener('touchend', onGlobalEnd);
document.addEventListener('mouseleave', onGlobalEnd);

function onGlobalMove(e) {
  if (!dragIsDragging || !activeDragCard) return;
  e.preventDefault();
  const pt = e.touches ? e.touches[0] : e;
  dragCurrentX = pt.clientX - dragStartX;
  const dragCurrentY = pt.clientY - dragStartY;
  activeDragCard.style.transform = `translate(${dragCurrentX}px, ${dragCurrentY * 0.3}px) rotate(${dragCurrentX * 0.08}deg)`;
  const likeEl = activeDragCard.querySelector('.drag-like');
  const nopeEl = activeDragCard.querySelector('.drag-nope');
  if (likeEl) likeEl.style.opacity = Math.max(0, dragCurrentX / 80);
  if (nopeEl) nopeEl.style.opacity = Math.max(0, -dragCurrentX / 80);
}

function onGlobalEnd() {
  if (!dragIsDragging || !activeDragCard) return;
  dragIsDragging = false;
  activeDragCard.style.transition = '';
  if (dragCurrentX > 80) {
    doSwipe('right');
  } else if (dragCurrentX < -80) {
    doSwipe('left');
  } else {
    activeDragCard.style.transform = '';
    const likeEl = activeDragCard.querySelector('.drag-like');
    const nopeEl = activeDragCard.querySelector('.drag-nope');
    if (likeEl) likeEl.style.opacity = 0;
    if (nopeEl) nopeEl.style.opacity = 0;
  }
  dragCurrentX = 0;
  activeDragCard = null;
}

function onDragStart(e) {
  dragIsDragging = true;
  activeDragCard = e.currentTarget;
  const pt = e.touches ? e.touches[0] : e;
  dragStartX = pt.clientX;
  dragStartY = pt.clientY;
  activeDragCard.style.transition = 'none';
}

function attachDrag(card) {
  const likeTag = document.createElement('div');
  likeTag.className = 'drag-like';
  likeTag.textContent = '♥';
  likeTag.style.cssText = 'position:absolute;top:1rem;left:1rem;z-index:10;font-size:2rem;color:#1D9E75;opacity:0;transition:opacity 0.1s;pointer-events:none;text-shadow:0 1px 4px rgba(0,0,0,0.15)';
  const nopeTag = document.createElement('div');
  nopeTag.className = 'drag-nope';
  nopeTag.textContent = '✕';
  nopeTag.style.cssText = 'position:absolute;top:1rem;right:1rem;z-index:10;font-size:2rem;color:#E24B4A;opacity:0;transition:opacity 0.1s;pointer-events:none;text-shadow:0 1px 4px rgba(0,0,0,0.15)';
  card.appendChild(likeTag);
  card.appendChild(nopeTag);
  card.addEventListener('mousedown', onDragStart);
  card.addEventListener('touchstart', onDragStart, { passive: false });
}

function doSwipe(dir) {
  const card = document.querySelector('.swipe-card.top');
  if (!card) return;
  if (dir === 'right') likedDestinations.push(swipeStack[currentSwipeIndex]);
  card.style.pointerEvents = 'none';
  card.classList.add(dir === 'left' ? 'exit-left' : 'exit-right');
  setTimeout(() => { currentSwipeIndex++; renderSwipe(); }, 320);
}

function renderSwipe() {
  const arena = document.getElementById('swipe-arena');
  arena.innerHTML = '';
  const prog = document.getElementById('swipe-progress');

  if (currentSwipeIndex >= swipeStack.length) {
    prog.textContent = '';
    document.querySelector('.swipe-actions').style.display = 'none';

    if (likedDestinations.length === 0) {
      arena.style.height = '420px';
      arena.style.maxHeight = '';
      arena.style.overflowY = 'visible';
      arena.style.overflowX = 'visible';
      arena.style.alignItems = 'center';
      arena.style.justifyContent = 'center';
      arena.style.paddingTop = '0';
      arena.innerHTML = `
        <div style="text-align:center;padding:2rem">
          <div style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;margin-bottom:0.5rem;color:#1A2B3C">No matches!</div>
          <div style="color:#8A9AB0;font-size:0.85rem;margin-bottom:1.5rem">You didn't like any destinations.</div>
          <button style="background:#1A2B3C;color:#fff;border:none;padding:0.75rem 1.5rem;font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px" onclick="initSwipe()">Try again</button>
        </div>`;
      return;
    }

    arena.style.height = 'auto';
    arena.style.maxHeight = 'none';
    arena.style.overflowY = 'visible';
    arena.style.overflowX = 'hidden';
    arena.style.alignItems = 'center';
    arena.style.justifyContent = 'flex-start';
    arena.style.paddingTop = '0';

    arena.innerHTML = `
      <div style="width:min(300px,88vw);display:flex;flex-direction:column;gap:0.75rem;padding-bottom:1rem;margin:0 auto;">
        <div style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:600;color:#1A2B3C;text-align:center;margin-bottom:0.25rem;">
          ♥ ${likedDestinations.length} place${likedDestinations.length > 1 ? 's' : ''} you loved
        </div>
        ${likedDestinations.map(d => `
          <div style="width:min(300px,88vw);border-radius:10px;overflow:hidden;border:1px solid #D8E4F0;">
            <img src="${d.img}" style="width:100%;height:260px;object-fit:cover;display:block;" />
            <div style="padding:1rem 1.1rem 1.1rem;background:#fff;border-top:1px solid #D8E4F0;">
              <div style="font-family:'Cormorant Garamond',serif;font-size:1.15rem;font-weight:600;margin-bottom:3px;color:#1A2B3C;">${d.name}, ${d.country}</div>
              <div style="font-size:0.72rem;color:#8A9AB0;font-weight:300;">${d.detail}</div>
            </div>
          </div>`).join('')}
        <div style="display:flex;gap:0.5rem;">
          <button style="flex:1;background:#1A2B3C;color:#fff;border:none;padding:0.75rem;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px;" onclick="initSwipe()">Swipe again</button>
          <button style="flex:1;background:none;color:#1A2B3C;border:1px solid #D8E4F0;padding:0.75rem;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px;" onclick="goTo('home')">Home</button>
        </div>
      </div>`;
    return;
  }

  prog.textContent = `${currentSwipeIndex + 1} / ${swipeStack.length}`;

  const maxVisible = Math.min(currentSwipeIndex + 2, swipeStack.length - 1);
  for (let i = maxVisible; i >= currentSwipeIndex; i--) {
    const d = swipeStack[i];
    const card = document.createElement('div');
    card.className = 'swipe-card ' + (i === currentSwipeIndex ? 'top' : i === currentSwipeIndex + 1 ? 'mid' : 'back');
    card.innerHTML = `
      <div class="card-img">
        <img src="${d.img}" style="width:100%;height:260px;object-fit:cover;display:block;" />
        <span class="card-region">${d.region}</span>
      </div>
      <div class="card-info">
        <div class="card-name">${d.name}, ${d.country}</div>
        <div class="card-detail">${d.detail}</div>
      </div>`;
    arena.appendChild(card);
    if (i === currentSwipeIndex) attachDrag(card);
  }
}

function initSwipe() {
  goTo('swipe-mode');
  swipeStack = [...(destinations[currentVibe] || destinations.Beach)];
  currentSwipeIndex = 0;
  likedDestinations = [];
  document.querySelector('.swipe-actions').style.display = 'flex';
  const arena = document.getElementById('swipe-arena');
  arena.style.height = '420px';
  arena.style.maxHeight = '';
  arena.style.overflowY = 'visible';
  arena.style.overflowX = 'visible';
  arena.style.alignItems = 'center';
  arena.style.justifyContent = 'center';
  arena.style.paddingTop = '0';
  renderSwipe();
}

// ─── SPIN ─────────────────────────────────────────────────────────────────────

function initSpin() {
  goTo('spin-mode');
  document.querySelector('.spin-result').innerHTML = `
    <div class="spin-result-label">Your destination</div>
    <div class="spin-result-name" id="spin-result-text">Spin to reveal</div>`;
  wheelAngle = 0;
  setTimeout(() => drawWheel(0), 50);
}

function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;
  const btn = document.getElementById('spin-btn');
  btn.disabled = true;
  const textEl = document.getElementById('spin-result-text');
  if (textEl) textEl.textContent = '...';
  const total = (Math.PI * 2) * (5 + Math.random() * 5), dur = 3200, start = performance.now(), startA = wheelAngle;
  function animate(now) {
    const el = now - start, p = Math.min(el / dur, 1), ease = 1 - Math.pow(1 - p, 4);
    wheelAngle = startA + total * ease; drawWheel(wheelAngle);
    if (p < 1) { requestAnimationFrame(animate); return; }
    isSpinning = false; btn.disabled = false;
    const items = destinations[currentVibe] || destinations.Beach;
    const n = items.length, arc = (Math.PI * 2) / n;
    const norm = ((wheelAngle % (Math.PI * 2)) + (Math.PI * 2)) % (Math.PI * 2);
    const ptr = Math.PI * 1.5;
    const idx = Math.floor(((ptr - norm + (Math.PI * 2)) % (Math.PI * 2)) / arc) % n;
    const dest = items[idx];
    const resultEl = document.querySelector('.spin-result');
    resultEl.innerHTML = `
      <div style="width:100%;max-width:280px;border-radius:10px;overflow:hidden;border:1px solid #D8E4F0;background:#fff;">
        <img src="${dest.img}" style="width:100%;height:160px;object-fit:cover;display:block;" />
        <div style="padding:0.9rem 1rem 1rem;">
          <div style="font-size:0.6rem;text-transform:uppercase;letter-spacing:0.12em;color:#C9A84C;font-weight:500;margin-bottom:4px">Your destination</div>
          <div style="font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:600;color:#1A2B3C">${dest.name}</div>
          <div style="font-size:0.72rem;color:#8A9AB0;margin-top:2px">${dest.country} · ${dest.region}</div>
          <div style="font-size:0.72rem;color:#8A9AB0;font-weight:300;margin-top:4px">${dest.detail}</div>
        </div>
      </div>
      <button onclick="initSpin()" style="background:#1A2B3C;color:#fff;border:none;padding:0.75rem 1.5rem;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px;margin-top:0.5rem;">Spin again</button>`;
  }
  requestAnimationFrame(animate);
}

function drawWheel(r) {
  const c = document.getElementById('wheel-canvas');
  if (!c) return;
  c.width = 280;
  c.height = 280;
  const ctx = c.getContext('2d');
  const items = destinations[currentVibe] || destinations.Beach;
  const n = items.length, arc = (Math.PI * 2) / n, cx = 140, cy = 140, rad = 130;
  ctx.clearRect(0, 0, 280, 280);
  for (let i = 0; i < n; i++) {
    const s = r + i * arc, e = s + arc;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, rad, s, e);
    ctx.fillStyle = wheelColors[i % wheelColors.length]; ctx.fill();
    ctx.strokeStyle = '#E8C87A'; ctx.lineWidth = 2; ctx.stroke();
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(s + arc / 2);
    ctx.textAlign = 'right'; ctx.fillStyle = '#fff';
    ctx.font = '500 11px Inter,sans-serif';
    ctx.fillText(items[i].name, rad - 12, 4); ctx.restore();
  }
  ctx.beginPath(); ctx.arc(cx, cy, 18, 0, Math.PI * 2);
  ctx.fillStyle = '#C9A84C'; ctx.fill();
  ctx.strokeStyle = '#1A2B3C'; ctx.lineWidth = 1.5; ctx.stroke();
}

// ─── BRACKET ──────────────────────────────────────────────────────────────────

function initBracket() {
  goTo('bracket-mode');
  const pool = [...(destinations[currentVibe] || destinations.Beach)];
  while (pool.length < 4) pool.push(...pool);
  bracketMatches = shuffle(pool).slice(0, 4);
  bracketRound = 1; bracketMatchIndex = 0;
  renderBracket();
}

function shuffle(a) {
  const arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderBracket() {
  const cont = document.getElementById('bracket-container');
  const a = bracketMatches[bracketMatchIndex * 2], b = bracketMatches[bracketMatchIndex * 2 + 1];
  if (!a || !b) { showWinner(bracketMatches[0]); return; }
  const label = bracketRound === 1 ? 'Semi-final' : bracketRound === 2 ? 'Final' : `Round ${bracketRound}`;
  const prog = (bracketMatchIndex / Math.floor(bracketMatches.length / 2)) * 100;
  cont.innerHTML = `
    <div class="bracket-round">${label} · Which would you choose?</div>
    <div class="bracket-vs">
      <div class="bracket-card" id="bc-a" onclick="pickBracket(0)">
        <div class="bracket-card-img"><img src="${a.img}" style="width:100%;height:160px;object-fit:cover;display:block;" /></div>
        <div class="bracket-card-foot"><div class="bracket-card-name">${a.name}</div></div>
      </div>
      <div class="vs-divider">vs</div>
      <div class="bracket-card" id="bc-b" onclick="pickBracket(1)">
        <div class="bracket-card-img"><img src="${b.img}" style="width:100%;height:160px;object-fit:cover;display:block;" /></div>
        <div class="bracket-card-foot"><div class="bracket-card-name">${b.name}</div></div>
      </div>
    </div>
    <div class="bracket-progress"><div class="bracket-bar" style="width:${prog}%"></div></div>
    <div class="bracket-sub" id="bracket-sub-a">${a.name}: ${a.detail}</div>
    <div class="bracket-sub" id="bracket-sub-b">${b.name}: ${b.detail}</div>`;
}

function pickBracket(idx) {
  const winner = bracketMatches[bracketMatchIndex * 2 + idx];
  const nm = [];
  for (let i = 0; i < bracketMatches.length; i += 2) {
    if (i === bracketMatchIndex * 2) nm.push(winner);
    else if (i !== bracketMatchIndex * 2 + 1) {
      nm.push(bracketMatches[i]);
      if (bracketMatches[i + 1]) nm.push(bracketMatches[i + 1]);
    }
  }
  bracketMatches = nm; bracketMatchIndex = 0;
  if (bracketMatches.length <= 1) { showWinner(bracketMatches[0]); return; }
  bracketRound++; renderBracket();
}

function showWinner(d) {
  document.getElementById('bracket-container').innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:0.75rem;text-align:center;padding:1rem">
      <div style="font-size:0.62rem;text-transform:uppercase;letter-spacing:0.12em;color:#C9A84C;font-weight:500">Your next destination</div>
      <div style="width:200px;height:200px;border-radius:8px;overflow:hidden;">
        <img src="${d.img}" style="width:100%;height:100%;object-fit:cover;" />
      </div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;color:#1A2B3C">${d.name}</div>
      <div style="font-size:0.75rem;color:#8A9AB0">${d.country} · ${d.detail}</div>
      <button style="margin-top:0.5rem;background:#1A2B3C;color:#fff;border:none;padding:0.75rem 1.5rem;font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px" onclick="initBracket()">Play again</button>
    </div>`;
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────

const quizQuestions = [
  { question: "What's your ideal climate?", options: ["Warm & sunny", "Cool & crisp", "Tropical & humid", "Mild & comfortable"] },
  { question: "What's your travel style?", options: ["Relax and do nothing", "Explore culture & history", "Adventure & outdoors", "Food, nightlife & city life"] },
  { question: "How do you feel about crowds?", options: ["Hidden gems only", "A little buzz is fine", "I love a lively scene", "Anywhere is fine"] },
  { question: "What's your budget?", options: ["Budget friendly", "Mid range", "Splurge worthy", "Money is no object"] }
];

let quizAnswers = [];
let quizStep = 0;

function initQuiz() {
  goTo('ai-mode');
  quizAnswers = [];
  quizStep = 0;
  renderQuiz();
}

function renderQuiz() {
  const cont = document.getElementById('quiz-container');
  if (quizStep >= quizQuestions.length) { submitQuiz(); return; }
  const q = quizQuestions[quizStep];
  const progress = (quizStep / quizQuestions.length) * 100;
  cont.innerHTML = `
    <div style="padding:1.5rem;display:flex;flex-direction:column;gap:1.25rem;flex:1">
      <div style="background:#D8E4F0;border-radius:10px;height:3px;overflow:hidden">
        <div style="width:${progress}%;height:100%;background:#C9A84C;border-radius:10px;transition:width 0.3s"></div>
      </div>
      <div style="font-size:0.62rem;text-transform:uppercase;letter-spacing:0.12em;color:#C9A84C;font-weight:500">
        Question ${quizStep + 1} of ${quizQuestions.length}
      </div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;color:#1A2B3C;line-height:1.2">
        ${q.question}
      </div>
      <div style="display:flex;flex-direction:column;gap:0.75rem;margin-top:0.5rem">
        ${q.options.map(opt => `
          <button onclick="selectQuizAnswer('${opt}')"
            style="background:#fff;border:1.5px solid #D8E4F0;border-radius:8px;padding:1rem 1.25rem;text-align:left;font-family:'Inter',sans-serif;font-size:0.88rem;color:#1A2B3C;cursor:pointer;transition:all 0.15s;font-weight:400"
            onmouseover="this.style.borderColor='#C9A84C';this.style.background='#FBF5E6'"
            onmouseout="this.style.borderColor='#D8E4F0';this.style.background='#fff'">
            ${opt}
          </button>`).join('')}
      </div>
    </div>`;
}

function selectQuizAnswer(answer) {
  quizAnswers.push(answer);
  quizStep++;
  renderQuiz();
}

async function submitQuiz() {
  const cont = document.getElementById('quiz-container');
  cont.innerHTML = `
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;padding:2rem">
      <div style="display:flex;gap:4px">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
      </div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:#1A2B3C">Finding your perfect destination...</div>
    </div>`;

  const scores = {};
  const allDests = destinations[currentVibe] || Object.values(destinations).flat();
  allDests.forEach(d => scores[d.name] = 0);
  const [climate, style, crowds, budget] = quizAnswers;

  const warmDests = ["Tulum","Santorini","Bali","Maldives","Amalfi Coast","Dubai","Bora Bora","St. Barts","Havana","Marrakech","Petra","Vietnam","Tanzania","Peru"];
  const coolDests = ["Iceland","Patagonia","Norway","Queenstown","Kyoto"];
  const tropicalDests = ["Bali","Maldives","Costa Rica","Tulum","Vietnam","Tanzania","Bora Bora"];
  const mildDests = ["Paris","Barcelona","Rome","Istanbul","Tokyo","New York"];
  if (climate === "Warm & sunny") warmDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 3; });
  if (climate === "Cool & crisp") coolDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 3; });
  if (climate === "Tropical & humid") tropicalDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 3; });
  if (climate === "Mild & comfortable") mildDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 3; });

  const relaxDests = ["Maldives","Bora Bora","Santorini","Amalfi Coast","St. Barts","Tuscany","Bali"];
  const cultureDests = ["Kyoto","Rome","Marrakech","Petra","Havana","Istanbul","Barcelona","Paris"];
  const adventureDests = ["Nepal","Patagonia","Peru","Tanzania","Costa Rica","Iceland","Queenstown","Norway","Vietnam"];
  const cityDests = ["Tokyo","New York","Barcelona","Paris","Istanbul","Dubai","Havana"];
  if (style === "Relax and do nothing") relaxDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 3; });
  if (style === "Explore culture & history") cultureDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 3; });
  if (style === "Adventure & outdoors") adventureDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 3; });
  if (style === "Food, nightlife & city life") cityDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 3; });

  const hiddenDests = ["Tulum","Patagonia","Nepal","Costa Rica","Norway","Tuscany","Queenstown","Vietnam"];
  const buzzDests = ["Bali","Santorini","Barcelona","Kyoto","Marrakech","Havana"];
  const livelDests = ["New York","Tokyo","Dubai","Istanbul","Paris","Barcelona"];
  if (crowds === "Hidden gems only") hiddenDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 2; });
  if (crowds === "A little buzz is fine") buzzDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 2; });
  if (crowds === "I love a lively scene") livelDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 2; });

  const budgetDests = ["Tulum","Bali","Vietnam","Marrakech","Havana","Costa Rica","Peru"];
  const midDests = ["Barcelona","Istanbul","Kyoto","Rome","Queenstown","Norway","Iceland"];
  const splurgeDests = ["Santorini","Amalfi Coast","Paris","Tokyo","New York","Tuscany"];
  const luxDests = ["Maldives","Bora Bora","Dubai","St. Barts","Nepal","Tanzania","Petra"];
  if (budget === "Budget friendly") budgetDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 2; });
  if (budget === "Mid range") midDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 2; });
  if (budget === "Splurge worthy") splurgeDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 2; });
  if (budget === "Money is no object") luxDests.forEach(n => { if (scores[n] !== undefined) scores[n] += 2; });

  const winner = allDests.reduce((best, d) => scores[d.name] > scores[best.name] ? d : best, allDests[0]);
  await new Promise(r => setTimeout(r, 1200));

  cont.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:1rem;text-align:center;padding:1.5rem">
      <div style="font-size:0.62rem;text-transform:uppercase;letter-spacing:0.12em;color:#C9A84C;font-weight:500">Your perfect match</div>
      <div style="width:100%;max-width:320px;height:200px;border-radius:10px;overflow:hidden">
        <img src="${winner.img}" style="width:100%;height:100%;object-fit:cover;" />
      </div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:600;color:#1A2B3C">${winner.name}</div>
      <div style="font-size:0.75rem;color:#8A9AB0">${winner.country} · ${winner.region}</div>
      <div style="font-size:0.85rem;color:#1A2B3C;line-height:1.6;max-width:300px;font-weight:300">${winner.detail}</div>
      <div style="display:flex;gap:0.5rem;margin-top:0.5rem;width:100%;max-width:320px">
        <button style="flex:1;background:#1A2B3C;color:#fff;border:none;padding:0.75rem;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px" onclick="initQuiz()">Retake quiz</button>
        <button style="flex:1;background:none;color:#1A2B3C;border:1px solid #D8E4F0;padding:0.75rem;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px" onclick="goTo('home')">Home</button>
      </div>
    </div>`;
}