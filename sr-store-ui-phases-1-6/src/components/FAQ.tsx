"use client";

import { useState } from "react";

const faqs = [
  ["هل الدفع عند الاستلام متوفر؟", "نعم، نظام المتجر مصمم لدعم الدفع عند الاستلام."],
  ["كيف يمكنني تتبع طلبي؟", "استعمل رقم التتبع في قسم تتبع الطلب لمعرفة آخر حالة للشحنة."],
  ["هل التوصيل متوفر إلى جميع الولايات؟", "سيتم تحديد التغطية والسعر حسب الولاية والبلدية ونظام التوصيل."],
  ["هل يمكنني اختيار Stop Desk؟", "نعم، عند توفر مكتب مناسب ستتمكن من اختيار Stop Desk أثناء الطلب."],
  ["كيف يمكنني التواصل معكم؟", "يمكنك استخدام قنوات التواصل الرسمية الظاهرة في المتجر."],
  ["هل الأسعار تشمل التوصيل؟", "لا، سعر المنتج منفصل عن تكلفة التوصيل التي تظهر أثناء إتمام الطلب."],
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="sr-section bg-[#0d0d0d]">
      <div className="sr-container max-w-4xl">
        <div className="text-center">
          <p className="sr-eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">الأسئلة الشائعة</h2>
        </div>

        <div className="mt-10 divide-y divide-white/[.07] overflow-hidden rounded-[28px] border border-white/[.08] bg-[#111]">
          {faqs.map(([q,a], i) => (
            <div key={q}>
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-6 p-6 text-right hover:bg-white/[.025]">
                <span className="text-sm font-bold">{q}</span>
                <span className="text-xl text-[#d4af37]">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="px-6 pb-6 text-xs leading-7 text-white/40">{a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
