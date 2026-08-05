export type Link = {
  label: string;
  href: string;
};

export type NavLink = Link;

export type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type SectionIntro = {
  title: string;
  description: string;
};

export type HeroContent = SectionIntro & {
  cta: Link;
};

export type CtaContent = {
  title: string;
  cta: Link;
};

export type Feature = SectionIntro & {
  icon: Icon;
  iconWidth: "w-10" | "w-12";
};

export type FooterColumn = {
  title: string;
  links: Link[];
};

export type SocialLink = Link & {
  icon: Icon;
};

export type ShortenFormCopy = {
  label: string;
  placeholder: string;
  submit: string;
  copyAction: string;
  copiedAction: string;
  emptyError: string;
  invalidError: string;
  requestError: string;
  copyError: string;
};
