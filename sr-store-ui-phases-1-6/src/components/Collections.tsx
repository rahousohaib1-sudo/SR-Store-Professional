import Link from "next/link";

const collections = [
  { id:"kids", title:"SR Kids", subtitle:"منتجات الأطفال والرضع", image:"/collections/kids.webp" },
  { id:"mom", title:"SR Mom", subtitle:"منتجات مختارة للأم", image:"/collections/mom.webp" },
  { id:"family", title:"SR Family", subtitle:"اختيارات للعائلة", image:"/collections/family.webp" },
];

export default function Collections() {
  return (
    <section id="collections" className="sr-section bg-[#f7f7f7] text-[#111]">
      <div className="sr-container">
        <div className="text-center">
          <p className="text-[9px] font-bold tracking-[.3em] text-[#a98518]">SR COLLECTIONS</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">اكتشف عوالم SR</h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-7 text-black/45">ثلاث عوالم، لمسة واحدة من الجودة، ومنتجات مختارة للعائلة.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {collections.map((c) => (
            <Link key={c.id} href={`/products?category=${encodeURIComponent(c.title)}`} className="group relative min-h-[300px] overflow-hidden rounded-[28px]">
              <img src={c.image} alt={c.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="relative flex min-h-[300px] flex-col justify-end p-7 text-white">
                <div className="text-2xl font-black">{c.title}</div>
                <div className="mt-1 text-xs text-white/75">{c.subtitle}</div>
                <div className="mt-5 w-fit rounded-full border border-white/25 bg-black/20 px-4 py-2 text-[10px] backdrop-blur group-hover:border-[#d4af37] group-hover:text-[#f1d77a]">اكتشف المجموعة ←</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
