import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState(mockProducts);

  useEffect(() => {
    if (category) {
      const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
      const filtered = mockProducts.filter(
        (product: any) => product.node.category === categoryName
      );
      setProducts(filtered.slice(0, 8));
    }
  }, [category]);

  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="container py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {categoryName} Collection
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover our premium {categoryName?.toLowerCase()} footwear
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
              <p className="text-muted-foreground">
                Check back soon for new arrivals
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
