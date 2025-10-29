import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useOrdersStore } from '@/stores/ordersStore';
import { Button } from '@/components/ui/button';
import type { Order } from '@/stores/ordersStore';

const statuses: Order['status'][] = ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'];

const TrackOrder = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const order = useOrdersStore(state => id ? state.getOrder(id) : undefined);
  const updateStatus = useOrdersStore(state => state.updateStatus);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (!order) {
      navigate('/');
      return;
    }
    setCurrentIndex(statuses.indexOf(order.status));
  }, [order, navigate]);

  if (!order) return null;

  const advance = () => {
    const next = Math.min(currentIndex + 1, statuses.length - 1);
    setCurrentIndex(next);
    updateStatus(order.id, statuses[next]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container py-12">
        <div className="max-w-2xl mx-auto bg-card/50 border border-border/50 p-8 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Track Order</h1>
          <p className="text-sm text-muted-foreground mb-4">Order ID: <span className="font-mono">{order.id}</span></p>

          <div className="space-y-4 mb-6">
            {statuses.map((s, i) => (
              <div key={s} className={`p-3 rounded border ${i <= currentIndex ? 'border-accent bg-accent/10' : 'border-border/30'}`}>
                <div className="flex justify-between items-center">
                  <div className="font-semibold">{s}</div>
                  <div className="text-sm text-muted-foreground">{i <= currentIndex ? 'Done' : 'Pending'}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => navigate(-1)}>Back</Button>
            <div>
              {currentIndex < statuses.length - 1 && (
                <Button onClick={advance}>Advance Status</Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackOrder;
