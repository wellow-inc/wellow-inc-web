
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentUser: string | null;
  onLogout: () => void;
  onOpenAuth: () => void;
  onOpenMarket: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser, onLogout, onOpenAuth, onOpenMarket }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isAdmin = currentUser === 'Oliver_Wellow';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-panel shadow-2xl' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/40">
            <span className="font-black text-xl text-white">W</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xl font-black text-white font-montserrat uppercase leading-none tracking-tighter">Wellow <span className="text-purple-500">Inc</span></span>
            <span className="text-[9px] uppercase tracking-widest text-purple-400 font-bold opacity-80">Nevada #3</span>
          </div>
        </div>
        
        <div className="hidden xl:flex items-center gap-6">
          {[
            { name: 'О семье', id: '#about' },
            { name: 'Руководство', id: '#leadership' },
            { name: 'Достижения', id: '#achievements' },
            { name: 'Пожертвования', id: '#donations' },
            { name: 'Дипломатия', id: '#allies' },
            { name: 'Вступить', id: '#join' }
          ].map((item) => (
            <a key={item.name} href={item.id} onClick={(e) => scrollTo(e, item.id)} className="text-[10px] font-bold text-gray-400 hover:text-white uppercase tracking-[0.2em] transition-all whitespace-nowrap">{item.name}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={onOpenMarket} className={`flex items-center justify-center p-2 px-4 rounded-xl transition-all duration-300 ${isAdmin ? 'bg-red-600/20 border-red-600/40 text-red-400' : 'bg-purple-600/10 border-purple-600/20 text-purple-400'} border`}>
            <i className={`fas ${isAdmin ? 'fa-user-shield' : 'fa-shopping-cart'} mr-2`}></i>
            <span className="text-[10px] font-black uppercase tracking-widest hidden md:inline">{isAdmin ? 'Admin Market' : 'Market'}</span>
          </button>
          
          {currentUser ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 px-4 rounded-xl bg-white/5 border border-white/10 text-white">
                <i className={`fas fa-user-check mr-2 ${isAdmin ? 'text-yellow-400' : 'text-green-400'}`}></i>
                <span className="text-[10px] font-black uppercase tracking-widest">{currentUser}</span>
              </div>
              <button onClick={onLogout} className="flex items-center justify-center p-2 rounded-xl bg-red-600/10 border border-red-600/20 text-red-400 hover:bg-red-600/20">
                <i className="fas fa-sign-out-alt"></i>
              </button>
            </div>
          ) : (
            <button onClick={onOpenAuth} className="flex items-center justify-center p-2 px-4 rounded-xl bg-purple-600/10 border border-purple-600/20 text-purple-400 hover:bg-purple-600/20">
              <i className="fas fa-user-circle mr-2"></i>
              <span className="text-[10px] font-black uppercase tracking-widest hidden md:inline">Войти</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
