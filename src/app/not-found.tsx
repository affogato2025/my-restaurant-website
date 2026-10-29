import Link from 'next/link';
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-your-orange/5 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-your-cream">404</h1>
        <p className="text-xl text-your-cream/70 mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-your-orange hover:bg-your-orange/90 text-white rounded-full font-medium transition-colors shadow-md"
        >
          <Home size={18} className="mr-2" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
}
