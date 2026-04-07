import { useState } from 'react';
import CardIllustration from './CardIllustration';

export default function CardDetail({ card, room, onBack }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card-detail-view">
      <button className="back-btn" onClick={onBack}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {room.name}
      </button>

      <div className="card-scene" onClick={() => setFlipped(!flipped)}>
        <div className={`card-flipper ${flipped ? 'is-flipped' : ''}`}>
          {/* FRONT */}
          <div className="card-face card-front" style={{ '--room-color': room.color }}>
            <div className="card-front-inner">
              {card.easterEgg && <div className="egg-badge">hidden gem</div>}
              <CardIllustration title={card.title} color={room.color} />
              <span className="card-detail-jp">{card.titleJp}</span>
              <h2 className="card-detail-title">{card.title}</h2>
              <div className="card-divider" />
              <p className="card-detail-desc">{card.front}</p>
              <p className="card-tap-hint">tap to flip</p>
            </div>
          </div>

          {/* BACK */}
          <div className="card-face card-back" style={{ '--room-color': room.color }}>
            <div className="card-back-inner">
              <h3 className="card-back-title">{card.title}</h3>

              <div className="card-section">
                <span className="card-label">What it is</span>
                <p>{card.whatItIs}</p>
              </div>

              <div className="card-section">
                <span className="card-label">In Japanese culture</span>
                <p>{card.culture}</p>
              </div>

              <div className="card-section">
                <span className="card-label">You've seen this before</span>
                <p>{card.seenBefore}</p>
              </div>

              <div className="card-quote-section">
                <p className="card-quote-jp">{card.quote}</p>
                <p className="card-quote-romaji">{card.romaji}</p>
                <p className="card-quote-en">{card.translation}</p>
              </div>

              <p className="card-tap-hint">tap to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
