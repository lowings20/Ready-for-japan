import { useState, useCallback, useMemo } from 'react';
import { rooms } from './data/cards';
import LandingPage from './components/LandingPage';
import Hallway from './components/Hallway';
import Room from './components/Room';
import CardDetail from './components/CardDetail';
import BlackCat from './components/BlackCat';
import Dedication from './components/Dedication';
import Finale from './components/Finale';
import './App.css';

function App() {
  const [view, setView] = useState('landing');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [viewedCards, setViewedCards] = useState(new Set());
  const [openedRooms, setOpenedRooms] = useState(() => {
    try {
      const saved = localStorage.getItem('openedRooms');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch { return new Set(); }
  });

  const handleOpenRoom = useCallback((roomId) => {
    setOpenedRooms(prev => {
      const next = new Set(prev);
      next.add(roomId);
      localStorage.setItem('openedRooms', JSON.stringify([...next]));
      return next;
    });
  }, []);

  const totalCards = useMemo(() => rooms.reduce((sum, r) => sum + r.cards.length, 0), []);

  const navigate = useCallback((nextView, room = null, card = null) => {
    setTransitioning(true);
    setTimeout(() => {
      setView(nextView);
      setSelectedRoom(room);
      setSelectedCard(card);
      window.scrollTo(0, 0);
      setTimeout(() => setTransitioning(false), 50);
    }, 400);
  }, []);

  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const markCardViewed = useCallback((card, room) => {
    const key = `${room.id}:${card.title}`;
    setViewedCards(prev => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
  }, []);

  const handleSelectCard = useCallback((card, room) => {
    markCardViewed(card, room);
    const idx = room.cards.findIndex(c => c.title === card.title);
    setSelectedCardIndex(idx >= 0 ? idx : 0);
    navigate('card', room, card);
  }, [navigate, markCardViewed]);

  const checkFinale = useCallback(() => {
    if (viewedCards.size >= totalCards) {
      navigate('finale');
      return true;
    }
    return false;
  }, [navigate, totalCards, viewedCards]);

  const handleGoToRoom = useCallback((room) => {
    if (!checkFinale()) navigate('room', room);
  }, [navigate, checkFinale]);

  const handleGoHome = useCallback(() => {
    if (!checkFinale()) navigate('hallway');
  }, [navigate, checkFinale]);

  return (
    <div className={`app ${transitioning ? 'fade-out' : 'fade-in'}`}>
      {view === 'landing' && (
        <LandingPage onEnter={() => {
          setTransitioning(true);
          setTimeout(() => {
            setView('dedication');
            setTimeout(() => setTransitioning(false), 50);
          }, 400);
        }} />
      )}
      {view === 'dedication' && (
        <Dedication onComplete={() => navigate('hallway')} />
      )}
      {view === 'hallway' && (
        <Hallway
          rooms={rooms}
          onSelectRoom={(room) => navigate('room', room)}
          viewedCards={viewedCards}
          openedRooms={openedRooms}
          onOpenRoom={handleOpenRoom}
        />
      )}
      {view === 'room' && selectedRoom && (
        <Room
          room={selectedRoom}
          onBack={() => navigate('hallway')}
          onSelectCard={(card) => handleSelectCard(card, selectedRoom)}
          viewedCards={viewedCards}
        />
      )}
      {view === 'card' && selectedRoom && (
        <CardDetail
          room={selectedRoom}
          initialCardIndex={selectedCardIndex}
          viewedCards={viewedCards}
          onMarkViewed={(card) => markCardViewed(card, selectedRoom)}
          onGoToRoom={() => handleGoToRoom(selectedRoom)}
          onGoHome={handleGoHome}
        />
      )}
      {view === 'finale' && (
        <Finale />
      )}
      {(view === 'room' || view === 'card') && (
        <button className="home-btn" onClick={handleGoHome} aria-label="Back to Bag End">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M3 12L12 3L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 10V19C5 19.6 5.4 20 6 20H10V15H14V20H18C18.6 20 19 19.6 19 19V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {view !== 'finale' && <BlackCat />}
    </div>
  );
}

export default App;
