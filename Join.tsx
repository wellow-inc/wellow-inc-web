
import React from 'react';

const Join: React.FC = () => {
  return (
    <section id="join" className="py-40 relative overflow-hidden bg-gradient-to-b from-[#07020d] to-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black font-montserrat uppercase mb-6 text-white tracking-tighter">Готов стать частью <br/><span className="text-purple-600">Наследия?</span></h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">Мы ищем амбициозных игроков, готовых развиваться и укреплять влияние Wellow Inc в штате Nevada.</p>
        
        <a 
          href="https://forum.gta-mobile.ru/threads/916916/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-[13px] hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 shadow-[0_0_50px_rgba(147,51,234,0.3)] group"
        >
          <i className="fas fa-file-signature text-lg group-hover:rotate-12 transition-transform"></i>
          Подать заявку в семью
        </a>
        
        <div className="mt-16 flex justify-center gap-12 opacity-30 grayscale">
            <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">#1</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-purple-400">Team</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">7/24</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-purple-400">Support</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">MAX</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-purple-400">Influence</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
