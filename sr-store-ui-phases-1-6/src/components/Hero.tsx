import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden border-b border-white/[.06]">
      <div className="absolute inset-0">
        <img src="/hero/sr-hero.webp" alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#050505]/95 via-[#050505]/65 to-[#050505]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/20" />
      </div>

      <div className="sr-container relative flex min-h-[650px] items-center py-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex rounded-full border border-[#d4af37]/30 bg-black/30 px-4 py-2 text-[10px] font-bold tracking-[.18em] text-[#f1d77a] backdrop-blur">
            ✦ SR STORE — KIDS & FAMILY
          </div>

          <h1 className="text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
            منتجات أفضل.
            <br />
            <span className="sr-gold-gradient">اختيارات أفضل.</span>
            <br />
            حياة أفضل.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
            اكتشف مجموعة مختارة من المنتجات العملية والمريحة للأطفال والأمهات والعائلة، بتجربة شراء بسيطة وسريعة.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="sr-gold-button rounded-full px-7 py-4 text-xs font-bold">تسوق الآن ←</Link>
            <Link href="/#tracking" className="rounded-full border border-white/20 bg-black/20 px-7 py-4 text-xs font-bold backdrop-blur hover:border-[#d4af37]/60">تتبع طلبك ◇</Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["✓", "منتجات مختارة"],
              ["COD", "الدفع عند الاستلام"],
              ["24/7", "دعم العملاء"],
              ["⌁", "تتبع الطلب"],
            ].map(([a,b]) => (
              <div key={b} className="rounded-2xl border border-white/10 bg-black/25 p-3 backdrop-blur">
                <div className="text-sm font-bold text-[#d4af37]">{a}</div>
                <div className="mt-1 text-[9px] text-white/45">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
