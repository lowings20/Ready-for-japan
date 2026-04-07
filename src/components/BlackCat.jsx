import { useState, useEffect, useCallback, useRef } from 'react';

const CAT_STATES = {
  HIDDEN: 'hidden',
  PEEKING: 'peeking',
  RUNNING: 'running',
  MODAL: 'modal',
  SPINNING: 'spinning',
  RESULT: 'result',
};

// SVG cat components
function PeekingCat({ side }) {
  return (
    <svg viewBox="0 0 60 80" width="100" height="132" style={{ transform: side === 'left' ? 'scaleX(1)' : 'scaleX(-1)' }}>
      {/* ear left */}
      <path d="M12 20 L8 2 L22 14Z" fill="#1a1a1a" stroke="#111" strokeWidth="0.8"/>
      <path d="M14 18 L11 6 L20 15Z" fill="#3a2028" opacity="0.5"/>
      {/* ear right */}
      <path d="M30 14 L38 0 L40 18Z" fill="#1a1a1a" stroke="#111" strokeWidth="0.8"/>
      <path d="M32 15 L37 4 L38 17Z" fill="#3a2028" opacity="0.5"/>
      {/* head */}
      <ellipse cx="25" cy="32" rx="20" ry="18" fill="#1a1a1a"/>
      {/* face details */}
      {/* eyes */}
      <ellipse cx="18" cy="30" rx="4" ry="5" fill="#4a8" stroke="#111" strokeWidth="0.5">
        <animate attributeName="ry" values="5;0.5;5" dur="3s" repeatCount="indefinite" begin="2s"/>
      </ellipse>
      <ellipse cx="32" cy="30" rx="4" ry="5" fill="#4a8" stroke="#111" strokeWidth="0.5">
        <animate attributeName="ry" values="5;0.5;5" dur="3s" repeatCount="indefinite" begin="2s"/>
      </ellipse>
      {/* pupils */}
      <ellipse cx="18" cy="30" rx="2" ry="4.5" fill="#111">
        <animate attributeName="ry" values="4.5;0.3;4.5" dur="3s" repeatCount="indefinite" begin="2s"/>
      </ellipse>
      <ellipse cx="32" cy="30" rx="2" ry="4.5" fill="#111">
        <animate attributeName="ry" values="4.5;0.3;4.5" dur="3s" repeatCount="indefinite" begin="2s"/>
      </ellipse>
      {/* eye shine */}
      <circle cx="16" cy="28" r="1.2" fill="white" opacity="0.7"/>
      <circle cx="30" cy="28" r="1.2" fill="white" opacity="0.7"/>
      {/* nose */}
      <path d="M24 35 L25 37 L26 35Z" fill="#3a2830"/>
      {/* whiskers */}
      <line x1="10" y1="33" x2="-2" y2="30" stroke="#444" strokeWidth="0.5"/>
      <line x1="10" y1="36" x2="-2" y2="37" stroke="#444" strokeWidth="0.5"/>
      <line x1="10" y1="39" x2="-2" y2="42" stroke="#444" strokeWidth="0.5"/>
      <line x1="40" y1="33" x2="52" y2="30" stroke="#444" strokeWidth="0.5"/>
      <line x1="40" y1="36" x2="52" y2="37" stroke="#444" strokeWidth="0.5"/>
      <line x1="40" y1="39" x2="52" y2="42" stroke="#444" strokeWidth="0.5"/>
      {/* body peeking */}
      <path d="M8 48 Q25 42 42 48 L42 80 L8 80Z" fill="#1a1a1a"/>
      {/* paw */}
      <ellipse cx="15" cy="68" rx="6" ry="4" fill="#1a1a1a" stroke="#222" strokeWidth="0.5"/>
      <path d="M11 67 L12 65 M14 66 L14 64 M17 67 L18 65" stroke="#333" strokeWidth="0.5"/>
    </svg>
  );
}

