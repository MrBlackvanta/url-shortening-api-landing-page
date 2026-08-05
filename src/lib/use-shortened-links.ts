import { useSyncExternalStore } from "react";

const STORAGE_KEY = "shortly:links";

export type ShortLink = {
  id: string;
  original: string;
  short: string;
};

const EMPTY_LINKS: ShortLink[] = [];
const listeners = new Set<() => void>();

let cachedLinks: ShortLink[] | null = null;

function isShortLink(value: unknown): value is ShortLink {
  if (typeof value !== "object" || value === null) return false;
  const link = value as Partial<ShortLink>;
  return (
    typeof link.id === "string" &&
    typeof link.original === "string" &&
    typeof link.short === "string"
  );
}

function readStoredLinks(): ShortLink[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_LINKS;
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isShortLink) : EMPTY_LINKS;
  } catch {
    return EMPTY_LINKS;
  }
}

function writeStoredLinks(links: ShortLink[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  } catch {
    return;
  }
}

function createId() {
  return (
    crypto.randomUUID?.() ??
    `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
  );
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

function getSnapshot(): ShortLink[] {
  cachedLinks ??= readStoredLinks();
  return cachedLinks;
}

function getServerSnapshot(): ShortLink[] {
  return EMPTY_LINKS;
}

function publish(links: ShortLink[]) {
  cachedLinks = links;
  writeStoredLinks(links);
  for (const listener of listeners) listener();
}

export function useShortenedLinks() {
  const links = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const add = (link: Omit<ShortLink, "id">) => {
    publish([...links, { ...link, id: createId() }]);
  };

  return { links, add };
}
