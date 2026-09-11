import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Microscope,
  Sprout,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import agri3 from "../assets/Agri1.jpg";
import agri4 from "../assets/Agri2.jpg";
import Reveal from "../components/Reveal";

const values = [
  {
    icon: Sprout,
    title: "Crop Focused",
    description:
      "Nutrition solutions designed around crop needs, growth stages, and practical field applications.",
  },
  {
    icon: Microscope,
    title: "Precision Driven",
    description:
      "Thoughtful formulations that bring consistency, clarity, and precision to crop nutrition.",
  },
  {
    icon: Target,
    title: "Growth Oriented",
    description:
      "Focused on supporting balanced crop development and dependable agricultural outcomes.",
  },
];

export default function AboutUs() {
  return (
    <main className="overflow-hidden bg-[var(--bg)]">
      {/* Hero */}
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[var(--forest-deep)] sm:min-h-[620px]">
        <img
          src={agri4}
          alt="Modern agricultural landscape"
          className="absolute inset-0 h-full w-full object-cover cta-bg-animation"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,15,0.94)_0%,rgba(7,24,15,0.78)_42%,rgba(7,24,15,0.28)_100%)]" />

        <div className="section-shell relative z-10 flex min-h-[560px] items-center pb-20 pt-36 sm:min-h-[620px] sm:py-28">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--tulip)]" />

              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/75">
                About Benfertico
              </p>
            </div>

            <h1 className="mt-6 font-[var(--font-display)] text-4xl font-black leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl lg:text-[6.5rem]">
              Growing with
              <span className="block text-[var(--tulip)]">
                purpose.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base font-medium leading-8 text-white/85 md:text-lg">
              Benfertico brings precision-focused fertilizer solutions to
              modern agriculture, helping growers make clearer and more
              confident crop nutrition decisions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-shell py-16 sm:py-20 md:py-28">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={agri3}
                alt="Agricultural field"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[380px] md:h-[420px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,24,15,0.65)] via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-2 text-white backdrop-blur-md sm:bottom-6 sm:left-6 sm:gap-3 sm:px-4 sm:py-2.5">
                <Leaf size={16} />
                <span className="text-[9px] font-extrabold uppercase tracking-[0.12em] sm:text-[10px] sm:tracking-[0.18em]">
                  Precision • Nutrition • Growth
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--forest)]">
              Who We Are
            </p>

            <h2 className="mt-4 font-[var(--font-display)] text-3xl font-black leading-[1] tracking-[-0.03em] text-[var(--ink)] sm:text-4xl md:text-5xl">
              Better nutrition for
              <span className="block text-[var(--forest)]">
                better growth.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base font-medium leading-8 text-[var(--muted)]">
              <p>
                Benfertico is focused on bringing carefully positioned
                fertilizer and crop nutrition solutions to growers looking
                for practical, reliable, and crop-focused products.
              </p>

              <p>
                Our approach is inspired by the precision and discipline of
                modern agricultural practices, with attention to crop
                requirements, application timing, and consistent nutrition.
              </p>

              <p>
                We believe fertilizer should do more than add nutrients. It
                should become part of a thoughtful crop program that helps
                growers work with greater clarity.
              </p>
            </div>

            <Link
              to="/products"
              className="group mt-8 inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[linear-gradient(135deg,#123522_0%,#1f5136_55%,#6d994a_100%)] px-7 text-sm font-extrabold text-white no-underline shadow-[0_12px_28px_rgba(18,53,34,0.22)] transition duration-300 hover:-translate-y-1"
            >
              Explore Our Products
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-16 sm:py-20 md:py-24">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--forest)]">
              Our Approach
            </p>

            <h2 className="mt-4 font-[var(--font-display)] text-3xl font-black leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-4xl md:text-5xl">
              Built around the needs of modern growers.
            </h2>

            <p className="mt-5 text-base font-medium leading-7 text-[var(--muted)]">
              Every part of our approach is guided by practical crop
              requirements, precision, and long-term agricultural growth.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(31,81,54,0.3)] hover:shadow-[0_18px_40px_rgba(20,40,29,0.08)] sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--forest)] text-white transition duration-300 group-hover:scale-105">
                      <Icon size={21} strokeWidth={2} />
                    </div>

                    <h3 className="mt-6 font-[var(--font-display)] text-xl font-black text-[var(--ink)]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-shell py-16 sm:py-20 md:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[var(--forest-deep)] px-5 py-10 sm:px-7 sm:py-12 md:px-14 md:py-16">
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(118,168,72,0.22),transparent_68%)]" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--tulip)]">
                  Our Commitment
                </p>

                <h2 className="mt-5 max-w-3xl font-[var(--font-display)] text-3xl font-black leading-[1] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
                  Making crop nutrition
                  <span className="block text-[var(--tulip)]">
                    clearer and smarter.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/75">
                  We aim to make it easier for growers to identify the right
                  nutrition solutions, understand their applications, and
                  build effective crop programs.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Crop-focused solutions",
                  "Practical application guidance",
                  "Precision-led nutrition",
                  "Consistent product positioning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 pb-4 text-sm font-bold text-white/90"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[var(--tulip)]"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
