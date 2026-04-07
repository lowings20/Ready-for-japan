// Hand-drawn Ghibli-inspired SVG illustrations for each card
// Soft watercolor washes + organic ink lines

const illustrations = {
  // ===== THE PANTRY =====
  'Taiyaki': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      <defs>
        <radialGradient id="taiyaki-bg" cx="50%" cy="60%"><stop offset="0%" stopColor="#fef3c7"/><stop offset="100%" stopColor="#fde68a" stopOpacity="0.3"/></radialGradient>
      </defs>
      <ellipse cx="100" cy="90" rx="70" ry="40" fill="url(#taiyaki-bg)"/>
      {/* fish body */}
      <path d="M55 80 Q70 55 110 60 Q140 63 150 80 Q140 97 110 100 Q70 105 55 80Z" fill="#e8a849" stroke="#a0702a" strokeWidth="1.5" strokeLinecap="round"/>
      {/* tail */}
      <path d="M150 80 Q165 65 170 55 Q158 72 165 80 Q158 88 170 105 Q165 95 150 80Z" fill="#d4933c" stroke="#a0702a" strokeWidth="1.2"/>
      {/* eye */}
      <circle cx="78" cy="78" r="4" fill="#5c3a1a"/>
      <circle cx="77" cy="77" r="1.5" fill="#fff"/>
      {/* crosshatch */}
      <path d="M85 68 Q100 62 120 68" stroke="#c48830" strokeWidth="0.8" fill="none"/>
      <path d="M82 76 Q100 70 125 76" stroke="#c48830" strokeWidth="0.8" fill="none"/>
      <path d="M82 84 Q100 78 125 84" stroke="#c48830" strokeWidth="0.8" fill="none"/>
      <path d="M85 92 Q100 86 120 92" stroke="#c48830" strokeWidth="0.8" fill="none"/>
      {/* steam wisps */}
      <path d="M90 50 Q87 40 92 30" stroke="#d4b97a" strokeWidth="1" fill="none" opacity="0.5" strokeLinecap="round"/>
      <path d="M105 48 Q102 36 107 26" stroke="#d4b97a" strokeWidth="1" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M118 52 Q116 42 120 32" stroke="#d4b97a" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round"/>
    </svg>
  ),

  'Onigiri': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      <defs>
        <radialGradient id="oni-bg" cx="50%" cy="50%"><stop offset="0%" stopColor="#f5f5f0"/><stop offset="100%" stopColor="#e8e4d8" stopOpacity="0.3"/></radialGradient>
      </defs>
      {/* three rice triangles */}
      <path d="M50 110 L70 55 L90 110Z" fill="white" stroke="#8b8070" strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="55" y="85" width="30" height="25" rx="2" fill="#2d4a2d" opacity="0.85"/>
      <circle cx="70" cy="72" r="4" fill="#d4564a" opacity="0.7"/>

      <path d="M80 110 L100 50 L120 110Z" fill="white" stroke="#8b8070" strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="85" y="85" width="30" height="25" rx="2" fill="#2d4a2d" opacity="0.85"/>
      <circle cx="100" cy="68" r="4" fill="#e89040" opacity="0.7"/>

      <path d="M110 110 L130 55 L150 110Z" fill="white" stroke="#8b8070" strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="115" y="85" width="30" height="25" rx="2" fill="#2d4a2d" opacity="0.85"/>
      <circle cx="130" cy="72" r="4" fill="#d4944a" opacity="0.7"/>

      {/* grain dots */}
      {[65,72,95,105,128,135].map((x,i) => <circle key={i} cx={x} cy={78+i*2} r="0.7" fill="#d4cbb8" opacity="0.5"/>)}
    </svg>
  ),

  'Matcha': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      <defs>
        <radialGradient id="matcha-glow" cx="50%" cy="50%"><stop offset="0%" stopColor="#d4e8c4"/><stop offset="100%" stopColor="#e8f0e0" stopOpacity="0.2"/></radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="75" ry="30" fill="url(#matcha-glow)"/>
      {/* bowl */}
      <ellipse cx="100" cy="95" rx="45" ry="14" fill="#6b9e5e"/>
      <path d="M55 90 Q55 120 100 125 Q145 120 145 90" fill="#8b6e4a" stroke="#6b5030" strokeWidth="1.5"/>
      <ellipse cx="100" cy="90" rx="45" ry="14" fill="#5a8a4a" stroke="#4a7040" strokeWidth="1"/>
      {/* froth */}
      <ellipse cx="100" cy="88" rx="38" ry="10" fill="#a8d48a" opacity="0.6"/>
      <ellipse cx="95" cy="86" rx="8" ry="3" fill="#c4e8a8" opacity="0.5"/>
      {/* wagashi beside */}
      <ellipse cx="160" cy="108" rx="16" ry="12" fill="#f0a0b0" stroke="#d08090" strokeWidth="1"/>
      <path d="M152 104 Q160 98 168 104" stroke="#d08090" strokeWidth="0.8" fill="none"/>
      {/* steam */}
      <path d="M90 72 Q85 58 92 48" stroke="#a8d48a" strokeWidth="1" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M108 70 Q112 56 106 46" stroke="#a8d48a" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round"/>
    </svg>
  ),

  'Takoyaki': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* boat container */}
      <path d="M40 110 L50 70 L150 70 L160 110Z" fill="#c4a060" stroke="#a08040" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* balls */}
      {[[70,82],[100,82],[130,82],[85,98],[115,98]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="14" fill="#d4a040" stroke="#b08030" strokeWidth="1"/>
          <circle cx={cx} cy={cy} r="14" fill="#c49030" opacity="0.3"/>
          <ellipse cx={cx-3} cy={cy-3} rx="4" ry="3" fill="#e0b850" opacity="0.5"/>
        </g>
      ))}
      {/* sauce drizzle */}
      <path d="M65 78 Q80 72 95 80 Q110 72 125 78 Q135 82 140 78" stroke="#6b3020" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round"/>
      {/* dancing bonito flakes */}
      {[[75,70],[95,68],[115,72],[105,66],[85,74]].map(([x,y],i) => (
        <path key={i} d={`M${x} ${y} Q${x+3} ${y-6} ${x+7} ${y-3}`} stroke="#c49888" strokeWidth="1.2" fill="none" opacity={0.5+i*0.1}>
          <animateTransform attributeName="transform" type="rotate" values={`0 ${x+3} ${y};10 ${x+3} ${y};-5 ${x+3} ${y};0 ${x+3} ${y}`} dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/>
        </path>
      ))}
    </svg>
  ),

  'Melon Pan': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      <defs>
        <radialGradient id="melon-glow" cx="40%" cy="40%"><stop offset="0%" stopColor="#f0d888"/><stop offset="100%" stopColor="#d4a840"/></radialGradient>
      </defs>
      {/* bread */}
      <ellipse cx="100" cy="90" rx="50" ry="40" fill="url(#melon-glow)" stroke="#b08830" strokeWidth="1.5"/>
      {/* cookie crust crosshatch */}
      {[-30,-15,0,15,30].map((offset,i) => (
        <path key={`h${i}`} d={`M${60+i*5} ${65+Math.abs(offset)} Q100 ${55+Math.abs(offset)*0.5} ${140-i*5} ${65+Math.abs(offset)}`} stroke="#c49830" strokeWidth="0.8" fill="none" opacity="0.5"/>
      ))}
      {[-20,-5,10,25].map((offset,i) => (
        <path key={`v${i}`} d={`M${75+i*15} 55 Q${78+i*15} 90 ${75+i*15} 125`} stroke="#c49830" strokeWidth="0.8" fill="none" opacity="0.5"/>
      ))}
      {/* bite taken */}
      <circle cx="140" cy="70" r="18" fill="#f5f0e8"/>
      <path d="M128 58 Q140 52 152 60 Q148 70 138 78 Q130 72 128 58Z" fill="#f0e0b8" stroke="#c49830" strokeWidth="0.8"/>
      {/* crumbs */}
      <circle cx="152" cy="62" r="2" fill="#d4a840" opacity="0.5"/>
      <circle cx="148" cy="55" r="1.5" fill="#d4a840" opacity="0.4"/>
    </svg>
  ),

  'Ramen': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* bowl */}
      <path d="M35 85 Q35 130 100 140 Q165 130 165 85" fill="#e8e0d0" stroke="#a09080" strokeWidth="1.5"/>
      <ellipse cx="100" cy="85" rx="65" ry="20" fill="#f0e8d8" stroke="#a09080" strokeWidth="1.5"/>
      {/* broth */}
      <ellipse cx="100" cy="83" rx="58" ry="16" fill="#e8c878"/>
      {/* noodles */}
      <path d="M65 85 Q75 78 85 88 Q95 78 105 88 Q115 78 125 88 Q135 78 140 85" stroke="#e8d898" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* egg */}
      <ellipse cx="75" cy="78" rx="12" ry="8" fill="white" stroke="#d0c8b8" strokeWidth="0.8"/>
      <circle cx="75" cy="78" r="5" fill="#e8a020"/>
      {/* chashu */}
      <ellipse cx="120" cy="76" rx="14" ry="8" fill="#c08060" stroke="#a06040" strokeWidth="0.8"/>
      <path d="M110 76 Q115 73 120 76 Q125 73 130 76" stroke="#8b5040" strokeWidth="0.5" fill="none"/>
      {/* nori */}
      <rect x="92" y="68" width="8" height="18" rx="1" fill="#2d4a2d" opacity="0.8"/>
      {/* green onion */}
      <circle cx="105" cy="72" r="3" fill="#7aad5a" opacity="0.7"/>
      <circle cx="112" cy="74" r="2.5" fill="#7aad5a" opacity="0.6"/>
      {/* steam */}
      <path d="M80 58 Q75 45 82 35" stroke="#d4c0a0" strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M100 55 Q97 40 104 30" stroke="#d4c0a0" strokeWidth="1.2" fill="none" opacity="0.35" strokeLinecap="round"/>
      <path d="M120 58 Q123 45 118 35" stroke="#d4c0a0" strokeWidth="1.2" fill="none" opacity="0.3" strokeLinecap="round"/>
    </svg>
  ),

  'Konbini Egg Sandwich': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* plastic wrap shine */}
      <rect x="55" y="40" width="90" height="80" rx="4" fill="white" opacity="0.1" stroke="#d0c8b8" strokeWidth="0.5"/>
      {/* sandwich triangle */}
      <path d="M65 110 L100 45 L135 110Z" fill="#f8f4f0" stroke="#d0c0a8" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* egg filling cross-section */}
      <path d="M75 100 L100 58 L125 100Z" fill="#f8e8a0" opacity="0.6"/>
      <ellipse cx="95" cy="85" rx="8" ry="5" fill="#f0d870" opacity="0.5"/>
      <ellipse cx="105" cy="78" rx="6" ry="4" fill="#f0d870" opacity="0.4"/>
      <ellipse cx="100" cy="92" rx="10" ry="4" fill="#f8e090" opacity="0.5"/>
      {/* bread edges */}
      <path d="M68 105 L132 105" stroke="#e0d0b8" strokeWidth="1" opacity="0.5"/>
      {/* wrapper lines */}
      <path d="M60 50 L140 50" stroke="#e0dcd4" strokeWidth="0.5" strokeDasharray="3 3"/>
      <path d="M58 115 L142 115" stroke="#e0dcd4" strokeWidth="0.5" strokeDasharray="3 3"/>
    </svg>
  ),

  'Dango': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* skewer */}
      <line x1="100" y1="25" x2="100" y2="140" stroke="#b09060" strokeWidth="3" strokeLinecap="round"/>
      {/* pink ball */}
      <circle cx="100" cy="48" r="20" fill="#f0a0b0" stroke="#d08090" strokeWidth="1.2"/>
      <ellipse cx="94" cy="42" rx="6" ry="4" fill="#f8c0c8" opacity="0.5"/>
      {/* white ball */}
      <circle cx="100" cy="82" r="20" fill="#f8f4f0" stroke="#d0c8b8" strokeWidth="1.2"/>
      <ellipse cx="94" cy="76" rx="6" ry="4" fill="white" opacity="0.6"/>
      {/* green ball */}
      <circle cx="100" cy="116" r="20" fill="#a0c888" stroke="#80a868" strokeWidth="1.2"/>
      <ellipse cx="94" cy="110" rx="6" ry="4" fill="#b8d8a0" opacity="0.5"/>
    </svg>
  ),

  'French Fries': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* paper cone */}
      <path d="M70 130 L85 45 L115 45 L130 130Z" fill="#e8dcd0" stroke="#c0a888" strokeWidth="1.5"/>
      <path d="M78 90 L122 90" stroke="#d4c0a0" strokeWidth="0.5" strokeDasharray="2 2"/>
      {/* fries sticking out */}
      <rect x="82" y="28" width="7" height="55" rx="2" fill="#e8c040" stroke="#c4a030" strokeWidth="0.8" transform="rotate(-8 85 55)"/>
      <rect x="92" y="22" width="7" height="58" rx="2" fill="#e8c848" stroke="#c4a030" strokeWidth="0.8"/>
      <rect x="102" y="25" width="7" height="55" rx="2" fill="#e0b838" stroke="#c4a030" strokeWidth="0.8" transform="rotate(6 105 52)"/>
      <rect x="110" y="32" width="7" height="48" rx="2" fill="#e8c848" stroke="#c4a030" strokeWidth="0.8" transform="rotate(12 113 56)"/>
      <rect x="76" y="35" width="6" height="48" rx="2" fill="#e0c040" stroke="#c4a030" strokeWidth="0.8" transform="rotate(-14 79 59)"/>
      {/* steam */}
      <path d="M95 18 Q92 8 97 0" stroke="#e8d8b0" strokeWidth="1" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M108 22 Q112 12 108 4" stroke="#e8d8b0" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round"/>
    </svg>
  ),

  'Jif': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* jar */}
      <rect x="60" y="40" width="80" height="90" rx="8" fill="#1a5276" stroke="#144060" strokeWidth="1.5"/>
      {/* lid */}
      <rect x="55" y="30" width="90" height="14" rx="4" fill="#c0392b" stroke="#a03020" strokeWidth="1"/>
      {/* label */}
      <rect x="68" y="52" width="64" height="55" rx="4" fill="#f4e9d0"/>
      {/* JIF text */}
      <text x="100" y="88" textAnchor="middle" fill="#c0392b" fontSize="24" fontWeight="bold" fontFamily="sans-serif">JIF</text>
      {/* peanut butter color showing above label */}
      <rect x="68" y="110" width="64" height="12" rx="2" fill="#d4a040" opacity="0.6"/>
      {/* knife on lid */}
      <line x1="110" y1="28" x2="150" y2="20" stroke="#c0c0c0" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M148 20 L158 18 L156 22Z" fill="#c0c0c0"/>
      {/* peanut butter on knife */}
      <path d="M140 19 Q148 16 155 19" fill="#d4a040" stroke="#c49030" strokeWidth="0.8"/>
    </svg>
  ),

  'Cheetos with Jalapeño Cheese': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* bag */}
      <path d="M55 25 L50 140 L150 140 L145 25Z" fill="#e87020" stroke="#c85810" strokeWidth="1.5"/>
      {/* bag crinkle top */}
      <path d="M55 25 Q70 18 80 25 Q90 18 100 25 Q110 18 120 25 Q130 18 145 25" fill="#d06018" stroke="#c85810" strokeWidth="0.8"/>
      {/* rip opening */}
      <path d="M70 30 Q85 20 100 28 Q115 20 130 30" fill="#2a1808" stroke="#e87020" strokeWidth="0.5"/>
      {/* cheetos peeking out */}
      <path d="M80 28 Q78 18 82 12" stroke="#f0a020" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M105 26 Q108 14 103 8" stroke="#f0a020" strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* label area */}
      <rect x="65" y="55" width="70" height="45" rx="4" fill="#f8d830" opacity="0.3"/>
      {/* orange dust fingers */}
      <path d="M155 100 Q160 85 158 75" stroke="#e8a050" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
      <path d="M160 102 Q165 88 162 78" stroke="#e8a050" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5"/>
      <path d="M164 105 Q168 92 166 82" stroke="#e8a050" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
      {/* jalapeño */}
      <path d="M85 70 Q95 60 105 70 Q100 75 90 75Z" fill="#4a8830" stroke="#387020" strokeWidth="0.8"/>
    </svg>
  ),

  'Oat Milk': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* carton */}
      <rect x="55" y="30" width="50" height="100" rx="4" fill="#f0e8d8" stroke="#c4b898" strokeWidth="1.2"/>
      {/* carton top fold */}
      <path d="M55 30 L68 18 L92 18 L105 30" fill="#e8dcc8" stroke="#c4b898" strokeWidth="1"/>
      <line x1="80" y1="18" x2="80" y2="30" stroke="#c4b898" strokeWidth="0.8"/>
      {/* oat label */}
      <rect x="60" y="50" width="40" height="35" rx="3" fill="#d4c8a8"/>
      <text x="80" y="72" textAnchor="middle" fill="#6b5030" fontSize="10" fontFamily="sans-serif" fontWeight="bold">OAT</text>
      {/* slightly crumpled look */}
      <path d="M57 60 Q55 65 57 70" stroke="#b8a888" strokeWidth="0.5" fill="none"/>
      {/* matcha bowl next to it */}
      <path d="M120 110 Q120 130 150 135 Q180 130 180 110" fill="#8b6e4a" stroke="#6b5030" strokeWidth="1.2"/>
      <ellipse cx="150" cy="110" rx="30" ry="10" fill="#5a8a4a" stroke="#4a7040" strokeWidth="1"/>
      <ellipse cx="150" cy="108" rx="25" ry="7" fill="#a8d48a" opacity="0.5"/>
      {/* splash going in */}
      <path d="M100 85 Q115 75 135 100" stroke="#f0e8d0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" strokeDasharray="4 3"/>
      <circle cx="138" cy="103" r="3" fill="#f0e8d0" opacity="0.5"/>
      <circle cx="132" cy="98" r="2" fill="#f0e8d0" opacity="0.4"/>
    </svg>
  ),

  // ===== THE WARDROBE CLOSET =====
  'Yukata': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* yukata body */}
      <path d="M70 25 L65 140 L135 140 L130 25Z" fill="#4a6a98" stroke="#3a5578" strokeWidth="1.5"/>
      {/* collar/overlap */}
      <path d="M85 25 L100 70 L115 25" fill="none" stroke="#f0e8d8" strokeWidth="2"/>
      {/* sleeves */}
      <path d="M65 35 L35 50 L40 90 L70 75" fill="#4a6a98" stroke="#3a5578" strokeWidth="1.5"/>
      <path d="M135 35 L165 50 L160 90 L130 75" fill="#4a6a98" stroke="#3a5578" strokeWidth="1.5"/>
      {/* obi belt */}
      <rect x="65" y="78" width="70" height="18" rx="2" fill="#c4506a" stroke="#a04058" strokeWidth="1"/>
      {/* patterns - small flowers */}
      {[[80,50],[110,55],[75,110],[120,105],[95,125]].map(([x,y],i) => (
        <g key={i} opacity="0.3">
          <circle cx={x} cy={y} r="3" fill="white"/>
          <circle cx={x} cy={y} r="1" fill="#7090b8"/>
        </g>
      ))}
    </svg>
  ),

  'Geta': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* rain drops */}
      {[[30,40],[150,30],[170,60],[40,70],[160,90]].map(([x,y],i) => (
        <line key={i} x1={x} y1={y} x2={x-2} y2={y+8} stroke="#a8c4d8" strokeWidth="0.8" opacity="0.3" strokeLinecap="round"/>
      ))}
      {/* stone step */}
      <ellipse cx="100" cy="130" rx="80" ry="12" fill="#b8b0a0" stroke="#908878" strokeWidth="1"/>
      {/* geta - left */}
      <rect x="45" y="98" width="45" height="12" rx="3" fill="#c49860" stroke="#a07840" strokeWidth="1.2"/>
      <rect x="52" y="110" width="8" height="18" rx="1" fill="#a07840"/>
      <rect x="72" y="110" width="8" height="18" rx="1" fill="#a07840"/>
      <path d="M55 98 Q68 88 80 98" stroke="#d4b080" strokeWidth="1.5" fill="none"/>
      {/* geta - right */}
      <rect x="110" y="100" width="45" height="12" rx="3" fill="#c49860" stroke="#a07840" strokeWidth="1.2"/>
      <rect x="117" y="112" width="8" height="16" rx="1" fill="#a07840"/>
      <rect x="137" y="112" width="8" height="16" rx="1" fill="#a07840"/>
      <path d="M120 100 Q133 90 145 100" stroke="#d4b080" strokeWidth="1.5" fill="none"/>
    </svg>
  ),

  'Tenugui': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* railing */}
      <line x1="30" y1="60" x2="170" y2="60" stroke="#a08860" strokeWidth="3" strokeLinecap="round"/>
      {/* cloth draped over */}
      <path d="M50 58 Q50 30 70 20 Q90 12 100 25 Q100 58 100 75 Q100 110 95 130 Q90 140 85 130 Q80 110 80 75 Q80 58 60 58" fill="#4a78a0" stroke="#3a6088" strokeWidth="1.2"/>
      <path d="M100 58 Q120 58 130 75 Q135 95 132 130 Q130 140 125 130 Q120 95 115 75 Q110 58 100 58" fill="#4a78a0" stroke="#3a6088" strokeWidth="1.2"/>
      {/* wave pattern */}
      <path d="M70 40 Q75 35 80 40 Q85 45 90 40" stroke="white" strokeWidth="0.8" fill="none" opacity="0.4"/>
      <path d="M85 90 Q90 85 95 90 Q100 95 105 90" stroke="white" strokeWidth="0.8" fill="none" opacity="0.4"/>
      <path d="M108 80 Q113 75 118 80" stroke="white" strokeWidth="0.8" fill="none" opacity="0.4"/>
    </svg>
  ),

  'Furoshiki': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* cloth wrapping */}
      <path d="M60 120 L60 60 L140 60 L140 120Z" fill="#7848a0" stroke="#6038888" strokeWidth="1.2" opacity="0.8"/>
      {/* top knot */}
      <path d="M80 60 Q70 30 60 20 Q55 15 65 18 Q80 25 90 45 Q92 52 90 60" fill="#8858b0" stroke="#6840908" strokeWidth="1"/>
      <path d="M120 60 Q130 30 140 20 Q145 15 135 18 Q120 25 110 45 Q108 52 110 60" fill="#8858b0" stroke="#684090" strokeWidth="1"/>
      {/* knot center */}
      <ellipse cx="100" cy="55" rx="14" ry="8" fill="#9068c0" stroke="#7050a0" strokeWidth="1"/>
      {/* pattern dots */}
      {[[75,80],[100,75],[125,80],[80,100],[100,95],[120,100]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="#b088d0" opacity="0.4"/>
      ))}
      {/* box corners peeking */}
      <path d="M62 118 L62 62 L68 62" stroke="#c0a880" strokeWidth="0.8" opacity="0.3"/>
      <path d="M138 118 L138 62 L132 62" stroke="#c0a880" strokeWidth="0.8" opacity="0.3"/>
    </svg>
  ),

  'Kasa': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* parasol canopy */}
      <path d="M30 70 Q100 10 170 70" fill="#c84040" stroke="#a83030" strokeWidth="1.5"/>
      <path d="M30 70 Q100 55 170 70" fill="none" stroke="#a83030" strokeWidth="0.8"/>
      {/* ribs */}
      <line x1="100" y1="18" x2="100" y2="70" stroke="#b83535" strokeWidth="0.6"/>
      <line x1="65" y1="42" x2="72" y2="70" stroke="#b83535" strokeWidth="0.6"/>
      <line x1="135" y1="42" x2="128" y2="70" stroke="#b83535" strokeWidth="0.6"/>
      {/* bamboo handle */}
      <line x1="100" y1="68" x2="100" y2="145" stroke="#b09060" strokeWidth="3" strokeLinecap="round"/>
      {/* handle curve */}
      <path d="M100 145 Q100 155 92 155" stroke="#b09060" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* temple wall hint */}
      <rect x="150" y="80" width="40" height="80" fill="#e0d8c8" opacity="0.3"/>
      <line x1="150" y1="80" x2="150" y2="160" stroke="#c4b8a0" strokeWidth="0.8" opacity="0.4"/>
    </svg>
  ),

  'Omamori': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      <defs>
        <linearGradient id="omamori-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c84848"/><stop offset="100%" stopColor="#a03838"/></linearGradient>
      </defs>
      {/* pouch */}
      <path d="M75 40 L75 120 Q75 135 100 135 Q125 135 125 120 L125 40Z" fill="url(#omamori-grad)" stroke="#882828" strokeWidth="1.5"/>
      {/* top gathered */}
      <path d="M75 40 Q85 30 100 32 Q115 30 125 40" fill="#d05050" stroke="#882828" strokeWidth="1"/>
      {/* string tie */}
      <line x1="100" y1="32" x2="100" y2="18" stroke="#d4b060" strokeWidth="2"/>
      {/* knot */}
      <circle cx="100" cy="42" r="5" fill="#d4b060" stroke="#b09040" strokeWidth="1"/>
      {/* gold text rectangle */}
      <rect x="85" y="60" width="30" height="50" rx="2" fill="#f0e8d0" opacity="0.3"/>
      {/* kanji */}
      <text x="100" y="92" textAnchor="middle" fill="#d4b060" fontSize="16" fontFamily="serif">守</text>
      {/* decorative border */}
      <rect x="82" y="55" width="36" height="60" rx="3" fill="none" stroke="#d4b060" strokeWidth="0.8" opacity="0.5"/>
    </svg>
  ),

  'The Pearl Ring': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      <defs>
        <radialGradient id="pearl-glow" cx="40%" cy="35%"><stop offset="0%" stopColor="white"/><stop offset="50%" stopColor="#f0e8e0"/><stop offset="100%" stopColor="#d8ccc0"/></radialGradient>
      </defs>
      {/* velvet cushion */}
      <ellipse cx="100" cy="115" rx="60" ry="20" fill="#5a3060" stroke="#4a2050" strokeWidth="1"/>
      <ellipse cx="100" cy="112" rx="55" ry="16" fill="#6a3878" opacity="0.5"/>
      {/* ring band */}
      <ellipse cx="100" cy="90" rx="18" ry="22" fill="none" stroke="#d4b060" strokeWidth="2.5"/>
      <ellipse cx="100" cy="90" rx="18" ry="22" fill="none" stroke="#e8c878" strokeWidth="1" opacity="0.5"/>
      {/* pearl */}
      <circle cx="100" cy="68" r="12" fill="url(#pearl-glow)" stroke="#c8b8a8" strokeWidth="0.8"/>
      <ellipse cx="96" cy="64" rx="4" ry="3" fill="white" opacity="0.6"/>
      {/* sparkle */}
      <path d="M118 60 L120 55 L122 60 L127 62 L122 64 L120 69 L118 64 L113 62Z" fill="#f0e0c0" opacity="0.5"/>
    </svg>
  ),

  'Psyllium Husk': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* toiletry bag */}
      <rect x="40" y="50" width="120" height="75" rx="10" fill="#6a8898" stroke="#4a6878" strokeWidth="1.5"/>
      <path d="M40 65 L160 65" stroke="#4a6878" strokeWidth="0.8"/>
      {/* zipper */}
      <line x1="90" y1="50" x2="90" y2="65" stroke="#c0c0c0" strokeWidth="1.5"/>
      <circle cx="90" cy="52" r="3" fill="#d0d0d0" stroke="#a0a0a0" strokeWidth="0.8"/>
      {/* ziplock bag inside */}
      <rect x="65" y="75" width="50" height="40" rx="3" fill="white" opacity="0.5" stroke="#c0c0c0" strokeWidth="0.8"/>
      <line x1="65" y1="80" x2="115" y2="80" stroke="#80b0d0" strokeWidth="1.5"/>
      {/* mysterious powder */}
      <ellipse cx="90" cy="100" rx="18" ry="8" fill="#e0d0b0" opacity="0.6"/>
      <ellipse cx="88" cy="98" rx="12" ry="5" fill="#d4c0a0" opacity="0.4"/>
      {/* question mark */}
      <text x="135" y="100" fill="#4a6878" fontSize="20" fontFamily="serif" opacity="0.3">?</text>
    </svg>
  ),

  'Lentils': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* suitcase background hint */}
      <rect x="30" y="60" width="140" height="80" rx="6" fill="#4a6080" opacity="0.15"/>
      <line x1="30" y1="65" x2="170" y2="65" stroke="#4a6080" strokeWidth="0.5" opacity="0.2"/>
      {/* can */}
      <rect x="70" y="40" width="60" height="85" rx="6" fill="#a0a098" stroke="#808078" strokeWidth="1.5"/>
      {/* can ridges top */}
      <ellipse cx="100" cy="42" rx="30" ry="6" fill="#b0b0a8" stroke="#808078" strokeWidth="1"/>
      {/* can ridges bottom */}
      <ellipse cx="100" cy="123" rx="30" ry="6" fill="#909088" stroke="#808078" strokeWidth="1"/>
      {/* label */}
      <rect x="72" y="55" width="56" height="55" rx="3" fill="#e8d0a0" stroke="#c4a868" strokeWidth="0.8"/>
      {/* lentil illustration on label */}
      {[[88,72],[100,68],[112,72],[94,80],[106,80],[100,88]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="5" ry="3.5" fill="#8b6e3a" opacity="0.6" transform={`rotate(${i*15} ${x} ${y})`}/>
      ))}
      {/* dent */}
      <path d="M125 80 Q130 85 125 90" stroke="#707068" strokeWidth="0.8" fill="none" opacity="0.4"/>
      {/* proud stance */}
      <path d="M85 130 Q100 125 115 130" stroke="#808078" strokeWidth="0.5" fill="none" opacity="0.3"/>
    </svg>
  ),

  // ===== THE GUEST ROOMS =====
  'Konbini': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* wet pavement */}
      <rect x="0" y="120" width="200" height="40" fill="#3a3840" opacity="0.3"/>
      {/* building */}
      <rect x="40" y="40" width="120" height="80" rx="2" fill="#f0ece0" stroke="#c0b8a8" strokeWidth="1.2"/>
      {/* window glow */}
      <rect x="48" y="48" width="104" height="50" rx="1" fill="#ffeebb" opacity="0.6"/>
      <rect x="48" y="48" width="104" height="50" rx="1" fill="none" stroke="#d0c8b8" strokeWidth="0.8"/>
      {/* door */}
      <rect x="85" y="60" width="30" height="60" fill="#a0d8e8" stroke="#80b8c8" strokeWidth="0.8"/>
      <line x1="100" y1="60" x2="100" y2="120" stroke="#80b8c8" strokeWidth="0.5"/>
      {/* sign */}
      <rect x="55" y="30" width="90" height="14" rx="2" fill="#40a870" stroke="#308060" strokeWidth="1"/>
      {/* light spilling */}
      <path d="M48 120 L30 140 L170 140 L152 120Z" fill="#ffeebb" opacity="0.15"/>
      {/* rain on ground */}
      {[[35,130],[60,135],[140,132],[165,128]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="8" ry="1" fill="#ffeebb" opacity="0.1"/>
      ))}
    </svg>
  ),

  'Kissaten': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* warm background glow */}
      <rect x="20" y="20" width="160" height="120" rx="8" fill="#3a2820" opacity="0.3"/>
      {/* coffee cup */}
      <path d="M70 95 Q70 115 90 118 Q110 115 110 95" fill="#f0e8d8" stroke="#a08868" strokeWidth="1.2"/>
      <ellipse cx="90" cy="95" rx="20" ry="7" fill="#e8e0d0" stroke="#a08868" strokeWidth="1.2"/>
      {/* coffee surface */}
      <ellipse cx="90" cy="93" rx="16" ry="5" fill="#5a3020"/>
      {/* saucer */}
      <ellipse cx="90" cy="120" rx="28" ry="6" fill="#f0e8d8" stroke="#a08868" strokeWidth="1"/>
      {/* steam */}
      <path d="M82 82 Q78 68 85 58" stroke="#c4b098" strokeWidth="1" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M95 80 Q98 66 92 56" stroke="#c4b098" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round"/>
      {/* toast plate */}
      <ellipse cx="145" cy="110" rx="25" ry="8" fill="#f0e8d8" stroke="#a08868" strokeWidth="0.8"/>
      <rect x="130" y="90" width="30" height="20" rx="2" fill="#e8c060" stroke="#c4a040" strokeWidth="0.8"/>
      {/* butter pat */}
      <rect x="138" y="88" width="14" height="6" rx="1" fill="#f8e890" stroke="#d4c060" strokeWidth="0.5"/>
    </svg>
  ),

  'Shotengai': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* arched roof */}
      <path d="M10 50 Q100 15 190 50" fill="none" stroke="#a08878" strokeWidth="2"/>
      <path d="M10 50 Q100 15 190 50 L190 55 Q100 20 10 55Z" fill="#c0b0a0" opacity="0.3"/>
      {/* perspective path */}
      <path d="M20 150 L80 55 L120 55 L180 150Z" fill="#e0d8c8" opacity="0.2"/>
      {/* shops left */}
      <rect x="25" y="55" width="50" height="95" fill="#e8d8c0" stroke="#c4b098" strokeWidth="0.8"/>
      <rect x="30" y="60" width="18" height="25" rx="1" fill="#f0e8a0" opacity="0.5"/>
      <rect x="52" y="60" width="18" height="25" rx="1" fill="#a0c8e0" opacity="0.5"/>
      {/* shops right */}
      <rect x="125" y="55" width="50" height="95" fill="#e8d8c0" stroke="#c4b098" strokeWidth="0.8"/>
      <rect x="130" y="60" width="18" height="25" rx="1" fill="#e8a0a0" opacity="0.5"/>
      <rect x="152" y="60" width="18" height="25" rx="1" fill="#a0e0a0" opacity="0.5"/>
      {/* lanterns */}
      {[60,100,140].map((x,i) => (
        <g key={i}>
          <line x1={x} y1={32+i*2} x2={x} y2={42+i*2} stroke="#a08878" strokeWidth="0.5"/>
          <ellipse cx={x} cy={48+i*2} rx="6" ry="8" fill="#d04040" opacity="0.7" stroke="#a03030" strokeWidth="0.5"/>
        </g>
      ))}
    </svg>
  ),

  'Onsen': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* mountains */}
      <path d="M0 70 L40 30 L80 65 L120 20 L160 55 L200 40 L200 70Z" fill="#7090a0" opacity="0.3"/>
      {/* snow caps */}
      <path d="M35 35 L40 30 L45 35" fill="white" opacity="0.5"/>
      <path d="M115 25 L120 20 L125 25" fill="white" opacity="0.5"/>
      {/* wooden fence */}
      <rect x="140" y="50" width="4" height="50" fill="#a08060" rx="1"/>
      <rect x="155" y="45" width="4" height="55" fill="#a08060" rx="1"/>
      <rect x="170" y="48" width="4" height="52" fill="#a08060" rx="1"/>
      <path d="M140 60 L174 55" stroke="#a08060" strokeWidth="2"/>
      <path d="M140 80 L174 75" stroke="#a08060" strokeWidth="2"/>
      {/* pool */}
      <ellipse cx="85" cy="110" rx="70" ry="30" fill="#8cc8d8" opacity="0.5"/>
      <ellipse cx="85" cy="108" rx="65" ry="26" fill="#a0d8e8" opacity="0.4"/>
      {/* rocks */}
      <ellipse cx="25" cy="105" rx="18" ry="12" fill="#808078" stroke="#686860" strokeWidth="1"/>
      <ellipse cx="145" cy="100" rx="14" ry="10" fill="#888880" stroke="#686860" strokeWidth="1"/>
      <circle cx="15" cy="95" r="8" fill="#909088" stroke="#686860" strokeWidth="0.8"/>
      {/* snow on rocks */}
      <path d="M12 90 Q15 86 22 88" fill="white" opacity="0.4"/>
      {/* steam */}
      <path d="M60 85 Q55 70 62 58" stroke="#c8dce8" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M80 82 Q84 65 78 52" stroke="#c8dce8" strokeWidth="1.5" fill="none" opacity="0.35" strokeLinecap="round"/>
      <path d="M100 84 Q95 70 102 58" stroke="#c8dce8" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round"/>
    </svg>
  ),

  'Izakaya': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* dark background */}
      <rect x="30" y="20" width="140" height="130" rx="4" fill="#2a2018" opacity="0.4"/>
      {/* doorway */}
      <rect x="70" y="50" width="60" height="100" fill="#e8c060" opacity="0.3"/>
      {/* noren curtain */}
      <path d="M70 50 L70 95 Q85 100 85 95 L85 50" fill="#2a4a78" stroke="#1a3a68" strokeWidth="0.8"/>
      <path d="M85 50 L85 95 Q100 100 100 95 L100 50" fill="#2a4a78" stroke="#1a3a68" strokeWidth="0.8"/>
      <path d="M100 50 L100 95 Q115 100 115 95 L115 50" fill="#2a4a78" stroke="#1a3a68" strokeWidth="0.8"/>
      <path d="M115 50 L115 95 Q130 100 130 95 L130 50" fill="#2a4a78" stroke="#1a3a68" strokeWidth="0.8"/>
      {/* top bar */}
      <rect x="65" y="46" width="70" height="6" rx="1" fill="#5a4030"/>
      {/* red lantern */}
      <line x1="55" y1="30" x2="55" y2="42" stroke="#5a4030" strokeWidth="1"/>
      <ellipse cx="55" cy="52" rx="12" ry="16" fill="#d04040" stroke="#a03030" strokeWidth="1"/>
      <line x1="55" y1="38" x2="55" y2="44" stroke="#5a4030" strokeWidth="0.5"/>
      {/* warm light from inside */}
      <rect x="75" y="100" width="50" height="50" fill="#ffeebb" opacity="0.15"/>
    </svg>
  ),

  'Depachika': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* glass case */}
      <rect x="30" y="50" width="140" height="80" rx="2" fill="white" opacity="0.15" stroke="#c0b8a8" strokeWidth="1"/>
      <line x1="30" y1="50" x2="170" y2="50" stroke="#d4c8b0" strokeWidth="1.5"/>
      {/* gleam */}
      <line x1="35" y1="52" x2="35" y2="128" stroke="white" strokeWidth="0.5" opacity="0.3"/>
      {/* jewel-like sweets */}
      <circle cx="60" cy="80" r="10" fill="#e880a0" stroke="#c86080" strokeWidth="0.8"/>
      <ellipse cx="57" cy="77" rx="3" ry="2" fill="white" opacity="0.4"/>

      <rect x="85" y="72" width="16" height="16" rx="3" fill="#80c0a0" stroke="#60a080" strokeWidth="0.8"/>
      <ellipse cx="90" cy="77" rx="3" ry="2" fill="white" opacity="0.3"/>

      <circle cx="130" cy="80" r="10" fill="#f0c060" stroke="#d0a040" strokeWidth="0.8"/>
      <ellipse cx="127" cy="77" rx="3" ry="2" fill="white" opacity="0.4"/>

      {/* perfect fruit */}
      <circle cx="60" cy="110" r="12" fill="#e84848" stroke="#c83838" strokeWidth="0.8"/>
      <path d="M58 99 Q60 95 64 97" stroke="#40883a" strokeWidth="1" fill="none"/>

      {/* tiny cake */}
      <rect x="100" y="104" width="20" height="14" rx="2" fill="#f8e8d0" stroke="#d4c0a0" strokeWidth="0.8"/>
      <ellipse cx="110" cy="104" rx="12" ry="3" fill="#f0a0b0"/>
      <circle cx="110" cy="100" r="3" fill="#d04040"/>

      {/* price tag */}
      <rect x="130" y="106" width="24" height="10" rx="1" fill="#f8f4e8" stroke="#d4c8b0" strokeWidth="0.5"/>
      <text x="142" y="114" textAnchor="middle" fill="#a08868" fontSize="6" fontFamily="sans-serif">¥5000</text>
    </svg>
  ),

  'Ryokan': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* tatami floor */}
      <rect x="20" y="80" width="160" height="70" fill="#c8b890" opacity="0.4"/>
      <line x1="100" y1="80" x2="100" y2="150" stroke="#b0a078" strokeWidth="0.5"/>
      <line x1="20" y1="115" x2="180" y2="115" stroke="#b0a078" strokeWidth="0.5"/>
      {/* shoji screens */}
      <rect x="130" y="20" width="50" height="60" fill="#f0e8d8" stroke="#c4b898" strokeWidth="1"/>
      <line x1="155" y1="20" x2="155" y2="80" stroke="#c4b898" strokeWidth="0.5"/>
      <line x1="130" y1="50" x2="180" y2="50" stroke="#c4b898" strokeWidth="0.5"/>
      {/* garden visible through screen */}
      <rect x="135" y="25" width="17" height="23" fill="#c8e0c0" opacity="0.3"/>
      <circle cx="143" cy="35" r="5" fill="#80b070" opacity="0.3"/>
      {/* low table */}
      <rect x="55" y="98" width="50" height="6" rx="1" fill="#6a4a30" stroke="#5a3a20" strokeWidth="0.8"/>
      <rect x="60" y="104" width="3" height="10" fill="#5a3a20"/>
      <rect x="97" y="104" width="3" height="10" fill="#5a3a20"/>
      {/* tea on table */}
      <circle cx="75" cy="97" r="5" fill="#a0c890" opacity="0.5" stroke="#80a070" strokeWidth="0.5"/>
      <circle cx="88" cy="97" r="5" fill="#a0c890" opacity="0.5" stroke="#80a070" strokeWidth="0.5"/>
      {/* futon hint */}
      <rect x="25" y="85" width="35" height="22" rx="4" fill="#e8d8c0" stroke="#c4b898" strokeWidth="0.8"/>
      <rect x="25" y="85" width="35" height="8" rx="3" fill="#d4c4a8"/>
    </svg>
  ),

  'The Waterbed': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* room */}
      <rect x="20" y="20" width="160" height="120" rx="4" fill="#2a2838" opacity="0.2"/>
      {/* bed frame */}
      <rect x="35" y="70" width="130" height="60" rx="6" fill="#5a4840" stroke="#4a3830" strokeWidth="1.5"/>
      {/* mattress/water surface */}
      <rect x="40" y="72" width="120" height="48" rx="4" fill="#4878a8" opacity="0.6"/>
      {/* ripple lines */}
      <path d="M50 88 Q70 83 90 88 Q110 93 130 88 Q145 84 155 88" stroke="#68a0d0" strokeWidth="1" fill="none" opacity="0.4"/>
      <path d="M50 98 Q70 93 90 98 Q110 103 130 98 Q145 94 155 98" stroke="#68a0d0" strokeWidth="1" fill="none" opacity="0.3"/>
      <path d="M50 108 Q70 103 90 108 Q110 113 130 108 Q145 104 155 108" stroke="#68a0d0" strokeWidth="1" fill="none" opacity="0.2"/>
      {/* pillow */}
      <ellipse cx="60" cy="80" rx="18" ry="8" fill="#e8e0d8" stroke="#c4b8a8" strokeWidth="0.8"/>
      {/* lamp */}
      <rect x="160" y="50" width="4" height="30" fill="#a08868"/>
      <ellipse cx="162" cy="48" rx="10" ry="7" fill="#f0d870" opacity="0.5" stroke="#d4b860" strokeWidth="0.8"/>
      {/* lamp glow */}
      <circle cx="162" cy="48" r="18" fill="#f0d870" opacity="0.08"/>
    </svg>
  ),

  'Car Wash': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* municipal building in background */}
      <rect x="130" y="30" width="60" height="90" fill="#d0c8b8" stroke="#b0a898" strokeWidth="0.8"/>
      <rect x="140" y="40" width="14" height="18" rx="1" fill="#a0c8d8" opacity="0.4"/>
      <rect x="160" y="40" width="14" height="18" rx="1" fill="#a0c8d8" opacity="0.4"/>
      <rect x="140" y="65" width="14" height="18" rx="1" fill="#a0c8d8" opacity="0.4"/>
      <rect x="160" y="65" width="14" height="18" rx="1" fill="#a0c8d8" opacity="0.4"/>
      <text x="160" y="105" textAnchor="middle" fill="#808070" fontSize="5" fontFamily="sans-serif">CIVIC CENTER</text>
      {/* car wash structure */}
      <rect x="15" y="45" width="100" height="75" rx="4" fill="#e0d8c8" stroke="#b0a888" strokeWidth="1.5"/>
      <rect x="20" y="40" width="90" height="10" rx="2" fill="#4a88c8" stroke="#3878b8" strokeWidth="1"/>
      {/* entrance */}
      <rect x="25" y="55" width="80" height="60" fill="#2a3040" opacity="0.4" rx="3"/>
      {/* spinning brushes */}
      {[45, 65, 85].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="58" x2={x} y2="112" stroke="#c0c0c0" strokeWidth="2"/>
          {[65, 80, 95].map((y, j) => (
            <g key={j}>
              <line x1={x-10} y1={y} x2={x+10} y2={y} stroke="#4090d0" strokeWidth="1.5" opacity="0.5">
                <animateTransform attributeName="transform" type="rotate" values={`0 ${x} ${y};360 ${x} ${y}`} dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/>
              </line>
            </g>
          ))}
        </g>
      ))}
      {/* rainbow soap suds */}
      <circle cx="35" cy="108" r="6" fill="#f0a0b0" opacity="0.3"/>
      <circle cx="50" cy="112" r="5" fill="#a0d0f0" opacity="0.3"/>
      <circle cx="62" cy="110" r="7" fill="#a0f0a0" opacity="0.3"/>
      <circle cx="78" cy="112" r="5" fill="#f0e0a0" opacity="0.3"/>
      <circle cx="92" cy="108" r="6" fill="#d0a0f0" opacity="0.3"/>
      {/* ground */}
      <rect x="0" y="120" width="200" height="40" fill="#c0b8a8" opacity="0.2"/>
    </svg>
  ),

  // ===== THE STUDY =====
  'Itadakimasu': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* hands pressed together */}
      <path d="M85 50 Q90 30 95 25 L98 25 Q96 30 95 50" fill="#e8c8a8" stroke="#c4a080" strokeWidth="0.8"/>
      <path d="M95 50 Q97 30 100 25 L103 25 Q101 30 100 50" fill="#e8c8a8" stroke="#c4a080" strokeWidth="0.8"/>
      <path d="M105 50 Q104 30 102 25 L105 25 Q108 30 108 50" fill="#e8c8a8" stroke="#c4a080" strokeWidth="0.8"/>
      <path d="M83 55 Q80 35 82 28 L85 50" fill="#e8c8a8" stroke="#c4a080" strokeWidth="0.8"/>
      {/* palms */}
      <path d="M78 65 Q80 50 100 48 Q120 50 122 65 Q120 72 100 74 Q80 72 78 65Z" fill="#e8c8a8" stroke="#c4a080" strokeWidth="1"/>
      {/* food below */}
      <ellipse cx="100" cy="115" rx="55" ry="18" fill="#f0e8d8" stroke="#c4b898" strokeWidth="1"/>
      <ellipse cx="80" cy="110" rx="10" ry="6" fill="#e8c060" opacity="0.5"/>
      <ellipse cx="105" cy="108" rx="12" ry="7" fill="#a0c890" opacity="0.5"/>
      <ellipse cx="125" cy="112" rx="8" ry="5" fill="#d08060" opacity="0.5"/>
    </svg>
  ),

  'Otsukaresama desu': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* two figures bowing */}
      {/* person left */}
      <circle cx="65" cy="50" r="12" fill="#e8d0b0" stroke="#c4a880" strokeWidth="1"/>
      <path d="M53 65 Q55 60 65 62 Q75 60 77 65 L80 110 Q68 115 50 110Z" fill="#4a6a98" stroke="#3a5578" strokeWidth="1"/>
      {/* person right */}
      <circle cx="135" cy="50" r="12" fill="#e8d0b0" stroke="#c4a880" strokeWidth="1"/>
      <path d="M123 65 Q125 60 135 62 Q145 60 147 65 L150 110 Q138 115 120 110Z" fill="#6a4a78" stroke="#5a3a68" strokeWidth="1"/>
      {/* bow angle - heads tilted */}
      <path d="M65 50 Q68 55 72 56" stroke="#c4a880" strokeWidth="0.5" fill="none"/>
      <path d="M135 50 Q132 55 128 56" stroke="#c4a880" strokeWidth="0.5" fill="none"/>
      {/* warm glow between */}
      <circle cx="100" cy="80" r="20" fill="#f0d870" opacity="0.08"/>
      {/* dimming lights hint */}
      <rect x="85" y="25" width="30" height="8" rx="2" fill="#f0d870" opacity="0.2"/>
    </svg>
  ),

  'Irasshaimase': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* shopkeeper */}
      <circle cx="100" cy="45" r="15" fill="#e8d0b0" stroke="#c4a880" strokeWidth="1"/>
      {/* smile */}
      <path d="M92 48 Q100 55 108 48" stroke="#8b6e50" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* eyes */}
      <path d="M90 42 Q93 39 96 42" stroke="#5a4030" strokeWidth="1" fill="none"/>
      <path d="M104 42 Q107 39 110 42" stroke="#5a4030" strokeWidth="1" fill="none"/>
      {/* body/apron */}
      <path d="M80 62 Q85 58 100 60 Q115 58 120 62 L125 130 L75 130Z" fill="#f0e8d8" stroke="#c4b898" strokeWidth="1"/>
      {/* apron */}
      <path d="M82 80 L118 80 L120 130 L80 130Z" fill="white" stroke="#d4c8b0" strokeWidth="0.8"/>
      {/* welcoming hand gesture */}
      <path d="M120 70 Q135 60 142 55 Q145 53 144 56 Q140 62 130 72" fill="#e8d0b0" stroke="#c4a880" strokeWidth="0.8"/>
      {/* counter */}
      <rect x="30" y="120" width="140" height="10" rx="2" fill="#a08060" stroke="#806040" strokeWidth="0.8"/>
    </svg>
  ),

  'Mottainai': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* hands */}
      <path d="M70 90 Q80 80 100 82 Q110 83 115 90 Q118 100 110 105 Q95 108 80 105 Q72 100 70 90Z" fill="#e8d0b0" stroke="#c4a880" strokeWidth="1"/>
      {/* wrapping paper being folded */}
      <path d="M55 60 L145 60 L140 100 L60 100Z" fill="#e8d0c0" stroke="#c4a888" strokeWidth="1"/>
      <path d="M55 60 L80 45 L170 45 L145 60Z" fill="#f0d8c8" stroke="#c4a888" strokeWidth="0.8"/>
      {/* fold crease */}
      <path d="M90 60 L90 100" stroke="#d4b898" strokeWidth="0.5" strokeDasharray="3 2"/>
      <path d="M120 60 L120 100" stroke="#d4b898" strokeWidth="0.5" strokeDasharray="3 2"/>
      {/* careful fold at corner */}
      <path d="M140 100 L145 60" stroke="#c4a888" strokeWidth="0.8"/>
      {/* fingers detail */}
      <path d="M85 88 Q88 82 92 85" stroke="#c4a080" strokeWidth="0.6" fill="none"/>
      <path d="M100 86 Q103 80 106 84" stroke="#c4a080" strokeWidth="0.6" fill="none"/>
    </svg>
  ),

  'Komorebi': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* tree canopy */}
      <circle cx="60" cy="25" r="30" fill="#5a8848" opacity="0.4"/>
      <circle cx="100" cy="15" r="35" fill="#4a7838" opacity="0.4"/>
      <circle cx="140" cy="25" r="30" fill="#5a8848" opacity="0.4"/>
      <circle cx="80" cy="10" r="25" fill="#6a9858" opacity="0.3"/>
      <circle cx="120" cy="10" r="25" fill="#6a9858" opacity="0.3"/>
      {/* tree trunks */}
      <line x1="50" y1="40" x2="45" y2="150" stroke="#7a6040" strokeWidth="4" strokeLinecap="round"/>
      <line x1="150" y1="40" x2="155" y2="150" stroke="#7a6040" strokeWidth="4" strokeLinecap="round"/>
      {/* light beams filtering through */}
      <path d="M70 30 L55 140 L65 140Z" fill="#f8e878" opacity="0.12"/>
      <path d="M100 20 L90 140 L105 140Z" fill="#f8e878" opacity="0.15"/>
      <path d="M125 25 L130 140 L145 140Z" fill="#f8e878" opacity="0.1"/>
      {/* dappled light spots on ground */}
      <ellipse cx="60" cy="135" rx="12" ry="4" fill="#f8e878" opacity="0.2"/>
      <ellipse cx="100" cy="130" rx="15" ry="5" fill="#f8e878" opacity="0.25"/>
      <ellipse cx="140" cy="135" rx="10" ry="4" fill="#f8e878" opacity="0.18"/>
      {/* path */}
      <path d="M30 150 Q80 120 100 125 Q120 130 170 150" stroke="#a09070" strokeWidth="1" fill="none" opacity="0.3"/>
    </svg>
  ),

  'Sumimasen': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* figure bowing gently */}
      <circle cx="100" cy="42" r="16" fill="#e8d0b0" stroke="#c4a880" strokeWidth="1"/>
      {/* gentle expression */}
      <path d="M93 44 Q100 49 107 44" stroke="#8b6e50" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <circle cx="93" cy="39" r="1.5" fill="#5a4030"/>
      <circle cx="107" cy="39" r="1.5" fill="#5a4030"/>
      {/* body */}
      <path d="M82 60 Q90 56 100 58 Q110 56 118 60 L120 130 L80 130Z" fill="#a0b8a0" stroke="#80a080" strokeWidth="1"/>
      {/* hand raised slightly */}
      <path d="M118 70 Q128 65 132 60 Q134 58 133 62 Q130 68 122 75" fill="#e8d0b0" stroke="#c4a880" strokeWidth="0.8"/>
      {/* soft aura */}
      <circle cx="100" cy="85" r="45" fill="#f0d870" opacity="0.05"/>
    </svg>
  ),

  'Yoroshiku onegaishimasu': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* two people meeting */}
      {/* person left */}
      <circle cx="70" cy="45" r="14" fill="#e8d0b0" stroke="#c4a880" strokeWidth="1"/>
      <path d="M56 62 Q62 58 70 60 Q78 58 84 62 L86 130 L54 130Z" fill="#6888a8" stroke="#5078988" strokeWidth="1"/>
      {/* gentle smile */}
      <path d="M64 48 Q70 52 76 48" stroke="#8b6e50" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      {/* person right */}
      <circle cx="130" cy="45" r="14" fill="#e8d0b0" stroke="#c4a880" strokeWidth="1"/>
      <path d="M116 62 Q122 58 130 60 Q138 58 144 62 L146 130 L114 130Z" fill="#a87868" stroke="#887058" strokeWidth="1"/>
      {/* gentle smile */}
      <path d="M124 48 Q130 52 136 48" stroke="#8b6e50" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      {/* mutual bow angle */}
      <path d="M84 72 Q100 68 116 72" stroke="#d4c0a0" strokeWidth="0.5" fill="none" strokeDasharray="2 2"/>
      {/* warm connection glow */}
      <circle cx="100" cy="80" r="25" fill="#f0d870" opacity="0.08"/>
    </svg>
  ),

  // ===== THE WINDOW SEAT =====
  'Torii in Water': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* misty mountains */}
      <path d="M0 60 L50 30 L100 55 L150 25 L200 50 L200 70 L0 70Z" fill="#8090a0" opacity="0.2"/>
      {/* water */}
      <rect x="0" y="90" width="200" height="70" fill="#80b0c8" opacity="0.2"/>
      {/* torii gate */}
      <rect x="72" y="40" width="6" height="100" fill="#c84040" stroke="#a03030" strokeWidth="0.8"/>
      <rect x="122" y="40" width="6" height="100" fill="#c84040" stroke="#a03030" strokeWidth="0.8"/>
      {/* top beam */}
      <path d="M62 42 L138 42 L140 48 L60 48Z" fill="#c84040" stroke="#a03030" strokeWidth="0.8"/>
      <path d="M58 38 L142 38 Q143 34 142 34 L58 34 Q57 34 58 38Z" fill="#d04848" stroke="#a03030" strokeWidth="0.8"/>
      {/* secondary beam */}
      <rect x="68" y="55" width="64" height="4" rx="1" fill="#c84040" stroke="#a03030" strokeWidth="0.5"/>
      {/* reflection */}
      <rect x="74" y="100" width="4" height="30" fill="#c84040" opacity="0.2"/>
      <rect x="124" y="100" width="4" height="30" fill="#c84040" opacity="0.2"/>
      {/* ripples */}
      <ellipse cx="100" cy="110" rx="35" ry="3" fill="none" stroke="#90c0d8" strokeWidth="0.5" opacity="0.4"/>
      <ellipse cx="100" cy="120" rx="45" ry="3" fill="none" stroke="#90c0d8" strokeWidth="0.5" opacity="0.3"/>
      {/* mist */}
      <ellipse cx="40" cy="75" rx="30" ry="8" fill="white" opacity="0.15"/>
      <ellipse cx="160" cy="78" rx="25" ry="6" fill="white" opacity="0.12"/>
    </svg>
  ),

  'Bamboo Grove': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* bamboo stalks */}
      {[25,50,72,128,150,175].map((x,i) => (
        <g key={i}>
          <line x1={x} y1="0" x2={x+(i%2?-2:2)} y2="160" stroke={i%2?"#5a9848":"#4a8838"} strokeWidth={6-i*0.3} strokeLinecap="round"/>
          {/* nodes */}
          <line x1={x-4} y1={30+i*18} x2={x+4} y2={30+i*18} stroke="#4a7830" strokeWidth="1.5"/>
          <line x1={x-4} y1={80+i*8} x2={x+4} y2={80+i*8} stroke="#4a7830" strokeWidth="1.5"/>
        </g>
      ))}
      {/* leaves */}
      {[[35,20],[55,40],[65,15],[140,25],[160,45],[170,10]].map(([x,y],i) => (
        <path key={i} d={`M${x} ${y} Q${x+8} ${y-5} ${x+18} ${y+2}`} stroke="#6aad58" strokeWidth="1.5" fill="#7abc68" opacity="0.4"/>
      ))}
      {/* path between */}
      <path d="M80 160 Q90 130 100 120 Q110 110 120 160" fill="#c8b890" opacity="0.2"/>
      {/* light filtering */}
      <path d="M95 0 L88 100 L98 100Z" fill="#f8f0a0" opacity="0.08"/>
      <path d="M108 0 L112 80 L102 80Z" fill="#f8f0a0" opacity="0.06"/>
    </svg>
  ),

  'Moss Garden': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* moss carpet - layered ellipses */}
      <ellipse cx="100" cy="120" rx="90" ry="35" fill="#5a8848" opacity="0.5"/>
      <ellipse cx="80" cy="115" rx="50" ry="20" fill="#4a7838" opacity="0.4"/>
      <ellipse cx="130" cy="125" rx="40" ry="18" fill="#6a9858" opacity="0.4"/>
      <ellipse cx="60" cy="130" rx="35" ry="15" fill="#5a8848" opacity="0.3"/>
      {/* stones */}
      <ellipse cx="80" cy="100" rx="18" ry="12" fill="#909088" stroke="#787870" strokeWidth="0.8"/>
      <ellipse cx="140" cy="108" rx="12" ry="9" fill="#a0a098" stroke="#787870" strokeWidth="0.8"/>
      <circle cx="55" cy="110" r="8" fill="#989890" stroke="#787870" strokeWidth="0.8"/>
      {/* moss on stones */}
      <path d="M66 95 Q80 88 94 95" fill="#5a8848" opacity="0.4"/>
      <path d="M130 102 Q140 98 150 103" fill="#5a8848" opacity="0.3"/>
      {/* tree trunk */}
      <rect x="155" y="30" width="12" height="85" fill="#6a5040" rx="3"/>
      <circle cx="161" cy="25" r="20" fill="#4a7838" opacity="0.4"/>
      {/* rain drops */}
      {[[40,50],[90,30],[130,45],[160,55],[60,65],[110,60]].map(([x,y],i) => (
        <line key={i} x1={x} y1={y} x2={x-1} y2={y+6} stroke="#88a8b8" strokeWidth="0.6" opacity="0.3" strokeLinecap="round"/>
      ))}
    </svg>
  ),

  'Rice Terraces': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* sky reflection in water */}
      {/* terraces - cascading steps */}
      <path d="M20 40 L180 50 L180 65 L20 55Z" fill="#88b8c8" opacity="0.3" stroke="#6a9a5a" strokeWidth="1"/>
      <path d="M15 55 L185 65 L185 82 L15 72Z" fill="#80b0c0" opacity="0.3" stroke="#6a9a5a" strokeWidth="1"/>
      <path d="M10 72 L190 82 L190 100 L10 90Z" fill="#78a8b8" opacity="0.3" stroke="#5a8a4a" strokeWidth="1"/>
      <path d="M5 90 L195 100 L195 120 L5 110Z" fill="#70a0b0" opacity="0.3" stroke="#5a8a4a" strokeWidth="1"/>
      <path d="M0 110 L200 120 L200 145 L0 135Z" fill="#68989a8" opacity="0.3" stroke="#4a7a3a" strokeWidth="1"/>
      {/* rice plants */}
      {[40,80,120,160].map((x,i) => (
        <g key={i}>
          <line x1={x} y1={52+i*19} x2={x} y2={44+i*19} stroke="#6aad58" strokeWidth="0.8"/>
          <line x1={x+15} y1={54+i*19} x2={x+15} y2={46+i*19} stroke="#6aad58" strokeWidth="0.8"/>
          <line x1={x+30} y1={53+i*19} x2={x+30} y2={45+i*19} stroke="#6aad58" strokeWidth="0.8"/>
        </g>
      ))}
      {/* mountain in background */}
      <path d="M0 40 L60 10 L120 35 L180 5 L200 20 L200 50 L0 40Z" fill="#7090a0" opacity="0.2"/>
      {/* sky */}
      <path d="M80 15 Q90 12 95 15" stroke="#d0d8e0" strokeWidth="0.5" fill="none" opacity="0.3"/>
    </svg>
  ),

  'Mt. Fuji at Dawn': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      <defs>
        <linearGradient id="dawn-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f0a870"/><stop offset="50%" stopColor="#f0c890"/><stop offset="100%" stopColor="#f8e8d0"/></linearGradient>
      </defs>
      {/* dawn sky */}
      <rect x="0" y="0" width="200" height="100" fill="url(#dawn-sky)" opacity="0.4"/>
      {/* lake */}
      <rect x="0" y="100" width="200" height="60" fill="#88b8d0" opacity="0.3"/>
      {/* Fuji */}
      <path d="M60 100 L100 20 L140 100Z" fill="#7088a0" stroke="#607890" strokeWidth="1"/>
      {/* snow cap */}
      <path d="M85 55 L100 20 L115 55 Q108 48 100 50 Q92 48 85 55Z" fill="white" opacity="0.8"/>
      {/* reflection in lake */}
      <path d="M70 100 L100 150 L130 100Z" fill="#7088a0" opacity="0.15"/>
      {/* sun glow */}
      <circle cx="100" cy="25" r="30" fill="#f0a870" opacity="0.1"/>
      {/* cloud wisps */}
      <path d="M30 45 Q50 40 70 45" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
      <path d="M130 50 Q150 45 170 50" stroke="white" strokeWidth="1" fill="none" opacity="0.25"/>
    </svg>
  ),

  'Train Window at Dusk': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      <defs>
        <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c87048"/><stop offset="40%" stopColor="#d89060"/><stop offset="100%" stopColor="#a08098"/></linearGradient>
      </defs>
      {/* window frame */}
      <rect x="25" y="15" width="150" height="130" rx="8" fill="#404040" stroke="#505050" strokeWidth="3"/>
      {/* sky through window */}
      <rect x="30" y="20" width="140" height="120" rx="5" fill="url(#dusk)" opacity="0.7"/>
      {/* distant hills */}
      <path d="M30 95 Q60 70 90 85 Q120 70 150 80 Q165 75 170 80 L170 140 L30 140Z" fill="#506058" opacity="0.4"/>
      {/* blur lines (movement) */}
      <line x1="30" y1="70" x2="170" y2="70" stroke="#d89060" strokeWidth="0.5" opacity="0.2"/>
      <line x1="30" y1="90" x2="170" y2="90" stroke="#a08868" strokeWidth="0.5" opacity="0.2"/>
      {/* power lines */}
      <path d="M30 50 Q100 55 170 48" stroke="#404040" strokeWidth="0.5" opacity="0.3"/>
      {/* faint reflection of passenger */}
      <circle cx="130" cy="75" r="8" fill="white" opacity="0.06"/>
      <path d="M125 85 Q130 82 135 85 L137 105 L123 105Z" fill="white" opacity="0.04"/>
      {/* window ledge */}
      <rect x="25" y="138" width="150" height="6" rx="1" fill="#505050"/>
    </svg>
  ),

  "Mickey and Minnie's Country House": ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* innocent-looking cottage */}
      <path d="M40 80 L100 30 L160 80Z" fill="#c08060" stroke="#a06040" strokeWidth="1.5"/>
      {/* walls */}
      <rect x="50" y="80" width="100" height="60" fill="#f0e8d0" stroke="#c4b898" strokeWidth="1"/>
      {/* round windows - ominous */}
      <circle cx="75" cy="100" r="12" fill="#2a1820" stroke="#a08868" strokeWidth="1.5"/>
      <circle cx="75" cy="100" r="8" fill="#3a2030" opacity="0.8"/>
      <circle cx="125" cy="100" r="12" fill="#2a1820" stroke="#a08868" strokeWidth="1.5"/>
      <circle cx="125" cy="100" r="8" fill="#3a2030" opacity="0.8"/>
      {/* red glow from windows */}
      <circle cx="75" cy="100" r="6" fill="#c84040" opacity="0.15"/>
      <circle cx="125" cy="100" r="6" fill="#c84040" opacity="0.15"/>
      {/* door */}
      <rect x="90" y="110" width="20" height="30" rx="10" fill="#5a3020" stroke="#4a2818" strokeWidth="1"/>
      {/* picket fence */}
      {[25,35,45,155,165,175].map((x,i) => (
        <g key={i}>
          <rect x={x} y="120" width="5" height="25" fill="white" stroke="#d0d0d0" strokeWidth="0.5"/>
          <path d={`M${x} 120 L${x+2.5} 115 L${x+5} 120`} fill="white" stroke="#d0d0d0" strokeWidth="0.5"/>
        </g>
      ))}
      <line x1="20" y1="132" x2="48" y2="132" stroke="white" strokeWidth="2"/>
      <line x1="152" y1="132" x2="180" y2="132" stroke="white" strokeWidth="2"/>
      {/* cheerful chimney with suspicious smoke */}
      <rect x="120" y="35" width="12" height="25" fill="#a07058"/>
      <path d="M126 35 Q130 20 125 10 Q128 15 132 10 Q128 20 130 30" stroke="#606060" strokeWidth="1.5" fill="none" opacity="0.4"/>
    </svg>
  ),

  'Catalina Island': ({ color }) => (
    <svg viewBox="0 0 200 160" fill="none">
      {/* ocean */}
      <rect x="0" y="70" width="200" height="90" fill="#5090b8" opacity="0.25"/>
      {/* waves */}
      <path d="M0 90 Q25 85 50 90 Q75 95 100 90 Q125 85 150 90 Q175 95 200 90" stroke="#70a8c8" strokeWidth="0.8" fill="none" opacity="0.3"/>
      <path d="M0 105 Q25 100 50 105 Q75 110 100 105 Q125 100 150 105 Q175 110 200 105" stroke="#70a8c8" strokeWidth="0.8" fill="none" opacity="0.2"/>
      {/* island */}
      <path d="M50 90 Q60 50 90 40 Q110 35 130 42 Q155 52 150 90Z" fill="#7a9868" stroke="#5a7848" strokeWidth="1"/>
      {/* hills */}
      <path d="M70 70 Q90 42 110 70" fill="#6a8858" opacity="0.5"/>
      <path d="M100 65 Q120 38 140 65" fill="#5a7848" opacity="0.5"/>
      {/* bison on ridge */}
      <g transform="translate(105, 42)">
        <ellipse cx="0" cy="0" rx="8" ry="5" fill="#5a4030"/>
        <ellipse cx="-7" cy="-2" rx="4" ry="3.5" fill="#5a4030"/>
        <line x1="-5" y1="3" x2="-5" y2="7" stroke="#4a3020" strokeWidth="1"/>
        <line x1="-2" y1="3" x2="-2" y2="7" stroke="#4a3020" strokeWidth="1"/>
        <line x1="3" y1="4" x2="3" y2="8" stroke="#4a3020" strokeWidth="1"/>
        <line x1="6" y1="4" x2="6" y2="8" stroke="#4a3020" strokeWidth="1"/>
        {/* tiny horns */}
        <line x1="-10" y1="-3" x2="-12" y2="-6" stroke="#4a3020" strokeWidth="0.8"/>
        <line x1="-8" y1="-4" x2="-7" y2="-7" stroke="#4a3020" strokeWidth="0.8"/>
      </g>
      {/* sun */}
      <circle cx="170" cy="30" r="15" fill="#f0d070" opacity="0.3"/>
    </svg>
  ),
};

export default function CardIllustration({ title, color }) {
  const Illustration = illustrations[title];
  if (!Illustration) return null;

  return (
    <div className="card-illustration">
      <Illustration color={color} />
    </div>
  );
}
