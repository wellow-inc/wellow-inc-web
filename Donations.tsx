
import React from 'react';

const Donations: React.FC = () => {
  return (
    <section id="donations" className="py-40 scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-black font-montserrat uppercase mb-6 text-white tracking-tight">Пожертвования семье</h2>
        <p className="text-purple-500 uppercase text-[11px] tracking-[0.5em] font-black mb-20">Family Support & Fund</p>
        <div className="max-w-4xl mx-auto glass-panel p-12 md:p-20 rounded-[4rem] border border-purple-500/20">
          <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">Семья Wellow Inc развивается и укрепляет свои позиции благодаря поддержке участников и союзников.</p>
          <div className="py-12 px-8 bg-purple-900/10 rounded-[3rem] border border-purple-500/20 mb-10">
            <span className="text-[10px] text-purple-500 font-black uppercase tracking-[0.4em] mb-4 block">Банковский счёт семьи</span>
            <div className="text-5xl md:text-7xl font-mono font-black text-white bank-account-glow tracking-tighter">№ 51033</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;
