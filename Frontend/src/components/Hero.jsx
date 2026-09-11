import { ArrowRight, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/Hero-VideoAgri.mp4';
import { landscapeAssets } from '../data/products';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--forest-deep)]"
    >
      <img
        src={landscapeAssets.hero}
        alt="Dutch greenhouse-inspired agricultural landscape"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <video
        className="image-drift absolute inset-0 h-full w-full object-cover object-center"
        poster={landscapeAssets.hero}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,11,0.9)_0%,rgba(5,18,11,0.72)_45%,rgba(5,18,11,0.38)_75%,rgba(5,18,11,0.2)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(118,168,72,0.18),transparent_32rem)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,var(--bg),rgba(248,245,236,0.12),transparent)]" />

      <div className="section-shell relative z-20 flex min-h-[100svh] items-center pb-20 pt-40 sm:pt-44 md:pb-24 md:pt-48 lg:pt-56">
        <Reveal className="relative z-30 w-full max-w-4xl">
          <div className="inline-flex -translate-y-4 items-center gap-2 border-l-2 border-[var(--tulip)] pl-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.4)] sm:-translate-y-8 sm:text-[11px] md:-translate-y-12 md:text-xs">
            <Sprout size={15} strokeWidth={2.2} />
            <span>Netherlands-inspired crop nutrition</span>
          </div>

          <h1 className="max-w-[800px] -translate-y-2 text-[clamp(3rem,12vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.035em] text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.2)] sm:-translate-y-5">
            Growing
            <span className="block text-[var(--tulip)]">Tomorrow,</span>
            Naturally.
          </h1>

          <p className="mt-3 max-w-2xl text-base font-medium leading-7 text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] md:text-lg md:leading-8">
            Innovative crop nutrition inspired by the precision, technology, and agricultural expertise of the Netherlands.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Link
              to="/products"
              className="group inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-full border border-white/25 bg-[linear-gradient(135deg,#123522_0%,#1f5136_50%,#6d994a_100%)] px-8 text-base font-extrabold text-white no-underline shadow-[0_10px_28px_rgba(18,53,34,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
            >
              View Product Catalog
              <ArrowRight size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/about"
              className="inline-flex min-h-[58px] w-full items-center justify-center rounded-full border border-white/55 bg-[linear-gradient(135deg,#123522_0%,#1f5136_50%,#6d994a_100%)] px-8 text-base font-extrabold text-white no-underline shadow-[0_10px_28px_rgba(18,53,34,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
            >
              Discover Our Approach
            </Link>
          </div>

          <div className="mt-9 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65 md:text-xs">
            <span className="h-px w-8 shrink-0 bg-white/45" />
            <span>Precision • Nutrition • Growth</span>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 right-8 z-20 hidden flex-col items-center gap-3 md:flex">
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/55 [writing-mode:vertical-rl]">Scroll</span>
        <span className="h-12 w-px bg-white/30" />
      </div>
    </section>
  );
}
