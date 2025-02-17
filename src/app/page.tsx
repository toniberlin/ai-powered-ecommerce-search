import ProductGrid from '@/components/ProductGrid';
import { Product } from '@/types/product';

async function getProducts(): Promise<Product[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const res = await fetch(`${baseUrl}/api/products`, { 
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
    <main>
      <nav className="py-4 border-b border-gray-200">
        <div className="flex justify-center gap-6">
          <a href="#" className="text-sm font-bold">WOMAN</a>
          <a href="#" className="text-sm">MAN</a>
          <a href="#" className="text-sm">KIDS</a>
          <a href="#" className="text-sm">HOME</a>
        </div>
      </nav>
      <ProductGrid products={products} />
    </main>
  );
}
