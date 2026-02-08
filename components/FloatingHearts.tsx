import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    // Initialize with some hearts
    const initialHearts = Array.from({ length: 15 }, (_, i) => i);
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((i) => (
        <div
          key={i}
          className="absolute text-pink-400 animate-float opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${100 + Math.random() * 20}%`, // Start below screen
            fontSize: `${Math.random() * 20 + 20}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;