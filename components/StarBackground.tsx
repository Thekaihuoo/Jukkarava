
import React, { useEffect, useState } from 'react';

const StarBackground: React.FC = () => {
  const [bokehs, setBokehs] = useState<{ id: number, top: string, left: string, size: string, duration: string }[]>([]);

  useEffect(() => {
    const newBokehs = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 150 + 50}px`,
      duration: `${Math.random() * 8 + 6}s`,
    }));
    setBokehs(newBokehs);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {bokehs.map((item) => (
        <div
          key={item.id}
          className="bokeh"
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size,
            '--duration': item.duration,
          } as any}
        />
      ))}
    </div>
  );
};

export default StarBackground;
