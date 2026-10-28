import { siteConfig } from '@/config/site';

type BusinessHoursProps = {
  className?: string;
  compact?: boolean;
};

const HoursList = ({ entries }: { entries: Array<{ days: string; time: string }> }) => (
  <dl className="space-y-1.5">
    {entries.map((entry) => (
      <div key={`${entry.days}-${entry.time}`} className="flex flex-wrap justify-between gap-x-4 gap-y-1">
        <dt className="font-semibold text-your-cream">{entry.days}</dt>
        <dd className="text-your-cream/80 tabular-nums">{entry.time}</dd>
      </div>
    ))}
  </dl>
);

export default function BusinessHours({ className = '', compact = false }: BusinessHoursProps) {
  return (
    <div className={`${compact ? 'text-xs' : 'text-sm'} space-y-4 ${className}`}>
      <div>
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-your-wine-light">
          Hours
        </p>
        <HoursList entries={siteConfig.hoursRegular} />
      </div>
      <div>
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-your-wine-light">
          Brunch
        </p>
        <HoursList entries={siteConfig.hoursBrunch} />
      </div>
    </div>
  );
}
