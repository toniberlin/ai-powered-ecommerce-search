import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 max-w-[1400px] mx-auto">
      {products.map((product) => (
        <div key={product.id} className="relative">
          <div className="aspect-[3/4] bg-gray-100 mb-2">
            <img
              src={product.image}
              alt={product.product_family}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-sm text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-600">
            {product.price} EUR
          </p>
        </div>
      ))}
    </div>
  );
} 