function RunningCat({ frame }) {
  const legOffset = frame % 2 === 0;
  return (
    <svg viewBox="0 0 120 60" width="160" height="80">
      {/* tail */}
      <path d={`M5 18 Q${legOffset ? -5 : 0} ${legOffset ? 5 : 10} ${legOffset ? 2 : -3} ${legOffset ? 0 : 5}`}
        stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* body */}
      <ellipse cx="45" cy="25" rx="30" ry="14" fill="#1a1a1a"/>
      {/* head */}
      <ellipse cx="82" cy="20" rx="14" ry="12" fill="#1a1a1a"/>
      {/* ears */}
      <path d="M74 12 L70 0 L78 8Z" fill="#1a1a1a"/>
      <path d="M86 8 L90 -2 L92 10Z" fill="#1a1a1a"/>
      <path d="M75 11 L72 3 L77 9Z" fill="#3a2028" opacity="0.4"/>
      <path d="M87 9 L89 1 L91 10Z" fill="#3a2028" opacity="0.4"/>
      {/* eye */}
      <ellipse cx="88" cy="18" rx="2.5" ry="3" fill="#4a8"/>
      <ellipse cx="88" cy="18" rx="1.2" ry="2.8" fill="#111"/>
      <circle cx="87" cy="17" r="0.8" fill="white" opacity="0.6"/>
      {/* nose */}
      <path d="M94 21 L95 23 L96 21Z" fill="#3a2830"/>
      {/* whiskers */}
      <line x1="95" y1="20" x2="108" y2="17" stroke="#444" strokeWidth="0.4"/>
      <line x1="95" y1="22" x2="108" y2="22" stroke="#444" strokeWidth="0.4"/>
      <line x1="95" y1="24" x2="108" y2="27" stroke="#444" strokeWidth="0.4"/>
      {/* legs */}
      <line x1="30" y1="35" x2={legOffset ? 22 : 35} y2="55" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round"/>
      <line x1="40" y1="36" x2={legOffset ? 48 : 35} y2="55" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round"/>
      <line x1="55" y1="35" x2={legOffset ? 48 : 60} y2="55" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round"/>
      <line x1="65" y1="34" x2={legOffset ? 72 : 60} y2="55" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round"/>
      {/* paw pads */}
      <ellipse cx={legOffset ? 22 : 35} cy="56" rx="4" ry="2.5" fill="#1a1a1a"/>
      <ellipse cx={legOffset ? 48 : 35} cy="56" rx="4" ry="2.5" fill="#1a1a1a"/>
      <ellipse cx={legOffset ? 48 : 60} cy="56" rx="4" ry="2.5" fill="#1a1a1a"/>
      <ellipse cx={legOffset ? 72 : 60} cy="56" rx="4" ry="2.5" fill="#1a1a1a"/>
    </svg>
  );
}

