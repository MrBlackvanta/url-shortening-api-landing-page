import { boost } from "@/data";

export default function Boost() {
  return (
    <section
      aria-labelledby="boost-title"
      className="bg-dark-violet bg-[url('/bg-boost-mobile.svg')] bg-cover bg-center px-6 py-22.5 text-center md:bg-[url('/bg-boost-desktop.svg')] lg:py-14.25"
    >
      <div className="v-reveal">
        <h2
          id="boost-title"
          className="text-heading-sm font-bold tracking-display text-white lg:text-heading"
        >
          {boost.title}
        </h2>

        <a
          href={boost.cta.href}
          className="mt-4 v-btn h-14 w-49.25 shrink-0 v-focus-ring-inverse rounded-full text-label lg:mt-8"
        >
          {boost.cta.label}
        </a>
      </div>
    </section>
  );
}
