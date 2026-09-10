# FIG — website directions

Three homepage directions for **FIG (Fashion International Group)**, Egypt's largest fashion
franchise operator, replacing the current WooCommerce site at [figeg.com](https://figeg.com).

Each direction is a single self-contained HTML file — no build step, no dependencies, no network
calls. Open `index.html` in any browser.

| Direction | Personality | Typefaces | Ground |
|---|---|---|---|
| [`edit/`](edit/) | Fashion magazine — full-bleed, bold **(client favourite)** | Syne + DM Sans | `#FFFFFF` |
| [`bazaar/`](bazaar/) | Marketplace — dense rails, flash sale, merchandising-led | Figtree | `#FFFFFF` |
| [`prism/`](prism/) | Marketplace rails, magazine voice — a hybrid of the two above | Syne + Figtree | `#FFFFFF` |
| [`maison/`](maison/) | Warm editorial — chic, image-led | Instrument Serif + Manrope | `#F4F2EE` |
| [`loop/`](loop/) | Visual shopping feed — tap-first | Sora + Plus Jakarta Sans | `#FAF8F5` |

`bazaar/` and `prism/` follow the layout conventions of large regional marketplaces —
rail-based merchandising, a gender pill in the nav, a flash-sale strip with a live countdown, and a
product card that leads with the brand name over a grey product name. The structure and interaction
patterns are the reference; every asset, brand, price and photograph is FIG's own.

## What's in every direction

- **Real product photography** — 43 products with real names and real EGP prices, pulled from FIG's
  live WooCommerce Store API and inlined as base64 (no external image requests).
- **All 18 brand logotypes** — Desigual, Gerry Weber, Eden Park, Lipsy London, Women'secret, bebe,
  Benetton, BCBGMAXAZRIA, Carpisa, BSB, Marina Rinaldi, Promod, Forever 21, La Vie en Rose,
  Hunkemöller, Karen Millen, Pronovias, Mango — plus an auto-looping brand carousel.
- **English / Arabic** with a full RTL flip, persisted per visitor.
- **Mega menus** carrying category columns, collection tiles, upsell products and search.
- **Search overlay** — ⌘K or the header button. Scored matching across brands, categories and
  products, in both languages, with keyboard navigation and recent searches.
- **Mobile drawer** opening from the left, with nested category panels.
- **Upsell / cross-sell layer** — cart drawer with a free-delivery progress bar, one-tap
  recommendations, gift wrap, loyalty-tier prompt; a "buy together, save 12%" bundle that
  recalculates as you untick; shop-the-look stacks; and recently-viewed backed by localStorage.

`loop/` additionally has shop-by-budget tiles with live counts and a mobile bottom tab bar.

## Working on them

Edit, Bazaar, Prism and Loop share one engine. Sources live in [`src/`](src/):

```
src/engine.js       shared JS — data, i18n, cards, cart, search, drawer, carousels
src/imgs.json       58 base64 images (2.1 MB) — products, heroes, banners
src/*.src.html      thin sources: markup + CSS + a FIG_THEME block
src/build.mjs       inlines engine.js + imgs.json into a standalone file
```

To rebuild after editing a source:

```bash
cd src
node build.mjs edit.src.html ../edit/index.html
node build.mjs loop.src.html ../loop/index.html
```

Add `stub` as a third argument to produce a ~120 KB copy with placeholder images — useful for
checking layout quickly, since the full builds are ~2.3 MB.

`maison/index.html` predates the shared engine and carries its own inlined copy.

### Notes

- Brand logotypes are **typographic stand-ins** built from Archivo and Cormorant Garamond, not the
  official marks. FIG's own vector logos drop into the same `.bl-*` slots.
- Product imagery belongs to FIG and the brands they represent. This repository is private.
- Prices, delivery zones, instalment partners (valU, Sympl, Aman, Contact, Fawry) and store
  locations reflect FIG's real operations as of September 2026.

---

Built by [band.](https://github.com/band-agents) for FIG.
