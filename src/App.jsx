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

  const handleSelectCard = useCallback((card, room) => {
    // Build a unique key for this card
    const key = `${room.id}:${card.title}`;
    setViewedCards(prev => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
    navigate('card', room, card);
  }, [navigate]);

  // Check if finale should trigger when returning from a card
  const handleBackToRoom = useCallback((room) => {
    // Check after a tick so the state has updated
    setTimeout(() => {
      setViewedCards(prev => {
        if (prev.size >= totalCards) {
          // All cards viewed — go to finale
          navigate('finale');
          return prev;
        }
        navigate('room', room);
        return prev;
      });
    }, 0);
  }, [navigate, totalCards]);

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
      {view === 'card' && selectedCard && (
        <CardDetail
          card={selectedCard}
          room={selectedRoom}
          onBack={() => handleBackToRoom(selectedRoom)}
        />
      )}
      {view === 'finale' && (
        <Finale />
      )}
      {view !== 'finale' && <BlackCat />}
    </div>
  );
}

export default App;
