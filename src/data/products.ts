import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
  featured?: boolean;
}

export const categories = [
  { name: "Ceramics", slug: "ceramics", description: "Handcrafted with care" },
  { name: "Candles", slug: "candles", description: "Natural soy & beeswax" },
  { name: "Textiles", slug: "textiles", description: "Organic & sustainable" },
  { name: "Kitchen", slug: "kitchen", description: "Artisan essentials" },
  { name: "Bath", slug: "bath", description: "Botanical luxury" },
  { name: "Living", slug: "living", description: "Curated comfort" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Terracotta Artisan Vase",
    price: 89,
    category: "ceramics",
    description: "A beautifully handcrafted terracotta vase with a smooth matte finish. Each piece is unique, shaped by skilled artisans using traditional techniques. Perfect as a statement piece or for displaying dried botanicals.",
    rating: 4.8,
    reviews: 124,
    image: product1,
    featured: true,
  },
  {
    id: 2,
    name: "Amber Soy Candle",
    price: 42,
    category: "candles",
    description: "Hand-poured natural soy candle in a reusable amber glass jar. Infused with essential oils of sandalwood, vanilla, and warm amber. Burns cleanly for up to 60 hours.",
    rating: 4.9,
    reviews: 256,
    image: product2,
    featured: true,
  },
  {
    id: 3,
    name: "Merino Wool Throw",
    price: 165,
    category: "textiles",
    description: "Luxuriously soft merino wool throw blanket in a timeless cream color. Ethically sourced and handwoven with a beautiful cable-knit pattern. Perfect for chilly evenings.",
    rating: 4.7,
    reviews: 89,
    image: product3,
    featured: true,
  },
  {
    id: 4,
    name: "Walnut Serving Board",
    price: 78,
    category: "kitchen",
    description: "Solid walnut wood serving board with natural live edges. Each board is unique with beautiful grain patterns. Food-safe finish, perfect for cheese, charcuterie, or bread.",
    rating: 4.6,
    reviews: 67,
    image: product4,
    featured: true,
  },
  {
    id: 5,
    name: "Botanical Hand Soap",
    price: 24,
    category: "bath",
    description: "Artisan cold-process soap made with shea butter, olive oil, and dried botanicals. Gently exfoliating with a calming lavender and chamomile scent. Free from synthetic fragrances.",
    rating: 4.8,
    reviews: 198,
    image: product5,
  },
  {
    id: 6,
    name: "Sage Linen Cushion",
    price: 56,
    category: "living",
    description: "Stonewashed linen cushion cover in a soft sage green. Pre-washed for a relaxed, lived-in look. Includes a premium duck feather insert for ultimate comfort.",
    rating: 4.5,
    reviews: 73,
    image: product6,
  },
  {
    id: 7,
    name: "Stoneware Coffee Mug",
    price: 34,
    category: "ceramics",
    description: "Handmade stoneware mug with a reactive glaze that makes each piece unique. Comfortable handle and perfectly weighted. Microwave and dishwasher safe.",
    rating: 4.7,
    reviews: 145,
    image: product7,
  },
  {
    id: 8,
    name: "Brass Desk Lamp",
    price: 195,
    category: "living",
    description: "Elegant brass desk lamp with a matte brushed finish. Adjustable head for directed light. Warm LED bulb included. A timeless addition to any workspace.",
    rating: 4.9,
    reviews: 42,
    image: product8,
  },
];
