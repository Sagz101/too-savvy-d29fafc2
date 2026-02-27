import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';

export default function StoreSuccess() {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) { verifyPayment(); }
  }, [sessionId]);

  const verifyPayment = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('verify-payment', { body: { sessionId } });
      if (error) throw error;
      if (data?.success) {
        setOrderDetails(data.order);
        toast({ title: "Payment Successful!", description: "Your order has been confirmed." });
      } else {
        toast({ title: "Payment Verification Failed", description: "Please contact support if payment was deducted.", variant: "destructive" });
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      toast({ title: "Error", description: "Failed to verify payment", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <CosmicPageLayout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
        </div>
      </CosmicPageLayout>
    );
  }

  return (
    <CosmicPageLayout>
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-white/5 border-white/10 backdrop-blur-xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 rounded-full bg-green-400/10 w-fit">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
            <CardTitle className="text-2xl text-white">Payment Successful!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center text-white/70">
              <p className="mb-4">Thank you for your purchase. Your order has been confirmed and you should receive a confirmation email shortly.</p>
              {orderDetails && (
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 font-medium">Order Details</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between"><span>Amount:</span><span className="text-green-400 font-medium">${orderDetails.amount} {orderDetails.currency?.toUpperCase()}</span></div>
                    <div className="flex justify-between"><span>Status:</span><span className="text-green-400">Completed</span></div>
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-cyan-600">
                <Link to="/studio?module=store-builder">Continue Shopping</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-white/10 text-white/70 hover:bg-white/5">
                <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </CosmicPageLayout>
  );
}
