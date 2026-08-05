import { features, stats } from "@/data";
import { cn } from "@/lib";

const CARD_OFFSETS = ["", "lg:mt-11", "lg:mt-22"];

export default function Stats() {
  return (
    <section
      aria-labelledby="stats-title"
      className="bg-off-white px-6 pb-20 text-center lg:px-10 lg:pb-30"
    >
      <div className="mx-auto max-w-page">
        <div className="v-reveal">
          <h2
            id="stats-title"
            className="text-heading-sm font-bold tracking-display text-very-dark-blue lg:text-heading"
          >
            {stats.title}
          </h2>

          <p className="mx-auto mt-4 text-intro-sm tracking-body md:max-w-120 lg:mt-4.5 lg:max-w-135 lg:text-intro">
            {stats.description}
          </p>
        </div>

        <div className="relative isolate mt-12 md:mx-auto md:max-w-md lg:mt-14 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute top-8 bottom-0 left-1/2 -z-10 w-2 -translate-x-1/2 bg-cyan lg:top-49 lg:bottom-auto lg:left-0 lg:h-2 lg:w-full lg:translate-x-0"
          />

          <ul className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-7.5">
            {features.map((feature, index) => (
              <li
                key={feature.title}
                className={cn("relative v-reveal pt-11", CARD_OFFSETS[index])}
              >
                <span className="absolute top-0 left-1/2 flex size-22 -translate-x-1/2 items-center justify-center rounded-full bg-dark-violet lg:left-8 lg:translate-x-0">
                  <feature.icon
                    className={cn("text-cyan", feature.iconWidth)}
                  />
                </span>

                <div className="rounded-field bg-white px-8 pt-19.25 pb-10.25 lg:text-left">
                  <h3 className="text-title font-bold text-very-dark-blue">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-copy">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
