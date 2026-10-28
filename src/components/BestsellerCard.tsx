import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BestsellerCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  category?: string;
}

export default function BestsellerCard({
  title, 
  description, 
  price, 
  imageSrc,
  category = ''
}: BestsellerCardProps) {
  return (
    <Link
      href="/menu"
      aria-label={`View ${title} on the dinner menu`}
      className="group block overflow-hidden rounded-xl bg-your-ivory shadow-md transition-transform duration-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-your-wine-light"
    >
      <div className="relative h-56 overflow-hidden bg-your-black">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-your-black/45 via-transparent to-transparent" aria-hidden />
      </div>
      <div className="p-5">
        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-your-wine-light">
          {category}
        </p>
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="text-base font-bold leading-snug text-your-cream transition-colors group-hover:text-your-wine-light sm:text-lg">
            {title}
          </h3>
          <span className="shrink-0 text-base font-bold tabular-nums text-your-wine-light">{price}</span>
        </div>
        <div className="flex items-end justify-between gap-4">
          <p className="mb-0 text-sm font-medium leading-relaxed text-your-cream/65">{description}</p>
          <ChevronRight className="h-4 w-4 shrink-0 text-your-wine-light transition-transform group-hover:translate-x-1" aria-hidden />
        </div>
      </div>
    </Link>
  );
}
