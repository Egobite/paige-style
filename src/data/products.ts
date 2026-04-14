export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  badge?: "NEW" | "SALE";
  category: string;
  description: string;
  sizes: string[];
  colors?: string[];
}

export const products: Product[] = [
  {
    id: "blazer-brown",
    name: "Tailored V-Neck Blazer — Brown",
    price: 45000,
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/0b36c45ec_paigeclothing-20260413-0001.jpg",
    images: [
      "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/0b36c45ec_paigeclothing-20260413-0001.jpg",
    ],
    badge: "NEW",
    category: "Blazers",
    description: "A beautifully tailored V-neck blazer in rich brown. Perfect for both professional and casual settings, this piece brings effortless elegance to any outfit.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "blazer-red",
    name: "Tailored V-Neck Blazer — Red",
    price: 45000,
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/dff01c40c_paigeclothing-20260413-0006.jpg",
    images: [
      "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/dff01c40c_paigeclothing-20260413-0006.jpg",
    ],
    category: "Blazers",
    description: "Make a bold statement with this tailored V-neck blazer in vibrant red. A must-have for the confident, fashion-forward woman.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "blazer-magenta",
    name: "Tailored V-Neck Blazer — Magenta",
    price: 38000,
    originalPrice: 45000,
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/d9df91216_paigeclothing-20260413-0002.jpg",
    images: [
      "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/d9df91216_paigeclothing-20260413-0002.jpg",
    ],
    badge: "SALE",
    category: "Blazers",
    description: "Power meets style in this magenta tailored blazer. Currently on sale—grab this stunning piece before it's gone.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "blouse-purple",
    name: "Draped Satin Cowl Blouse — Purple",
    price: 28000,
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/86b453987_paigeclothing-20260413-0007.jpg",
    images: [
      "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/86b453987_paigeclothing-20260413-0007.jpg",
    ],
    badge: "NEW",
    category: "Blouses",
    description: "Luxurious satin cowl-neck blouse in deep purple. The draped silhouette adds an air of sophistication to any ensemble.",
    sizes: ["S", "M", "L"],
  },
  {
    id: "blouse-collection",
    name: "Draped Satin Cowl Blouse — Collection",
    price: 28000,
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/43c93d376_paigeclothing-20260413-0008.jpg",
    images: [
      "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/43c93d376_paigeclothing-20260413-0008.jpg",
    ],
    category: "Blouses",
    description: "Part of our signature satin collection, this cowl blouse embodies effortless luxury with its flowing drape and timeless design.",
    sizes: ["S", "M", "L"],
  },
  {
    id: "dress-floral",
    name: "Floral Organza Maxi Dress",
    price: 55000,
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/1a1fcfe94_images6.jpeg",
    images: [
      "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/1a1fcfe94_images6.jpeg",
    ],
    badge: "NEW",
    category: "Dresses",
    description: "A stunning floral organza maxi dress that's perfect for special occasions. Lightweight, ethereal, and undeniably elegant.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "kaftan-green",
    name: "Adire Green Embellished Kaftan",
    price: 35000,
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/f63855a79_images4.jpeg",
    images: [
      "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/f63855a79_images4.jpeg",
    ],
    category: "Traditional",
    description: "Embrace heritage with this embellished Adire kaftan in vibrant green. Handcrafted details meet contemporary design.",
    sizes: ["Free Size"],
  },
  {
    id: "agbada-mens",
    name: "Traditional Agbada Set — Men's",
    price: 65000,
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/9966d245c_images5.jpeg",
    images: [
      "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/9966d245c_images5.jpeg",
    ],
    badge: "NEW",
    category: "Traditional",
    description: "A regal traditional Agbada set for the modern gentleman. Complete with matching cap and inner wear for a polished look.",
    sizes: ["M", "L", "XL", "XXL"],
  },
];

export const formatPrice = (price: number) => `₦${price.toLocaleString()}`;

export const getProductById = (id: string) => products.find((p) => p.id === id);
