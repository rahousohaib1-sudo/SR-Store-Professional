 "use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { products } from "@/lib/products";
import { wilayas } from "@/lib/algeria";

type DeliveryType = "home" | "stopdesk";

export default function CheckoutForm() {
  const { items, subtotal, clearCart } = useCart();
  const [deliveryType, setDeliveryType] = useState<DeliveryType>("home");
  const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null);
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:"", phone:"", wilaya:"", commune:"", address:"", stopdesk:"", notes:"" });

  const update = (key: keyof typeof form, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const total = subtotal + (deliveryPrice ?? 0);

  const validate = () => {
    const phone = form.phone.replace(/\s/g, "");
    if (!form.name.trim()) return "أدخل الاسم واللقب.";
    if (!/^(05|06|07)[0-9]{8}$/.test(phone)) return "أدخل رقم هاتف جزائري صحيح.";
    if (!form.wilaya) return "اختر الولاية.";
    if (!form.commune.trim()) return "أدخل البلدية.";
    if (deliveryType === "home" && !form.address.trim()) return "أدخل العنوان بالتفصيل.";
    if (deliveryType === "stopdesk" && !form.stopdesk) return "اختر مكتب Stop Desk.";
    if (deliveryPrice === null) return "لم يتم حساب تكلفة التوصيل بعد.";
    return "";
  };

  const submit = () => {
    const error = validate();
    if (error) { setFormError(error); return; }
    setFormError("");
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-5 py-20">
        <div className="w-full max-w-xl rounded-[32px] border border-[#d4af37]/20 bg-[#111] p-9 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d4af37]/10 text-3xl text-[#d4af37]">✓</div>
          <p className="mt-7 sr-eyebrow">SR STORE</p>
          <h1 className="mt-3 text-3xl font-black">تم تجهيز الطلب</h1>
          <p className="mt-4 text-sm leading-8 text-white/40">واجهة الطلب جاهزة. ربط إنشاء الطلب الحقيقي بـn8n يأتي بعد تثبيت الواجهة.</p>
          <Link href="/" className="sr-gold-button mt-7 inline-flex rounded-full px-8 py-4 text-xs font-bold">العودة إلى المتجر</Link>
        </div>
      </section>
    );
  }

  if (!items.length) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-5 py-20 text-center">
        <div><div className="text-5xl">🛒</div><h1 className="mt-6 text-3xl font-black">السلة فارغة</h1><Link href="/products" className="sr-gold-button mt-7 inline-flex rounded-full px-7 py-4 text-xs font-bold">اكتشف المنتجات</Link></div>
      </section>
    );
  }

  return (
    <section className="sr-section">
      <div className="sr-container grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="space-y-6">
          <div className="sr-card p-6 sm:p-8">
            <p className="sr-eyebrow">STEP 01</p>
            <h2 className="mt-2 text-xl font-black">معلومات الزبون</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input value={form.name} onChange={(e)=>update("name",e.target.value)} placeholder="الاسم واللقب" className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm outline-none focus:border-[#d4af37]" />
              <input dir="ltr" value={form.phone} onChange={(e)=>update("phone",e.target.value)} placeholder="05 XX XX XX XX" className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm outline-none focus:border-[#d4af37]" />
            </div>
          </div>

          <div className="sr-card p-6 sm:p-8">
            <p className="sr-eyebrow">STEP 02</p>
            <h2 className="mt-2 text-xl font-black">موقع التوصيل</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <select value={form.wilaya} onChange={(e)=>{update("wilaya",e.target.value);setDeliveryPrice(null)}} className="rounded-2xl border border-white/10 bg-[#111] px-5 py-4 text-sm outline-none focus:border-[#d4af37]">
                <option value="">اختر الولاية</option>
                {wilayas.map((w)=><option key={w.code} value={w.name}>{w.code} — {w.name}</option>)}
              </select>
              <input value={form.commune} onChange={(e)=>{update("commune",e.target.value);setDeliveryPrice(null)}} disabled={!form.wilaya} placeholder="البلدية" className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm outline-none focus:border-[#d4af37] disabled:opacity-40" />
            </div>
          </div>

          <div className="sr-card p-6 sm:p-8">
            <p className="sr-eyebrow">STEP 03</p>
            <h2 className="mt-2 text-xl font-black">طريقة التوصيل</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["home","🏠","التوصيل إلى المنزل"],
                ["stopdesk","📦","Stop Desk"],
              ].map(([type,icon,label])=>(
                <button key={type} type="button" onClick={()=>setDeliveryType(type as DeliveryType)} className={`rounded-2xl border p-5 text-right ${deliveryType===type?"border-[#d4af37]/70 bg-[#d4af37]/10":"border-white/10 bg-black/20"}`}>
                  <div className="text-2xl">{icon}</div><div className="mt-3 text-sm font-bold">{label}</div>
                </button>
              ))}
            </div>

            {deliveryType==="home" ? (
              <textarea value={form.address} onChange={(e)=>update("address",e.target.value)} rows={4} placeholder="الحي، رقم المنزل، الشارع..." className="mt-5 w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm outline-none focus:border-[#d4af37]" />
            ) : (
              <div className="mt-5">
                <input value={form.stopdesk} onChange={(e)=>update("stopdesk",e.target.value)} placeholder="مكتب Stop Desk — سيتم ربطه بـYalidine" className="w-full rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm outline-none focus:border-[#d4af37]" />
              </div>
            )}

            <div className="mt-5 rounded-2xl border border-[#d4af37]/15 bg-[#d4af37]/5 p-4 text-xs text-white/45">
              سعر التوصيل سيُجلب تلقائيًا عند ربط خدمة التوصيل بـn8n.
            </div>
          </div>

          <div className="sr-card p-6 sm:p-8">
            <p className="sr-eyebrow">STEP 04</p>
            <h2 className="mt-2 text-xl font-black">ملاحظات</h2>
            <textarea value={form.notes} onChange={(e)=>update("notes",e.target.value)} rows={4} placeholder="أي ملاحظة إضافية..." className="mt-6 w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm outline-none focus:border-[#d4af37]" />
          </div>

          {formError && <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5 text-sm text-red-300">{formError}</div>}
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-[28px] border border-[#d4af37]/20 bg-[#111] p-7">
            <p className="sr-eyebrow">YOUR ORDER</p>
            <h2 className="mt-3 text-2xl font-black">ملخص الطلب</h2>
            <div className="mt-7 space-y-4">
              {items.map((item)=>{const p=products.find(x=>x.id===item.productId); if(!p)return null; return <div key={`${item.productId}-${item.variantId}`} className="flex justify-between gap-4 border-b border-white/[.07] pb-4 text-xs"><span className="text-white/50">{p.name} × {item.quantity}</span><span>{(p.price*item.quantity).toLocaleString("fr-DZ")} DA</span></div>})}
            </div>
            <div className="mt-6 flex justify-between text-sm"><span className="text-white/40">المنتجات</span><span>{subtotal.toLocaleString("fr-DZ")} DA</span></div>
            <div className="mt-4 flex justify-between text-sm"><span className="text-white/40">التوصيل</span><span>{deliveryPrice===null?"—":`${deliveryPrice.toLocaleString("fr-DZ")} DA`}</span></div>
            <div className="mt-6 flex justify-between border-t border-white/[.07] pt-6"><span className="text-sm text-white/40">الإجمالي</span><span className="text-2xl font-black text-[#d4af37]">{total.toLocaleString("fr-DZ")} DA</span></div>
            <div className="mt-6 rounded-2xl border border-white/[.07] bg-black/20 p-4 text-xs text-white/45">💵 الدفع عند الاستلام</div>
            <button onClick={submit} className="sr-gold-button mt-6 w-full rounded-2xl py-4 text-xs font-bold">تأكيد الطلب ←</button>
          </div>
        </aside>
      </div>
    </section>
  );
}
