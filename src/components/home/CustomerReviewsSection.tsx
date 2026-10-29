import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const sampleGuestNotes = [
  {
    category: 'Dinner',
    reviewer: 'Elena M.',
    image: '/Reviews/customer-steak.webp',
    quote:
      'The strip arrived with exactly the right char, and the roasted roots soaked up every bit of the red wine jus. The whole dinner felt considered without feeling formal.',
  },
  {
    category: 'Cocktails',
    reviewer: 'Daniel R.',
    image: '/Reviews/customer-cocktail.webp',
    quote:
      'Seasonal cooking, warm service and a cocktail list that genuinely complements the food. The rosemary gin fizz was the standout.',
  },
  {
    category: 'Raw & Coastal',
    reviewer: 'Maya L.',
    image: '/Reviews/customer-oysters.webp',
    quote:
      'The Atlantic oysters tasted incredibly fresh, with a bright mignonette that kept the whole plate clean, simple and memorable.',
  },
];

const CustomerReviewsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-your-burgundy/5 to-your-black py-16 md:py-24">
      <div className="container relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-your-wine-light">
            Concept experience
          </p>
          <h2 className="mb-5 text-3xl font-bold text-your-cream md:text-4xl">
            Concept Guest Notes
          </h2>
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-your-cream/70 md:text-lg">
            Sample testimonials for this personal concept site, reflecting the seasonal New American dinner,
            coastal plates and cocktail experience envisioned for The Dorset.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {sampleGuestNotes.map((note, index) => (
            <motion.blockquote
              key={note.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="relative flex min-h-72 flex-col overflow-hidden border border-your-cream/15 bg-your-ivory text-left shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-your-black sm:h-52">
                <Image
                  src={note.image}
                  alt={`${note.category} photographed from a guest's table for this concept review`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-your-black/45 via-transparent to-transparent" aria-hidden />
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-your-wine-light">
                      {note.category}
                    </p>
                    <div className="flex gap-1 text-your-wine-light" aria-label="Five out of five stars">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-current" aria-hidden />
                      ))}
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-your-wine-light/35" aria-hidden />
                </div>

                <p className="mb-0 flex-1 text-base font-semibold leading-relaxed text-your-cream/85 md:text-lg">
                  “{note.quote}”
                </p>
                <footer className="mt-8 border-t border-your-cream/10 pt-5">
                  <p className="mb-1 text-sm font-bold text-your-cream">{note.reviewer}</p>
                  <p className="mb-0 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-your-cream/45">
                    Fictional guest · Concept preview
                  </p>
                </footer>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;
