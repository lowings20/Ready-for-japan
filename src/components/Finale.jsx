import { useState, useEffect } from 'react';

export default function Finale() {
  const [phase, setPhase] = useState(0); // 0: black, 1: question, 2: quote

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1500);
    const t2 = setTimeout(() => setPhase(2), 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="finale">
      {/* Question */}
      <div className={`finale-question ${phase >= 1 ? 'finale-show' : ''} ${phase >= 2 ? 'finale-up' : ''}`}>
        <p>Where shall our next adventure be?</p>
      </div>

      {/* Alice & Cheshire Cat quote */}
      <div className={`finale-alice ${phase >= 2 ? 'finale-show' : ''}`}>
        <div className="finale-alice-inner">
          {/* Cheshire cat grin */}
          <div className="finale-cat-grin" aria-hidden="true">
            <svg viewBox="0 0 120 60" width="80" height="40">
              {/* cat eyes */}
              <ellipse cx="35" cy="18" rx="8" ry="10" fill="#2a2a2a" />
              <ellipse cx="85" cy="18" rx="8" ry="10" fill="#2a2a2a" />
              <ellipse cx="35" cy="18" rx="5" ry="9" fill="#7ab860" />
              <ellipse cx="85" cy="18" rx="5" ry="9" fill="#7ab860" />
              <ellipse cx="35" cy="18" rx="2" ry="8" fill="#111" />
              <ellipse cx="85" cy="18" rx="2" ry="8" fill="#111" />
              <circle cx="33" cy="14" r="2" fill="white" opacity="0.5" />
              <circle cx="83" cy="14" r="2" fill="white" opacity="0.5" />
              {/* wide grin */}
              <path d="M15 38 Q30 32 40 36 Q50 40 60 40 Q70 40 80 36 Q90 32 105 38"
                stroke="#e8e0d8" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* teeth hint */}
              <path d="M35 36 L37 40 L39 36" fill="#e8e0d8" opacity="0.6" />
              <path d="M55 39 L57 43 L59 39" fill="#e8e0d8" opacity="0.6" />
              <path d="M75 38 L77 42 L79 38" fill="#e8e0d8" opacity="0.6" />
            </svg>
          </div>

          <blockquote className="finale-blockquote">
            <p className="finale-dialogue">
              <span className="finale-line">"One day Alice came to a fork in the road and saw a Cheshire cat in a tree.</span>
              <span className="finale-line">'Which road do I take?' she asked.</span>
              <span className="finale-line">'Where do you want to go?' was his response.</span>
              <span className="finale-line">'I don't know,' Alice answered.</span>
              <span className="finale-line">'Then,' said the cat, 'it doesn't matter.'"</span>
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
