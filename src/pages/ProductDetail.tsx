import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockProducts } from "@/data/mockProducts";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { ShopifyProduct } from '@/lib/shopify';
import { useOrdersStore } from '@/stores/ordersStore';

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ShopifyProduct['node'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<ShopifyProduct['node']['variants']['edges'][0]['node'] | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);
  const createOrder = useOrdersStore(state => state.createOrder);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    if (handle) {
      const foundProduct = mockProducts.find((p: ShopifyProduct) => p.node.handle === handle);
      if (foundProduct) {
        setProduct(foundProduct.node);
        setSelectedVariant(foundProduct.node.variants.edges[0]?.node ?? null);
      }
      setLoading(false);
    }
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${product.title} has been added to your cart.`,
      position: "top-center",
    });
  };

  const handleBuyNow = () => {
    if (!product || !selectedVariant) return;
    handleAddToCart();
    const item = {
      id: selectedVariant.id,
      title: product.title,
      price: parseFloat(selectedVariant.price.amount),
      quantity: 1,
      discount: product.discountPercent ?? undefined,
    };

    const total = item.price * item.quantity;
    const order = createOrder([item], total);
    toast.success('Order placed', { description: `Order ${order.id} created.` });
    navigate(`/order/${order.id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex justify-center items-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.images.edges;
  const price = parseFloat(selectedVariant?.price.amount || product.priceRange.minVariantPrice.amount);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
      <div className="container py-12">
        <div className="mb-4">
          <Button variant="ghost" onClick={() => navigate(-1)}>Back</Button>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
            <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-secondary/20">
              {images[selectedImage]?.node ? (
                <img
                  src={images[selectedImage].node.url}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-muted-foreground">No image</span>
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((image: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                      selectedImage === index ? 'border-accent' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image.node.url}
                      alt={`${product.title} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
              <p className="text-3xl font-bold text-accent">
                {selectedVariant?.price.currencyCode || product.priceRange.minVariantPrice.currencyCode} {price.toFixed(2)}
              </p>
            </div>

            <div className="space-y-4">
              {product.options.map((option) => (
                <div key={option.name}>
                  <label className="text-sm font-medium mb-2 block">{option.name}</label>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value: string) => (
                      <Badge
                        key={value}
                        variant={selectedVariant?.selectedOptions.some(o => o.value === value) ? 'default' : 'outline'}
                        className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={() => {
                          const variant = product.variants.edges.find((v) =>
                            v.node.selectedOptions.some((opt) => opt.value === value)
                          );
                          if (variant) {
                            setSelectedVariant(variant.node);
                            // If this option is a Size, set selectedSize
                            if (option.name.toLowerCase() === 'size') {
                              setSelectedSize(value);
                            }
                          }
                        }}
                      >
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
              <div className="text-sm text-muted-foreground">Selected size: {selectedSize ?? 'None'}</div>
            </div>

            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                {selectedSize ? 'Add to Cart' : 'Select size'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1"
                onClick={handleBuyNow}
                disabled={!selectedSize}
              >
                {selectedSize ? 'Buy Now' : 'Select size'}
              </Button>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description || "No description available"}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
