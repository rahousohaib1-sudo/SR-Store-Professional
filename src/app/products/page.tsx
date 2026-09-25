import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Header />
      <section className="border-b border-white/[.07] bg-[#0b0b0b] py-14">
        <div className="sr-container">
          <Link href="/" className="text-[10px] text-white/30 hover:text-[#d4af37]">الرئيسية ←</Link>
          <p className="mt-8 sr-eyebrow">SR STORE COLLECTION</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">منتجاتنا</h1>
          <p className="mt-4 max-w-xl text-xs leading-7 text-white/35">اكتشف منتجات SR Store المختارة للأطفال والأمهات والعائلة.</p>
        </div>
      </section>

      <section className="sr-section">
        <div className="sr-container">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-white/35">{products.length} منتجات</div>
            <div className="flex gap-2">
              {["الكل","SR Kids","SR Mom","SR Family"].map((x) => (
                <button key={x} className="rounded-full border border-white/10 px-4 py-2 text-[9px] text-white/50 hover:border-[#d4af37]/50 hover:text-[#d4af37]">{x}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
