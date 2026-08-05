import type { HeroContent, NavLink, ShortenFormCopy } from "./data.types";

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

export const loginLink: NavLink = { label: "Login", href: "#login" };

export const signUpLink: NavLink = { label: "Sign Up", href: "#sign-up" };

export const hero: HeroContent = {
  title: "More than just shorter links",
  description:
    "Build your brand’s recognition and get detailed insights on how your links are performing.",
  cta: { label: "Get Started", href: "#get-started" },
};

export const shortenForm: ShortenFormCopy = {
  label: "Shorten a link",
  placeholder: "Shorten a link here...",
  submit: "Shorten It!",
  copyAction: "Copy",
  copiedAction: "Copied!",
  emptyError: "Please add a link",
  invalidError: "That link doesn’t look valid",
  requestError: "Something went wrong. Please try again.",
  copyError: "The link could not be copied.",
};
