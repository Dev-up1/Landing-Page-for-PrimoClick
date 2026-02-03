import React, { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { StatCard } from './StatCard';
import { OfferCard } from './OfferCard';
import { supabase } from '../../lib/supabaseClient'; // <--- USING REAL CLIENT
import { MousePointer, DollarSign, Target, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface DashboardProps {
  session: any;
  onLogout: () => void;
}

export const Dashboard = ({ session, onLogout }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({ clicks: 0, conversions: 0, balance: 0.00 });
  const [offers, setOffers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Real Data from Supabase Tables
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // 1. Fetch Wallet Balance
        const { data: wallet } = await supabase
          .from('wallets')
          .select('balance')
          .eq('user_id', session.user.id)
          .single();

        // 2. Fetch Clicks Count
        const { count: clicksCount } = await supabase
          .from('clicks')
          .select('*', { count: 'exact', head: true })
          .eq('affiliate_id', session.user.id);

        // 3. Fetch Real Offers (Only Active Ones)
        const { data: offersData } = await supabase
          .from('offers')
          .select('*')
          .eq('is_active', true);

        // Update State
        setStats({
            clicks: clicksCount || 0,
            conversions: 0, // You can add conversion counting later
            balance: wallet?.balance || 0.00
        });
        setOffers(offersData || []);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.id) {
        fetchData();
    }
  }, [session]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin"></div>
          <div className="text-green-500 font-mono text-sm animate-pulse">SYNCING WITH DATABASE...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />
      <main className="flex-1 ml-64 p-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-8">
          <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-6">
            <div>
              <h2 className="text-3xl font-bold font-mono tracking-tight">
                WELCOME BACK, <span className="text-green-500">AGENT</span>
              </h2>
              <p className="text-slate-500 mt-2 font-mono text-sm">
                System Status: <span className="text-green-500">LIVE CONNECTION</span>
              </p>
            </div>
          </header>

          {activeTab === 'dashboard' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard label="Total Clicks" value={stats.clicks.toLocaleString()} icon={MousePointer} trend="+0%" color="blue" />
                <StatCard label="Total Conversions" value={stats.conversions.toLocaleString()} icon={Target} trend="+0%" color="purple" />
                <StatCard label="Current Balance" value={`$${Number(stats.balance).toFixed(2)}`} icon={DollarSign} trend="+0%" color="green" />
              </div>

              <div>
                <h3 className="text-xl font-bold font-mono flex items-center gap-2 mb-6">
                  <RefreshCw size={20} className="text-green-500" /> AVAILABLE OFFERS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {offers.map((offer) => (
                    <OfferCard key={offer.id} offer={offer} userId={session.user.id} />
                  ))}
                  {offers.length === 0 && <div className="text-slate-500 col-span-3 text-center py-10">No active offers found in database.</div>}
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'offers' && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} userId={session.user.id} />
                ))}
             </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};