function SugarSpinner({ onResult }) {
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [done, setDone] = useState(false);

  const spin = useCallback(() => {
    if (spinning) return;
    setSpinning(true);
    setDone(false);

    const accepted = Math.random() < 0.5;
    // Wheel rotates CW; pointer is fixed at top. The sector at (360 - θ) lands under pointer.
    // Green/YES is the right half, Red/NO is the left half.
    const targetAngle = accepted
      ? 360 * 6 + 195 + Math.random() * 150  // pointer lands on green/YES (right half)
      : 360 * 6 + 15 + Math.random() * 150;  // pointer lands on red/NO (left half)

    let current = 0;
    const duration = 3000;
    const start = performance.now();

    function animate(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      current = eased * targetAngle;
      setAngle(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        setDone(true);
        setTimeout(() => onResult(accepted), 800);
      }
    }
    requestAnimationFrame(animate);
  }, [spinning, onResult]);

  // Auto-spin on mount
  useEffect(() => {
    const t = setTimeout(spin, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="sugar-spinner-container">
      <div className="spinner-label">The wheel decides...</div>
      <div className="spinner-wheel-wrapper">
        {/* pointer */}
        <div className="spinner-pointer">&#9660;</div>
        <svg viewBox="0 0 200 200" width="180" height="180" style={{ transform: `rotate(${angle}deg)`, transition: 'none' }}>
          {/* accepted zone - left half (50%) */}
          <path d="M100 100 L100 5 A95 95 0 0 1 100 195Z" fill="#50a868" stroke="#388848" strokeWidth="1"/>
          {/* declined zone - right half (50%) */}
          <path d="M100 100 L100 195 A95 95 0 0 1 100 5Z" fill="#c85050" stroke="#a03838" strokeWidth="1"/>
          {/* text */}
          <text x="145" y="95" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">YES</text>
          <text x="38" y="95" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">NO</text>
          {/* center */}
          <circle cx="100" cy="100" r="12" fill="white" stroke="#ddd" strokeWidth="1"/>
          <text x="100" y="104" textAnchor="middle" fontSize="8" fill="#333" fontFamily="serif">&#128049;</text>
        </svg>
      </div>
      {done && <div className="spinner-done-hint">...</div>}
    </div>
  );
}

const acceptedMessages = [
  {
    icon: '🍬',
    title: 'Sugar accepted!',
    text: 'The cat cautiously licks the sugar from your palm, purrs once — barely audible — then vanishes into the shadows. You have been chosen.',
    button: 'Cherish this moment',
  },
  {
    icon: '😻',
    title: 'She likes you!',
    text: 'The cat takes the sugar, eats it with suspicious enthusiasm, then headbutts your ankle. You now have a cat. You did not plan for this.',
    button: 'I have a cat now',
  },
  {
    icon: '🎀',
    title: 'A gracious acceptance.',
    text: 'The cat accepts the sugar with the dignity of a queen receiving tribute. She blinks slowly at you. In cat, this means "I love you." Don\'t cry.',
    button: 'I\'m not crying',
  },
  {
    icon: '🌙',
    title: 'Sugar... consumed.',
    text: 'The cat eats the sugar, sits perfectly still for ten seconds, then does a tiny spin. No one else saw it. This was just for you.',
    button: 'Our secret',
  },
  {
    icon: '🐾',
    title: 'Accepted with conditions.',
    text: 'The cat takes the sugar but leaves a single paw print on your hand. You check later — it\'s still there. It will always be there.',
    button: 'I see the paw print',
  },
  {
    icon: '✨',
    title: 'The sugar vanishes.',
    text: 'You blink and the sugar is gone. The cat is licking her lips. She looks at you like, "Sugar? What sugar? I don\'t even like sugar." Incredible technique.',
    button: 'Respect',
  },
  {
    icon: '🎵',
    title: 'A purr!',
    text: 'The cat eats the sugar and begins purring at a frequency that makes your bones feel warm. Scientists have not explained this. They don\'t need to.',
    button: 'Warm bones forever',
  },
  {
    icon: '👑',
    title: 'You have been deemed worthy.',
    text: 'The cat takes the sugar, then drops a small dead leaf at your feet. This is a gift. This is the highest honor. You are now part of the pride.',
    button: 'Long live the queen',
  },
];

const declinedMessages = [
  {
    icon: '😾',
    title: 'Sugar declined.',
    text: 'The cat sniffs your offering, makes direct eye contact, and slowly pushes it off the table with one paw. It was never about the sugar.',
    button: 'Accept your fate',
  },
  {
    icon: '🐈‍⬛',
    title: 'Hard pass.',
    text: 'The cat looked at the sugar. Looked at you. Looked at the sugar again. Then turned around and showed you her entire butt. Meeting adjourned.',
    button: 'Fair enough',
  },
  {
    icon: '😤',
    title: 'Not today.',
    text: 'The cat raises one paw as if to accept, then gently places it on your hand and pushes it away. The rejection is tender. Somehow that\'s worse.',
    button: 'Ouch, softly',
  },
  {
    icon: '🫥',
    title: 'You have been perceived.',
    text: 'The cat stares through you like you are a window and there is a bird on the other side. The sugar is irrelevant. You are irrelevant. The bird is everything.',
    button: 'I am a window',
  },
  {
    icon: '💅',
    title: 'Declined with prejudice.',
    text: 'The cat begins grooming herself mid-offer. She has never been less interested in anything in her entire nine lives. The audacity of sugar. Please.',
    button: 'I\'ll see myself out',
  },
  {
    icon: '🚶',
    title: 'She left.',
    text: 'The cat stood up, stretched luxuriously, and walked away at exactly the speed that communicates "I could stay but I am choosing not to." Elite pacing.',
    button: 'Gone but not forgotten',
  },
  {
    icon: '😑',
    title: 'A slow blink. Then nothing.',
    text: 'The cat slow-blinks at you, which normally means love, but in this context clearly means "I acknowledge your effort and find it adorable but no." Devastating.',
    button: 'Devastated, but okay',
  },
  {
    icon: '🪑',
    title: 'She sat on it.',
    text: 'The cat walked over to the sugar, sniffed it once, and then sat directly on top of it. It belongs to her now. Not to eat. Just to own. This is the way.',
    button: 'This is the way',
  },
];

export default function BlackCat() {
  const [state, setState] = useState(CAT_STATES.HIDDEN);
  const [peekSide, setPeekSide] = useState('left');
  const [runFrame, setRunFrame] = useState(0);
  const [runPosition, setRunPosition] = useState(-100);
  const [result, setResult] = useState(null);
  const runTimerRef = useRef(null);
  const peekTimerRef = useRef(null);
  const frameRef = useRef(null);

  // Schedule peeks
  const schedulePeek = useCallback(() => {
    const delay = 10000 + Math.random() * 5000; // 10-15 seconds
    peekTimerRef.current = setTimeout(() => {
      if (state === CAT_STATES.HIDDEN) {
        setPeekSide(Math.random() > 0.5 ? 'left' : 'right');
        setState(CAT_STATES.PEEKING);
        // Hide after 2-3 seconds
        setTimeout(() => {
          setState(prev => prev === CAT_STATES.PEEKING ? CAT_STATES.HIDDEN : prev);
        }, 2000 + Math.random() * 1000);
      }
    }, delay);
  }, [state]);

  // Schedule runs
  const scheduleRun = useCallback(() => {
    const delay = 90000 + Math.random() * 60000; // 1.5-2.5 minutes
    runTimerRef.current = setTimeout(() => {
      if (state === CAT_STATES.HIDDEN || state === CAT_STATES.PEEKING) {
        setState(CAT_STATES.RUNNING);
        setRunPosition(-100);
      }
    }, delay);
  }, [state]);

  // Peek cycle
  useEffect(() => {
    if (state === CAT_STATES.HIDDEN) {
      schedulePeek();
    }
    return () => clearTimeout(peekTimerRef.current);
  }, [state, schedulePeek]);

  // Run cycle
  useEffect(() => {
    if (state === CAT_STATES.HIDDEN) {
      scheduleRun();
    }
    return () => clearTimeout(runTimerRef.current);
  }, [state, scheduleRun]);

  // Run animation
  useEffect(() => {
    if (state !== CAT_STATES.RUNNING) {
      cancelAnimationFrame(frameRef.current);
      return;
    }

    let frame = 0;
    const screenWidth = window.innerWidth;
    let pos = -100;

    function animate() {
      frame++;
      pos += 4;
      setRunPosition(pos);
      if (frame % 4 === 0) setRunFrame(f => f + 1);

      if (pos > screenWidth + 100) {
        setState(CAT_STATES.HIDDEN);
        return;
      }
      frameRef.current = requestAnimationFrame(animate);
    }
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [state]);

  const handleCatClick = (e) => {
    e.stopPropagation();
    setState(CAT_STATES.MODAL);
    setResult(null);
  };

  const handleYes = () => {
    setState(CAT_STATES.SPINNING);
  };

  const handleNo = () => {
    setState(CAT_STATES.HIDDEN);
  };

  const handleResult = (accepted) => {
    setResult({
      accepted,
      message: accepted
        ? acceptedMessages[Math.floor(Math.random() * acceptedMessages.length)]
        : declinedMessages[Math.floor(Math.random() * declinedMessages.length)],
    });
    setState(CAT_STATES.RESULT);
  };

  const handleClose = () => {
    setState(CAT_STATES.HIDDEN);
    setResult(null);
  };

  return (
    <>
      {/* PEEKING CAT */}
      {state === CAT_STATES.PEEKING && (
        <div
          className={`cat-peek cat-peek-${peekSide}`}
          onClick={handleCatClick}
        >
          <PeekingCat side={peekSide} />
        </div>
      )}

      {/* RUNNING CAT */}
      {state === CAT_STATES.RUNNING && (
        <div
          className="cat-run"
          style={{ left: `${runPosition}px` }}
          onClick={handleCatClick}
        >
          <RunningCat frame={runFrame} />
        </div>
      )}

      {/* MODAL */}
      {(state === CAT_STATES.MODAL || state === CAT_STATES.SPINNING || state === CAT_STATES.RESULT) && (
        <div className="cat-modal-overlay" onClick={handleClose}>
          <div className="cat-modal" onClick={e => e.stopPropagation()}>
            {state === CAT_STATES.MODAL && (
              <>
                <div className="cat-modal-cat">
                  <svg viewBox="0 0 80 90" width="80" height="90">
                    {/* sitting cat */}
                    <path d="M20 30 L15 5 L30 22Z" fill="#1a1a1a"/>
                    <path d="M55 22 L60 3 L65 28Z" fill="#1a1a1a"/>
                    <path d="M22 28 L17 8 L28 22Z" fill="#3a2028" opacity="0.4"/>
                    <path d="M56 22 L59 6 L63 26Z" fill="#3a2028" opacity="0.4"/>
                    <ellipse cx="40" cy="40" rx="22" ry="20" fill="#1a1a1a"/>
                    {/* eyes - big and hopeful */}
                    <ellipse cx="32" cy="38" rx="5" ry="6" fill="#4a8" stroke="#111" strokeWidth="0.5"/>
                    <ellipse cx="50" cy="38" rx="5" ry="6" fill="#4a8" stroke="#111" strokeWidth="0.5"/>
                    <ellipse cx="32" cy="38" rx="2.5" ry="5.5" fill="#111"/>
                    <ellipse cx="50" cy="38" rx="2.5" ry="5.5" fill="#111"/>
                    <circle cx="30" cy="35" r="2" fill="white" opacity="0.7"/>
                    <circle cx="48" cy="35" r="2" fill="white" opacity="0.7"/>
                    {/* nose */}
                    <path d="M39 45 L40 47 L41 45Z" fill="#3a2830"/>
                    {/* mouth - hopeful */}
                    <path d="M37 48 Q40 51 43 48" stroke="#333" strokeWidth="0.6" fill="none"/>
                    {/* whiskers */}
                    <line x1="28" y1="43" x2="12" y2="40" stroke="#444" strokeWidth="0.5"/>
                    <line x1="28" y1="46" x2="12" y2="47" stroke="#444" strokeWidth="0.5"/>
                    <line x1="54" y1="43" x2="70" y2="40" stroke="#444" strokeWidth="0.5"/>
                    <line x1="54" y1="46" x2="70" y2="47" stroke="#444" strokeWidth="0.5"/>
                    {/* body */}
                    <path d="M22 55 Q40 50 58 55 Q60 75 40 80 Q20 75 22 55Z" fill="#1a1a1a"/>
                    {/* paws */}
                    <ellipse cx="30" cy="78" rx="7" ry="4" fill="#1a1a1a" stroke="#222" strokeWidth="0.5"/>
                    <ellipse cx="50" cy="78" rx="7" ry="4" fill="#1a1a1a" stroke="#222" strokeWidth="0.5"/>
                    {/* tail curl */}
                    <path d="M58 68 Q72 65 70 50 Q68 42 62 45" stroke="#1a1a1a" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="cat-modal-title">Offer sugar?</h3>
                <p className="cat-modal-subtitle">A small black cat is staring at you with enormous eyes.</p>
                <div className="cat-modal-buttons">
                  <button className="cat-btn cat-btn-yes" onClick={handleYes}>
                    Yes, offer sugar
                  </button>
                  <button className="cat-btn cat-btn-no" onClick={handleNo}>
                    Walk away slowly
                  </button>
                </div>
              </>
            )}

            {state === CAT_STATES.SPINNING && (
              <SugarSpinner onResult={handleResult} />
            )}

            {state === CAT_STATES.RESULT && result && (
              <div className="cat-result">
                <div className="cat-result-icon">{result.message.icon}</div>
                <h3 className={`cat-result-title ${result.accepted ? 'cat-result-accepted' : 'cat-result-declined'}`}>
                  {result.message.title}
                </h3>
                <p className="cat-result-text">{result.message.text}</p>
                <button className="cat-btn cat-btn-close" onClick={handleClose}>
                  {result.message.button}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
