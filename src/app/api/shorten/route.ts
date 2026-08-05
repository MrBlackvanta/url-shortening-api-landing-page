import { shortenForm } from "@/data";

const CLEAN_URI_ENDPOINT = "https://cleanuri.com/api/v1/shorten";
const UPSTREAM_TIMEOUT_MS = 8000;

function readString(source: unknown, key: string) {
  if (typeof source !== "object" || source === null) return undefined;
  const value = (source as Record<string, unknown>)[key];
  return typeof value === "string" ? value : undefined;
}

function withScheme(url: string) {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: shortenForm.requestError }, { status: 400 });
  }

  const url = readString(payload, "url");

  if (!url?.trim()) {
    return Response.json({ error: shortenForm.emptyError }, { status: 400 });
  }

  let response: Response;

  try {
    response = await fetch(CLEAN_URI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ url: withScheme(url.trim()) }),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
  } catch {
    return Response.json({ error: shortenForm.requestError }, { status: 502 });
  }

  let data: unknown;

  try {
    data = await response.json();
  } catch {
    data = undefined;
  }

  const shortUrl = readString(data, "result_url");

  if (shortUrl) {
    return Response.json({ shortUrl });
  }

  if (response.status >= 400 && response.status < 500) {
    return Response.json({ error: shortenForm.invalidError }, { status: 400 });
  }

  return Response.json({ error: shortenForm.requestError }, { status: 502 });
}
