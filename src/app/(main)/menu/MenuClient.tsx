import { dinnerMenuSections } from '@/data/dinnerMenuData';

const sectionId = (name: string) => `menu-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

export default function MenuClient() {
  return (
    <section aria-labelledby="dinner-menu-title" className="bg-your-black px-4 py-16 text-your-cream sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl border-x border-your-wine-light/40 px-5 sm:px-10 md:px-16 lg:px-24">
        <header className="mb-16 text-center md:mb-20">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-your-wine-light sm:text-sm">
            Farm · Coast · Cellar
          </p>
          <h1 id="dinner-menu-title" className="text-4xl font-bold uppercase tracking-[0.14em] text-white sm:text-5xl md:text-6xl">
            Dinner Menu
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-relaxed text-your-cream/55 sm:text-base">
            Seasonal New American cooking inspired by local farms and the Atlantic coast.
          </p>
        </header>

        <nav aria-label="Dinner menu sections" className="mb-20 border-y border-your-cream/10 py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-your-cream/55 sm:text-xs">
            {dinnerMenuSections.map((section) => (
              <li key={section.name}>
                <a
                  href={`#${sectionId(section.name)}`}
                  className="transition-colors hover:text-your-wine-light focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-your-wine-light"
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-auto max-w-4xl space-y-20 md:space-y-24">
          {dinnerMenuSections.map((section) => {
            const isSignatureSection = section.name === 'From the Hearth';

            return (
              <section
                key={section.name}
                id={sectionId(section.name)}
                aria-labelledby={`${sectionId(section.name)}-title`}
                className={`scroll-mt-28 text-center ${
                  isSignatureSection
                    ? 'rounded-sm border border-your-wine-light/55 px-5 py-10 sm:px-10 md:py-12'
                    : ''
                }`}
              >
                {isSignatureSection && (
                  <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-your-cream/45 sm:text-xs">
                    Farm, Pasture &amp; Fire
                  </p>
                )}
                <h2
                  id={`${sectionId(section.name)}-title`}
                  className="text-2xl font-bold tracking-wide text-your-wine-light sm:text-3xl"
                >
                  {section.name}
                </h2>

                {(section.note || section.priceNote) && (
                  <div className="mt-3 space-y-1 text-sm font-semibold leading-relaxed text-your-cream/55 sm:text-base">
                    {section.note && <p>{section.note}</p>}
                    {section.priceNote && <p className="text-your-wine-light">{section.priceNote}</p>}
                  </div>
                )}

                <div
                  className={`mt-8 ${
                    section.featured
                      ? 'grid gap-x-16 gap-y-8 sm:grid-cols-2'
                      : 'mx-auto max-w-2xl space-y-9'
                  }`}
                >
                  {section.items.map((item) => (
                    <article key={item.name} className="text-center">
                      <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
                        <h3 className="text-sm font-bold uppercase leading-snug tracking-[0.06em] text-white sm:text-base">
                          {item.name}
                        </h3>
                        {item.price && (
                          <span className="text-sm font-bold tabular-nums text-your-wine-light sm:text-base">
                            {item.price}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="mx-auto mt-2 max-w-xl text-sm font-medium leading-relaxed text-your-cream/60 sm:text-base">
                          {item.description}
                        </p>
                      )}
                      {item.additions && (
                        <ul className="mt-3 space-y-1 text-sm font-semibold text-your-cream/45">
                          {item.additions.map((addition) => (
                            <li key={addition}>{addition}</li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <footer className="mt-20 border-t border-your-cream/10 py-10 text-center md:mt-28">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-your-cream/55 sm:text-sm">
            gf — gluten-free&nbsp;&nbsp; · &nbsp;&nbsp;v — vegetarian&nbsp;&nbsp; · &nbsp;&nbsp;vegan — vegan
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-your-cream/40">
            Please inform your server of any allergies or dietary requirements. Menu availability may change with the season.
          </p>
        </footer>
      </div>
    </section>
  );
}
