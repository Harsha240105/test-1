import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useWishlistStore } from "@/stores/wishlistStore";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const Wishlist = () => {
  const { items, removeItem } = useWishlistStore();
  const addToCart = useCartStore(state => state.addItem);

  const handleAddToCart = (item: any) => {
    // Convert wishlist item to cart item format
    const cartItem = {
      product: {
        node: {
          id: item.id,
          title: item.title,
          handle: item.handle,
          priceRange: {
            minVariantPrice: {
              amount: item.price,
              currencyCode: "USD"
            }
          },
          images: {
            edges: [{ node: { url: item.image, altText: item.title } }]
          },
          variants: { edges: [] },
          options: [],
          description: ""
        }
      },
      variantId: `v-${item.id}`,
      variantTitle: "Default",
      price: { amount: item.price, currencyCode: "USD" },
      quantity: 1,
      selectedOptions: []
    };
    
    addToCart(cartItem);
    toast.success("Added to cart", {
      description: `${item.title} has been added to your cart.`,
      position: "top-center",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          My Wishlist
        </h1>

        {items.length === 0 ? (
          <Card className="backdrop-blur-sm bg-card/30 border-border/50">
            <CardContent className="py-20 text-center">
              <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6">
                Start adding items you love!
              </p>
              <Link to="/">
                <Button className="bg-accent hover:bg-accent/90">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-border/50 transition-all hover:shadow-glass backdrop-blur-sm bg-card/50">
                <Link to={`/product/${item.handle}`}>
                  <div className="aspect-square overflow-hidden bg-secondary/10 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-500"
                    />
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link to={`/product/${item.handle}`}>
                    <h3 className="font-semibold text-lg mb-1 line-clamp-1 hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ${parseFloat(item.price).toFixed(2)}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-accent hover:bg-accent/90"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
