import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[.07] bg-[#050505]">
      <div className="sr-container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src="/logos/SR STORE.jpeg" alt="SR Store" className="h-16 w-auto object-contain" />
            <p className="mt-5 max-w-sm text-xs leading-7 text-white/35">منتجات أفضل، اختيارات أفضل، حياة أفضل. متجر SR Store لمنتجات الأطفال والأمهات والعائلة.</p>
          </div>

          <div>
            <h3 className="text-xs font-bold">المتجر</h3>
            <div className="mt-5 grid gap-3 text-xs text-white/35">
              <Link href="/products" className="hover:text-[#d4af37]">المنتجات</Link>
              <Link href="/#collections" className="hover:text-[#d4af37]">المجموعات</Link>
              <Link href="/#offers" className="hover:text-[#d4af37]">العروض</Link>
              <Link href="/cart" className="hover:text-[#d4af37]">السلة</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold">المساعدة</h3>
            <div className="mt-5 grid gap-3 text-xs text-white/35">
              <Link href="/#tracking" className="hover:text-[#d4af37]">تتبع الطلب</Link>
              <Link href="/#faq" className="hover:text-[#d4af37]">الأسئلة الشائعة</Link>
              <span>الدفع عند الاستلام</span>
              <span>التوصيل</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold">SR Family</h3>
            <div className="mt-5 grid gap-3 text-xs text-white/35">
              <span>SR Kids</span>
              <span>SR Mom</span>
              <span>SR Family</span>
              <span>Instagram · Facebook · WhatsApp</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/[.07] pt-6 text-[10px] text-white/25 sm:flex-row">
          <span>© 2026 SR Store. جميع الحقوق محفوظة.</span>
          <span className="text-[#d4af37]/70">Better Products. Better Choices. Better You.</span>
        </div>
      </div>
    </footer>
  );
}
