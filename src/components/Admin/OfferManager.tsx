import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient"; // <--- CHANGED: Import Real Client
import {
  Plus,
  Link,
  DollarSign,
  Target,
  FileText,
  Power,
  X,
  Shield,
  Search,
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion"; // Ensure you use framer-motion or motion/react

export const OfferManager = ({ session }: { session: any }) => {
  const [offers, setOffers] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch offers on load
  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      // <--- CHANGED: Direct Database Select
      const { data, error } = await supabase
        .from("offers")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setOffers(data || []);
    } catch (error) {
      console.error("Failed to fetch offers", error);
      toast.error("Could not load Armory data");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/40 p-6 rounded-xl border border-slate-800 backdrop-blur-sm">
        <div>
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <Shield className="text-green-500" /> ARMORY /
            OFFERS
          </h2>
          <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
            Manage Affiliate Operations
          </p>
        </div>

        <div className="flex gap-3">
          <div className="relative hidden md:block">
            <Search
              className="absolute left-3 top-2.5 text-slate-500"
              size={16}
            />
            <input
              type="text"
              placeholder="SEARCH OPERATIONS..."
              className="bg-black/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-xs font-mono text-green-500 focus:border-green-500/50 focus:outline-none w-64 uppercase"
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 hover:bg-green-500 text-black font-bold px-6 py-2 rounded-lg font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_15px_-3px_rgba(34,197,94,0.4)]"
          >
            <Plus size={16} /> Deploy New Operation
          </button>
        </div>
      </div>

      {/* Offers List */}
      <div className="grid grid-cols-1 gap-4">
        {offers.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/20 border border-dashed border-slate-800 rounded-xl">
            <div className="text-slate-500 font-mono text-sm">
              NO ACTIVE OPERATIONS DETECTED
            </div>
          </div>
        ) : (
          offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg flex flex-col md:flex-row items-center gap-6 hover:border-slate-700 transition-all group relative overflow-hidden"
            >
              {/* Status Indicator Stripe */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${offer.is_active ? "bg-green-500" : "bg-slate-700"}`}
              ></div>

              <div className="w-16 h-16 bg-black rounded-md overflow-hidden border border-slate-800 flex-shrink-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-700 font-mono">
                  {offer.title.charAt(0)}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-white font-mono text-lg">
                    {offer.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${offer.is_active ? "bg-green-500/20 text-green-400" : "bg-slate-700 text-slate-400"}`}
                  >
                    {offer.is_active ? "Active" : "Dormant"}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono mt-1 line-clamp-1">
                  {offer.description ||
                    "Classified operation briefing..."}
                </p>
              </div>

              <div className="flex items-center gap-8 pr-4">
                <div className="text-right">
                  <div className="text-[10px] text-slate-500 font-mono uppercase">
                    Payout
                  </div>
                  <div className="text-green-400 font-bold font-mono">
                    ${Number(offer.payout_amount).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Deploy Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <DeployOfferModal
            session={session}
            onClose={() => setIsModalOpen(false)}
            onSuccess={() => {
              setIsModalOpen(false);
              fetchOffers(); // Refresh list after adding
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const DeployOfferModal = ({
  session,
  onClose,
  onSuccess,
}: {
  session: any;
  onClose: () => void;
  onSuccess: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    payout: "",
    url: "",
    status: true, // true = active
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // <--- CHANGED: Map Form Data to Database Columns
      const payload = {
        title: formData.title,
        description: formData.description,
        payout_amount: parseFloat(formData.payout), // Convert string to number
        maxbounty_link: formData.url,
        is_active: formData.status,
      };

      // <--- CHANGED: Insert Directly via Supabase
      const { error } = await supabase
        .from("offers")
        .insert([payload]);

      if (error) throw error;

      toast.success("OPERATION INITIALIZED SUCCESSFULLY");
      onSuccess();
    } catch (error: any) {
      console.error(error);
      toast.error(`DEPLOYMENT FAILED: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-2xl bg-[#020617] border border-green-500/30 rounded-lg shadow-[0_0_50px_-10px_rgba(34,197,94,0.15)] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-green-900/30 bg-black/40">
          <div>
            <h3 className="text-xl font-bold font-mono text-white tracking-wider flex items-center gap-2">
              <span className="text-green-500">DEPLOY</span> NEW
              OFFER
            </h3>
            <p className="text-[10px] text-green-500/60 font-mono uppercase tracking-[0.2em] mt-1">
              SECURE TRANSMISSION :: LEVEL 4 ACCESS
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-6">
            {/* Row 1: Name & Status */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest block">
                  Operation Name
                </label>
                <div className="relative group">
                  <Target
                    className="absolute left-3 top-3 text-slate-600 group-focus-within:text-green-500 transition-colors"
                    size={16}
                  />
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        title: e.target.value,
                      })
                    }
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-md py-2.5 pl-10 pr-4 text-green-400 font-mono placeholder:text-slate-700 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all text-sm"
                    placeholder="ENTER OPERATION TITLE"
                  />
                </div>
              </div>

              <div className="w-auto space-y-2 flex flex-col items-end">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest block text-right">
                  Status
                </label>
                <div
                  onClick={() =>
                    setFormData({
                      ...formData,
                      status: !formData.status,
                    })
                  }
                  className={`cursor-pointer flex items-center gap-3 px-4 py-2 rounded-md border transition-all ${
                    formData.status
                      ? "bg-green-900/20 border-green-500/50"
                      : "bg-slate-900 border-slate-700"
                  }`}
                >
                  <span
                    className={`text-xs font-mono font-bold uppercase ${formData.status ? "text-green-400" : "text-slate-500"}`}
                  >
                    {formData.status ? "Active" : "Dormant"}
                  </span>
                  <div
                    className={`w-8 h-4 rounded-full relative transition-colors ${formData.status ? "bg-green-500" : "bg-slate-700"}`}
                  >
                    <div
                      className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${formData.status ? "left-4.5" : "left-0.5"}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Briefing */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-500 uppercase tracking-widest block">
                Briefing
              </label>
              <div className="relative group">
                <FileText
                  className="absolute left-3 top-3 text-slate-600 group-focus-within:text-green-500 transition-colors"
                  size={16}
                />
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  className="w-full bg-[#0F172A] border border-slate-800 rounded-md py-2.5 pl-10 pr-4 text-green-400 font-mono placeholder:text-slate-700 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all text-sm resize-none"
                  placeholder="ENTER MISSION PARAMETERS..."
                />
              </div>
            </div>

            {/* Row 3: Bounty & Link */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest block">
                  Bounty (Payout)
                </label>
                <div className="relative group">
                  <DollarSign
                    className="absolute left-3 top-3 text-slate-600 group-focus-within:text-green-500 transition-colors"
                    size={16}
                  />
                  <input
                    type="number" // Changed to number for safety
                    step="0.01"
                    required
                    value={formData.payout}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        payout: e.target.value,
                      })
                    }
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-md py-2.5 pl-10 pr-4 text-green-400 font-mono placeholder:text-slate-700 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all text-sm"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest block">
                  Target Link (MaxBounty)
                </label>
                <div className="relative group">
                  <Link
                    className="absolute left-3 top-3 text-slate-600 group-focus-within:text-green-500 transition-colors"
                    size={16}
                  />
                  <input
                    type="url"
                    required
                    value={formData.url}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        url: e.target.value,
                      })
                    }
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-md py-2.5 pl-10 pr-4 text-green-400 font-mono placeholder:text-slate-700 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all text-sm"
                    placeholder="HTTPS://MAXBOUNTY.COM/..."
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-green-600 hover:bg-green-500 hover:scale-[1.01] active:scale-[0.99] text-black font-bold text-sm rounded-md transition-all shadow-[0_0_20px_-5px_rgba(34,197,94,0.5)] uppercase tracking-[0.1em] font-mono flex items-center justify-center gap-2 mt-8"
          >
            {loading ? (
              <span className="animate-pulse">
                INITIALIZING...
              </span>
            ) : (
              <>
                <Power size={18} /> INITIALIZE OFFER
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};