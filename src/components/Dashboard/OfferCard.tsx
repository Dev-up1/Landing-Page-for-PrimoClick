import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, DollarSign, BarChart } from 'lucide-react';
import { projectId } from '../../utils/supabase/info';
import { toast } from 'sonner';

interface Offer {
  id: string;
  title: string;
  description?: string;
  payout_amount: number; // Matches DB
  // Optional UI fields
  category?: string;
  conversion_rate?: string;
  image?: string;
}

interface OfferCardProps {
  offer: Offer;
  userId: string;
}

export const OfferCard = ({ offer, userId }: OfferCardProps) => {
  const handleGetLink = () => {
    // 1. POINT TO THE REAL TRACKING FUNCTION
    const trackingLink = `https://${projectId}.supabase.co/functions/v1/track-click?offer_id=${offer.id}&affiliate_id=${userId}`;
    
    navigator.clipboard.writeText(trackingLink);
    toast.success('Real Tracking Link Copied!');
    
    // Optional: Open it immediately to test
    // window.open(trackingLink, '_blank');
  };

  // Safe Defaults
  const displayImage = offer.image || "https://images.unsplash.com/photo-1642132652075-2d434374384e?auto=format&fit=crop&q=80&w=1000";
  const displayCategory = offer.category || "General";
  const displayPayout = offer.payout_amount ? Number(offer.payout_amount).toFixed(2) : "0.00";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-green-500/30 rounded-xl overflow-hidden transition-all group flex flex-col h-full"
    >
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
        <img src={displayImage} alt={offer.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all" />
        <div className="absolute top-3 left-3 z-20">
          <span className="px-2 py-1 bg-black/60 border border-green-500/20 rounded text-[10px] font-mono uppercase text-green-400">
            {displayCategory}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2">{offer.title}</h3>
        {offer.description && <p className="text-xs text-slate-500 mb-4 line-clamp-2">{offer.description}</p>}

        <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
          <div className="bg-slate-950/50 p-2 rounded border border-slate-800">
            <div className="text-[10px] text-slate-500 uppercase">Payout</div>
            <div className="text-green-400 font-bold font-mono flex items-center gap-1">
              <DollarSign size={12} /> {displayPayout}
            </div>
          </div>
          <div className="bg-slate-950/50 p-2 rounded border border-slate-800">
            <div className="text-[10px] text-slate-500 uppercase">Conv. Rate</div>
            <div className="text-blue-400 font-bold font-mono flex items-center gap-1">
              <BarChart size={12} /> {offer.conversion_rate || 'N/A'}
            </div>
          </div>
        </div>

        <button onClick={handleGetLink} className="w-full py-2.5 bg-green-500 hover:bg-green-400 text-black font-bold rounded flex items-center justify-center gap-2">
          <ExternalLink size={14} /> Get Tracking Link
        </button>
      </div>
    </motion.div>
  );
};