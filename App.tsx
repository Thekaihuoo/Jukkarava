
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
    <div className="min-h-screen relative flex flex-col selection:bg-pink-500/30">
      <StarBackground />
      
      {/* Header - Professional Vercel Optimized Branding */}
      <header className="pt-10 pb-6 flex flex-col justify-center items-center gap-3 text-center">
        <div className="relative">
          <img 
            src="https://img5.pic.in.th/file/secure-sv1/-668e94e3b2fda05e3.png" 
            alt="Logo" 
            className="h-28 w-auto drop-shadow-[0_0_20px_rgba(251,191,36,0.4)] animate-pulse mb-3"
          />
          <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full -z-10 animate-pulse"></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-charm font-bold text-white glow-gold tracking-tight drop-shadow-lg leading-tight px-4">
          หมอดูแม่นๆ
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent rounded-full mt-1"></div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-40 overflow-x-hidden">
        <div className={`tab-transition h-full ${isTransitioning ? 'tab-hidden' : 'tab-visible'}`}>
          {renderContent()}
        </div>
      </main>

      {/* Bottom Navigation & Copyright Footer */}
      <nav className="fixed bottom-0 left-0 right-0 glass-dark border-t border-white/10 pb-safe shadow-[0_-10px_50px_rgba(0,0,0,0.6)] z-50 rounded-t-3xl">
        <div className="max-w-xl mx-auto flex justify-around items-center h-20 px-4">
          <NavButton 
            active={activeTab === AppTab.DAILY} 
            onClick={() => handleTabChange(AppTab.DAILY)} 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />} 
            label="Daily" 
          />

          <NavButton 
            active={activeTab === AppTab.TAROT} 
            onClick={() => handleTabChange(AppTab.TAROT)} 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />} 
            label="Tarot" 
          />

          <NavButton 
            active={activeTab === AppTab.LOTTERY} 
            onClick={() => handleTabChange(AppTab.LOTTERY)} 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />} 
            label="Lucky" 
            special 
          />

          <NavButton 
            active={activeTab === AppTab.THAI} 
            onClick={() => handleTabChange(AppTab.THAI)} 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" />} 
            label="Thai" 
          />

          <NavButton 
            active={activeTab === AppTab.ORACLE} 
            onClick={() => handleTabChange(AppTab.ORACLE)} 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />} 
            label="Oracle" 
          />
        </div>
        
        {/* Vercel Friendly Credits Footer */}
        <div className="flex flex-col items-center gap-1 pb-4 pt-1">
          <div className="text-[10px] text-center text-white/40 font-bold uppercase tracking-[0.2em] font-cinzel">
            Freeman @ Copyright Krukai
          </div>
          <div className="text-[9px] text-center text-pink-400/60 font-bold uppercase tracking-[0.1em] px-6">
            ฝากแชร์ ฝากติดตามเพื่อเป็นกำลังใจให้นักพัฒนาด้วยนะครับ ✨
          </div>
        </div>
      </nav>
    </div>
  );
};

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  special?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ active, onClick, icon, label, special }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 transition-all duration-300 group ${active ? 'text-white scale-110' : 'text-white/30'}`}
    >
      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
        active 
          ? (special ? 'bg-amber-500 shadow-lg shadow-amber-500/40 rotate-12' : 'bg-pink-600 shadow-lg shadow-pink-500/40') 
          : 'bg-white/5 hover:bg-white/10'
      }`}>
         <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           {icon}
         </svg>
      </div>
      <span className={`text-[8px] font-bold uppercase tracking-widest transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-60'}`}>
        {label}
      </span>
    </button>
  );
};

export default App;
