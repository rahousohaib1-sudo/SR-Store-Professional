"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function Header() {
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden border-b border-white/[.06] bg-[#070707] md:block">
        <div className="sr-container flex h-9 items-center justify-between text-[10px] text-white/45">
          <span>🚚 توصيل عبر الجزائر</span>
          <span>💳 الدفع عند الاستلام</span>
          <span>☎ خدمة العملاء متوفرة لمساعدتك</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[.07] bg-[#080808]/90 backdrop-blur-xl">
        <div className="sr-container flex h-[72px] items-center gap-4">
          <Link href="/" className="shrink-0">
            <img src="/logos/SR STORE.jpeg" alt="SR Store" className="h-12 w-auto object-contain" />
          </Link>

          <div className="hidden flex-1 md:block">
            <div className="mx-auto flex max-w-xl items-center rounded-full border border-white/10 bg-white/[.035] px-4">
              <span className="text-lg text-[#d4af37]">⌕</span>
              <input
                aria-label="البحث"
                placeholder="ابحث عن منتج..."
                className="w-full bg-transparent px-3 py-3 text-xs outline-none placeholder:text-white/25"
              />
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[12px] text-white/60 lg:flex">
            <Link className="hover:text-[#d4af37]" href="/">الرئيسية</Link>
            <Link className="hover:text-[#d4af37]" href="/products">المنتجات</Link>
            <Link className="hover:text-[#d4af37]" href="/#collections">المجموعات</Link>
            <Link className="hover:text-[#d4af37]" href="/#offers">العروض</Link>
            <Link className="hover:text-[#d4af37]" href="/#tracking">تتبع الطلب</Link>
            <Link className="hover:text-[#d4af37]" href="/#faq">الأسئلة</Link>
          </nav>

          <div className="mr-auto flex items-center gap-2">
            <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/65 hover:border-[#d4af37]/50 md:flex" aria-label="الحساب">♙</button>
            <Link href="/cart" className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 hover:border-[#d4af37]/50" aria-label="السلة">
              🛒
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d4af37] px-1 text-[9px] font-bold text-black">{cartCount}</span>
              )}
            </Link>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="القائمة"
            >
              {open ? "×" : "☰"}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-white/[.07] bg-[#0b0b0b] lg:hidden">
            <nav className="sr-container grid gap-1 py-4 text-sm">
              {[
                ["/", "الرئيسية"],
                ["/products", "المنتجات"],
                ["/#collections", "المجموعات"],
                ["/#offers", "العروض"],
                ["/#tracking", "تتبع الطلب"],
                ["/#faq", "الأسئلة"],
              ].map(([href, label]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 hover:bg-white/[.04] hover:text-[#d4af37]">{label}</Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
