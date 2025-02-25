"use client";

import { Product } from '@/types/product';
import InteractiveAvatar from './InteractiveAvatar';
import ProductGrid from './ProductGrid';
import ChatBox from './ChatBot';

interface HomeClientProps {
  products: Product[];
}

export default function HomeClient({ products }: HomeClientProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Main Content Container */}
      <div className="max-w-[1200px] mx-auto p-4">
        {/* Avatar Section */}
        <section className="mb-8">
          <div className="flex justify-center items-center min-h-[600px] bg-white rounded-lg shadow-sm p-8">
            <div className="w-full max-w-[500px]">
              <InteractiveAvatar />
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className="bg-white rounded-lg shadow-sm mb-8">
          <div className="py-4">
            <div className="flex justify-center gap-6">
              <a href="#" className="text-sm font-bold">WOMAN</a>
              <a href="#" className="text-sm">MAN</a>
              <a href="#" className="text-sm">KIDS</a>
              <a href="#" className="text-sm">HOME</a>
            </div>
          </div>
        </nav>

        {/* Products Grid */}
        <section className="bg-white rounded-lg shadow-sm p-4">
          <ProductGrid products={products} />
        </section>
      </div>

      {/* Chat Interface - Fixed on the right */}
      <div className="fixed right-4 bottom-4 z-50">
        <ChatBox />
      </div>
    </main>
  );
} 