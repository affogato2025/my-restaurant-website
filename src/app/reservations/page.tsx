'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Mail } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-your-black to-your-orange/10 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-your-ivory border border-your-cream/15 rounded-2xl shadow-2xl p-8 md:p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-20 h-20 bg-your-orange/10 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CalendarDays className="w-10 h-10 text-your-wine-light" />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-display font-bold text-your-cream mb-4">
          Reservations &amp; Private Dining
        </h1>

        <p className="text-lg text-your-cream/70 mb-8">
          This portfolio demo uses a reservation enquiry flow instead of a live restaurant ordering service.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/#connect" className="inline-flex items-center gap-2 bg-your-orange text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-your-orange/90 transition-colors">
              <span>Reserve a Table</span>
              <CalendarDays className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${siteConfig.emailContact}?subject=${encodeURIComponent('The Dorset reservation enquiry')}`}
            className="inline-flex items-center gap-2 border border-your-cream/30 text-your-cream px-8 py-4 rounded-full font-semibold text-lg hover:border-your-wine-light hover:text-your-wine-light transition-colors"
          >
            <span>Contact Us</span>
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="mt-8 pt-8 border-t border-your-cream/20">
          <p className="text-sm text-your-cream/60">
            Need help? Contact us at{' '}
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="text-your-wine-light hover:underline font-medium"
            >
              {siteConfig.phoneDisplay}
            </a>
            {' '}or{' '}
            <a
              href={`mailto:${siteConfig.emailContact}`}
              className="text-your-wine-light hover:underline font-medium"
            >
              {siteConfig.emailContact}
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
