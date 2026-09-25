import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import SpecialOffer from "@/components/SpecialOffer";
import Reviews from "@/components/Reviews";
import Tracking from "@/components/Tracking";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] text-white">
      <Header />
      <Hero />
      <TrustBar />
      <Collections />
      <FeaturedProducts />
      <SpecialOffer />
      <Reviews />
      <Tracking />
      <FAQ />
      <Footer />
    </main>
  );
}
