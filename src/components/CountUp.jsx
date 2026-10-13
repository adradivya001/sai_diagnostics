import { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2000, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutQuart easing function for a smooth slow-down effect at the end
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(easeProgress * end);
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure we land exactly on the target number
      }
    };
    
    // Intersection Observer to start animation when the component scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = window.requestAnimationFrame(step);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={countRef}>{count.toFixed(decimals)}{suffix}</span>;
};

export default CountUp;
