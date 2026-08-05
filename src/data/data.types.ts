export type Link = {
  label: string;
  href: string;
};

export type NavLink = Link;

export type SectionIntro = {
  title: string;
  description: string;
};

export type HeroContent = SectionIntro & {
  cta: Link;
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
