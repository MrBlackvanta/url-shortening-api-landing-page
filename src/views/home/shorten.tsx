"use client";

import ResultRow from "@/components/result-row";
import { shortenForm } from "@/data";
import { useShortenedLinks } from "@/lib/use-shortened-links";
import type { ShortLink } from "@/lib/use-shortened-links";
import { useState } from "react";

type ShortenResult = { shortUrl?: unknown; error?: unknown };

export default function Shorten() {
  const { links, add } = useShortenedLinks();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = value.trim();
    if (!url) {
      setError(shortenForm.emptyError);
      return;
    }

    setError(null);
    setPending(true);

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const result: ShortenResult = await response.json();

      if (!response.ok || typeof result.shortUrl !== "string") {
        setError(
          typeof result.error === "string"
            ? result.error
            : shortenForm.requestError,
        );
        return;
      }

      add({ original: url, short: result.shortUrl });
      setValue("");
      setStatus(`${url} shortened to ${result.shortUrl}`);
    } catch {
      setError(shortenForm.requestError);
    } finally {
      setPending(false);
    }
  };

  const handleCopy = async (link: ShortLink) => {
    if (!navigator.clipboard) {
      setStatus(shortenForm.copyError);
      return;
    }

    try {
      await navigator.clipboard.writeText(link.short);
      setCopiedId(link.id);
      setStatus(`${link.short} copied to clipboard`);
    } catch {
      setStatus(shortenForm.copyError);
    }
  };

  return (
    <section
      aria-label={shortenForm.label}
      className="relative isolate bg-off-white px-6 pb-30 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-20 bg-white lg:h-21"
      />

      <div className="mx-auto max-w-page">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-panel bg-dark-violet bg-[url('/bg-shorten-mobile.svg')] bg-bottom-right bg-no-repeat p-6 lg:flex-row lg:items-start lg:gap-6 lg:bg-[url('/bg-shorten-desktop.svg')] lg:bg-cover lg:px-16 lg:py-13"
        >
          <div className="relative lg:flex-1">
            <label htmlFor="url" className="sr-only">
              {shortenForm.label}
            </label>

            <input
              id="url"
              name="url"
              type="text"
              inputMode="url"
              autoComplete="url"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={shortenForm.placeholder}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "shorten-error" : undefined}
              className="h-12 w-full rounded-field border-3 border-transparent bg-white px-4 text-field-sm tracking-body text-very-dark-blue placeholder:text-very-dark-blue/67 aria-invalid:border-red lg:h-16 lg:rounded-panel lg:px-8 lg:text-field"
            />

            {error && (
              <p
                id="shorten-error"
                className="mt-2 text-note tracking-body text-red-soft italic lg:absolute lg:top-full lg:left-0"
              >
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={pending}
            className="v-btn h-12 w-full shrink-0 rounded-field text-label-md disabled:bg-cyan-soft lg:h-16 lg:w-47 lg:rounded-panel lg:text-label"
          >
            {shortenForm.submit}
          </button>
        </form>

        {links.length > 0 && (
          <ul className="mt-6 flex flex-col gap-4">
            {links.map((link) => (
              <ResultRow
                key={link.id}
                link={link}
                copied={copiedId === link.id}
                onCopy={() => handleCopy(link)}
              />
            ))}
          </ul>
        )}

        <p role="status" className="sr-only">
          {status}
        </p>
      </div>
    </section>
  );
}
