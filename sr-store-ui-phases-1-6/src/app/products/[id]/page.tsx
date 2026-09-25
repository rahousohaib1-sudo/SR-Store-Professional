"use client";

import Link from "next/link";
import Image from "next/image";
import { use, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductById } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [variant, setVariant] = useState(product?.variants[0]?.id || "default");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <main className="min-h-screen bg-[#080808] text-white"><Header /><div className="sr-container py-32 text-center"><h1 className="text-3xl font-black">المنتج غير موجود</h1><Link href="/products" className="mt-7 inline-flex text-[#d4af37]">العودة للمنتجات</Link></div><Footer /></main>;
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Header />
      <section className="sr-section">
        <div className="sr-container">
          <Link href="/products" className="text-[10px] text-white/30 hover:text-[#d4af37]">المنتجات ←</Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <div className="relative aspect-square overflow-hidden rounded-[32px] border border-white/[.08] bg-[#151515]">
                <Image src={product.gallery[activeImage] || product.image} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.gallery.map((image, i) => (
                  <button key={image + i} onClick={() => setActiveImage(i)} className={`relative aspect-square overflow-hidden rounded-2xl border ${activeImage === i ? "border-[#d4af37]" : "border-white/10"}`}>
                    <Image src={image} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:py-8">
              <div className="sr-eyebrow">{product.category}</div>
              <h1 className="mt-4 text-4xl font-black leading-tight">{product.name}</h1>
              <p className="mt-4 text-sm leading-8 text-white/40">{product.description}</p>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-[#f1d77a]">★★★★★</span>
                <span className="text-xs text-white/30">{product.reviews} تقييم</span>
              </div>

              <div className="mt-7">
                <span className="text-3xl font-black text-[#d4af37]">{product.price.toLocaleString("fr-DZ")} DA</span>
                {product.oldPrice && <span className="mr-3 text-sm text-white/25 line-through">{product.oldPrice.toLocaleString("fr-DZ")} DA</span>}
              </div>

              <div className="mt-8">
                <div className="text-xs font-bold">اللون</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button key={v.id} onClick={() => setVariant(v.id)} className={`rounded-full border px-4 py-2 text-xs ${variant === v.id ? "border-[#d4af37] bg-[#d4af37]/10 text-[#f1d77a]" : "border-white/10 text-white/50"}`}>{v.name}</button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex items-center rounded-full border border-white/10">
                  <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="h-12 w-12">−</button>
                  <span className="w-8 text-center text-sm">{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)} className="h-12 w-12">+</button>
                </div>
                <button onClick={() => addToCart(product.id, variant, quantity)} className="sr-gold-button flex-1 rounded-full py-4 text-xs font-bold">أضف إلى السلة ←</button>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {["الدفع عند الاستلام","توصيل عبر الجزائر","دعم العملاء"].map((x) => <div key={x} className="rounded-2xl border border-white/[.07] bg-white/[.025] p-4 text-center text-[10px] text-white/45">{x}</div>)}
              </div>

              <div className="mt-8 rounded-[24px] border border-white/[.07] p-6">
                <h2 className="text-sm font-bold">مميزات المنتج</h2>
                <ul className="mt-4 grid gap-3 text-xs text-white/45">
                  {product.features.map((x) => <li key={x}>✓ {x}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
