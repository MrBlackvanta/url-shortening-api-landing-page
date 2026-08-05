import { shortenForm } from "@/data";
import { cn } from "@/lib";
import type { ShortLink } from "@/lib/use-shortened-links";

type ResultRowProps = {
  link: ShortLink;
  copied: boolean;
  onCopy: () => void;
};

export default function ResultRow({ link, copied, onCopy }: ResultRowProps) {
  return (
    <li className="rounded-field bg-white p-4 text-field-sm tracking-body lg:flex lg:h-18 lg:items-center lg:gap-6 lg:p-0 lg:ps-8 lg:pe-6 lg:text-field">
      <p className="truncate text-very-dark-blue lg:min-w-0 lg:flex-1">
        {link.original}
      </p>

      <hr className="-mx-4 my-3 border-t border-grayish-violet/25 lg:hidden" />

      <a
        href={link.short}
        target="_blank"
        rel="noopener noreferrer"
        className="block truncate text-cyan-deep hover:underline"
      >
        {link.short}
      </a>

      <button
        type="button"
        onClick={onCopy}
        className={cn(
          "mt-3 h-12 w-full rounded-field text-label-sm lg:mt-0 lg:h-10 lg:w-25.75 lg:shrink-0",
          {
            "v-btn": !copied,
            "v-btn-copied": copied,
          },
        )}
      >
        {copied ? shortenForm.copiedAction : shortenForm.copyAction}
      </button>
    </li>
  );
}
