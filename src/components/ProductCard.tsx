import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Heart } from "lucide-react";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);
  const { toggleItem, isInWishlist } = useWishlistStore();
  const [user, setUser] = useState(null);
  const { node } = product;
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
  }, []);

  const handleAddToCart = () => {
    const firstVariant = node.variants.edges[0]?.node;
    if (!firstVariant) return;

    const cartItem = {
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${node.title} has been added to your cart.`,
      position: "top-center",
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error("Please log in", {
        description: "You need to be logged in to add items to your wishlist.",
      });
      navigate('/auth');
      return;
    }

    const wishlistItem = {
      id: node.id,
      title: node.title,
      price: node.priceRange.minVariantPrice.amount,
      image: node.images.edges[0]?.node.url || '',
      handle: node.handle
    };

    toggleItem(wishlistItem);
    
    if (isInWishlist(node.id)) {
      toast.success("Removed from wishlist");
    } else {
      toast.success("Added to wishlist");
    }
  };

  const imageUrl = node.images.edges[0]?.node.url;
  const price = parseFloat(node.priceRange.minVariantPrice.amount);
  const inWishlist = isInWishlist(node.id);
  // Support optional discount flag in mock data: node.discountPercent
  const discount = node.discountPercent || 0;
  const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

  return (
    <Card className="group overflow-hidden border-border/50 transition-all hover:shadow-glass backdrop-blur-sm bg-card/50 hover:border-accent/50">
      <Link to={`/product/${node.handle}`}>
        <div className="aspect-square overflow-hidden bg-secondary/10 relative">
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
          {imageUrl ? (
            <>
              <img
                src={imageUrl}
                alt={node.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-muted-foreground">No image</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={handleToggleWishlist}
          >
            <Heart className={`h-5 w-5 ${inWishlist ? 'fill-accent text-accent' : ''}`} />
          </Button>
        </div>
      </Link>
          <CardContent className="p-4">
        <Link to={`/product/${node.handle}`}>
          <h3 className="font-semibold text-lg mb-1 line-clamp-1 hover:text-accent transition-colors">
            {node.title}
          </h3>
        </Link>
        <div className="text-sm text-muted-foreground mb-2">{node.brand ? node.brand : 'Brand'}</div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {node.description || "Premium quality footwear"}
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              {discount > 0 ? (
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-muted-foreground line-through">${price.toFixed(2)}</span>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">${discountedPrice.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">${price.toFixed(2)}</span>
              )}
            </div>
            <Button 
              onClick={handleAddToCart}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all"
            >
              Add to Cart
            </Button>
          </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-sm text-muted-foreground">Sizes: {node.options.find(o => o.name === 'Size')?.values.join('–') || 'N/A'}</div>
          <div className="text-sm font-medium">
            {node.variants.edges[0]?.node.availableForSale ? (
              <span className="text-green-600">In stock</span>
            ) : (
              <span className="text-red-600">Out of stock</span>
            )}
          </div>
        </div>
        </div>
      </CardContent>
    </Card>
  );
};
