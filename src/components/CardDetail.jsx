import { useState, useEffect, useRef, useCallback } from 'react';
import CardIllustration from './CardIllustration';

export default function CardDetail({ room, initialCardIndex, viewedCards, onMarkViewed, onGoToRoom, onGoHome }) {
  const [currentIndex, setCurrentIndex] = useState(initialCardIndex);
  const [flipped, setFlipped] = useState(false);
  const [slideDir, setSlideDir] = useState(null); // 'left' | 'right' | null
  const [showSwipeTip, setShowSwipeTip] = useState(false);
  const [showPillTip, setShowPillTip] = useState(false);
  const [pillPressing, setPillPressing] = useState(false);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const pillTimer = useRef(null);
  const cards = room.cards;
  const card = cards[currentIndex];
  const totalCards = cards.length;

  // Show swipe tutorial on first card view ever
  useEffect(() => {
    const seen = localStorage.getItem('tip_swipe');
    if (!seen) {
      const t = setTimeout(() => setShowSwipeTip(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  // Navigate to a card by index
  const goToCard = useCallback((newIndex, direction) => {
    if (newIndex < 0 || newIndex >= totalCards) return;
    setSlideDir(direction);
    setFlipped(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      onMarkViewed(cards[newIndex]);
      window.scrollTo(0, 0);
      setTimeout(() => setSlideDir(null), 50);
    }, 250);
  }, [totalCards, cards, onMarkViewed]);

  const goNext = useCallback(() => {
    if (currentIndex < totalCards - 1) {
      goToCard(currentIndex + 1, 'left');
      // Dismiss swipe tip & show pill tip
      if (showSwipeTip) {
        setShowSwipeTip(false);
        localStorage.setItem('tip_swipe', '1');
        if (!localStorage.getItem('tip_pill')) {
          setTimeout(() => setShowPillTip(true), 800);
        }
      }
    }
  }, [currentIndex, totalCards, goToCard, showSwipeTip]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) goToCard(currentIndex - 1, 'right');
  }, [currentIndex, goToCard]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  // Swipe handling
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only swipe if horizontal movement > vertical and > threshold
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) goNext();
      else goPrev();
    }
  };

  // Long-press on pill
  const onPillDown = (e) => {
    e.preventDefault();
    setPillPressing(true);
    pillTimer.current = setTimeout(() => {
      setPillPressing(false);
      localStorage.setItem('tip_pill', '1');
      setShowPillTip(false);
      onGoHome();
    }, 600);
  };

  const onPillUp = () => {
    clearTimeout(pillTimer.current);
    if (pillPressing) {
      setPillPressing(false);
      onGoToRoom();
    }
  };

  const onPillLeave = () => {
    clearTimeout(pillTimer.current);
    setPillPressing(false);
  };

  const dismissSwipeTip = () => {
    setShowSwipeTip(false);
    localStorage.setItem('tip_swipe', '1');
  };

  const dismissPillTip = () => {
    setShowPillTip(false);
    localStorage.setItem('tip_pill', '1');
  };

  const viewedCount = cards.filter((c) =>
    viewedCards.has(`${room.id}:${c.title}`)
  ).length;

  return (
    <div
      className="card-detail-view"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Floating pill button */}
      <div className="card-nav-pill-wrap">
        <button
          className={`card-nav-pill ${pillPressing ? 'pill-pressing' : ''}`}
          onMouseDown={onPillDown}
          onMouseUp={onPillUp}
          onMouseLeave={onPillLeave}
          onTouchStart={onPillDown}
          onTouchEnd={onPillUp}
          onTouchCancel={onPillLeave}
          style={{ '--room-color': room.color }}
        >
          <span className="pill-emoji">{room.emoji}</span>
          <span className="pill-count">{viewedCount}/{totalCards}</span>
          <span className="pill-label">{room.name}</span>
        </button>

        {/* Pill tutorial */}
        {showPillTip && (
          <div className="tutorial-tip tip-below" onClick={dismissPillTip}>
            <p><strong>tap</strong> to return to room</p>
            <p><strong>hold</strong> to go to Bag End</p>
            <span className="tip-dismiss">got it</span>
          </div>
        )}
      </div>

      {/* Swipe tutorial */}
      {showSwipeTip && (
        <div className="tutorial-overlay" onClick={dismissSwipeTip}>
          <div className="tutorial-tip tip-center">
            <div className="tip-swipe-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M8 24H40M40 24L32 16M40 24L32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                <path d="M40 24H8M8 24L16 16M8 24L16 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p>Swipe left or right to browse cards</p>
            <span className="tip-dismiss">got it</span>
          </div>
        </div>
      )}

      {/* Card content with slide animation */}
      <div className={`card-slide-container ${slideDir ? `slide-out-${slideDir}` : 'slide-in'}`}>
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

      {/* Progress dots */}
      <div className="card-progress-dots">
        {cards.map((c, i) => {
          const isViewed = viewedCards.has(`${room.id}:${c.title}`);
          const isCurrent = i === currentIndex;
          return (
            <button
              key={i}
              className={`progress-dot ${isCurrent ? 'dot-current' : ''} ${isViewed ? 'dot-viewed' : ''}`}
              style={{ '--room-color': room.color }}
              onClick={(e) => {
                e.stopPropagation();
                if (i !== currentIndex) goToCard(i, i > currentIndex ? 'left' : 'right');
              }}
              aria-label={`Card ${i + 1}: ${c.title}${isViewed ? ' (viewed)' : ''}`}
            />
          );
        })}
      </div>
    </div>
  );
}
