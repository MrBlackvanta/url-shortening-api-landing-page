import {
  BrandRecognitionIcon,
  DetailedRecordsIcon,
  FacebookIcon,
  FullyCustomizableIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from "@/components/icons";
import type {
  CtaContent,
  Feature,
  FooterColumn,
  HeroContent,
  NavLink,
  SectionIntro,
  SocialLink,
} from "./data.types";

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

export const stats: SectionIntro = {
  title: "Advanced Statistics",
  description:
    "Track how your links are performing across the web with our advanced statistics dashboard.",
};

export const features: Feature[] = [
  {
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    icon: BrandRecognitionIcon,
    iconWidth: "w-10",
  },
  {
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: DetailedRecordsIcon,
    iconWidth: "w-10",
  },
  {
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: FullyCustomizableIcon,
    iconWidth: "w-12",
  },
];

export const boost: CtaContent = {
  title: "Boost your links today",
  cta: { label: "Get Started", href: "#get-started" },
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Features",
    links: [
      { label: "Link Shortening", href: "#link-shortening" },
      { label: "Branded Links", href: "#branded-links" },
      { label: "Analytics", href: "#analytics" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Developers", href: "#developers" },
      { label: "Support", href: "#support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Our Team", href: "#our-team" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#facebook", icon: FacebookIcon },
  { label: "Twitter", href: "#twitter", icon: TwitterIcon },
  { label: "Pinterest", href: "#pinterest", icon: PinterestIcon },
  { label: "Instagram", href: "#instagram", icon: InstagramIcon },
];
