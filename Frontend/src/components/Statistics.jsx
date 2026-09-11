import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const stats = [
  { value: 25, suffix: '+', label: 'Years of Innovation' },
  { value: 40, suffix: '+', label: 'Crop Solutions' },
  { value: 20, suffix: '+', label: 'Countries' },
  { value: 95, suffix: '%', label: 'Farmer Satisfaction' },
];

function CounterCard({ stat, delay }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    let animationFrame;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        const startTime = performance.now();
        const duration = 1100;

        const animate = (timestamp) => {
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * stat.value));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);
        observer.unobserve(entry.target);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [stat.value]);

  return (
    <Reveal delay={delay}>
      <div
        ref={cardRef}
        className="flex min-h-[168px] flex-col justify-between rounded-2xl border border-white/12 bg-white/8 p-6 text-white shadow-[0_18px_40px_rgba(4,20,11,0.16)] backdrop-blur md:p-7"
      >
        <p className="text-5xl font-semibold leading-none md:text-6xl">
          {count}
          {stat.suffix}
        </p>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
          {stat.label}
        </p>
      </div>
    </Reveal>
  );
}

export default function Statistics() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--forest-deep)] py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(168,200,117,0.18),transparent_32rem)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/12" />
      <div className="section-shell relative">
        <Reveal className="mb-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-12">
            <div>
              <p className="section-kicker text-white/72">Grower proof</p>
              <h2 className="text-balance mt-4 max-w-4xl text-4xl leading-[0.98] text-white md:text-6xl">
                Proven by crop range, long-term formulation discipline, and grower trust.
              </h2>
            </div>
            <p className="max-w-[360px] border-l-2 border-[var(--leaf-soft)] pl-5 text-base leading-8 text-white/72">
              A broad nutrition portfolio for farms that need dependable results across protected
              cultivation, orchards, open fields, and ornamental programs.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <CounterCard key={stat.label} stat={stat} delay={index * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
