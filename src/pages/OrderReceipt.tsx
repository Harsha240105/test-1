import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useOrdersStore } from '@/stores/ordersStore';
import { Button } from '@/components/ui/button';

const OrderReceipt = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const order = useOrdersStore(state => id ? state.getOrder(id) : undefined);

  useEffect(() => {
    if (!order) {
      // If no order, go back to home
      navigate('/');
    }
  }, [order, navigate]);

  if (!order) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container py-12">
        <div className="max-w-2xl mx-auto bg-card/50 border border-border/50 p-8 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Order Receipt</h1>
          <p className="text-sm text-muted-foreground mb-4">Order ID: <span className="font-mono">{order.id}</span></p>
          <p className="text-sm text-muted-foreground mb-4">Date: {new Date(order.createdAt).toLocaleString()}</p>

          <div className="space-y-3 mb-6">
            {order.items.map((it) => (
              <div key={it.id} className="flex justify-between">
                <div>
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-sm text-muted-foreground">Qty: {it.quantity}{it.discount ? ` • ${it.discount}% off` : ''}</div>
                </div>
                <div className="font-semibold">${(it.price * it.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <Button onClick={() => navigate(`/track/${order.id}`)} className="mr-3">Track Order</Button>
              <Button variant="outline" onClick={() => navigate(-1)}>Back</Button>
            </div>
            <div className="text-right">
              <div className="text-muted-foreground">Total</div>
              <div className="text-xl font-bold">${order.total.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderReceipt;
