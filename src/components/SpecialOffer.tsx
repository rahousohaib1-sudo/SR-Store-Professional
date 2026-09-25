import Link from "next/link";

export default function SpecialOffer() {
  return (
    <section id="offers" className="sr-section bg-[#0d0d0d]">
      <div className="sr-container">
        <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-[#d4af37]/20 bg-[#111]">
          <img src="/banners/SR STORE SPECIAL OFFER.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/55 to-black/20" />
          <div className="relative flex min-h-[360px] items-center p-8 sm:p-12">
            <div className="max-w-lg">
              <p className="sr-eyebrow">SR STORE SPECIAL OFFER</p>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">اختيارات أجمل.<br /><span className="sr-gold-gradient">قيمة أفضل.</span></h2>
              <p className="mt-5 text-xs leading-7 text-white/50">اكتشف العروض المتاحة والمنتجات المختارة لفترة محدودة.</p>
              <Link href="/products" className="sr-gold-button mt-7 inline-flex rounded-full px-7 py-4 text-xs font-bold">اكتشف العروض ←</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
