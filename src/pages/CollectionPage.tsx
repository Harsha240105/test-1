import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { mockProducts } from '@/data/mockProducts';
import { ShopifyProduct } from '@/lib/shopify';

const CollectionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Full Collection</h1>
          <p className="text-muted-foreground">Browse our full range of footwear across categories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProducts.map((p: ShopifyProduct) => (
            <ProductCard key={p.node.id} product={p} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollectionPage;
