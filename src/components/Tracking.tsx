 "use client";

import { useState } from "react";

export default function Tracking() {
  const [tracking, setTracking] = useState("");

  return (
    <section id="tracking" className="sr-section bg-[#f7f7f7] text-[#111]">
      <div className="sr-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[9px] font-bold tracking-[.3em] text-[#a98518]">ORDER TRACKING</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">أين وصل طلبك؟</h2>
          <p className="mt-3 text-xs leading-7 text-black/45">أدخل رقم التتبع لمعرفة آخر حالة لشحنتك.</p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input value={tracking} onChange={(e) => setTracking(e.target.value)} placeholder="أدخل رقم التتبع" className="h-14 flex-1 rounded-2xl border border-black/10 bg-white px-5 text-sm outline-none focus:border-[#d4af37]" />
            <button className="h-14 rounded-2xl bg-[#111] px-7 text-xs font-bold text-white hover:bg-[#d4af37] hover:text-black">تتبع الطلب ←</button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-4">
            {["تم تأكيد الطلب", "تم الشحن", "في الطريق", "تم التسليم"].map((x, i) => (
              <div key={x} className={`rounded-2xl border p-5 text-right ${i === 0 ? "border-[#d4af37] bg-[#d4af37]/10" : "border-black/10 bg-white"}`}>
                <div className="text-lg">{i === 0 ? "✓" : "○"}</div>
                <div className="mt-2 text-xs font-bold">{x}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
