import { ShopifyProduct } from "@/lib/shopify";

export const mockProducts: ShopifyProduct[] = [
  // MEN'S SHOES
  {
    node: {
      id: "1",
      title: "Silver Chrome Air Max",
      description: "Premium metallic silver sneakers with liquid glass finish and advanced cushioning technology",
      handle: "silver-chrome-air-max",
      category: "Men",
      brand: "Nike",
      priceRange: {
        minVariantPrice: {
          amount: "189.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
              altText: "Silver Chrome Air Max"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v1",
              title: "US 9 / Silver",
              price: {
                amount: "189.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 9" },
                { name: "Color", value: "Silver" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 8", "US 9", "US 10", "US 11"] },
        { name: "Color", values: ["Silver", "Black"] }
      ]
    }
  },
  {
    node: {
      id: "2",
      title: "Obsidian Black Runners",
      description: "Sleek all-black performance runners with reflective glass-like coating",
      handle: "obsidian-black-runners",
      category: "Men",
      brand: "Adidas",
      priceRange: {
        minVariantPrice: {
          amount: "159.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
              altText: "Obsidian Black Runners"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v2",
              title: "US 9 / Black",
              price: {
                amount: "159.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 9" },
                { name: "Color", value: "Black" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 8", "US 9", "US 10", "US 11"] },
        { name: "Color", values: ["Black"] }
      ]
    }
  },
  {
    node: {
      id: "3",
      title: "Liquid Mercury High-Tops",
      description: "Statement high-top sneakers with metallic silver accents and glossy finish",
      handle: "liquid-mercury-high-tops",
      category: "Men",
      brand: "Puma",
      priceRange: {
        minVariantPrice: {
          amount: "219.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
              altText: "Liquid Mercury High-Tops"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v3",
              title: "US 9 / Silver/Black",
              price: {
                amount: "219.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 9" },
                { name: "Color", value: "Silver/Black" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 8", "US 9", "US 10", "US 11"] },
        { name: "Color", values: ["Silver/Black"] }
      ]
    }
  },
  {
    node: {
      id: "4",
      title: "Shadow Elite Trainers",
      description: "Ultra-lightweight black trainers with chrome detailing and gel cushioning",
      handle: "shadow-elite-trainers",
      category: "Men",
      brand: "Reebok",
      priceRange: {
        minVariantPrice: {
          amount: "169.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
              altText: "Shadow Elite Trainers"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v4",
              title: "US 9 / Black/Silver",
              price: {
                amount: "169.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 9" },
                { name: "Color", value: "Black/Silver" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 8", "US 9", "US 10", "US 11"] },
        { name: "Color", values: ["Black/Silver"] }
      ]
    }
  },
  {
    node: {
      id: "5",
      title: "Steel Toe Urban Boots",
      description: "Premium black boots with metallic silver hardware and glossy leather finish",
      handle: "steel-toe-urban-boots",
      category: "Men",
      brand: "Timberland",
      priceRange: {
        minVariantPrice: {
          amount: "249.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
              altText: "Steel Toe Urban Boots"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v5",
              title: "US 9 / Black",
              price: {
                amount: "249.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 9" },
                { name: "Color", value: "Black" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 8", "US 9", "US 10", "US 11"] },
        { name: "Color", values: ["Black"] }
      ]
    }
  },
  // WOMEN'S SHOES
  {
    node: {
      id: "6",
      title: "Platinum Gloss Slip-Ons",
      description: "Effortless style with silver metallic slip-on sneakers and glass-like finish",
      handle: "platinum-gloss-slip-ons",
      category: "Women",
      brand: "Vans",
      priceRange: {
        minVariantPrice: {
          amount: "139.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
              altText: "Platinum Gloss Slip-Ons"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v6",
              title: "US 9 / Silver",
              price: {
                amount: "139.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 9" },
                { name: "Color", value: "Silver" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 6", "US 7", "US 8", "US 9"] },
        { name: "Color", values: ["Silver"] }
      ]
    }
  },
  {
    node: {
      id: "7",
      title: "Carbon Fiber Low-Tops",
      description: "Innovative carbon fiber pattern with liquid metallic accents",
      handle: "carbon-fiber-low-tops",
      category: "Women",
      brand: "Nike",
      priceRange: {
        minVariantPrice: {
          amount: "199.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
              altText: "Carbon Fiber Low-Tops"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v7",
              title: "US 8 / Black/Silver",
              price: {
                amount: "199.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 8" },
                { name: "Color", value: "Black/Silver" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 6", "US 7", "US 8", "US 9"] },
        { name: "Color", values: ["Black/Silver"] }
      ]
    }
  },
  {
    node: {
      id: "8",
      title: "Chrome Storm Hiking Boots",
      description: "Rugged black hiking boots with reflective silver panels and waterproof coating",
      handle: "chrome-storm-hiking-boots",
      category: "Women",
      brand: "Merrell",
      priceRange: {
        minVariantPrice: {
          amount: "279.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=80",
              altText: "Chrome Storm Hiking Boots"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v8",
              title: "US 8 / Black/Silver",
              price: {
                amount: "279.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 8" },
                { name: "Color", value: "Black/Silver" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 6", "US 7", "US 8", "US 9"] },
        { name: "Color", values: ["Black/Silver"] }
      ]
    }
  },
  {
    node: {
      id: "9",
      title: "Silver Glimmer Heels",
      description: "Elegant silver heels perfect for any special occasion",
      handle: "silver-glimmer-heels",
      category: "Women",
      brand: "Aldo",
      priceRange: {
        minVariantPrice: {
          amount: "149.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800",
              altText: "Silver Glimmer Heels"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v9",
              title: "US 7 / Silver",
              price: {
                amount: "149.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 7" },
                { name: "Color", value: "Silver" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 6", "US 7", "US 8", "US 9"] },
        { name: "Color", values: ["Silver"] }
      ]
    }
  },
  {
    node: {
      id: "10",
      title: "Luna Comfort Flats",
      description: "Ultra-comfortable black flats for all-day wear",
      handle: "luna-comfort-flats",
      category: "Women",
      brand: "Clarks",
      priceRange: {
        minVariantPrice: {
          amount: "99.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800",
              altText: "Luna Comfort Flats"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v10",
              title: "US 7 / Black",
              price: {
                amount: "99.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 7" },
                { name: "Color", value: "Black" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 6", "US 7", "US 8", "US 9"] },
        { name: "Color", values: ["Black"] }
      ]
    }
  },
  // KIDS' SHOES
  {
    node: {
      id: "11",
      title: "Little Champions Sneakers",
      description: "Fun and comfortable sneakers for active kids",
      handle: "little-champions-sneakers",
      category: "Kids",
      priceRange: {
        minVariantPrice: {
          amount: "79.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800",
              altText: "Little Champions Sneakers"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v11",
              title: "Size 2 / Silver",
              price: {
                amount: "79.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "2" },
                { name: "Color", value: "Silver" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["1", "2", "3", "4"] },
        { name: "Color", values: ["Silver", "Black"] }
      ]
    }
  },
  {
    node: {
      id: "12",
      title: "Sparkle Star Shoes",
      description: "Glittery shoes that kids love",
      handle: "sparkle-star-shoes",
      category: "Kids",
      priceRange: {
        minVariantPrice: {
          amount: "69.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800",
              altText: "Sparkle Star Shoes"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v12",
              title: "Size 2 / Silver",
              price: {
                amount: "69.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "2" },
                { name: "Color", value: "Silver" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["1", "2", "3", "4"] },
        { name: "Color", values: ["Silver"] }
      ]
    }
  },
  {
    node: {
      id: "13",
      title: "Junior Adventure Boots",
      description: "Sturdy boots for young explorers",
      handle: "junior-adventure-boots",
      category: "Kids",
      priceRange: {
        minVariantPrice: {
          amount: "89.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800",
              altText: "Junior Adventure Boots"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v13",
              title: "Size 3 / Black",
              price: {
                amount: "89.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "3" },
                { name: "Color", value: "Black" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["2", "3", "4", "5"] },
        { name: "Color", values: ["Black"] }
      ]
    }
  },
  {
    node: {
      id: "14",
      title: "Lightning Speed Racers",
      description: "Fast-looking sporty shoes for energetic kids",
      handle: "lightning-speed-racers",
      category: "Kids",
      priceRange: {
        minVariantPrice: {
          amount: "74.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800",
              altText: "Lightning Speed Racers"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v14",
              title: "Size 2 / Black/Silver",
              price: {
                amount: "74.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "2" },
                { name: "Color", value: "Black/Silver" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["1", "2", "3", "4"] },
        { name: "Color", values: ["Black/Silver"] }
      ]
    }
  },
  {
    node: {
      id: "15",
      title: "Cozy Cloud Slippers",
      description: "Soft and comfortable slippers for kids",
      handle: "cozy-cloud-slippers",
      category: "Kids",
      priceRange: {
        minVariantPrice: {
          amount: "39.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800",
              altText: "Cozy Cloud Slippers"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v15",
              title: "Size 2 / Silver",
              price: {
                amount: "39.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "2" },
                { name: "Color", value: "Silver" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["1", "2", "3", "4"] },
        { name: "Color", values: ["Silver"] }
      ]
    }
  },
  // SALE ITEMS
  {
    node: {
      id: "16",
      title: "Classic Silver Trainers - SALE",
      description: "Timeless silver trainers at a special price. Limited stock available.",
      handle: "classic-silver-trainers",
      category: "Sale",
      priceRange: {
        minVariantPrice: {
          amount: "89.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
              altText: "Classic Silver Trainers"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v16",
              title: "US 9 / Silver",
              price: {
                amount: "89.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 9" },
                { name: "Color", value: "Silver" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 8", "US 9", "US 10"] },
        { name: "Color", values: ["Silver"] }
      ]
      ,
      // sale discount
      discountPercent: 20
    }
  },
  {
    node: {
      id: "17",
      title: "Shadow Black Casual - SALE",
      description: "Versatile black casual shoes at clearance price",
      handle: "shadow-black-casual",
      category: "Sale",
      priceRange: {
        minVariantPrice: {
          amount: "79.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
              altText: "Shadow Black Casual"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v17",
              title: "US 9 / Black",
              price: {
                amount: "79.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 9" },
                { name: "Color", value: "Black" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 8", "US 9"] },
        { name: "Color", values: ["Black"] }
      ]
      ,
      discountPercent: 10
    }
  },
  {
    node: {
      id: "18",
      title: "Metallic Glow Sneakers - SALE",
      description: "Eye-catching metallic sneakers on sale. While supplies last.",
      handle: "metallic-glow-sneakers",
      category: "Sale",
      priceRange: {
        minVariantPrice: {
          amount: "99.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800",
              altText: "Metallic Glow Sneakers"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v18",
              title: "US 8 / Silver/Black",
              price: {
                amount: "99.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 8" },
                { name: "Color", value: "Silver/Black" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 7", "US 8", "US 9"] },
        { name: "Color", values: ["Silver/Black"] }
      ]
    }
  },
  {
    node: {
      id: "19",
      title: "Clearance Sport Shoes - SALE",
      description: "Quality sport shoes at unbeatable prices. Final clearance.",
      handle: "clearance-sport-shoes",
      category: "Sale",
      priceRange: {
        minVariantPrice: {
          amount: "69.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800",
              altText: "Clearance Sport Shoes"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v19",
              title: "US 9 / Black",
              price: {
                amount: "69.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 9" },
                { name: "Color", value: "Black" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 8", "US 9"] },
        { name: "Color", values: ["Black"] }
      ]
    }
  },
  {
    node: {
      id: "20",
      title: "Outlet Fashion Boots - SALE",
      description: "Stylish boots from last season. Huge savings on premium quality.",
      handle: "outlet-fashion-boots",
      category: "Sale",
      priceRange: {
        minVariantPrice: {
          amount: "119.99",
          currencyCode: "USD"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800",
              altText: "Outlet Fashion Boots"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "v20",
              title: "US 8 / Black",
              price: {
                amount: "119.99",
                currencyCode: "USD"
              },
              availableForSale: true,
              selectedOptions: [
                { name: "Size", value: "US 8" },
                { name: "Color", value: "Black" }
              ]
            }
          }
        ]
      },
      options: [
        { name: "Size", values: ["US 7", "US 8", "US 9"] },
        { name: "Color", values: ["Black"] }
      ]
    }
  }
  ,
  {
    node: {
      id: "21",
      title: "Gucci Leather Runner",
      description: "Designer leather sneakers with premium finish",
      handle: "gucci-leather-runner",
      category: "Men",
      brand: "Gucci",
      priceRange: { minVariantPrice: { amount: "499.99", currencyCode: "USD" } },
      images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", altText: "Gucci Leather Runner" } }] },
      variants: { edges: [{ node: { id: "v21", title: "UK 9 / Black", price: { amount: "499.99", currencyCode: "USD" }, availableForSale: true, selectedOptions: [{ name: "Size", value: "UK 9" }, { name: "Color", value: "Black" }] } }] },
      options: [{ name: "Size", values: ["UK 6","UK 7","UK 8","UK 9","UK 10","UK 11"] }, { name: "Color", values: ["Black"] }],
      discountPercent: 0
    }
  },
  {
    node: {
      id: "22",
      title: "Skechers Comfort Run",
      description: "Everyday comfort runner from Skechers",
      handle: "skechers-comfort-run",
      category: "Women",
      brand: "Skechers",
      priceRange: { minVariantPrice: { amount: "89.99", currencyCode: "USD" } },
      images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800", altText: "Skechers Comfort Run" } }] },
      variants: { edges: [{ node: { id: "v22", title: "UK 7 / White", price: { amount: "89.99", currencyCode: "USD" }, availableForSale: true, selectedOptions: [{ name: "Size", value: "UK 7" }, { name: "Color", value: "White" }] } }] },
      options: [{ name: "Size", values: ["UK 6","UK 7","UK 8","UK 9","UK 10","UK 11"] }, { name: "Color", values: ["White"] }],
      discountPercent: 10
    }
  }
];
