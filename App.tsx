
import React, { useState, useEffect } from 'react';
import { AppTab } from './types';
import StarBackground from './components/StarBackground';
import DailyDestiny from './components/DailyDestiny';
import MysticTarot from './components/MysticTarot';
import ThaiAstrology from './components/ThaiAstrology';
import OracleChat from './components/OracleChat';
import LotteryCalc from './components/LotteryCalc';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.DAILY);
  const [displayTab, setDisplayTab] = useState<AppTab>(AppTab.DAILY);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (newTab: AppTab) => {
    if (newTab === activeTab || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveTab(newTab);

    setTimeout(() => {
      setDisplayTab(newTab);
      setIsTransitioning(false);
    }, 150);
  };

  const renderContent = () => {
    switch (displayTab) {
      case AppTab.DAILY: return <DailyDestiny />;
      case AppTab.TAROT: return <MysticTarot />;
      case AppTab.THAI: return <ThaiAstrology />;
      case AppTab.ORACLE: return <OracleChat />;
      case AppTab.LOTTERY: return <LotteryCalc />;
      default: return <DailyDestiny />;
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      <StarBackground />
      
      {/* Header */}
      <header className="pt-8 pb-4 flex flex-col justify-center items-center gap-2 text-center">
        <img 
          src="https://img5.pic.in.th/file/secure-sv1/-668e94e3b2fda05e3.png" 
          alt="Jukkaraval Logo" 
          className="h-24 w-auto drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] animate-pulse mb-2"
        />
        <h1 className="text-5xl md:text-7xl font-charm font-bold text-white glow-gold tracking-tight drop-shadow-lg leading-tight px-4">
          หมอดูแม่นๆ
        </h1>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-32 overflow-x-hidden">
        <div className={`tab-transition h-full ${isTransitioning ? 'tab-hidden' : 'tab-visible'}`}>
          {renderContent()}
        </div>
      </main>

      {/* Navigation Footer */}
      <nav className="fixed bottom-0 left-0 right-0 glass-dark border-t border-white/10 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-50">
        <div className="max-w-md mx-auto flex justify-around items-center h-20 px-2">
          <button 
            onClick={() => handleTabChange(AppTab.DAILY)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === AppTab.DAILY ? 'text-white scale-110' : 'text-white/40'}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeTab === AppTab.DAILY ? 'bg-pink-600 shadow-lg shadow-pink-500/30' : 'bg-white/5'}`}>
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
            </div>
            <span className="text-[7px] font-bold uppercase tracking-widest">Daily</span>
          </button>

          <button 
            onClick={() => handleTabChange(AppTab.TAROT)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === AppTab.TAROT ? 'text-white scale-110' : 'text-white/40'}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeTab === AppTab.TAROT ? 'bg-pink-600 shadow-lg shadow-pink-500/30' : 'bg-white/5'}`}>
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <span className="text-[7px] font-bold uppercase tracking-widest">Tarot</span>
          </button>

          <button 
            onClick={() => handleTabChange(AppTab.LOTTERY)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === AppTab.LOTTERY ? 'text-white scale-110' : 'text-white/40'}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeTab === AppTab.LOTTERY ? 'bg-amber-500 shadow-lg shadow-amber-500/30' : 'bg-white/5'}`}>
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="text-[7px] font-bold uppercase tracking-widest">Lucky</span>
          </button>

          <button 
            onClick={() => handleTabChange(AppTab.THAI)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === AppTab.THAI ? 'text-white scale-110' : 'text-white/40'}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeTab === AppTab.THAI ? 'bg-pink-600 shadow-lg shadow-pink-500/30' : 'bg-white/5'}`}>
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
            </div>
            <span className="text-[7px] font-bold uppercase tracking-widest">Chart</span>
          </button>

          <button 
            onClick={() => handleTabChange(AppTab.ORACLE)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === AppTab.ORACLE ? 'text-white scale-110' : 'text-white/40'}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeTab === AppTab.ORACLE ? 'bg-pink-600 shadow-lg shadow-pink-500/30' : 'bg-white/5'}`}>
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </div>
            <span className="text-[7px] font-bold uppercase tracking-widest">Oracle</span>
          </button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-2">
          <div className="text-[9px] text-center text-white/50 font-bold uppercase tracking-[0.15em]">
            Freeman @ Copy Right Krukai
          </div>
          <div className="text-[8px] text-center text-pink-400/70 font-bold uppercase tracking-widest">
            ฝากแชร์ ฝากติดตามด้วยนะครับ
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
