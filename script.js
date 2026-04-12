const destinations = {
  Beach: [
    { name: "Tulum", country: "Mexico", region: "CARIBBEAN", detail: "Clifftop ruins, turquoise cenotes, boho beach clubs", img: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=600&q=80" },
    { name: "Santorini", country: "Greece", region: "EUROPE", detail: "White-washed cliffs, sunset views, volcanic beaches", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80" },
    { name: "Bali", country: "Indonesia", region: "ASIA", detail: "Rice terraces, temple ceremonies, surf breaks", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80" },
    { name: "Maldives", country: "Maldives", region: "INDIAN OCEAN", detail: "Overwater bungalows, coral reefs, crystal lagoons", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80" },
    { name: "Amalfi Coast", country: "Italy", region: "EUROPE", detail: "Pastel villages, lemon groves, azure sea", img: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=80" },
  ],
  City: [
    { name: "Tokyo", country: "Japan", region: "ASIA", detail: "Neon nights, ancient shrines, world-class ramen", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80" },
    { name: "Paris", country: "France", region: "EUROPE", detail: "Art museums, Seine walks, perfect croissants", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80" },
    { name: "New York", country: "USA", region: "AMERICAS", detail: "Skyline views, Central Park, endless energy", img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&q=80" },
    { name: "Barcelona", country: "Spain", region: "EUROPE", detail: "Gaudí architecture, tapas bars, beach city life", img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80" },
    { name: "Istanbul", country: "Turkey", region: "EURASIA", detail: "Bazaars, mosques, Bosphorus sunsets", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80" },
  ],
  Nature: [
    { name: "Patagonia", country: "Argentina/Chile", region: "S. AMERICA", detail: "Glaciers, condors, endless hiking trails", img: "https://images.unsplash.com/photo-1584782494342-19b561a6340d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGF0YWdvbmlhJTIwYXJnZW50aW5hfGVufDB8fDB8fHww" },
    { name: "Iceland", country: "Iceland", region: "NORDIC", detail: "Northern lights, geysers, black sand beaches", img: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&q=80" },
    { name: "Queenstown", country: "New Zealand", region: "PACIFIC", detail: "Fjords, bungee jumping, Lord of the Rings scenery", img: "https://images.unsplash.com/photo-1565690482729-9290df702689?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHF1ZWVuc3Rvd258ZW58MHx8MHx8fDA%3D" },
    { name: "Costa Rica", country: "Costa Rica", region: "C. AMERICA", detail: "Cloud forests, sloths, volcano hot springs", img: "https://images.unsplash.com/photo-1586640866012-8273df34e593?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29zdGElMjByaWNhfGVufDB8fDB8fHww" },
    { name: "Norway", country: "Norway", region: "NORDIC", detail: "Fjords, midnight sun, Viking heritage", img: "https://images.unsplash.com/photo-1520769945061-0a448c463865?w=600&q=80" },
  ],
  Cultural: [
    { name: "Kyoto", country: "Japan", region: "ASIA", detail: "Geisha districts, bamboo groves, tea ceremonies", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80" },
    { name: "Rome", country: "Italy", region: "EUROPE", detail: "Colosseum, cobblestone piazzas, Vatican art", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80" },
    { name: "Marrakech", country: "Morocco", region: "AFRICA", detail: "Souks, riads, the call to prayer at dusk", img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80" },
    { name: "Petra", country: "Jordan", region: "MIDDLE EAST", detail: "Rose-red city carved in rock, ancient Nabataean trails", img: "https://images.unsplash.com/photo-1615811648503-479d06197ff3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0cmElMkMlMjBqb3JkYW58ZW58MHx8MHx8fDA%3D" },
    { name: "Havana", country: "Cuba", region: "CARIBBEAN", detail: "Classic cars, salsa nights, crumbling grandeur", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioNZJsvyirAyMvCW541KGj_zpyHPsBnzPtA&s" },
  ],
  Luxury: [
    { name: "Amalfi Coast", country: "Italy", region: "EUROPE", detail: "Private yachts, cliff-side villas, fresh seafood", img: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=80" },
    { name: "St. Barts", country: "France", region: "CARIBBEAN", detail: "Celebrity hideaway, pristine beaches, French dining", img: "https://images.unsplash.com/photo-1551213365-54cb536fb765?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3QlMjBiYXJ0aHN8ZW58MHx8MHx8fDA%3D0" },
    { name: "Dubai", country: "UAE", region: "MIDDLE EAST", detail: "Sky-high hotels, desert safaris, gold everything", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" },
    { name: "Tuscany", country: "Italy", region: "EUROPE", detail: "Wine estates, hilltop villas, truffle hunts", img: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&q=80" },
    { name: "Bora Bora", country: "French Polynesia", region: "PACIFIC", detail: "Overwater bungalows, lagoon snorkeling, Mt. Otemanu", img: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=600&q=80" },
  ],
  Adventure: [
    { name: "Nepal", country: "Nepal", region: "ASIA", detail: "Everest base camp, monasteries, yak butter tea", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80" },
    { name: "Patagonia", country: "Chile", region: "S. AMERICA", detail: "Multi-day treks, condors, raw wilderness", img: "https://images.unsplash.com/photo-1715273157640-b0c2a2bec178?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF0YWdvbmlhJTIwY2hpbGV8ZW58MHx8MHx8fDA%3D" },
    { name: "Peru", country: "Peru", region: "S. AMERICA", detail: "Machu Picchu, Inca trails, Amazon basin", img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80" },
    { name: "Tanzania", country: "Tanzania", region: "AFRICA", detail: "Serengeti safari, Kilimanjaro, Zanzibar escape", img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80" },
    { name: "Vietnam", country: "Vietnam", region: "ASIA", detail: "Ha Long Bay kayaking, motorbike routes, street food", img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80" },
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
  card.classList.add(dir === 'left' ? 'exit-left' : 'exit-right');
  setTimeout(() => { currentSwipeIndex++; renderSwipe(); }, 320);
}

function renderSwipe() {
  const arena = document.getElementById('swipe-arena');
  arena.innerHTML = '';
  const prog = document.getElementById('swipe-progress');

  if (currentSwipeIndex >= swipeStack.length) {
  prog.textContent = '';

  // Hide the swipe buttons
  document.querySelector('.swipe-actions').style.display = 'none';

  if (likedDestinations.length === 0) {
    arena.innerHTML = `
      <div style="text-align:center;padding:2rem">
        <div style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;margin-bottom:0.5rem;color:var(--navy)">No matches!</div>
        <div style="color:var(--slate);font-size:0.85rem;margin-bottom:1.5rem">You didn't like any destinations.</div>
        <button style="background:var(--navy);color:#fff;border:none;padding:0.75rem 1.5rem;font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px" onclick="initSwipe()">Try again</button>
      </div>`;
    return;
  }

  const cards = likedDestinations.map(d => `
    <div style="background:var(--white);border:1px solid var(--border);border-radius:10px;overflow:hidden;margin-bottom:0.75rem;width:min(300px,88vw);flex-shrink:0;">
      <img src="${d.img}" style="width:100%;height:260px;object-fit:cover;display:block;" />
      <div style="padding:1rem 1.1rem 1.1rem;border-top:1px solid var(--border);background:var(--white);">
        <div style="font-family:'Cormorant Garamond',serif;font-size:1.15rem;font-weight:600;margin-bottom:3px;color:#1A2B3C;">${d.name}, ${d.country}</div>
        <div style="font-size:0.72rem;color:#8A9AB0;font-weight:300;">${d.detail}</div>
      </div>
    </div>`).join('');

  arena.innerHTML = `
    <div style="width:100%;max-height:500px;overflow-y:auto;display:flex;flex-direction:column;align-items:center;padding:0.25rem">
      <div style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:600;color:var(--navy);margin-bottom:0.75rem;text-align:center">
        ♥ ${likedDestinations.length} place${likedDestinations.length > 1 ? 's' : ''} you loved
      </div>
      ${cards}
      <div style="display:flex;gap:0.5rem;margin-top:0.5rem;width:min(300px,88vw)">
        <button style="flex:1;background:var(--navy);color:#fff;border:none;padding:0.75rem;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px" onclick="initSwipe()">Swipe again</button>
        <button style="flex:1;background:none;color:var(--navy);border:1px solid var(--border);padding:0.75rem;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px" onclick="goTo('home')">Home</button>
      </div>
    </div>`;
  return;
}

  prog.textContent = `${currentSwipeIndex + 1} / ${swipeStack.length}`;

  for (let i = Math.min(currentSwipeIndex + 2, swipeStack.length - 1); i >= currentSwipeIndex; i--) {
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
  document.querySelector('.swipe-actions').style.display = 'flex'; // show buttons again
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
      <div style="width:100%;max-width:280px;border-radius:10px;overflow:hidden;border:1px solid var(--border);background:var(--white);">
        <img src="${dest.img}" style="width:100%;height:160px;object-fit:cover;display:block;" />
        <div style="padding:0.9rem 1rem 1rem;">
          <div style="font-size:0.6rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--gold);font-weight:500;margin-bottom:4px">Your destination</div>
          <div style="font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:600;color:var(--navy)">${dest.name}</div>
          <div style="font-size:0.72rem;color:var(--slate);margin-top:2px">${dest.country} · ${dest.region}</div>
          <div style="font-size:0.72rem;color:var(--slate);font-weight:300;margin-top:4px">${dest.detail}</div>
        </div>
      </div>
      <button onclick="initSpin()" style="background:var(--navy);color:#fff;border:none;padding:0.75rem 1.5rem;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px;margin-top:0.5rem;">Spin again</button>`;
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
  const aImg = `<img src="${a.img}" style="width:100%;height:160px;object-fit:cover;display:block;" />`;
  const bImg = `<img src="${b.img}" style="width:100%;height:160px;object-fit:cover;display:block;" />`;
  cont.innerHTML = `
    <div class="bracket-round">${label} · Which would you choose?</div>
    <div class="bracket-vs">
      <div class="bracket-card" id="bc-a" onclick="pickBracket(0)">
        <div class="bracket-card-img">${aImg}</div>
        <div class="bracket-card-foot"><div class="bracket-card-name">${a.name}</div></div>
      </div>
      <div class="vs-divider">vs</div>
      <div class="bracket-card" id="bc-b" onclick="pickBracket(1)">
        <div class="bracket-card-img">${bImg}</div>
        <div class="bracket-card-foot"><div class="bracket-card-name">${b.name}</div></div>
      </div>
    </div>
    <div class="bracket-progress"><div class="bracket-bar" style="width:${prog}%"></div></div>
    <div class="bracket-sub">${a.name}: ${a.detail}</div>`;
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
      <div style="font-size:0.62rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--gold);font-weight:500">Your next destination</div>
      <div style="width:200px;height:200px;border-radius:8px;overflow:hidden;">
        <img src="${d.img}" style="width:100%;height:100%;object-fit:cover;" />
      </div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;color:var(--navy)">${d.name}</div>
      <div style="font-size:0.75rem;color:var(--slate)">${d.country} · ${d.detail}</div>
      <button style="margin-top:0.5rem;background:var(--navy);color:#fff;border:none;padding:0.75rem 1.5rem;font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px" onclick="initBracket()">Play again</button>
    </div>`;
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────

const quizQuestions = [
  {
    question: "What's your ideal climate?",
    options: ["Warm & sunny", "Cool & crisp", "Tropical & humid", "Mild & comfortable"]
  },
  {
    question: "What's your travel style?",
    options: ["Relax and do nothing", "Explore culture & history", "Adventure & outdoors", "Food, nightlife & city life"]
  },
  {
    question: "How do you feel about crowds?",
    options: ["Hidden gems only", "A little buzz is fine", "I love a lively scene", "Anywhere is fine"]
  },
  {
    question: "What's your budget?",
    options: ["Budget friendly", "Mid range", "Splurge worthy", "Money is no object"]
  }
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

  if (quizStep >= quizQuestions.length) {
    submitQuiz();
    return;
  }

  const q = quizQuestions[quizStep];
  const progress = ((quizStep / quizQuestions.length) * 100);

  cont.innerHTML = `
    <div style="padding:1.5rem;display:flex;flex-direction:column;gap:1.25rem;flex:1">
      <div style="background:var(--border);border-radius:10px;height:3px;overflow:hidden">
        <div style="width:${progress}%;height:100%;background:var(--gold);border-radius:10px;transition:width 0.3s"></div>
      </div>
      <div style="font-size:0.62rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--gold);font-weight:500">
        Question ${quizStep + 1} of ${quizQuestions.length}
      </div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;color:var(--navy);line-height:1.2">
        ${q.question}
      </div>
      <div style="display:flex;flex-direction:column;gap:0.75rem;margin-top:0.5rem">
        ${q.options.map((opt, i) => `
          <button onclick="selectQuizAnswer('${opt}')"
            style="background:var(--white);border:1.5px solid var(--border);border-radius:8px;padding:1rem 1.25rem;text-align:left;font-family:'Inter',sans-serif;font-size:0.88rem;color:var(--navy);cursor:pointer;transition:all 0.15s;font-weight:400"
            onmouseover="this.style.borderColor='var(--gold)';this.style.background='var(--gold-pale)'"
            onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--white)'">
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
      <div style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:var(--navy)">Finding your perfect destination...</div>
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
      <div style="font-size:0.62rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--gold);font-weight:500">Your perfect match</div>
      <div style="width:100%;max-width:320px;height:200px;border-radius:10px;overflow:hidden">
        <img src="${winner.img}" style="width:100%;height:100%;object-fit:cover;" />
      </div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:600;color:var(--navy)">${winner.name}</div>
      <div style="font-size:0.75rem;color:var(--slate)">${winner.country} · ${winner.region}</div>
      <div style="font-size:0.85rem;color:var(--navy);line-height:1.6;max-width:300px;font-weight:300">${winner.detail}</div>
      <div style="display:flex;gap:0.5rem;margin-top:0.5rem;width:100%;max-width:320px">
        <button style="flex:1;background:var(--navy);color:#fff;border:none;padding:0.75rem;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px" onclick="initQuiz()">Retake quiz</button>
        <button style="flex:1;background:none;color:var(--navy);border:1px solid var(--border);padding:0.75rem;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:3px" onclick="goTo('home')">Home</button>
      </div>
    </div>`;
}