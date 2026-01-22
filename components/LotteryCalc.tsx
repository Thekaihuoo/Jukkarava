
import React, { useState } from 'react';
import { getLotteryInsight } from '../services/gemini';

const LotteryCalc: React.FC = () => {
  const [luckySet, setLuckySet] = useState<{ two: string[], three: string[] } | null>(null);
  const [insight, setInsight] = useState<string>('');
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateNumbers = async () => {
    setIsCalculating(true);
    setInsight('กำลังสแกนคลื่นพลังงานดวงดาว...');

    // Simulate "Calculation"
    setTimeout(async () => {
      const generate = (len: number) => {
        return Array.from({ length: len }, () => Math.floor(Math.random() * 10)).join('');
      };

      const newSet = {
        two: [generate(2), generate(2), generate(2)],
        three: [generate(3), generate(3)]
      };
      
      setLuckySet(newSet);
      
      const allNumbers = [...newSet.two, ...newSet.three].join(', ');
      const aiInsight = await getLotteryInsight(allNumbers);
      setInsight(aiInsight);
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4 pb-24">
      <div className="text-center">
        <h2 className="text-3xl font-charm text-white glow-gold mb-2">เลขเด็ดรัฐบาล</h2>
        <p className="text-white/60 font-semibold">คำนวณเลขมงคลด้วยพลังจักรวาล</p>
      </div>

      <div className="glass-dark w-full max-w-md p-8 rounded-3xl border border-white/10 flex flex-col items-center gap-8 shadow-2xl">
        {!luckySet ? (
          <div className="text-center space-y-6 py-8">
            <div className="w-24 h-24 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto animate-pulse border border-pink-500/30">
              <span className="text-4xl">💰</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              ขอให้ท่านตั้งจิตอธิษฐานนิ่งๆ ระลึกถึงความโชคดี <br/>
              แล้วกดปุ่มเพื่อรับเลขมงคลจากสรวงสวรรค์
            </p>
          </div>
        ) : (
          <div className="w-full space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="space-y-4">
              <h3 className="text-center text-[10px] font-bold uppercase tracking-widest text-pink-400">เลขท้าย 2 ตัว</h3>
              <div className="flex justify-center gap-4">
                {luckySet.two.map((num, i) => (
                  <div key={i} className="w-16 h-16 glass-dark rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
                    <span className="text-3xl font-cinzel font-bold text-white glow-gold">{num}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-center text-[10px] font-bold uppercase tracking-widest text-emerald-400">เลขท้าย 3 ตัว</h3>
              <div className="flex justify-center gap-4">
                {luckySet.three.map((num, i) => (
                  <div key={i} className="w-20 h-20 glass-dark rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
                    <span className="text-3xl font-cinzel font-bold text-white glow-gold">{num}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 text-center italic text-sm text-white/90 leading-relaxed whitespace-pre-wrap">
              "{insight}"
            </div>
          </div>
        )}

        <button 
          onClick={calculateNumbers}
          disabled={isCalculating}
          className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 px-8 py-4 rounded-full font-bold text-white shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 active:scale-95 uppercase tracking-widest text-sm flex items-center justify-center gap-2"
        >
          {isCalculating ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              กำลังดึงเลขมงคล...
            </>
          ) : (
            'คำนวณเลขโชคลาภ'
          )}
        </button>

        {luckySet && (
          <button 
            onClick={() => setLuckySet(null)}
            className="text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors"
          >
            รีเซ็ตเพื่อเริ่มใหม่
          </button>
        )}
      </div>

      <div className="text-[10px] text-white/30 text-center max-w-xs italic leading-relaxed">
        * โปรดใช้วิจารณญาณในการรับชม ตัวเลขเหล่านี้เป็นการคำนวณจากสถิติและพลังงานเพื่อความบันเทิงเท่านั้น
      </div>
    </div>
  );
};

export default LotteryCalc;
