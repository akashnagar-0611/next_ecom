
export type Product = {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  category?: string;
};

export const products: Product[] = [
  {
    id: 101,
    title: 'Wireless Headphones',
    slug: 'wireless-headphones',
    image: 'https://placehold.co/600x600/png?text=Headphones',
    description:
      'Enjoy immersive sound and comfortable wireless listening for work, travel, and everyday use.',
    price: 2499,
    originalPrice: 3999,
    rating: 4.5,
    category: 'Electronics',
  },
  {
    id: 102,
    title: 'Smart Watch',
    slug: 'smart-watch',
    image: 'https://placehold.co/600x600/png?text=Smart+Watch',
    description:
      'A stylish smartwatch for everyday activities, fitness tracking, and notifications.',
    price: 1999,
    originalPrice: 2999,
    rating: 4.2,
    category: 'Wearables',
  },
  {
    id: 103,
    title: 'Running Shoes',
    slug: 'running-shoes',
    image: 'https://placehold.co/600x600/png?text=Running+Shoes',
    description:
      'Lightweight running shoes designed for comfort during walks, workouts, and daily activities.',
    price: 1799,
    rating: 4.3,
    category: 'Footwear',
  },
];
