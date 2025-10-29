import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';

const brands = [
  'Nike',
  'Adidas',
  'Puma',
  'Reebok',
  'Gucci',
  'Skechers'
];

const TopBrands = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Top Brands</h1>
          <p className="text-muted-foreground">Browse curated collections from popular brands.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((b) => (
            <Link key={b} to={`/brand/${encodeURIComponent(b)}`} className="group p-6 border rounded-lg hover:shadow-lg text-center">
              <div className="h-24 flex items-center justify-center mb-4 bg-secondary/10 rounded">
                <span className="text-xl font-semibold">{b}</span>
              </div>
              <div className="text-sm text-muted-foreground">View collection</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopBrands;
