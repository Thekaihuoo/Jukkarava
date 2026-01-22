
import React, { useState, useEffect } from 'react';
import { THAI_DAYS } from '../constants';
import { getDailyHoroscope } from '../services/gemini';
import { LuckData } from '../types';

const DailyDestiny: React.FC = () => {
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(new Date().getDay());
  const selectedDayInfo = THAI_DAYS[selectedDayIdx];
  
  const [luckyNumber, setLuckyNumber] = useState<string>('');
  const [horoscope, setHoroscope] = useState<string>('กำลังเปิดตำราพรหมชาติ...');
  const [luck, setLuck] = useState<LuckData>({ love: 0, work: 0, money: 0, health: 0 });

  useEffect(() => {
    const today = new Date();
    const dateStr = today.toDateString();
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
    }
    const num = Math.abs(hash % 90) + 10;
    setLuckyNumber(num.toString());

    setLuck({
      love: Math.floor(Math.random() * 41) + 60,
      money: Math.floor(Math.random() * 41) + 60,
      work: Math.floor(Math.random() * 41) + 60,
      health: Math.floor(Math.random() * 41) + 60,
    });

    const fetchHoroscope = async () => {
      setHoroscope('กำลังสื่อสารกับดวงดาว...');
      const text = await getDailyHoroscope(selectedDayInfo.name);
      setHoroscope(text);
    };
    fetchHoroscope();
  }, [selectedDayIdx]);

  const LuckBar = ({ label, value, color }: { label: string, value: number, color: string }) => (
    <div className="w-full mb-2">
      <div className="flex justify-between text-[10px] font-bold mb-0.5 uppercase text-white/70">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full h-1.5 bg-black/30 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(255,255,255,0.4)]" 
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-6 p-4 max-w-4xl mx-auto">
      {/* Top Banner */}
      <div className="glass-dark w-full p-6 rounded-2xl flex flex-col md:flex-row gap-6">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold glow-gold mb-1">ดูดวงรายวัน</h2>
          <p className="text-sm text-white/60 mb-6 font-medium">เลือกวันเกิดเพื่อรับคำทำนายที่แม่นยำ</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            {Object.entries(THAI_DAYS).map(([idx, day]) => (
              <div 
                key={idx}
                onClick={() => setSelectedDayIdx(Number(idx))}
                className={`day-circle ${selectedDayIdx === Number(idx) ? 'active scale-110 ring-2 ring-white ring-offset-2 ring-offset-[#2d0b5a]' : 'opacity-80'}`}
                style={{ backgroundColor: day.hex }}
              >
                {day.shortName}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-[10px] font-bold uppercase text-white/40 w-20">สีมงคล</div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-white/20 shadow-inner" style={{ backgroundColor: selectedDayInfo.hex }} />
                <span className="text-sm font-bold text-white/90">{selectedDayInfo.color}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[10px] font-bold uppercase text-white/40 w-20">สีกาลกิณี</div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-white/20 relative shadow-inner" style={{ backgroundColor: selectedDayInfo.forbiddenHex }}>
                   <div className="absolute inset-0 flex items-center justify-center text-[10px] text-white/70">✕</div>
                </div>
                <span className="text-sm font-bold text-white/90">{selectedDayInfo.forbiddenName}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-48 h-48 glass-dark rounded-xl flex flex-col items-center justify-center p-4 border border-white/10 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
           <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 z-10">Lucky Number</div>
           <div className="text-6xl font-cinzel font-bold text-white glow-gold z-10">{luckyNumber}</div>
           <div className="text-[10px] text-white/30 mt-2 italic z-10">เลขนำโชควันนี้</div>
        </div>
      </div>

      {/* Prediction & Luck Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
         <div className="glass-dark p-6 rounded-2xl flex flex-col border border-white/5">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 text-sm">🔮</span>
              คำทำนายรายวัน
            </h3>
            <div className="flex-1 flex items-start justify-center text-sm md:text-base leading-relaxed text-white/90 py-2 whitespace-pre-wrap text-left w-full">
              {horoscope}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] uppercase font-bold text-white/30 tracking-widest">
              <span>Universe Insight</span>
              <span className="text-pink-400">วัน{selectedDayInfo.name.split(' ')[0]}</span>
            </div>
         </div>

         <div className="glass-dark p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm">⚡</span>
              ระดับพลังงาน
            </h3>
            <div className="space-y-5">
              <LuckBar label="ความรัก" value={luck.love} color="#f472b6" />
              <LuckBar label="การเงิน" value={luck.money} color="#34d399" />
              <LuckBar label="การงาน" value={luck.work} color="#60a5fa" />
              <LuckBar label="สุขภาพ" value={luck.health} color="#a78bfa" />
            </div>
         </div>
      </div>

      {/* Bottom Menu */}
      <div className="w-full mt-4">
        <h4 className="text-center font-bold text-lg mb-8 glow-gold opacity-80">บริการพยากรณ์อื่นๆ</h4>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { label: 'รายสัปดาห์', icon: '7', badge: null },
            { label: 'รายปักษ์', icon: '14', badge: null },
            { label: 'รายเดือน', icon: '30', badge: null },
            { label: 'ดวงจีน', icon: '☯', badge: 'New' },
            { label: 'ปี 2567', icon: '67', badge: null },
            { label: 'ปี 2568', icon: '68', badge: 'Hot' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="relative w-14 h-14 glass-dark rounded-xl border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-white/10 transition-all shadow-lg group-active:scale-95">
                <span className="text-lg font-cinzel font-bold">{item.icon}</span>
                {item.badge && (
                  <span className="absolute -top-1.5 -right-1.5 bg-pink-600 text-[7px] font-black px-1.5 py-0.5 rounded shadow-lg animate-pulse uppercase">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[9px] font-bold text-white/40 text-center uppercase tracking-tighter group-hover:text-white/70 transition-colors">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyDestiny;
