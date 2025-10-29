import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/data/mockProducts";
import heroImage from "@/assets/hero-shoes.jpg";

const Index = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const [products, setProducts] = useState(mockProducts);

  useEffect(() => {
    if (searchQuery) {
      const filtered = mockProducts.filter((product: any) =>
        product.node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.node.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.node.brand || '').toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProducts(filtered);
    } else {
      setProducts(mockProducts);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>
        <div className="container relative h-full flex items-center">
          <div className="max-w-2xl backdrop-blur-sm bg-card/30 p-8 rounded-2xl border border-border/50 shadow-glass">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Step Into Style
            </h1>
            <p className="text-xl text-foreground/90 mb-8">
              👉 Discover the perfect pair from our curated collection of premium footwear for every occasion.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 shadow-lg" onClick={() => window.location.href = '/collection'}>
              Explore Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
  <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Premium Collection
          </h2>
          <p className="text-muted-foreground text-lg">
            Metallic finishes meet cutting-edge design
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 backdrop-blur-sm bg-card/30 rounded-2xl border border-border/50">
            <h3 className="text-2xl font-semibold mb-4">No products found</h3>
            <p className="text-muted-foreground mb-6">
              Check back soon for new arrivals
            </p>
          </div>
        )}
      </section>

      {/* Featured Sections */}
      <section className="container py-8">
        <h3 className="text-2xl font-bold mb-6">Featured — Men</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {mockProducts.filter((p: any) => p.node.category === 'Men').slice(0,8).map((p: any) => (
            <ProductCard key={p.node.id} product={p} />
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-6">Featured — Women</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {mockProducts.filter((p: any) => p.node.category === 'Women').slice(0,8).map((p: any) => (
            <ProductCard key={p.node.id} product={p} />
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-6">Top Brands</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Nike','Adidas','Puma','Reebok','Gucci','Skechers'].map((b) => (
            <a key={b} href={`/brand/${encodeURIComponent(b)}`} className="group p-6 border rounded-lg hover:shadow-lg text-center">
              <div className="h-24 flex items-center justify-center mb-4 bg-secondary/10 rounded">
                <span className="text-lg font-semibold">{b}</span>
              </div>
              <div className="text-sm text-muted-foreground">View {b} collection</div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
