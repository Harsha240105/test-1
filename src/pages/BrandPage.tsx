import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { mockProducts } from '@/data/mockProducts';
import { ShopifyProduct } from '@/lib/shopify';

const BrandPage = () => {
  const { brand } = useParams<{ brand: string }>();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);

  useEffect(() => {
    if (brand) {
      const b = decodeURIComponent(brand).toLowerCase();
  const filtered = mockProducts.filter((p: ShopifyProduct) => (p.node.brand || '').toLowerCase() === b).map(p => p);
      setProducts(filtered);
    }
  }, [brand]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{brand} Collection</h1>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.node.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No products found for this brand.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BrandPage;
