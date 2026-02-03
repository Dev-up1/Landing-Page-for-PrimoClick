import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { toast } from 'sonner';
import { Shield, Lock, ArrowRight, Activity, Terminal, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onLoginSuccess: (session: any) => void;
}

export const Hero = ({ onLoginSuccess }: HeroProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // --- THE FIXED AUTH LOGIC ---
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // 1. LOGIN
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast.success('ACCESS GRANTED');
        onLoginSuccess(data.session);
      } else {
        // 2. SIGN UP (The Fix)
        // We ONLY call signUp. The SQL Trigger handles the 'users' table insert automatically.
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        
        if (error) throw error;

        if (data.session) {
          toast.success('AGENT ACCOUNT INITIALIZED');
          onLoginSuccess(data.session);
        } else {
          // If email confirmation is off, this shouldn't happen, but just in case:
          toast.success('Account created! Please sign in.');
          setIsLogin(true);
        }
      }
    } catch (error: any) {
      console.error('Auth Error:', error);
      toast.error(error.message || 'Authentication Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1762278804768-7109128de73f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwYWJzdHJhY3QlMjBuZW9uJTIwZ3JlZW4lMjBuZXR3b3JrfGVufDF8fHx8MTc2OTE5MjQxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Cyber Security Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
        
        {/* Left Content (Marketing) */}
        <div className="text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Next Gen Affiliate Network
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Monetize Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Digital Traffic
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Join the elite network of high-performance affiliates. Advanced tracking, real-time analytics, and secure payouts.
          </p>

          <div className="pt-8 grid grid-cols-3 gap-8 border-t border-white/5">
            {[
              { label: 'Active Offers', value: '2.5K+' },
              { label: 'Publishers', value: '15K+' },
              { label: 'Payouts', value: '$50M+' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                <div className="text-xs text-green-500/60 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - THE INTEGRATED AUTH FORM */}
        <div className="flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Form Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full"></div>

            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5 relative z-10">
              <button
                onClick={() => setIsLogin(true)}
                className={`text-sm font-mono uppercase tracking-wider transition-colors ${isLogin ? 'text-green-500 font-bold' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`text-sm font-mono uppercase tracking-wider transition-colors ${!isLogin ? 'text-green-500 font-bold' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Initialize Account
              </button>
            </div>

            <form onSubmit={handleAuth} className="space-y-5 relative z-10">
              <div className="space-y-2">
                <label className="text-xs text-slate-400 font-mono uppercase tracking-widest ml-1">Identity (Email)</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 text-slate-500 group-focus-within:text-green-500 transition-colors" size={18} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0B1120] border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all font-mono text-sm"
                    placeholder="AGENT@PIMOCLICK.NET"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-slate-400 font-mono uppercase tracking-widest ml-1">Access Key (Password)</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 text-slate-500 group-focus-within:text-green-500 transition-colors" size={18} />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#0B1120] border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all font-mono text-sm"
                    placeholder="••••••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-500 text-black font-bold py-3.5 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)] mt-4"
              >
                {loading ? (
                  <Activity className="animate-spin" size={20} />
                ) : (
                  <>
                    <span className="font-mono uppercase tracking-widest text-sm">
                      {isLogin ? 'Authenticate' : 'Initialize'}
                    </span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[10px] text-slate-600 font-mono uppercase tracking-[0.2em]">
                {isLogin ? 'Secure Access Required' : 'Public Registration Open'}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};