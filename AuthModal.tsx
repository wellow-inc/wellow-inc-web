
import React, { useState } from 'react';

interface AuthModalProps {
  onClose: () => void;
  onLogin: (nick: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onLogin }) => {
  const [nick, setNick] = useState('');
  const [pass, setPass] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nick || !pass) return alert('Заполните все поля!');

    const users = JSON.parse(localStorage.getItem('wellow_users') || '{}');
    
    if (!users[nick]) {
      // Automatic registration
      users[nick] = pass;
      localStorage.setItem('wellow_users', JSON.stringify(users));
      onLogin(nick);
    } else {
      if (users[nick] === pass) {
        onLogin(nick);
      } else {
        alert('Неверный пароль для этого имени!');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-xl z-[1000] flex items-center justify-center p-6" onClick={onClose}>
      <div className="glass-panel p-10 rounded-[3rem] w-full max-w-md border-purple-500/20 relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
          <i className="fas fa-times text-xl"></i>
        </button>
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/20">
            <i className="fas fa-fingerprint text-3xl text-purple-500"></i>
          </div>
          <h2 className="text-2xl font-black font-montserrat uppercase text-white mb-2">Авторизация</h2>
          <p className="text-xs text-gray-400 font-medium">Для доступа к Маркету необходимо войти под игровым ником Nevada #3.</p>
        </div>

        <form onSubmit={handleAuth} className="space-y-6">
          <div>
            <label className="text-[10px] uppercase font-black tracking-widest text-purple-500 mb-2 block ml-4">Игровой Ник</label>
            <input 
              type="text" 
              value={nick}
              onChange={e => setNick(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-purple-500 outline-none transition-all font-medium"
              placeholder="Oliver_Wellow"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase font-black tracking-widest text-purple-500 mb-2 block ml-4">Пароль</label>
            <input 
              type="password" 
              value={pass}
              onChange={e => setPass(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-purple-500 outline-none transition-all font-medium"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-xl shadow-purple-900/40">
            Подтвердить
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
