
import React from 'react';
import { Achievement } from '../types';

const achievements: Achievement[] = [
  { nick: "Oliver_Wellow", org: "Правительство", rank: "Губернатор x2" },
  { nick: "Pablo Desparo", org: "Правительство", rank: "Губернатор" },
  { nick: "Wesley Evers", org: "Правительство", rank: "Губернатор" },
  { nick: "Geo_Escalante", org: "Правительство", rank: "Губернатор" },
  { nick: "Oliver_Wellow", org: "Правительство", rank: "Министр Юстиции x5" },
  { nick: "Pablo Desparo", org: "Правительство", rank: "Министр Здравоохранения x3" },
  { nick: "Leonardo_Dumbledore", org: "Правительство", rank: "Министр Здравоохранения" },
  { nick: "Wesley Evers", org: "Правительство", rank: "Министр Обороны" },
  { nick: "Anastasia_Wellow", org: "Правительство", rank: "Министр Юстиции" },
  { nick: "Michael Carrington", org: "Правительство", rank: "Министр Юстиции" },
  { nick: "Choppy Kennedy", org: "Medical Center of SF", rank: "Главный Врач" },
  { nick: "Jackson Russell", org: "Medical Center of SF", rank: "Главный Врач" },
  { nick: "Ivan Bennet", org: "Groove Street", rank: "Mad Dog (Лидер)" },
  { nick: "Sweet Smaxwood", org: "Varios Los Actecas", rank: "Padre (Лидер)" },
  { nick: "Oliver_Wellow", org: "Admins Team", rank: "Администратор сервера" },
  { nick: "Mitchel Gold", org: "Admins Team", rank: "Администратор сервера" },
  { nick: "Night_Kvinton", org: "LVPD", rank: "Шеф Департамента" },
  { nick: "Vova Grimshade", org: "LSPD", rank: "Шеф Департамента" },
  { nick: "Mitchel Gold", org: "LSPD", rank: "Шеф Департамента" },
  { nick: "Richard_Opium", org: "LSPD", rank: "Шеф Департамента" }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-40 bg-[#07020d] scroll-mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-black font-montserrat uppercase mb-6 text-white tracking-tight">Достижения членов семьи</h2>
        <p className="text-purple-500 uppercase text-[11px] tracking-[0.5em] font-black mb-20">Hall of Fame • Career Milestones</p>
        <div className="max-w-6xl mx-auto glass-panel rounded-[3.5rem] overflow-hidden border-white/5 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-[11px] uppercase font-black text-purple-500 tracking-[0.3em]">
                  <th className="px-12 py-8">Nick_Name</th>
                  <th className="px-12 py-8">Организация</th>
                  <th className="px-12 py-8">Должность</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {achievements.map((item, i) => (
                  <tr key={i} className="hover:bg-white/[0.03] transition-colors group">
                    <td className="px-12 py-6 font-black text-white text-base tracking-tight font-montserrat group-hover:text-purple-400 transition-colors">{item.nick}</td>
                    <td className="px-12 py-6"><span className="text-purple-500/80 font-bold uppercase text-[11px] tracking-widest">{item.org}</span></td>
                    <td className="px-12 py-6"><span className="text-gray-300 font-medium italic opacity-90 group-hover:opacity-100 transition-opacity">{item.rank}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
