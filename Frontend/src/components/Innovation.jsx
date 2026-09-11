import { Leaf, Sprout, Droplets, FlaskConical } from "lucide-react";
import agri3 from "../assets/Agri3.jpg";
import agri4 from "../assets/Agri4.jpg";
import Reveal from "./Reveal";

export default function Innovation() {
  const features = [
    {
      icon: Leaf,
      label: "Balanced Nutrition",
      text: "Essential nutrients for healthy, uniform crop growth.",
    },
    {
      icon: Sprout,
      label: "Crop-Focused",
      text: "Nutrition programs aligned with crop needs and growth stages.",
    },
    {
      icon: Droplets,
      label: "Efficient Application",
      text: "Formulations designed for consistent and effective nutrient use.",
    },
  ];

  const researchPoints = [
    {
      icon: FlaskConical,
      label: "Smart Formulation",
      text: "Carefully selected nutrient combinations for efficient fertilization.",
    },
    {
      icon: Sprout,
      label: "Crop Performance",
      text: "Solutions developed around consistent crop response.",
    },
    {
      icon: Droplets,
      label: "Nutrient Efficiency",
      text: "Focused on better timing, application, and nutrient availability.",
    },
  ];

  return (
    <section className="bg-[var(--bg)] py-16 md:py-24">
      <div className="section-shell">

        {/* SECTION INTRO */}
        <Reveal className="mb-12 text-center md:mb-16">
          <p
            className="
              text-[11px]
              font-extrabold
              uppercase
              tracking-[0.24em]
              text-[var(--forest)]
            "
          >
            Fertilizer Solutions
          </p>
          <div className="flex w-full flex-col items-center text-center">

         <h2
  className="
    mx-auto
    mt-3
    max-w-2xl
    text-center
    font-[var(--font-display)]
    text-3xl
    font-extrabold
    leading-[1.05]
    tracking-[-0.03em]
    text-[var(--ink)]
    md:text-5xl
  "
>
  Better Nutrition.
  <span className="block text-[var(--forest)]">
    Stronger Growth.
  </span>
</h2>
</div>
{/* 
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              font-semibold
              leading-6
              text-[var(--muted)]
              md:text-base
            "
          >
            From essential NPK nutrients to specialized crop nutrition,
            our solutions help growers make precise and efficient
            nutrition decisions.
          </p> */}
        </Reveal>

        {/* ================= FIRST FEATURE ================= */}
        <Reveal
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-[var(--border)]
            bg-[var(--surface)]
            shadow-[0_20px_60px_rgba(20,45,30,0.08)]
          "
        >
          <div className="grid md:grid-cols-[0.85fr_1fr]">

            {/* IMAGE */}
            <div className="relative min-h-[360px] md:min-h-[500px]">
              <img
                src={agri3}
                alt="Agricultural field"
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
                  bg-gradient-to-t
                  from-black/45
                  via-black/5
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  rounded-full
                  border
                  border-white/25
                  bg-black/20
                  px-4
                  py-2
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.2em]
                    text-white
                  "
                >
                  Precision Nutrition
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div
              className="
                flex
                flex-col
                justify-center
                p-7
                md:p-12
                lg:p-14
              "
            >
              <p
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.22em]
                  text-[var(--forest)]
                "
              >
                Balanced Nutrition
              </p>

              <h3
                className="
                  mt-4
                  max-w-lg
                  font-[var(--font-display)]
                  text-3xl
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.03em]
                  text-[var(--ink)]
                  md:text-5xl
                "
              >
                Nutrition built around
                <span className="block text-[var(--forest)]">
                  every growth stage.
                </span>
              </h3>

              <p
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  font-semibold
                  leading-7
                  text-[var(--muted)]
                  md:text-base
                "
              >
                Carefully formulated fertilizer solutions provide
                essential nutrients for balanced and consistent crop
                development.
              </p>

              {/* FEATURE CARDS */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                {features.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="
                        group
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--bg)]
                        p-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[var(--forest)]
                        hover:shadow-[0_12px_30px_rgba(20,45,30,0.08)]
                      "
                    >
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          bg-[var(--forest)]
                          text-white
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      >
                        <Icon size={16} strokeWidth={2.3} />
                      </div>

                      <p
                        className="
                          mt-3
                          text-[11px]
                          font-extrabold
                          uppercase
                          tracking-[0.08em]
                          text-[var(--ink)]
                        "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
                          mt-1.5
                          text-xs
                          font-medium
                          leading-5
                          text-[var(--muted)]
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= SECOND FEATURE ================= */}
        <Reveal
          delay={120}
          className="
            mt-8
            overflow-hidden
            rounded-[28px]
            border
            border-[var(--border)]
            bg-[var(--surface)]
            shadow-[0_20px_60px_rgba(20,45,30,0.08)]
          "
        >
          <div className="grid md:grid-cols-[0.85fr_1fr]">

            {/* IMAGE */}
            <div className="relative min-h-[360px] md:min-h-[500px]">
              <img
                src={agri4}
                alt="Crop field and farming"
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
                  bg-gradient-to-t
                  from-black/45
                  via-black/5
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  rounded-full
                  border
                  border-white/25
                  bg-black/20
                  px-4
                  py-2
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.2em]
                    text-white
                  "
                >
                  Research & Innovation
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div
              className="
                flex
                flex-col
                justify-center
                p-7
                md:p-12
                lg:p-14
              "
            >
              <p
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.22em]
                  text-[var(--forest)]
                "
              >
                Fertilizer Technology
              </p>

              <h3
                className="
                  mt-4
                  max-w-lg
                  font-[var(--font-display)]
                  text-3xl
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.03em]
                  text-[var(--ink)]
                  md:text-5xl
                "
              >
                Smarter fertilizer
                <span className="block text-[var(--forest)]">
                  for stronger crops.
                </span>
              </h3>

              <p
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  font-semibold
                  leading-7
                  text-[var(--muted)]
                  md:text-base
                "
              >
                Our fertilizer solutions focus on nutrient efficiency,
                application timing, and dependable crop response across
                different growing conditions.
              </p>

              {/* RESEARCH POINTS */}
              <div className="mt-8 grid gap-3">
                {researchPoints.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--bg)]
                        p-4
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:border-[var(--forest)]
                      "
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
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
                        <Icon size={17} strokeWidth={2.2} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className="
                              text-[9px]
                              font-extrabold
                              text-[var(--tulip)]
                            "
                          >
                            0{index + 1}
                          </span>

                          <h4
                            className="
                              text-sm
                              font-extrabold
                              text-[var(--ink)]
                            "
                          >
                            {item.label}
                          </h4>
                        </div>

                        <p
                          className="
                            mt-1
                            text-xs
                            font-medium
                            leading-5
                            text-[var(--muted)]
                          "
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
