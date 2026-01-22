
import React, { useState, useRef, useEffect } from 'react';
import { askOracle } from '../services/gemini';

const OracleChat: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: '✨ ข้าคือจิตวิญญาณแห่งจักรวาล... เจ้ามีสิ่งใดอยากจะถามความลี้ลับของโชคชะตาหรือไม่?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    const response = await askOracle(userMessage);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4 h-[calc(100vh-250px)]">
      <div className="text-center">
        <h2 className="text-3xl font-cinzel text-white glow-gold mb-2">Oracle AI</h2>
        <p className="text-white/60 font-semibold font-medium uppercase tracking-widest text-[10px]">Spirit of Universe</p>
      </div>

      <div className="glass-dark w-full max-w-md flex-1 rounded-3xl overflow-hidden flex flex-col border border-white/10 shadow-2xl">
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 flex flex-col gap-5 custom-scrollbar">
          {messages.map((msg, i) => (
            <div key={i} className={`max-w-[88%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
              msg.role === 'user' 
              ? 'self-end bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-tr-none shadow-lg font-medium' 
              : 'self-start bg-black/40 text-white/90 rounded-tl-none border border-white/10 font-medium'
            }`}>
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="self-start bg-white/5 text-pink-400 p-4 rounded-2xl rounded-tl-none animate-pulse text-[10px] font-bold uppercase tracking-widest border border-white/5">
              กำลังเชื่อมต่อกับจักรวาล...
            </div>
          )}
        </div>
        
        <div className="p-4 bg-black/40 border-t border-white/10 flex gap-3">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="พิมพ์คำถามของคุณที่นี่..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm focus:ring-1 focus:ring-pink-500 outline-none font-bold text-white placeholder:text-white/20 transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="w-14 h-14 bg-pink-600 text-white rounded-xl flex items-center justify-center shadow-lg active:scale-90 transition-all disabled:opacity-50 hover:bg-pink-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OracleChat;
