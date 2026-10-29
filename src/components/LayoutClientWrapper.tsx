'use client';

import React from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';
import ReservationButton from '@/components/ReservationButton';

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <PageTransitionWrapper>
        {children}
      </PageTransitionWrapper>
      <Footer />
      <ReservationButton />
    </MotionConfig>
  );
}
