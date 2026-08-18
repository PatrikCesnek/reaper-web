# reaper-web

Marketing and App Store Connect support site for **Reaper**, a pixel-art horror
game for iPhone and iPad ([reaper-game](../reaper-game)).

Static HTML, CSS, and one JavaScript file. No build step, no dependencies, no
tracking.

## Pages

| Path       | File           | Purpose                                              |
| ---------- | -------------- | ---------------------------------------------------- |
| `/`        | `index.html`   | Landing page: the rules, nights, screenshots, cloaks |
| `/support` | `support.html` | App Store Connect **Support URL**                     |
| `/privacy` | `privacy.html` | App Store Connect **Privacy Policy URL**              |
| any 404    | `404.html`     | Not-found page, served with a real 404 status         |

## Design

The palette and type come straight out of the game's `Theme.swift`, so the site
and the app read as one thing.

| Token     | Value     | Use                                    |
| --------- | --------- | -------------------------------------- |
| `--void`  | `#0a0a0f` | Page ground (the game's shadow color)  |
| `--bone`  | `#e8e8e3` | Body and display text                  |
| `--soul`  | `#7dfaff` | The single accent, used page-wide      |
| `--blood` | `#d43d3d` | Cost and loss states only, never decor |

Monospace throughout for display and labels, matching the game's
`.system(design: .monospaced)` UI. Corner radius is a flat 4px everywhere, as
in the in-game overlays. The theme is locked to dark on every page.

The hero panel carries the one real interaction: a light mask that follows the
pointer, which restates the game's core mechanic (a small light in a large
night) before any copy does. It drifts on its own on touch devices and switches
off entirely under `prefers-reduced-motion`.

## Languages

English, Slovak, and Czech, switched in the header. Strings live in
`translations` at the top of `script.js`, keyed by `data-i18n` attributes.
Page `<title>` and `<meta name="description">` swap with the language via the
`meta.<page>.*` keys. The choice is remembered in `localStorage` and nothing
is sent anywhere.

To add a string: add the key to all three dictionaries and put
`data-i18n="your.key"` on the element. Use `data-i18n-html` only when the
string has to carry a link.

## Assets

`assets/screenshots/` holds the App Store screenshots from the game repo,
scaled to half size for the web. Regenerate them with:

```sh
cp ../reaper-game/Marketing/AppStoreScreenshots/iPhone-6.9-2868x1320/*.png assets/screenshots/iphone/
for f in assets/screenshots/iphone/*.png; do sips -Z 1434 "$f" --out "$f"; done
```

`assets/icon.png`, `apple-touch-icon.png`, and `favicon.png` are downscales of
the game's `AppIcon.png`. `og-image.png` is the briefing screenshot letterboxed
to 1200x630.

## Running it locally

```sh
python3 scripts/serve.py        # http://localhost:4173
python3 scripts/serve.py 8080   # or pick a port
```

`scripts/serve.py` mirrors `netlify.toml`, so `/support` and `/privacy` resolve
without the `.html` and unknown paths return the real 404 page with a 404
status. A plain `python3 -m http.server` also works but skips all of that.

## Deploying

Netlify, publish directory `.`, no build command. `netlify.toml` carries the
clean-URL redirects, the 404 fallback, security headers, and long cache headers
for `assets/`.

## When the game goes live

1. Add an `offers` block with the real app id to the JSON-LD in `index.html`.
2. Replace every `<span class="btn btn-pending">` with an `<a class="btn
   btn-primary">` pointing at the App Store URL. They are in `index.html` (hero
   and closing band).
3. Update `lastmod` in `sitemap.xml`.

## Branches

`main` is what deploys. Work happens on `develop` and merges down from
`feature/*` branches, matching the game repo's flow.
