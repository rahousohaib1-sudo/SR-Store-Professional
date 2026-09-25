export type ProductVariant = {
  id: string;
  name: string;
  color: string;
  hex: string;
  stock: number;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: "SR Kids" | "SR Mom" | "SR Family";
  description: string;
  shortDescription: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  image: string;
  gallery: string[];
  variants: ProductVariant[];
  rating: number;
  reviews: number;
  features: string[];
  stock: number;
};

export const products: Product[] = [
  {
    id: "sr-carrier-yellow",
    name: "حاملة أطفال مريحة",
    slug: "حاملة-اطفال-مريحة",
    category: "SR Kids",
    description: "حاملة أطفال عملية ومريحة للاستخدام اليومي، مصممة لتساعد الأم والأب على حمل الطفل بسهولة وراحة.",
    shortDescription: "راحة أفضل للطفل والأم في التنقل والحياة اليومية.",
    price: 2290,
    oldPrice: 3200,
    badge: "الأكثر مبيعًا",
    image: "/products/carrier-yellow.webp",
    gallery: [
      "/products/carrier-yellow.webp",
      "/products/carrier-yellow-2.webp",
      "/products/carrier-yellow-3.webp",
    ],
    variants: [
      { id: "yellow", name: "أصفر", color: "Yellow", hex: "#D4AF37", stock: 15 },
      { id: "black", name: "أسود", color: "Black", hex: "#171717", stock: 20 },
      { id: "pink", name: "وردي", color: "Pink", hex: "#D58A9B", stock: 10 },
    ],
    rating: 4.9,
    reviews: 48,
    features: ["مناسبة للاستخدام اليومي", "تصميم مريح", "سهلة الحمل والتنقل", "ألوان متعددة"],
    stock: 45,
  },
  {
    id: "sr-carrier-black",
    name: "حاملة أطفال — لون أسود",
    slug: "حاملة-اطفال-اسود",
    category: "SR Kids",
    description: "حاملة أطفال باللون الأسود بتصميم عملي يناسب الاستخدام اليومي.",
    shortDescription: "تصميم أسود أنيق وعملي للاستخدام اليومي.",
    price: 2290,
    oldPrice: 3200,
    badge: "جديد",
    image: "/products/carrier-black.webp",
    gallery: ["/products/carrier-black.webp", "/products/carrier-black-2.webp"],
    variants: [{ id: "black", name: "أسود", color: "Black", hex: "#111111", stock: 20 }],
    rating: 4.8,
    reviews: 21,
    features: ["لون أسود أنيق", "مريحة في الاستخدام", "عملية للتنقل"],
    stock: 20,
  },
  {
    id: "sr-mom-product",
    name: "منتج عملي للأم والطفل",
    slug: "منتج-عملي-للام-والطفل",
    category: "SR Mom",
    description: "منتج عملي مختار بعناية لمساعدة الأم في الحياة اليومية.",
    shortDescription: "اختيار عملي للأم والطفل.",
    price: 2490,
    oldPrice: 2990,
    badge: "عرض",
    image: "/products/mom-product.webp",
    gallery: ["/products/mom-product.webp", "/products/mom-product-2.webp"],
    variants: [{ id: "default", name: "الأساسي", color: "Default", hex: "#D4AF37", stock: 12 }],
    rating: 4.7,
    reviews: 15,
    features: ["عملي للاستخدام اليومي", "مختار بعناية", "مناسب للأم"],
    stock: 12,
  },
  {
    id: "sr-family-product",
    name: "منتج عائلي جديد",
    slug: "منتج-عائلي-جديد",
    category: "SR Family",
    description: "اختيار جديد من SR Family مصمم ليكون عمليًا للعائلة.",
    shortDescription: "منتج عملي ومختار للعائلة.",
    price: 2790,
    oldPrice: 3290,
    badge: "جديد",
    image: "/products/family-product.webp",
    gallery: ["/products/family-product.webp", "/products/family-product-2.webp"],
    variants: [{ id: "default", name: "الأساسي", color: "Default", hex: "#D4AF37", stock: 8 }],
    rating: 4.8,
    reviews: 9,
    features: ["مناسب للعائلة", "تصميم عملي", "اختيار جديد من SR"],
    stock: 8,
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
