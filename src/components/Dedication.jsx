import { useEffect, useState } from 'react';

// Decorative Tengwar-inspired SVG calligraphy
function TengwarLine({ flip }) {
  return (
    <svg viewBox="0 0 300 40" className="tengwar-svg" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
      {/* Flowing elvish-inspired script */}
      <path d="M20 28 Q25 10 30 20 Q32 28 36 12 L38 12 Q36 24 40 28 Q42 10 48 18 Q50 28 54 15"
        stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M58 25 Q60 12 64 20 Q66 28 70 14 Q74 8 76 18 L78 28 Q80 15 84 22 Q86 28 90 12"
        stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="72" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
      <path d="M96 28 Q98 8 102 16 Q106 28 110 10 L112 18 Q114 28 118 14 Q120 8 124 22"
        stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="108" cy="8" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="120" cy="6" r="1" fill="currentColor" opacity="0.4" />
      <path d="M130 20 Q134 8 138 22 Q140 28 144 10 Q148 6 150 18 Q152 28 156 14 L158 20"
        stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M164 28 Q168 12 172 24 Q174 28 176 10 Q180 6 182 16 Q184 28 188 18"
        stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="178" cy="6" r="1.5" fill="currentColor" opacity="0.5" />
      {/* decorative curves and tehtar */}
      <path d="M194 22 Q198 8 202 18 Q206 28 210 12 L214 22 Q218 10 222 20"
        stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M228 28 Q232 14 236 24 Q240 28 244 10 Q246 6 250 20 Q254 28 258 16"
        stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="242" cy="8" r="1" fill="currentColor" opacity="0.4" />
      <path d="M264 22 Q268 10 272 22 Q274 28 278 16 L280 22"
        stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Underline flourish */}
      <path d="M30 34 Q150 30 280 34" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.3" />
    </svg>
  );
}

export default function Dedication({ onComplete }) {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 100);
    const fadeTimer = setTimeout(() => setFading(true), 6000);
    const doneTimer = setTimeout(() => onComplete(), 7000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`dedication ${visible ? 'dedication-visible' : ''} ${fading ? 'dedication-fading' : ''}`}
      onClick={() => { setFading(true); setTimeout(onComplete, 800); }}
    >
      <div className="dedication-inner">
        <TengwarLine />

        <div className="dedication-star" aria-hidden="true">
          <svg viewBox="0 0 40 40" width="24" height="24">
            <path d="M20 2 L23 15 L36 16 L26 24 L28 37 L20 30 L12 37 L14 24 L4 16 L17 15Z"
              fill="none" stroke="#c4a265" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>

        <p className="dedication-to">To my favorite black cat</p>
        <p className="dedication-respect">(with respects to JRRT)</p>

        <div className="dedication-divider" />

        <blockquote className="dedication-quote">
          <p>
            "It's a dangerous business, going out of your door.
            You step into the road, and if you don't keep your feet,
            there is no knowing where you might be swept off to."
          </p>
        </blockquote>

        <p className="dedication-signature">— Luke</p>

        <p className="dedication-tool">Here's a little tool to get you accustomed to what you might find on your trip</p>

        <TengwarLine flip />
      </div>
    </div>
  );
}
