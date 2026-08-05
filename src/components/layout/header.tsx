import { LogoIcon } from "@/components/icons";
import { loginLink, navLinks, signUpLink } from "@/data";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="px-6 pt-10 lg:px-10 lg:pt-12">
      <div className="relative mx-auto flex max-w-page items-center justify-between">
        <LogoIcon className="w-30 shrink-0 self-end text-very-dark-blue" />

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-between lg:ms-11.5 lg:flex"
        >
          <ul className="flex items-center gap-7.75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="v-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-9.25">
            <li>
              <a href={loginLink.href} className="v-nav-link">
                {loginLink.label}
              </a>
            </li>
            <li>
              <a
                href={signUpLink.href}
                className="v-btn h-10 w-26.25 shrink-0 rounded-full text-label-sm"
              >
                {signUpLink.label}
              </a>
            </li>
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
