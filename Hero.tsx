
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 text-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(88,28,135,0.12),transparent_70%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="inline-block px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[11px] font-bold uppercase tracking-[0.3em] mb-10">Online Role-Play • Nevada</div>
        <h1 className="text-6xl md:text-[110px] font-black font-montserrat mb-10 leading-[0.85] tracking-tighter uppercase">СЕМЬЯ <br/><span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-purple-600">WELLOW INC</span></h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-14 leading-relaxed font-light">Премиальное сообщество Nevada Server #3. Единство целей, безупречная репутация и абсолютная дисциплина.</p>
        <div className="flex justify-center">
          <div className="glass-panel px-10 py-5 rounded-[2rem] flex items-center gap-5 border-purple-500/10">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
            <span className="font-bold text-xs uppercase tracking-[0.2em] text-white/90">330+ Активных участников</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
