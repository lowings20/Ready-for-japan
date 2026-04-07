import CardIllustration from './CardIllustration';

export default function Room({ room, onBack, onSelectCard, viewedCards }) {
  return (
    <div className="room-view">
      <button className="back-btn" onClick={onBack}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Bag End
      </button>

      <div className="room-header" style={{ '--room-color': room.color }}>
        <span className="room-header-emoji">{room.emoji}</span>
        <h2 className="room-title">{room.name}</h2>
        <p className="room-sign-large">"{room.sign}"</p>
      </div>

      <div className="card-grid">
        {room.cards.map((card, index) => {
          const viewed = viewedCards && viewedCards.has(`${room.id}:${card.title}`);
          return (
            <button
              key={index}
              className={`card-preview ${card.easterEgg ? 'easter-egg' : ''} ${viewed ? 'card-viewed' : ''}`}
              onClick={() => onSelectCard(card)}
              style={{
                '--room-color': room.color,
                animationDelay: `${index * 0.08}s`,
              }}
            >
              <CardIllustration title={card.title} color={room.color} />
              <div className="card-preview-content">
                <span className="card-title-jp">{card.titleJp}</span>
                <h3 className="card-title">{card.title}</h3>
              </div>
              {card.easterEgg && !viewed && <span className="egg-sparkle">&#10026;</span>}
              {viewed && <span className="card-viewed-check">&#10003;</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
