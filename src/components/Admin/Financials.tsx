import React, { useEffect, useState } from 'react';
import { projectId } from '../../utils/supabase/info';
import { BadgeDollarSign, CheckCircle, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface Conversion {
  id: string;
  offer_title: string;
  amount: string;
  status: string;
  date: string;
  affiliate_email: string;
}

export const Financials = ({ session }: { session: any }) => {
  const [conversions, setConversions] = useState<Conversion[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchConversions = async () => {
    try {
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-cc50fc6c/admin/conversions`, {
        headers: { 'Authorization': `Bearer ${session.access_token}` }
      });
      if (!res.ok) throw new Error('Failed to fetch conversions');
      const data = await res.json();
      setConversions(data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to load financial data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConversions();
  }, []);

  const payAffiliate = async (id: string) => {
    try {
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-cc50fc6c/admin/conversions/${id}/pay`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${session.access_token}` }
      });
      
      if (!res.ok) throw new Error('Payment failed');
      
      toast.success('Affiliate marked as PAID');
      fetchConversions();
    } catch (error) {
      console.error(error);
      toast.error('Payment processing failed');
    }
  };

  if (loading) return <div className="p-4 text-green-500 font-mono animate-pulse">Syncing Ledger...</div>;

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-slate-800">
        <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
          <BadgeDollarSign className="text-green-500" /> FINANCIAL LEDGER
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-950/80 text-xs font-mono uppercase text-slate-500">
            <tr>
              <th className="p-4">Timestamp</th>
              <th className="p-4">Affiliate</th>
              <th className="p-4">Offer</th>
              <th className="p-4">Bounty</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {conversions.map((conv) => (
              <tr key={conv.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-4 text-slate-400 font-mono text-xs">
                  {new Date(conv.date).toLocaleDateString()} <br/>
                  {new Date(conv.date).toLocaleTimeString()}
                </td>
                <td className="p-4 font-mono text-sm text-white">{conv.affiliate_email}</td>
                <td className="p-4 text-slate-300">{conv.offer_title}</td>
                <td className="p-4 font-bold text-green-400 font-mono">{conv.amount}</td>
                <td className="p-4">
                  <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-mono uppercase border ${
                    conv.status === 'paid'
                      ? 'bg-green-500/10 border-green-500/20 text-green-400'
                      : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
                  }`}>
                    {conv.status === 'paid' ? <CheckCircle size={10} /> : <Clock size={10} />}
                    {conv.status}
                  </div>
                </td>
                <td className="p-4 text-right">
                  {conv.status !== 'paid' && (
                    <button
                      onClick={() => payAffiliate(conv.id)}
                      className="px-3 py-1.5 bg-green-500 hover:bg-green-400 text-black rounded text-xs font-bold font-mono uppercase tracking-wider transition-all"
                    >
                      Pay Affiliate
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {conversions.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-500 font-mono text-sm">
                  NO CONVERSIONS RECORDED
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
