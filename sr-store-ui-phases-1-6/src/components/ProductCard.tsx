"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const variant = product.variants[0]?.id || "default";
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  return (
    <article className="group overflow-hidden rounded-[24px] border border-white/[.08] bg-[#101010] transition duration-500 hover:-translate-y-2 hover:border-[#d4af37]/40 hover:shadow-2xl hover:shadow-black/40">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-[#161616]">
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          {discount > 0 && <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[9px] font-bold text-white backdrop-blur">-{discount}%</span>}
          {product.badge && <span className="absolute right-3 top-3 rounded-full bg-[#d4af37] px-3 py-1 text-[9px] font-bold text-black">{product.badge}</span>}
        </div>
      </Link>

      <div className="p-5">
        <div className="text-[9px] font-bold tracking-[.16em] text-[#d4af37]">{product.category}</div>
        <Link href={`/products/${product.id}`}><h3 className="mt-2 text-sm font-bold hover:text-[#d4af37]">{product.name}</h3></Link>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-xs text-[#f1d77a]">★★★★★</span>
          <span className="text-[9px] text-white/25">{product.reviews} تقييم</span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <div className="text-lg font-black text-[#d4af37]">{product.price.toLocaleString("fr-DZ")} DA</div>
            {product.oldPrice && <div className="mt-1 text-[10px] text-white/25 line-through">{product.oldPrice.toLocaleString("fr-DZ")} DA</div>}
          </div>

          <button type="button" onClick={() => addToCart(product.id, variant, 1)} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d4af37] text-lg font-bold text-black transition hover:scale-110" aria-label="إضافة للسلة">+</button>
        </div>
      </div>
    </article>
  );
}
