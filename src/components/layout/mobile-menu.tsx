"use client";

import { MenuIcon } from "@/components/icons";
import { loginLink, navLinks, signUpLink } from "@/data";
import { cn } from "@/lib";
import { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const desktop = window.matchMedia("(min-width: 64rem)");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (wrapperRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };

    const handleBreakpointChange = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    desktop.addEventListener("change", handleBreakpointChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktop.removeEventListener("change", handleBreakpointChange);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex cursor-pointer items-center text-grayish-violet-deep"
      >
        <MenuIcon className="w-6" />
      </button>

      <nav
        id="mobile-menu"
        aria-label="Primary"
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-full mt-6 hidden rounded-panel bg-dark-violet px-6 py-10",
          { block: open },
        )}
      >
        <ul className="flex flex-col gap-7.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="v-menu-link v-focus-ring-inverse"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <hr className="mt-7.5 border-t border-grayish-violet/25" />

        <a
          href={loginLink.href}
          onClick={() => setOpen(false)}
          className="mt-8 v-menu-link v-focus-ring-inverse"
        >
          {loginLink.label}
        </a>

        <a
          href={signUpLink.href}
          onClick={() => setOpen(false)}
          className="mt-6 v-btn h-12 w-full v-focus-ring-inverse rounded-full text-label-md"
        >
          {signUpLink.label}
        </a>
      </nav>
    </div>
  );
}
