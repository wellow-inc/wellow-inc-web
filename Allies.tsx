
import React from 'react';

const allies = ['Berzloy Inc', 'Dark Sky', 'MPRI', 'Pipich Alliance', 'Septes', 'Carvelli Dynasty', 'Lucchese Mafia', 'Quinn Dynasty'];

const Allies: React.FC = () => {
  return (
    <section id="allies" className="py-40 bg-[#07020d] scroll-mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-black font-montserrat uppercase mb-20 text-white tracking-tighter">Дипломатия</h2>
        <div className="max-w-4xl mx-auto glass-panel rounded-[3.5rem] overflow-hidden border-white/5 shadow-2xl text-left">
          <table className="w-full">
            <thead>
              <tr className="bg-white/5 text-[11px] uppercase font-black text-purple-500 tracking-[0.3em]">
                <th className="px-12 py-8">Наименование</th>
                <th className="px-12 py-8 text-right">Политика</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {allies.map((n) => (
                <tr key={n} className="hover:bg-white/[0.02] group">
                  <td className="px-12 py-7 font-black text-white group-hover:text-purple-400 transition-colors">{n}</td>
                  <td className="px-12 py-7 text-right"><span className="bg-purple-600/10 text-purple-400 px-5 py-2 rounded-full font-black uppercase text-[10px] tracking-widest border border-purple-500/10">Союз</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Allies;
