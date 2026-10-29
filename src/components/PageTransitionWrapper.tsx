'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function PageTransitionWrapper({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
  );
}
