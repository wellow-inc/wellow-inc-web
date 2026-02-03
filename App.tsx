
import React, { useState, useEffect } from 'react';
import { Order } from './types';
import Navbar from './components/Navbar';
import AuthModal from './components/AuthModal';
import MarketModal from './components/MarketModal';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import About from './components/About';
import Leadership from './components/Leadership';
import Donations from './components/Donations';
import Allies from './components/Allies';
import Join from './components/Join';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showMarketModal, setShowMarketModal] = useState(false);
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Load user session
    const savedUser = localStorage.getItem('wellow_session');
    if (savedUser) setCurrentUser(savedUser);

    // Load orders
    const savedOrders = JSON.parse(localStorage.getItem('wellow_orders') || '[]');
    setRecentOrders(savedOrders);
  }, []);

  const loginUser = (name: string) => {
    setCurrentUser(name);
    localStorage.setItem('wellow_session', name);
    setShowAuthModal(false);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('wellow_session');
  };

  const handleOrderSubmit = (newOrder: Order) => {
    const updatedOrders = [newOrder, ...recentOrders];
    setRecentOrders(updatedOrders);
    localStorage.setItem('wellow_orders', JSON.stringify(updatedOrders));
  };

  const handleOrderDelete = (id: number) => {
    const updatedOrders = recentOrders.filter(o => o.id !== id);
    setRecentOrders(updatedOrders);
    localStorage.setItem('wellow_orders', JSON.stringify(updatedOrders));
  };

  const openMarket = () => {
    if (!currentUser) {
      setShowAuthModal(true);
    } else {
      setShowMarketModal(true);
    }
  };

  return (
    <div className="fade-in">
      <Navbar 
        currentUser={currentUser} 
        onLogout={logout} 
        onOpenAuth={() => setShowAuthModal(true)} 
        onOpenMarket={openMarket}
      />

      <main>
        <Hero />
        <Achievements />
        <About />
        <Leadership />
        <Donations />
        <Allies />
        <Join />
      </main>

      <Footer />

      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)} 
          onLogin={loginUser} 
        />
      )}

      {showMarketModal && (
        <MarketModal 
          onClose={() => setShowMarketModal(false)} 
          currentUser={currentUser}
          orders={recentOrders}
          onOrderSubmit={handleOrderSubmit}
          onOrderDelete={handleOrderDelete}
        />
      )}
    </div>
  );
};

export default App;
