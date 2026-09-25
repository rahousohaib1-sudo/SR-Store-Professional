import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = {
  title: "SR Store | Kids & Family",
  description:
    "SR Store — منتجات عملية ومريحة وآمنة للأطفال والرضع والعائلة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#080808] text-white antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
