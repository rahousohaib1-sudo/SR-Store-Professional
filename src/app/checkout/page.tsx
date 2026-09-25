import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutForm from "@/components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Header />
      <section className="border-b border-white/[.07] bg-[#0b0b0b] py-14">
        <div className="sr-container">
          <Link href="/cart" className="text-[10px] text-white/30 hover:text-[#d4af37]">← العودة إلى السلة</Link>
          <p className="mt-8 sr-eyebrow">SR STORE CHECKOUT</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">إتمام الطلب</h1>
          <p className="mt-4 max-w-xl text-xs leading-7 text-white/35">أدخل معلوماتك لإتمام طلبك بسهولة.</p>
        </div>
      </section>
      <CheckoutForm />
      <Footer />
    </main>
  );
}
