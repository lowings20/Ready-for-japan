import { useState, useEffect } from 'react';

// Door configs matching each room's position in the SVG
const ROOM_DOORS = {
  pantry:       { x: 35,  y: 105, w: 95, h: 90, rx: 8, color: '#c4956a', darkColor: '#c4a878' },
  wardrobe:     { x: 270, y: 105, w: 95, h: 90, rx: 8, color: '#8b6e99', darkColor: '#a088a8' },
  'guest-rooms':{ x: 35,  y: 210, w: 95, h: 90, rx: 8, color: '#b85c4e', darkColor: '#b87868' },
  study:        { x: 152, y: 115, w: 96, h: 85, rx: 8, color: '#6b8e6b', darkColor: '#88a888' },
  'window-seat':{ x: 270, y: 210, w: 95, h: 90, rx: 8, color: '#5a7d9a', darkColor: '#7898b0' },
};

function RoomDoor({ roomId, door, isOpen, isOpening, onHover, isHovered }) {
  if (isOpen && !isOpening) return null;

  const cx = door.x + door.w / 2;
  const cy = door.y + door.h / 2;
  // Unique animation ID per door
  const shimId = `shim-${roomId}`;

  return (
    <g
      className={`room-door ${isOpening ? 'room-door-opening' : ''}`}
      style={{ transformOrigin: `${door.x}px ${cy}px` }}
    >
      {/* Door panel */}
      <rect
        x={door.x} y={door.y} width={door.w} height={door.h} rx={door.rx}
        fill={door.darkColor}
        stroke={isHovered ? door.color : '#8b7355'}
        strokeWidth={isHovered ? 3 : 2}
        className="room-door-panel"
      />
      {/* Wood grain lines */}
      <line x1={door.x + 8} y1={door.y + door.h * 0.25} x2={door.x + door.w - 8} y2={door.y + door.h * 0.25}
        stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <line x1={door.x + 8} y1={door.y + door.h * 0.5} x2={door.x + door.w - 8} y2={door.y + door.h * 0.5}
        stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <line x1={door.x + 8} y1={door.y + door.h * 0.75} x2={door.x + door.w - 8} y2={door.y + door.h * 0.75}
        stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      {/* Round doorknob */}
      <circle cx={door.x + door.w - 16} cy={cy} r={4}
        fill="#d4b060" stroke="#8b6914" strokeWidth="0.8" />
      <circle cx={door.x + door.w - 17} cy={cy - 1} r={1.5}
        fill="#f0d870" opacity="0.6" />
      {/* Keyhole */}
      <ellipse cx={door.x + door.w - 16} cy={cy + 10} rx={1.5} ry={2.5}
        fill="#2a1a0a" opacity="0.6" />
      {/* Shimmer/glow effect */}
      <rect
        x={door.x} y={door.y} width={door.w} height={door.h} rx={door.rx}
        fill={`url(#${shimId})`}
        opacity={isHovered ? 0.35 : 0.15}
        className="room-door-shimmer"
      />
      <defs>
        <linearGradient id={shimId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8e090" stopOpacity="0">
            <animate attributeName="stopOpacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#f8e090" stopOpacity="0.3">
            <animate attributeName="stopOpacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#f8e090" stopOpacity="0">
            <animate attributeName="stopOpacity" values="0;0.4;0" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      {/* Room name on door */}
      <text x={cx} y={cy - 8} textAnchor="middle" className="map-label"
        fill="rgba(255,255,255,0.5)" fontSize="9">
        {roomId === 'guest-rooms' ? 'Guest Rooms' : roomId === 'window-seat' ? 'Window Seat' :
         roomId.charAt(0).toUpperCase() + roomId.slice(1)}
      </text>
      {/* "?" hint */}
      <text x={cx} y={cy + 12} textAnchor="middle"
        fill={door.color} fontSize="16" fontFamily="'Crimson Text', Georgia, serif"
        fontWeight="700" opacity={isHovered ? 1 : 0.5}
        className="door-question-mark">?</text>
    </g>
  );
}

export default function Hallway({ rooms, onSelectRoom, openedRooms, onOpenRoom, viewedCards }) {
  const [hoveredRoom, setHoveredRoom] = useState(null);
  const [openingRoom, setOpeningRoom] = useState(null);

  const roomMap = {};
  rooms.forEach(r => { roomMap[r.id] = r; });

  const handleRoomClick = (roomId) => {
    const room = roomMap[roomId];
    if (!room) return;

    if (openedRooms.has(roomId)) {
      // Already opened — navigate directly
      onSelectRoom(room);
    } else {
      // Play opening animation, then navigate
      setOpeningRoom(roomId);
      onOpenRoom(roomId);
      setTimeout(() => {
        setOpeningRoom(null);
        onSelectRoom(room);
      }, 800);
    }
  };

  const RoomHitArea = ({ roomId, x, y, w, h, rx = 0 }) => (
    <rect
      x={x} y={y} width={w} height={h} rx={rx}
      fill={hoveredRoom === roomId ? 'rgba(255,255,255,0.08)' : 'transparent'}
      stroke="none"
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => setHoveredRoom(roomId)}
      onMouseLeave={() => setHoveredRoom(null)}
      onClick={() => handleRoomClick(roomId)}
    />
  );

  const roomInfo = roomMap[hoveredRoom];
  const openedRoomsList = rooms.filter(r => openedRooms.has(r.id));
  const unopenedCount = rooms.length - openedRoomsList.length;
  const totalCards = rooms.reduce((sum, r) => sum + r.cards.length, 0);
  const viewedCount = viewedCards ? viewedCards.size : 0;
  const delightsLeft = totalCards - viewedCount;

  return (
    <div className="hallway">
      <div className="hallway-header">
        <h2 className="hallway-title">Bag End</h2>
        <p className="hallway-subtitle">Tap a room to discover what's inside</p>
      </div>

      <div className="map-container">
        <svg viewBox="0 0 400 340" className="bag-end-map" role="img" aria-label="Map of Bag End">
          <defs>
            {/* ground texture */}
            <linearGradient id="hill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6a9a58" />
              <stop offset="40%" stopColor="#5a8848" />
              <stop offset="100%" stopColor="#4a7038" />
            </linearGradient>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8d8e8" />
              <stop offset="100%" stopColor="#e8e0d0" />
            </linearGradient>
            <linearGradient id="dirt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b7355" />
              <stop offset="100%" stopColor="#6b5540" />
            </linearGradient>
            <radialGradient id="lamp-glow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#f8e090" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f8e090" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* === SKY === */}
          <rect x="0" y="0" width="400" height="120" fill="url(#sky)" />

          {/* clouds */}
          <ellipse cx="60" cy="35" rx="28" ry="10" fill="white" opacity="0.5" />
          <ellipse cx="45" cy="32" rx="18" ry="8" fill="white" opacity="0.4" />
          <ellipse cx="310" cy="50" rx="32" ry="9" fill="white" opacity="0.4" />
          <ellipse cx="330" cy="47" rx="18" ry="7" fill="white" opacity="0.35" />

          {/* sun */}
          <circle cx="350" cy="30" r="18" fill="#f0d870" opacity="0.4" />
          <circle cx="350" cy="30" r="12" fill="#f8e090" opacity="0.3" />

          {/* === HILL === */}
          <path d="M-10 130 Q80 50 200 70 Q320 50 410 130 L410 345 L-10 345Z" fill="url(#hill)" />

          {/* grass tufts */}
          <path d="M30 118 Q33 108 36 118" stroke="#7aad68" strokeWidth="1.2" fill="none" />
          <path d="M50 110 Q53 100 56 110" stroke="#7aad68" strokeWidth="1.2" fill="none" />
          <path d="M340 115 Q343 105 346 115" stroke="#7aad68" strokeWidth="1.2" fill="none" />
          <path d="M360 120 Q363 112 366 120" stroke="#7aad68" strokeWidth="1.2" fill="none" />
          <path d="M180 78 Q183 68 186 78" stroke="#7aad68" strokeWidth="1.2" fill="none" />
          <path d="M220 76 Q222 67 225 76" stroke="#7aad68" strokeWidth="1.2" fill="none" />
          <path d="M130 90 Q132 82 135 90" stroke="#6a9a55" strokeWidth="1" fill="none" />
          <path d="M270 85 Q273 76 276 85" stroke="#6a9a55" strokeWidth="1" fill="none" />

          {/* flowers */}
          <circle cx="100" cy="95" r="2.5" fill="#e8a0b0" opacity="0.6" />
          <circle cx="300" cy="92" r="2" fill="#e8d080" opacity="0.5" />
          <circle cx="155" cy="84" r="2" fill="#a0c0e0" opacity="0.5" />

          {/* === CHIMNEY === */}
          <rect x="240" y="52" width="12" height="28" fill="#8b7355" stroke="#6b5540" strokeWidth="1" rx="1" />
          <rect x="237" y="50" width="18" height="5" fill="#7a6548" stroke="#6b5540" strokeWidth="0.8" rx="1" />
          {/* smoke */}
          <path d="M246 48 Q250 38 245 28" stroke="#c0b8a8" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round" />
          <path d="M248 45 Q244 32 250 22" stroke="#c0b8a8" strokeWidth="1" fill="none" opacity="0.2" strokeLinecap="round" />

          {/* === CROSS-SECTION CUT (the inside of the hill) === */}
          <path d="M25 130 Q80 75 200 90 Q320 75 375 130 L375 310 L25 310Z" fill="url(#dirt)" opacity="0.6" />

          {/* === ROOM BACKGROUNDS === */}

          {/* PANTRY (top-left) */}
          <rect x="35" y="105" width="95" height="90" rx="8" fill="#f5ead4"
            stroke={hoveredRoom === 'pantry' ? '#c4956a' : '#c4b090'} strokeWidth={hoveredRoom === 'pantry' ? 2.5 : 1.2}
            className="map-room" />

          {/* WARDROBE (top-right) */}
          <rect x="270" y="105" width="95" height="90" rx="8" fill="#f0e8f0"
            stroke={hoveredRoom === 'wardrobe' ? '#8b6e99' : '#c4b090'} strokeWidth={hoveredRoom === 'wardrobe' ? 2.5 : 1.2}
            className="map-room" />

          {/* GUEST ROOMS (bottom-left) */}
          <rect x="35" y="210" width="95" height="90" rx="8" fill="#f5ece0"
            stroke={hoveredRoom === 'guest-rooms' ? '#b85c4e' : '#c4b090'} strokeWidth={hoveredRoom === 'guest-rooms' ? 2.5 : 1.2}
            className="map-room" />

          {/* STUDY (center) */}
          <rect x="152" y="115" width="96" height="85" rx="8" fill="#e8f0e4"
            stroke={hoveredRoom === 'study' ? '#6b8e6b' : '#c4b090'} strokeWidth={hoveredRoom === 'study' ? 2.5 : 1.2}
            className="map-room" />

          {/* WINDOW SEAT (bottom-right) */}
          <rect x="270" y="210" width="95" height="90" rx="8" fill="#e8eef5"
            stroke={hoveredRoom === 'window-seat' ? '#5a7d9a' : '#c4b090'} strokeWidth={hoveredRoom === 'window-seat' ? 2.5 : 1.2}
            className="map-room" />

          {/* === HALLWAY connecting rooms === */}
          <rect x="130" y="138" width="22" height="18" rx="3" fill="#d4c4a8" opacity="0.6" />
          <rect x="248" y="138" width="22" height="18" rx="3" fill="#d4c4a8" opacity="0.6" />
          <rect x="130" y="240" width="22" height="18" rx="3" fill="#d4c4a8" opacity="0.6" />
          <rect x="248" y="240" width="22" height="18" rx="3" fill="#d4c4a8" opacity="0.6" />
          {/* vertical hall */}
          <rect x="185" y="200" width="30" height="55" rx="3" fill="#d4c4a8" opacity="0.5" />
          <rect x="152" y="200" width="96" height="10" rx="3" fill="#d4c4a8" opacity="0.4" />

          {/* === ROUND FRONT DOOR === */}
          <circle cx="200" cy="295" r="18" fill="#4a7c59" stroke="#3a6147" strokeWidth="2" />
          <circle cx="200" cy="295" r="14" fill="#4a7c59" stroke="#5a8a65" strokeWidth="0.5" />
          <circle cx="207" cy="295" r="2.5" fill="#d4b060" />
          {/* door arch */}
          <path d="M186 295 Q186 282 200 279 Q214 282 214 295" fill="none" stroke="#5a8a65" strokeWidth="0.8" />
          {/* path from door */}
          <path d="M190 313 Q195 320 192 340" stroke="#b0a080" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M210 313 Q205 320 208 340" stroke="#b0a080" strokeWidth="2" fill="none" opacity="0.4" />

          {/* === ROOM DETAILS === */}

          {/* PANTRY interior details */}
          {/* shelves */}
          <line x1="42" y1="120" x2="78" y2="120" stroke="#c4a880" strokeWidth="1.2" />
          <line x1="42" y1="132" x2="78" y2="132" stroke="#c4a880" strokeWidth="1.2" />
          {/* jars on shelves */}
          <rect x="46" y="114" width="6" height="6" rx="1" fill="#e8c060" opacity="0.6" />
          <rect x="55" y="115" width="5" height="5" rx="1" fill="#d08060" opacity="0.6" />
          <rect x="64" y="113" width="7" height="7" rx="1" fill="#a0c080" opacity="0.5" />
          <rect x="46" y="126" width="6" height="6" rx="1" fill="#e0a0a0" opacity="0.5" />
          <rect x="56" y="127" width="5" height="5" rx="1" fill="#c0a060" opacity="0.5" />
          {/* table */}
          <rect x="55" y="162" width="30" height="3" rx="1" fill="#a08060" />
          <line x1="60" y1="165" x2="60" y2="180" stroke="#a08060" strokeWidth="1.5" />
          <line x1="80" y1="165" x2="80" y2="180" stroke="#a08060" strokeWidth="1.5" />
          {/* food on table */}
          <circle cx="67" cy="160" r="3.5" fill="#e8c060" opacity="0.5" />
          <circle cx="76" cy="160" r="3" fill="#d08888" opacity="0.5" />
          {/* rice ball */}
          <path d="M95 150 L100 140 L105 150Z" fill="white" stroke="#c0b8a0" strokeWidth="0.6" opacity="0.5" />
          {/* warm glow */}
          <circle cx="82" cy="145" r="22" fill="url(#lamp-glow)" />
          {/* room label */}
          <text x="82" y="188" textAnchor="middle" className="map-label" fill="#8b7355">Pantry</text>

          {/* WARDROBE interior details */}
          {/* coat hooks on wall */}
          <line x1="280" y1="112" x2="280" y2="118" stroke="#a08060" strokeWidth="1" />
          <line x1="295" y1="112" x2="295" y2="118" stroke="#a08060" strokeWidth="1" />
          <line x1="310" y1="112" x2="310" y2="118" stroke="#a08060" strokeWidth="1" />
          {/* hanging clothes */}
          <path d="M276 118 Q280 115 284 118 L283 145 L277 145Z" fill="#4a6a98" opacity="0.5" />
          <path d="M291 118 Q295 115 299 118 L298 140 L292 140Z" fill="#c4506a" opacity="0.4" />
          <path d="M306 118 Q310 115 314 118 L313 142 L307 142Z" fill="#6a8a58" opacity="0.4" />
          {/* hat */}
          <ellipse cx="340" cy="130" rx="10" ry="4" fill="#8b6e4a" opacity="0.4" />
          <ellipse cx="340" cy="128" rx="6" ry="3" fill="#a08060" opacity="0.5" />
          {/* mirror */}
          <ellipse cx="345" cy="155" rx="8" ry="12" fill="#c8d8e0" opacity="0.3" stroke="#a08060" strokeWidth="0.8" />
          {/* umbrella/kasa */}
          <line x1="350" y1="165" x2="353" y2="185" stroke="#a03030" strokeWidth="1.5" />
          {/* warm glow */}
          <circle cx="318" cy="148" r="20" fill="url(#lamp-glow)" />
          {/* room label */}
          <text x="318" y="188" textAnchor="middle" className="map-label" fill="#6b5580">Wardrobe</text>

          {/* STUDY interior details */}
          {/* desk */}
          <rect x="168" y="162" width="32" height="4" rx="1" fill="#8b6e4a" />
          <line x1="172" y1="166" x2="172" y2="180" stroke="#8b6e4a" strokeWidth="1.5" />
          <line x1="196" y1="166" x2="196" y2="180" stroke="#8b6e4a" strokeWidth="1.5" />
          {/* books on desk */}
          <rect x="171" y="157" width="4" height="6" rx="0.5" fill="#c85050" opacity="0.5" />
          <rect x="176" y="158" width="4" height="5" rx="0.5" fill="#4a6a98" opacity="0.5" />
          <rect x="181" y="157" width="3" height="6" rx="0.5" fill="#6a8a58" opacity="0.5" />
          {/* candle */}
          <rect x="192" y="154" width="3" height="8" rx="0.5" fill="#f0e8d0" stroke="#d4c4a8" strokeWidth="0.3" />
          <ellipse cx="193.5" cy="152" rx="2" ry="3" fill="#f0a830" opacity="0.6" />
          {/* candle glow */}
          <circle cx="193" cy="153" r="12" fill="url(#lamp-glow)" />
          {/* scroll on wall */}
          <rect x="210" y="122" width="12" height="20" rx="1" fill="#f0e8d0" opacity="0.4" stroke="#c4b090" strokeWidth="0.5" />
          <line x1="213" y1="127" x2="219" y2="127" stroke="#c4b090" strokeWidth="0.4" />
          <line x1="213" y1="130" x2="219" y2="130" stroke="#c4b090" strokeWidth="0.4" />
          <line x1="213" y1="133" x2="218" y2="133" stroke="#c4b090" strokeWidth="0.4" />
          {/* ink pot */}
          <circle cx="188" cy="160" r="2.5" fill="#2a2028" opacity="0.5" />
          {/* quill */}
          <line x1="188" y1="158" x2="184" y2="148" stroke="#a08060" strokeWidth="0.8" />
          {/* bookshelf on wall */}
          <line x1="160" y1="128" x2="180" y2="128" stroke="#a08060" strokeWidth="1" />
          <line x1="160" y1="138" x2="180" y2="138" stroke="#a08060" strokeWidth="1" />
          <rect x="162" y="122" width="4" height="6" rx="0.5" fill="#c08050" opacity="0.4" />
          <rect x="167" y="123" width="3" height="5" rx="0.5" fill="#5070a0" opacity="0.4" />
          <rect x="171" y="122" width="4" height="6" rx="0.5" fill="#80a060" opacity="0.4" />
          <rect x="162" y="132" width="5" height="6" rx="0.5" fill="#a06050" opacity="0.4" />
          <rect x="168" y="133" width="4" height="5" rx="0.5" fill="#d0a040" opacity="0.4" />
          {/* room label */}
          <text x="200" y="193" textAnchor="middle" className="map-label" fill="#4a6a4a">Study</text>

          {/* GUEST ROOMS interior details */}
          {/* bed */}
          <rect x="50" y="245" width="35" height="18" rx="4" fill="#e8d8c0" stroke="#c4b898" strokeWidth="0.8" />
          <rect x="50" y="245" width="35" height="6" rx="3" fill="#d4c4a8" />
          {/* pillow */}
          <ellipse cx="56" cy="248" rx="6" ry="3.5" fill="#f0e8d8" stroke="#d4c8b0" strokeWidth="0.5" />
          {/* second bed / futon */}
          <rect x="50" y="270" width="30" height="14" rx="3" fill="#c8b890" opacity="0.5" stroke="#b0a078" strokeWidth="0.5" />
          {/* lantern */}
          <ellipse cx="105" cy="238" rx="5" ry="7" fill="#d04040" opacity="0.5" stroke="#a03030" strokeWidth="0.5" />
          <line x1="105" y1="231" x2="105" y2="228" stroke="#a08060" strokeWidth="0.5" />
          {/* small door */}
          <rect x="95" y="260" width="14" height="22" rx="7" fill="#a08060" opacity="0.4" stroke="#806040" strokeWidth="0.5" />
          <circle cx="106" cy="272" r="1.2" fill="#d4b060" />
          {/* tatami hint */}
          <line x1="45" y1="265" x2="120" y2="265" stroke="#b8a878" strokeWidth="0.3" opacity="0.4" />
          {/* warm glow */}
          <circle cx="105" cy="240" r="16" fill="url(#lamp-glow)" />
          {/* room label */}
          <text x="82" y="295" textAnchor="middle" className="map-label" fill="#8b4a40">Guest Rooms</text>

          {/* WINDOW SEAT interior details */}
          {/* window */}
          <rect x="300" y="218" width="28" height="22" rx="3" fill="#c8d8e8" stroke="#a08060" strokeWidth="1.2" />
          <line x1="314" y1="218" x2="314" y2="240" stroke="#a08060" strokeWidth="0.6" />
          <line x1="300" y1="229" x2="328" y2="229" stroke="#a08060" strokeWidth="0.6" />
          {/* mountain visible through window */}
          <path d="M304 235 L310 222 L316 232 L322 220 L326 235" fill="#7090a0" opacity="0.3" />
          <path d="M311 225 L310 222 L313 226" fill="white" opacity="0.3" />
          {/* window seat cushion */}
          <rect x="296" y="240" width="36" height="10" rx="3" fill="#b0a8c8" opacity="0.4" stroke="#9088a8" strokeWidth="0.5" />
          {/* curtains */}
          <path d="M296 218 Q293 225 296 232" stroke="#c4506a" strokeWidth="1.5" fill="none" opacity="0.3" />
          <path d="M332 218 Q335 225 332 232" stroke="#c4506a" strokeWidth="1.5" fill="none" opacity="0.3" />
          {/* book on seat */}
          <rect x="305" y="242" width="8" height="5" rx="0.5" fill="#c08050" opacity="0.4" />
          {/* tea cup */}
          <circle cx="350" cy="265" r="5" fill="#f0e8d8" opacity="0.4" stroke="#a08060" strokeWidth="0.5" />
          <circle cx="350" cy="265" r="3" fill="#5a8a4a" opacity="0.3" />
          {/* telescope / looking glass */}
          <line x1="340" y1="280" x2="355" y2="270" stroke="#a08060" strokeWidth="1.5" />
          <circle cx="357" cy="268" r="3" fill="none" stroke="#a08060" strokeWidth="0.8" />
          {/* warm glow */}
          <circle cx="314" cy="230" r="18" fill="url(#lamp-glow)" />
          {/* room label */}
          <text x="318" y="295" textAnchor="middle" className="map-label" fill="#3a5a78">Window Seat</text>

          {/* === RUGS in hallways === */}
          <ellipse cx="200" cy="230" rx="12" ry="6" fill="#c85050" opacity="0.15" />
          <ellipse cx="200" cy="268" rx="10" ry="5" fill="#4a6a98" opacity="0.1" />

          {/* === DOOR OVERLAYS (cover unopened rooms) === */}
          {Object.entries(ROOM_DOORS).map(([id, door]) => (
            <RoomDoor
              key={id}
              roomId={id}
              door={door}
              isOpen={openedRooms.has(id)}
              isOpening={openingRoom === id}
              onHover={setHoveredRoom}
              isHovered={hoveredRoom === id}
            />
          ))}

          {/* === CLICKABLE HIT AREAS (on top of everything) === */}
          <RoomHitArea roomId="pantry" x="35" y="105" w="95" h="90" rx="8" />
          <RoomHitArea roomId="wardrobe" x="270" y="105" w="95" h="90" rx="8" />
          <RoomHitArea roomId="guest-rooms" x="35" y="210" w="95" h="90" rx="8" />
          <RoomHitArea roomId="study" x="152" y="115" w="96" h="85" rx="8" />
          <RoomHitArea roomId="window-seat" x="270" y="210" w="95" h="90" rx="8" />
        </svg>

        {/* Tooltip */}
        {roomInfo && (
          <div className="map-tooltip" style={{ '--room-color': roomInfo.color }}>
            <span className="map-tooltip-emoji">{roomInfo.emoji}</span>
            <span className="map-tooltip-name">{roomInfo.name}</span>
            {openedRooms.has(hoveredRoom) ? (
              <span className="map-tooltip-count">{roomInfo.cards.length}</span>
            ) : (
              <span className="map-tooltip-count">???</span>
            )}
          </div>
        )}
      </div>

      {/* Progress indicator */}
      <div className="room-progress">
        <div className="room-progress-bar">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`room-progress-pip ${openedRooms.has(room.id) ? 'pip-opened' : 'pip-closed'}`}
              style={{ '--room-color': room.color }}
              title={openedRooms.has(room.id) ? room.name : '???'}
            />
          ))}
        </div>
        <p className="room-progress-text">
          {unopenedCount === 0
            ? 'All rooms discovered!'
            : `${unopenedCount} room${unopenedCount > 1 ? 's' : ''} still hidden`}
        </p>
        {delightsLeft > 0 && (
          <p className="room-progress-delights">{delightsLeft} delight{delightsLeft !== 1 ? 's' : ''} still to find</p>
        )}
        {delightsLeft === 0 && (
          <p className="room-progress-delights">All delights discovered!</p>
        )}
      </div>

      {/* Room list — only opened rooms */}
      {openedRoomsList.length > 0 && (
        <div className="map-room-list">
          {openedRoomsList.map((room, i) => {
            const roomDelightsLeft = room.cards.filter(
              c => !viewedCards || !viewedCards.has(`${room.id}:${c.title}`)
            ).length;
            return (
              <button
                key={room.id}
                className="map-room-btn"
                onClick={() => onSelectRoom(room)}
                style={{ '--room-color': room.color, animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <span className="map-room-btn-emoji">{room.emoji}</span>
                <div className="map-room-btn-info">
                  <span className="map-room-btn-name">{room.name}</span>
                  <span className="map-room-btn-sign">"{room.sign}"</span>
                </div>
                <span className="map-room-btn-count">
                  {roomDelightsLeft > 0 ? roomDelightsLeft : '&#10003;'}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
