
import React, { useState } from 'react';
import { TAROT_DECK } from '../constants';
import { TarotCard } from '../types';
import { getTarotReading } from '../services/gemini';

const MysticTarot: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [reading, setReading] = useState<string>('');

  const pickCard = async () => {
    setIsRevealed(false);
    setIsFlipping(true);
    setReading('กำลังสื่อสารกับจิตวิญญาณ...');
    
    setTimeout(async () => {
      const randomCard = TAROT_DECK[Math.floor(Math.random() * TAROT_DECK.length)];
      setSelectedCard(randomCard);
      
      const geminiReading = await getTarotReading(randomCard.name);
      setReading(geminiReading);
      setIsRevealed(true);
      setIsFlipping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4 pb-24">
      <div className="text-center">
        <h2 className="text-3xl font-cinzel text-white glow-gold mb-2">Mystic Tarot</h2>
        <p className="text-white/60 font-semibold">สงบจิตใจ อธิษฐาน แล้วเปิดไพ่</p>
      </div>

      <div className="relative w-64 h-96 perspective-1000">
        <div className={`card-inner w-full h-full ${isRevealed ? 'flipped' : ''}`}>
          {/* Card Back */}
          <div className="card-face absolute inset-0 rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
            <img 
              src="https://img2.pic.in.th/ChatGPT-Image-22-..-2569-10_24_01.png" 
              alt="Tarot Card Back" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent" />
          </div>
          
          {/* Card Front */}
          <div className="card-face card-back absolute inset-0 glass-dark rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
            {selectedCard && (
              <>
                <img src={selectedCard.image} alt={selectedCard.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                  <div className="text-2xl font-cinzel text-white uppercase tracking-widest font-bold glow-gold">{selectedCard.name}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {!isRevealed ? (
        <button 
          onClick={pickCard}
          disabled={isFlipping}
          className="bg-gradient-to-r from-pink-500 to-purple-600 px-12 py-4 rounded-full font-bold text-white shadow-xl hover:scale-105 transition-all disabled:opacity-50 active:scale-95 uppercase tracking-widest text-sm"
        >
          {isFlipping ? 'กำลังสับไพ่...' : 'เปิดประตูสู่พรหมลิขิต'}
        </button>
      ) : (
        <div className="glass-dark p-6 rounded-3xl w-full max-w-md border border-white/10 mt-4">
          <h3 className="text-pink-400 font-bold text-lg mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
            <span>🔮</span> คำทำนายจากไพ่
          </h3>
          <div className="text-lg mb-6 leading-relaxed text-white/90 font-medium whitespace-pre-wrap">
            {reading}
          </div>
          
          <div className="grid grid-cols-1 gap-2 mt-4 text-[11px] font-bold">
            <div className="flex justify-between p-3 bg-black/40 rounded-xl border border-white/5">
              <span className="text-pink-400">❤️ ความรัก</span>
              <span className="text-white/70 text-right max-w-[180px]">{selectedCard?.meaning.love}</span>
            </div>
            <div className="flex justify-between p-3 bg-black/40 rounded-xl border border-white/5">
              <span className="text-blue-400">💼 การงาน</span>
              <span className="text-white/70 text-right max-w-[180px]">{selectedCard?.meaning.work}</span>
            </div>
            <div className="flex justify-between p-3 bg-black/40 rounded-xl border border-white/5">
              <span className="text-emerald-400">💰 การเงิน</span>
              <span className="text-white/70 text-right max-w-[180px]">{selectedCard?.meaning.finance}</span>
            </div>
          </div>

          <button 
            onClick={() => { setIsRevealed(false); setSelectedCard(null); setIsFlipping(false); }}
            className="w-full mt-6 text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-pink-400 transition-colors py-2"
          >
            เลือกไพ่ใบใหม่
          </button>
        </div>
      )}
    </div>
  );
};

export default MysticTarot;
