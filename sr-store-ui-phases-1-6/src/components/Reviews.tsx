const reviews = [
  { name: "عميل SR Store", text: "واجهة القسم جاهزة لاستقبال التقييمات الحقيقية بعد إطلاق المتجر." },
  { name: "زبون جديد", text: "سيتم عرض التقييمات الفعلية هنا بعد جمعها من العملاء." },
  { name: "عائلة SR", text: "قسم التقييمات مصمم ليكون واضحًا وسهل القراءة على الهاتف." },
];

export default function Reviews() {
  return (
    <section className="sr-section bg-[#080808]">
      <div className="sr-container">
        <div className="text-center">
          <p className="sr-eyebrow">CUSTOMER LOVE</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">آراء عملائنا</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="sr-card p-6">
              <div className="text-[#f1d77a]">★★★★★</div>
              <p className="mt-5 text-sm leading-8 text-white/55">{r.text}</p>
              <div className="mt-6 text-xs font-bold">{r.name}</div>
              <div className="mt-1 text-[10px] text-white/25">تجهيز القسم — ليس تقييمًا منشورًا</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
