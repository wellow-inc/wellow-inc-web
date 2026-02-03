
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-5xl font-black font-montserrat uppercase mb-10 leading-none">Принципы<br/><span className="text-purple-600">Семьи</span></h2>
            <div className="space-y-8">
              <div className="glass-panel p-10 rounded-[2.5rem] border-l-4 border-l-purple-600">
                <h4 className="text-xl font-black uppercase mb-3 text-white">Взаимовыручка</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">Мы никогда не оставляем своих в беде. Любой участник Wellow Inc может рассчитывать на полную поддержку руководства и состава в любых игровых ситуациях.</p>
              </div>
              <div className="glass-panel p-10 rounded-[2.5rem] border-l-4 border-l-purple-900">
                <h4 className="text-xl font-black uppercase mb-3 text-white">Влияние</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">Наша семья контролирует ключевые бизнес-процессы и поддерживает порядок на улицах штата Nevada, обеспечивая стабильность нашим союзникам.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative p-4 glass-panel rounded-[4rem]">
              <img src="https://picsum.photos/800/600?grayscale" className="rounded-[3rem] opacity-60" alt="Family Legacy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
