
import { Product } from '@/types/product';
import HomeClient from '@/components/HomeClient';

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.error('Response status:', res.status);
      console.error('Response text:', await res.text());
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <HomeClient products={products} />
  );
}


