import {
  Crosshair,
  Droplets,
  FlaskConical,
  Sprout,
  ArrowUpRight,
} from "lucide-react";
import { landscapeAssets } from "../data/products";
import Reveal from "./Reveal";

export default function AgricultureIntro() {
  const features = [
    {
      title: "Precision Agriculture",
      description:
        "Data-led crop feeding plans that reduce waste while protecting growth uniformity.",
      icon: Crosshair,
    },
    {
      title: "Advanced Crop Nutrition",
      description:
        "High-performance formulations tuned around plant physiology and timed uptake.",
      icon: FlaskConical,
    },
    {
      title: "Modern Farming",
      description:
        "Built to support drip systems, foliar schedules, and controlled cultivation workflows.",
      icon: Droplets,
    },
    {
      title: "Efficient Crop Growth",
      description:
        "Designed for faster crop response, cleaner finishes, and resilient field performance.",
      icon: Sprout,
    },
  ];

  return (
    <section
      id="agriculture"
      className="scroll-mt-28 overflow-hidden bg-[var(--bg)] py-20 md:py-28 lg:py-32"
    >
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal className="flex flex-col">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--tulip)]" />

              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--forest)]">
                Netherlands-inspired approach
              </p>
            </div>

            <h2
              className="
                max-w-2xl
                font-[var(--font-display)]
                text-4xl
                font-semibold
                leading-[0.98]
                tracking-[-0.025em]
                text-[var(--ink)]
                md:text-5xl
                lg:text-6xl
              "
            >
              Precision thinking from Dutch agriculture,
              <span className="text-[var(--forest)]">
                {" "}
                translated into everyday crop nutrition.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
              The Netherlands is known for precise cultivation, efficient
              land use, and highly controlled crop systems. Benfertico brings
              that same disciplined mindset to crop nutrition, with formulas
              selected around growth stage, application method, and crop
              demand.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
              From protected cultivation to open-field schedules, every
              nutrition program is positioned to help growers choose with
              more confidence and less guesswork.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-white/70
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[var(--forest)]/30
                      hover:shadow-[0_18px_40px_rgba(20,40,29,0.08)]
                    "
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-[var(--forest)]
                          text-white
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      >
                        <Icon size={19} strokeWidth={1.8} />
                      </div>

                      <span className="text-xs font-bold text-[var(--muted)]/50">
                        0{index + 1}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-5
                        font-[var(--font-sans)]
                        text-base
                        font-extrabold
                        leading-tight
                        text-[var(--ink)]
                      "
                    >
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {feature.description}
                    </p>

                    <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[var(--tulip)]/10 transition-transform duration-500 group-hover:scale-150" />
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative min-h-[580px] overflow-hidden rounded-[2rem] bg-[var(--forest-deep)] shadow-[0_30px_70px_rgba(20,40,29,0.16)]">
              <img
                src={landscapeAssets.story}
                alt="Windmill across the Dutch agricultural landscape"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-[linear-gradient(
                    180deg,
                    rgba(7,20,12,0.05)_15%,
                    rgba(7,20,12,0.10)_35%,
                    rgba(7,20,12,0.82)_100%
                  )]
                "
              />

              <div className="absolute left-6 top-6 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Sprout size={14} className="text-[var(--tulip)]" />

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">
                    Dutch field discipline
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                      Holland field rhythm
                    </p>

                    <h3 className="mt-3 max-w-lg font-[var(--font-display)] text-2xl font-semibold leading-tight text-white md:text-3xl">
                      Accuracy, timing, and consistency in every crop cycle.
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/75 md:text-base">
                      Nutrition programs shaped around crop timing,
                      application methods, and dependable field performance.
                    </p>
                  </div>

                  <div
                    className="
                      hidden
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/25
                      bg-white/10
                      text-white
                      backdrop-blur-md
                      sm:flex
                    "
                  >
                    <ArrowUpRight size={19} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}