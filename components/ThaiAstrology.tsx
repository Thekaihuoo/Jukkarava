
import React, { useState, useEffect } from 'react';
import { THAI_MONTHS, THAI_ZODIACS } from '../constants';

const ThaiAstrology: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>(() => localStorage.getItem('jukkaraval_dob') || '');
  const [calculatedGrid, setCalculatedGrid] = useState<number[][] | null>(null);

  const calculateMahasatta = (date: Date) => {
    const day = date.getDay() + 1;
    const monthRaw = date.getMonth();
    const month = (monthRaw === 11) ? 1 : monthRaw + 2; 
    const year = ((date.getFullYear() - 4) % 12) + 1;

    const row1 = Array.from({ length: 7 }, (_, i) => ((day + i - 1) % 7) + 1);
    const row2 = Array.from({ length: 7 }, (_, i) => ((month + i - 1) % 7) + 1);
    const row3 = Array.from({ length: 7 }, (_, i) => ((year + i - 1) % 7) + 1);
    const row4 = row1.map((v, i) => ((v + row2[i] + row3[i] - 1) % 7) + 1);

    setCalculatedGrid([row1, row2, row3, row4]);
  };

  useEffect(() => {
    if (birthDate) {
      calculateMahasatta(new Date(birthDate));
      localStorage.setItem('jukkaraval_dob', birthDate);
    }
  }, [birthDate]);

  const labels = ["อัตตะ", "หินะ", "ธะนัง", "ปิตา", "มาตา", "โภคา", "มัชฌิมา"];

  return (
    <div className="flex flex-col items-center gap-6 p-4 pb-24">
      <div className="text-center">
        <h2 className="text-3xl font-cinzel text-white glow-gold mb-2 text-nowrap">เลข 7 ตัว 9 ฐาน</h2>
        <p className="text-white/60 font-semibold">ดวงชะตาตามโหราศาสตร์ไทย</p>
      </div>

      <div className="glass-dark p-6 rounded-3xl w-full max-w-md border border-white/10">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-pink-400 mb-2">วันเดือนปีเกิดของคุณ</label>
        <input 
          type="date" 
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full bg-black/40 border border-white/20 rounded-xl p-4 text-white font-bold focus:outline-none focus:border-pink-500 transition-colors"
        />
      </div>

      {calculatedGrid && (
        <div className="w-full max-w-md overflow-x-auto glass-dark p-6 rounded-3xl shadow-xl border border-white/10">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                {labels.map((l, i) => (
                  <th key={i} className="py-3 text-[10px] font-bold text-pink-400 min-w-[50px]">{l}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {calculatedGrid.map((row, rIdx) => (
                <tr key={rIdx} className={rIdx === 3 ? 'bg-pink-500/10' : ''}>
                  {row.map((val, cIdx) => (
                    <td key={cIdx} className={`py-4 font-cinzel text-xl font-bold ${rIdx === 3 ? 'text-pink-400' : 'text-white/90'}`}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 p-4 bg-black/40 rounded-2xl text-[11px] text-white/60 leading-relaxed italic font-medium border border-white/10">
            ✨ ตารางนี้แสดงฐานรากทั้ง 4 ตามหลักเลข 7 ตัว เพื่อสำรวจขุมทรัพย์และอุปสรรคตามจักรวาลกำหนด
          </div>
        </div>
      )}
    </div>
  );
};

export default ThaiAstrology;
