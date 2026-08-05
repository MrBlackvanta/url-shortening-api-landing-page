import { LogoIcon } from "@/components/icons";
import { footerColumns, socialLinks } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-very-dark-violet px-6 pt-13.5 pb-0.5 text-center lg:px-10 lg:pt-18">
      <div className="mx-auto flex max-w-page v-reveal flex-col items-center lg:grid lg:grid-cols-[minmax(0,380px)_minmax(0,562px)_168px] lg:items-start lg:text-left">
        <LogoIcon className="w-30 text-white" />

        <nav
          aria-label="Footer"
          className="mt-12.25 flex flex-col gap-9.5 md:grid md:w-full md:grid-cols-3 md:gap-0 lg:mt-0 lg:grid-cols-[minmax(0,190px)_minmax(0,190px)_auto]"
        >
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-base font-bold tracking-footer text-white">
                {column.title}
              </h2>

              <ul className="mt-5.5 flex flex-col gap-[10.5px] text-label-sm">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="v-footer-nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <ul className="mt-11.5 flex gap-6 lg:mt-0">
          {socialLinks.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                aria-label={social.label}
                className="v-social-link"
              >
                <social.icon className="w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-sm text-gray lg:mt-12">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="v-footer-link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          target="_blank"
          rel="noopener noreferrer"
          className="v-footer-link"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </p>
    </footer>
  );
}
