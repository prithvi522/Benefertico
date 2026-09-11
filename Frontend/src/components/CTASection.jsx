import { ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import agri1 from '../assets/Agri1.jpg';
import Reveal from './Reveal';

export default function CTASection() {
  return (
    <section className="relative isolate min-h-[580px] overflow-hidden sm:min-h-[560px] md:min-h-[620px]">
      <img
        src={agri1}
        alt="Dutch windmill over agricultural fields"
        className="cta-bg-animation absolute inset-0 h-full w-full object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,15,0.94)_0%,rgba(7,24,15,0.82)_35%,rgba(7,24,15,0.58)_62%,rgba(7,24,15,0.22)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,transparent_35%,rgba(0,0,0,0.35)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(118,168,72,0.2),transparent_65%)]" />

      <div className="section-shell relative z-10 flex min-h-[580px] items-center py-16 sm:min-h-[560px] sm:py-20 md:min-h-[620px] md:py-24">
        <Reveal className="w-full max-w-3xl">
          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--tulip)] text-[var(--forest-deep)]">
              <Leaf size={14} strokeWidth={2.5} />
            </span>
            <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-white sm:text-[10px] md:text-[11px]">
              Crop Program Guidance
            </span>
          </div>

          <h2 className="mt-8 max-w-[700px] font-[var(--font-display)] text-5xl font-black leading-[0.9] tracking-[-0.045em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.25)] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Give Every Crop
            <span className="mt-3 block text-[#af840b] sm:mt-4">Its Best Start.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base font-bold leading-7 tracking-[-0.01em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] sm:mt-8 md:text-xl md:leading-8">
            Explore our fertilizer collection and discover carefully formulated nutrition solutions designed to support healthy, balanced crop growth.
          </p>

          <div className="mt-8 sm:mt-10">
            <Link
              to="/products"
              className="group inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-full border border-white/40 bg-[linear-gradient(135deg,#1f5136_0%,#315f3c_45%,#789b55_100%)] px-9 text-base font-bold text-white no-underline shadow-[0_8px_25px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.28)] sm:w-auto"
            >
              Explore Fertilizers
              <ArrowRight size={20} strokeWidth={2.7} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-white/40" />
            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/70 sm:text-[10px] sm:tracking-[0.22em]">
              Precision • Nutrition • Growth
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
