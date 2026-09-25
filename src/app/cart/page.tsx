"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart();

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Header />
      <section className="sr-section">
        <div className="sr-container">
          <p className="sr-eyebrow">YOUR CART</p>
          <h1 className="mt-3 text-4xl font-black">سلة المشتريات</h1>

          {items.length === 0 ? (
            <div className="py-24 text-center">
              <div className="text-5xl">🛒</div>
              <h2 className="mt-6 text-2xl font-black">السلة فارغة</h2>
              <Link href="/products" className="sr-gold-button mt-7 inline-flex rounded-full px-7 py-4 text-xs font-bold">اكتشف المنتجات</Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
              <div className="space-y-4">
                {items.map((item) => {
                  const product = products.find((p) => p.id === item.productId);
                  if (!product) return null;
                  return (
                    <div key={`${item.productId}-${item.variantId}`} className="sr-card flex gap-4 p-4 sm:p-5">
                      <img src={product.image} alt="" className="h-28 w-28 rounded-2xl object-cover" />
                      <div className="min-w-0 flex-1">
                        <div className="text-[9px] text-[#d4af37]">{product.category}</div>
                        <h2 className="mt-1 text-sm font-bold">{product.name}</h2>
                        <div className="mt-2 text-sm font-bold text-[#d4af37]">{product.price.toLocaleString("fr-DZ")} DA</div>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div className="flex items-center rounded-full border border-white/10">
                            <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)} className="h-9 w-9">−</button>
                            <span className="w-8 text-center text-xs">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)} className="h-9 w-9">+</button>
                          </div>
                          <button onClick={() => removeFromCart(item.productId, item.variantId)} className="text-[10px] text-red-300 hover:text-red-200">حذف</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <aside className="lg:sticky lg:top-24 lg:h-fit">
                <div className="rounded-[28px] border border-[#d4af37]/20 bg-[#111] p-7">
                  <h2 className="text-xl font-black">ملخص الطلب</h2>
                  <div className="mt-7 flex justify-between text-sm">
                    <span className="text-white/35">المجموع</span>
                    <span>{subtotal.toLocaleString("fr-DZ")} DA</span>
                  </div>
                  <div className="mt-4 flex justify-between text-sm">
                    <span className="text-white/35">التوصيل</span>
                    <span className="text-white/35">يُحسب عند الطلب</span>
                  </div>
                  <div className="mt-6 border-t border-white/[.07] pt-6 flex justify-between">
                    <span className="text-sm text-white/40">الإجمالي</span>
                    <span className="text-2xl font-black text-[#d4af37]">{subtotal.toLocaleString("fr-DZ")} DA</span>
                  </div>
                  <Link href="/checkout" className="sr-gold-button mt-7 flex justify-center rounded-2xl py-4 text-xs font-bold">إتمام الطلب ←</Link>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
