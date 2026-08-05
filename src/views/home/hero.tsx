import illustration from "@/assets/images/illustration-working.svg";
import { hero } from "@/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-6 pt-6 pb-22 lg:px-10 lg:pt-34.75 lg:pb-34.5">
      <Image
        src={illustration}
        alt=""
        priority
        className="w-lg max-w-none md:mx-auto lg:absolute lg:top-19.5 lg:left-[calc(50%+110px)] lg:w-183.25"
      />

      <div className="mx-auto max-w-page">
        <div className="mt-9.25 text-center md:mx-auto md:max-w-120 lg:mt-0 lg:max-w-none lg:text-left">
          <h1 className="mx-auto max-w-[8em] text-display font-bold tracking-display text-very-dark-blue lg:mx-0 lg:text-display-lg">
            {hero.title}
          </h1>

          <p className="mt-3.75 text-lead-sm tracking-body lg:mt-1.25 lg:max-w-135 lg:text-lead">
            {hero.description}
          </p>

          <a
            href={hero.cta.href}
            className="mt-8 v-btn h-14 w-49.25 shrink-0 rounded-full text-label lg:mt-9.5"
          >
            {hero.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
