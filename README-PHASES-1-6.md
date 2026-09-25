# SR Store — UI Rebuild Phases 1–6

This package is the frontend UI rebuild only.

## Before copying

Keep your existing:
- `src/components/CartProvider.tsx`
- `.env.local`
- existing n8n files/workflows
- any backend/API work you already made

## Image folders to add

Create:

public/
  logos/
  hero/
  products/
  collections/
  banners/

Use the exact image filenames referenced by the components.

### Hero
public/hero/sr-hero.webp

### Collections
public/collections/kids.webp
public/collections/mom.webp
public/collections/family.webp

### Offer
public/banners/offer.webp

### Products
public/products/carrier-yellow.webp
public/products/carrier-yellow-2.webp
public/products/carrier-yellow-3.webp
public/products/carrier-black.webp
public/products/carrier-black-2.webp
public/products/mom-product.webp
public/products/mom-product-2.webp
public/products/family-product.webp
public/products/family-product-2.webp

### Existing logo
public/logos/SR STORE.jpeg

## Important

The product data is still demo/static data. Do not connect it to real inventory yet.

The checkout UI is prepared but does NOT create a real order in n8n. That comes after the UI is approved.

## Included phases

1. Design system
2. Header + Hero
3. Collections + Products
4. Product details + Cart
5. Offer + Reviews + Tracking + FAQ + Footer + responsive UI
6. Final checkout UI
