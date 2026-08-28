# URL shortening API landing page

My solution to the [Shortly URL shortening API landing page](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://url-shortening-api-landing-page.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/url-shortening-api-landing-page

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

### Colour

Six pairings sit below AA. Each change is the smallest one that clears the bar on the worst
backdrop it sits on:

|                                | design     | built              | contrast     |
| ------------------------------ | ---------- | ------------------ | ------------ |
| Label on every cyan button     | white      | `#34313D`          | 2.99 to 6.68 |
| Body copy, nav links, cards    | `#9E9AA8`  | darker violet-grey | 2.4 to 4.55  |
| Shortened link on a white row  | `#2BD0D0`  | darker cyan        | 1.90 to 4.54 |
| Error message on the dark card | `#F46363`  | lighter red        | 3.06 to 4.51 |
| Input placeholder              | ink at 50% | ink at 67%         | 2.86 to 4.54 |

**The cyan surface is kept and the label darkened, not the reverse.** No cyan that carries a
white 15px label at AA is still recognisable as the brand colour; it has to drop eighteen
lightness points. The pills are large areas and the labels are small, so changing the label
preserves far more of the page's colour.

**The off-white section governs the body colour.** One step lighter passes on white at 5.07
and fails on the `#EFF1F7` section at 4.49. The margin is a hundredth of a ratio point, so I
solved it against the rounded 8-bit channels the browser actually paints rather than the
unrounded HSL.

**The error state drops the design's red placeholder tint.** No red carries placeholder text
at AA on white; even fully opaque it only reaches 3.06, and a red dark enough to pass is a
harsh pure red that breaks the palette. The error is still signalled three ways: a 3px red
border, which passes as a UI boundary, the red message, and `aria-invalid` with
`aria-describedby`.

Hover states are kept exactly as designed. Hover isn't audited and every resting state passes.

### Type and layout

**Letter-spacing is three em ratios, not per-size pixel values.** Every tracked size in the
design reduces to one of them. The two input placeholders are the only outliers, and the
difference across the whole placeholder string is 0.3px, so they fold into the body token.

**Both hard line breaks are constrained widths, not `<br>`.** The headline breaks after
"just" at every size. Its longest line is 7.04em and adding the next word jumps to 10.8em,
which is an unusually wide band, so a single `8em` cap sits in the middle and holds the break
at both 80px and 42px. A `<br>` would overflow narrow viewports, and a px width is a coin flip
on sub-pixel font metrics.

**The page background switches colour at the shorten card's vertical centre.** Rather than
hard-coding the 800px offset, the switch is a half-card-height white band anchored to the top
of the card's own section, so it stays centred on the card no matter how the content above
reflows.

**The design has no tablet layout, so 768 to 1023 is a judgement call.** It uses the mobile
structure with the desktop treatment wherever it fits: the form and result rows go single-row,
the card artwork switches to the desktop SVG, the footer columns sit side by side, and the
hero illustration centres instead of bleeding off the edge. Three feature cards across isn't
viable there, since each would be 215px wide and the body copy would run to eight lines.

Two places where the design is inconsistent: the mobile feature cards use different bottom
padding on the four-line and five-line cards, so uniform padding makes the middle card 9px
taller than the mock, and the footer is 16px taller because it carries the attribution.

### Behaviour

**Link shortening goes through a Route Handler, not the browser.** `POST /api/shorten` proxies
cleanuri server-side, which sidesteps CORS and keeps the upstream contract in one place: it
normalises a missing scheme, maps upstream 4xx to a friendly message, guards against a
non-JSON response, and aborts after 8 seconds. The page itself still prerenders as static.

**Saved links are read through `useSyncExternalStore`.** localStorage is an external store, so
reading it in an effect and calling `setState` is a cascading render, which the React Compiler
lint rule rejects outright. The server snapshot is a stable empty array, which keeps hydration
honest with no `suppressHydrationWarning`.

**Section reveals are pure CSS.** They run on `animation-timeline: view()` rather than an
IntersectionObserver, so the three static sections stay server components and ship no extra
bytes. Two guards make it safe: the rule sits inside both `prefers-reduced-motion` and
`@supports (animation-timeline: view())`, and a view timeline is inactive while its subject is
out of range, so the fallback everywhere is the element at full opacity rather than a blank
box. The range ends at `entry 80%`, deliberately not 100%: the footer's entry range finishes
about two pixels past the document's maximum scroll, so at 100% it would sit at 99% opacity
forever.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
