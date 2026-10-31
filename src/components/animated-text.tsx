'use client';

import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useState, useEffect } from 'react';

const TAGLINES = [
  'Building scalable web applications',
  'Solving real-world problems',
  'Breaking things and fixing them',
  'Shipping faster than yesterday',
  'Open for freelance projects',
];

export function AnimatedText() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        aria-live="off"
        className="text-lg text-muted-foreground"
      >
        {TAGLINES[index]}
      </motion.span>
    </AnimatePresence>
  );
}
