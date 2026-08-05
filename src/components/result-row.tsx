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
    <li className="rounded-field bg-white ps-4 pe-4 pt-1.5 pb-4 text-field-sm tracking-body md:flex md:h-18 md:items-center md:gap-6 md:ps-8 md:pe-6 md:pt-0 md:pb-0 md:text-field">
      <p className="truncate text-very-dark-blue md:min-w-0 md:flex-1">
        {link.original}
      </p>

      <hr className="-mx-4 mt-1.5 border-t border-grayish-violet md:hidden" />

      <a
        href={link.short}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1.5 block truncate text-cyan-deep hover:underline md:mt-0"
      >
        {link.short}
      </a>

      <button
        type="button"
        onClick={onCopy}
        className={cn(
          "mt-2 h-10 w-full rounded-field md:mt-0 md:w-25.75 md:shrink-0 md:text-label-sm",
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
