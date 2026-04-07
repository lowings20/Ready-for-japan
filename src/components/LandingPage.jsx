import { useState } from 'react';
import { playWalkTheLine } from '../audio/walkTheLine';

export default function LandingPage({ onEnter }) {
  const [doorOpen, setDoorOpen] = useState(false);

  const handleClick = () => {
    setDoorOpen(true);
    playWalkTheLine();
    setTimeout(onEnter, 800);
  };

  return (
    <div className="landing">
      <div className="landing-stars">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <h1 className="landing-title">You're going on an adventure</h1>
      <p className="landing-subtitle">tap the door</p>

      <button
        className={`green-door ${doorOpen ? 'door-opening' : ''}`}
        onClick={handleClick}
        aria-label="Enter Bag End"
      >
        <div className="door-frame">
          <div className="door-panel">
            <div className="door-arch" />
            <div className="door-planks">
              <div className="plank" />
              <div className="plank" />
              <div className="plank" />
              <div className="plank" />
            </div>
            <div className="door-handle" />
            <div className="door-mark">
              <svg viewBox="0 0 40 40" width="28" height="28">
                <path
                  d="M20 4 L26 16 L38 18 L30 26 L32 38 L20 32 L8 38 L10 26 L2 18 L14 16 Z"
                  fill="none"
                  stroke="#7cb8d4"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
              </svg>
            </div>
          </div>
        </div>
      </button>

      <p className="landing-quote">"It's a dangerous business, going out your door."</p>
    </div>
  );
}
