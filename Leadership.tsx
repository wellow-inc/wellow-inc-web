
import React from 'react';
import { LeadershipMember } from '../types';

const leaders: LeadershipMember[] = [
  { n: 'Oliver_Wellow', r: '[VII] President', p: '+1(333)888-835', icon: 'fa-crown' },
  { n: 'Pablo_Desparo', r: '[VI] Vice-President', p: '+1(333)286-666', icon: 'fa-user-shield' }
];

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-40 bg-[#07020d] scroll-mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-black font-montserrat uppercase mb-20 text-white tracking-tighter">Верховный Совет</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {leaders.map((l, i) => (
            <div key={i} className="glass-panel p-16 rounded-[4rem] text-center border-white/5 relative group overflow-hidden transition-all hover:scale-[1.02] hover:border-purple-500/30">
              <div className="w-24 h-24 bg-purple-600/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-purple-500/20">
                <i className={`fas ${l.icon} text-3xl text-purple-500`}></i>
              </div>
              <h4 className="text-3xl font-black text-white font-montserrat mb-3">{l.n}</h4>
              <p className="text-purple-500 text-[11px] font-black uppercase tracking-[0.4em] mb-12">{l.r}</p>
              <div className="pt-10 border-t border-white/5">
                <div className="text-2xl font-mono text-white tracking-widest">{l.p}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
