import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function FeaturedProducts() {
  return (
    <section className="sr-section bg-[#080808]">
      <div className="sr-container">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="sr-eyebrow">FEATURED PRODUCTS</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">منتجات مختارة</h2>
            <p className="mt-3 text-xs leading-7 text-white/35">منتجات نختارها بعناية لتناسب احتياجاتك اليومية.</p>
          </div>
          <Link href="/products" className="hidden rounded-full border border-[#d4af37]/30 px-5 py-3 text-[10px] font-bold text-[#f1d77a] hover:bg-[#d4af37]/10 sm:block">مشاهدة الكل ←</Link>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>

        <Link href="/products" className="mt-7 flex justify-center rounded-full border border-white/10 py-3 text-[10px] font-bold text-white/55 sm:hidden">مشاهدة كل المنتجات ←</Link>
      </div>
    </section>
  );
}
