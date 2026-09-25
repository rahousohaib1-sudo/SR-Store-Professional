# SR Store - Phases 1 to 6

This is the complete UI package.

The package contains the frontend files for:
1. Design system
2. Header + Hero
3. Collections + Products
4. Product detail + Cart
5. Offers + Reviews + Tracking + FAQ + Footer
6. Checkout UI

The APPLY-PHASES-1-6.ps1 script copies all included UI files into:
C:\Users\pc\Desktop\sr-store-website

It does NOT modify:
- n8n
- Google Sheets
- Yalidine
- .env.local
- CartProvider

Run:
Set-ExecutionPolicy -Scope Process Bypass
.\APPLY-PHASES-1-6.ps1

When asked for the repository path, enter:
C:\Users\pc\Desktop\sr-store-website

Images should be placed under:
public/hero
public/collections
public/products
public/banners

Use the user's reference images for the visual assets.
