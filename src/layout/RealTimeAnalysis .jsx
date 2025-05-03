import React, { useEffect, useState } from 'react';

const RealTimeAnalysis = () => {
  const [progress, setProgress] = useState(0);
  

  useEffect(() => {
    // Dummy dynamic loader (looping from 0 to 85%)
    const target = 85;
    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current += 1;
        setProgress(current);
      }
    }, 30); // Speed of increase

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-green-500 h-2.5 rounded-full transition-all duration-500 ease-in-out"
      style={{ width: `${progress}%` }}
    ></div>
  );
};

export default RealTimeAnalysis;
