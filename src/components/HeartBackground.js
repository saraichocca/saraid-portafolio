import React, { useEffect } from 'react';
import '../styles/style.css';

const HeartBackground = () => {
  useEffect(() => {
    // Optional: Could add JS-based animation, but pure CSS is preferred for performance
  }, []);

  return (
    <div className="heart-background">
      {/* Render multiple hearts for animation */}
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className={`heart heart${i + 1}`}>❤️</span>
      ))}
    </div>
  );
};

export default HeartBackground;
