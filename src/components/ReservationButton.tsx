'use client';

import Link from 'next/link';
import { CalendarDays } from 'lucide-react';

export default function ReservationButton() {
  return (
    <Link
      href="/#connect"
      className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full bg-your-orange p-3 text-base font-semibold text-white shadow-2xl transition-colors hover:bg-your-orange/90 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-your-cream sm:right-8 md:px-5"
      aria-label="Reserve a table"
    >
      <CalendarDays className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
      <span className="hidden md:inline">Reserve a Table</span>
    </Link>
  );
}
