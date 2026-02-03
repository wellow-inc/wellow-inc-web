
import React, { useState } from 'react';
import { Order } from '../types';

interface MarketModalProps {
  onClose: () => void;
  currentUser: string | null;
  orders: Order[];
  onOrderSubmit: (order: Order) => void;
  onOrderDelete: (id: number) => void;
}

const MarketModal: React.FC<MarketModalProps> = ({ onClose, currentUser, orders, onOrderSubmit, onOrderDelete }) => {
  const [nick, setNick] = useState(currentUser || '');
  const [amount, setAmount] = useState('');
  const [weapon, setWeapon] = useState('');
  const [phone, setPhone] = useState('');
  const [tab, setTab] = useState<'info' | 'admin'>(currentUser === 'Oliver_Wellow' ? 'admin' : 'info');

  const isAdmin = currentUser === 'Oliver_Wellow';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nick || !amount || !weapon || !phone) return alert('Заполните все поля!');

    const newOrder: Order = {
      id: Date.now(),
      nick,
      amount,
      weapon,
      phone,
      date: new Date().toLocaleString('ru-RU'),
      status: 'pending'
    };

    onOrderSubmit(newOrder);
    setAmount('');
    setWeapon('');
    setPhone('');
    alert('Заявка успешно отправлена! Мы свяжемся с вами в игре.');
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[1000] flex items-center justify-center p-4 md:p-10" onClick={onClose}>
      <div className="glass-panel w-full max-w-6xl market-scroll rounded-[3rem] md:rounded-[5rem] border-white/5 relative flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="p-8 md:p-16 flex flex-col md:flex-row justify-between items-center border-b border-white/5 gap-8">
          <div>
            <span className="text-purple-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Official Wellow Distribution</span>
            <h2 className="text-4xl md:text-5xl font-black font-montserrat uppercase text-white tracking-tighter">
              {isAdmin && tab === 'admin' ? 'Админ Панель' : 'Наши услуги'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {isAdmin && (
              <div className="bg-white/5 p-1 rounded-2xl flex border border-white/10">
                <button 
                  onClick={() => setTab('info')}
                  className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'info' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  Маркет
                </button>
                <button 
                  onClick={() => setTab('admin')}
                  className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'admin' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  Заказы
                </button>
              </div>
            )}
            <button onClick={onClose} className="w-12 h-12 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-colors">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
        </div>

        <div className="p-8 md:p-16 flex-1">
          {tab === 'info' ? (
            <>
              <div className="grid lg:grid-cols-2 gap-12 mb-20">
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed font-light">
                    Мы предоставляем патроны и снаряжение высокого качества для членов семьи и союзников.
                  </p>
                  
                  <div className="overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02]">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-purple-600/10 text-[10px] uppercase font-black text-purple-400 tracking-widest">
                          <th className="px-8 py-5">Количество</th>
                          <th className="px-8 py-5 text-right">Цена</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-sm">
                        {[
                          { q: "1 000", p: "30.000$" },
                          { q: "2 000", p: "58.000$" },
                          { q: "5 000", p: "140.000$" },
                          { q: "10 000", p: "270.000$" },
                          { q: "15 000", p: "390.000$" }
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                            <td className="px-8 py-5 text-white font-black group-hover:text-purple-400">{row.q} пт.</td>
                            <td className="px-8 py-5 text-right text-gray-400 font-mono tracking-tighter">{row.p}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="glass-panel p-10 rounded-[3rem] border-white/5 h-fit">
                  <h4 className="text-xl font-black text-white uppercase mb-8 tracking-tight">Связь с отделом снабжения</h4>
                  <div className="space-y-6">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-purple-600/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
                        <i className="fas fa-phone-alt text-purple-500"></i>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest block">Главный склад</span>
                        <span className="text-white font-mono font-bold">+1(333)888-835</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Form */}
              <div className="bg-white/[0.01] border border-white/5 rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 mb-20">
                <h3 className="text-3xl font-black font-montserrat text-white uppercase mb-12 text-center tracking-tighter">Оставить заявку</h3>
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-purple-500 ml-4">Игровой ник</label>
                    <input type="text" required value={nick} onChange={e => setNick(e.target.value)} placeholder="Nick_Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-purple-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-purple-500 ml-4">Количество</label>
                    <input type="text" required value={amount} onChange={e => setAmount(e.target.value)} placeholder="5000 шт." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-purple-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-purple-500 ml-4">Тип оружия</label>
                    <input type="text" required value={weapon} onChange={e => setWeapon(e.target.value)} placeholder="Desert Eagle / M4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-purple-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-purple-500 ml-4">Номер телефона в игре</label>
                    <input type="text" required value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1(XXX)XXX-XXX" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-purple-500 outline-none transition-all" />
                  </div>
                  <div className="md:col-span-2 pt-6">
                    <button type="submit" className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-purple-600 hover:text-white transition-all transform active:scale-95 shadow-2xl">
                      Подтвердить заказ
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            /* Admin Panel View */
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Список всех заказов ({orders.length})</h3>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Только для Oliver_Wellow</div>
              </div>

              {orders.length > 0 ? (
                <div className="grid gap-4">
                  {orders.map((order) => (
                    <div key={order.id} className="glass-panel p-8 rounded-[2.5rem] border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 hover:border-purple-500/30 transition-all">
                      <div className="flex items-center gap-6 w-full md:w-auto">
                        <div className="w-14 h-14 bg-purple-600/10 rounded-2xl flex items-center justify-center border border-purple-500/20 text-purple-500">
                           <i className="fas fa-box"></i>
                        </div>
                        <div>
                          <div className="text-white font-black text-xl font-montserrat tracking-tight">{order.nick}</div>
                          <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{order.date}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-8 text-center md:text-left">
                        <div>
                          <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest block mb-1">Кол-во</span>
                          <span className="text-purple-400 font-mono font-bold text-lg">{order.amount}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest block mb-1">Оружие</span>
                          <span className="text-white font-bold">{order.weapon}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest block mb-1">Телефон</span>
                          <span className="text-white font-mono">{order.phone}</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => {
                          if(confirm('Удалить этот заказ из списка?')) onOrderDelete(order.id);
                        }}
                        className="w-full md:w-12 h-12 bg-red-600/10 hover:bg-red-600/20 border border-red-600/20 text-red-400 rounded-2xl flex items-center justify-center transition-all"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-40 border-2 border-dashed border-white/5 rounded-[4rem]">
                   <i className="fas fa-inbox text-5xl text-gray-800 mb-6"></i>
                   <p className="text-gray-600 uppercase text-[10px] font-black tracking-[0.5em]">Заказов пока нет</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketModal;
