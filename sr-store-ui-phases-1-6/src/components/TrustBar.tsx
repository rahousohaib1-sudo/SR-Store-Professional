export default function TrustBar() {
  const items = [
    ["01", "منتجات مختارة", "اختيارات بعناية وجودة نهتم بها"],
    ["02", "الدفع عند الاستلام", "اطلب الآن وادفع عند الاستلام"],
    ["03", "تتبع الطلب", "تابع حالة شحنتك بسهولة"],
    ["04", "دعم العملاء", "فريق SR Store لمساعدتك"],
  ];

  return (
    <section className="border-b border-white/[.07] bg-[#0b0b0b]">
      <div className="sr-container grid grid-cols-2 md:grid-cols-4">
        {items.map(([n,t,d]) => (
          <div key={n} className="border-white/[.07] p-6 md:border-l first:md:border-l-0">
            <div className="text-[9px] tracking-[.2em] text-[#d4af37]">{n}</div>
            <div className="mt-2 text-sm font-bold">{t}</div>
            <div className="mt-1 text-[10px] leading-5 text-white/30">{d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
