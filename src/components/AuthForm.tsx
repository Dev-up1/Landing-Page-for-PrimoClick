import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Eye, EyeOff, Lock, Mail, User, Briefcase, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';

interface AuthFormProps {
  onLoginSuccess?: (session: any) => void;
}

export const AuthForm = ({ onLoginSuccess }: AuthFormProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState<'affiliate' | 'advertiser'>('affiliate');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      toast.success('Successfully logged in!');
      console.log('Logged in user:', data);
      if (onLoginSuccess && data.session) {
        onLoginSuccess(data.session);
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error(error.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Call backend to create user with metadata and auto-confirm
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-cc50fc6c/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          email,
          password,
          accountType
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to sign up');
      }

      toast.success('Account created! Logging you in...');
      
      // Auto login after successful creation
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) throw loginError;
      
      if (onLoginSuccess && data.session) {
        onLoginSuccess(data.session);
      }

    } catch (error: any) {
      console.error('Signup error:', error);
      toast.error(error.message || 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md bg-black/80 backdrop-blur-md border border-green-500/30 rounded-xl overflow-hidden shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)] relative"
    >
      {/* Decorative cyber lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
      
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white tracking-wider font-mono">
            <span className="text-green-500">PIMO</span>CLICK
          </h2>
          <p className="text-green-400/60 text-sm mt-2 font-mono uppercase tracking-widest">
            {mode === 'login' ? 'System Access' : 'New Agent Registration'}
          </p>
        </div>

        <form onSubmit={mode === 'login' ? handleLogin : handleSignup} className="space-y-6">
          
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-green-500/80 uppercase tracking-wider ml-1">Email Protocol</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-green-500/50 group-focus-within:text-green-400 transition-colors">
                <Mail size={18} />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900/50 border border-green-500/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-green-500/20 focus:outline-none focus:border-green-500/60 focus:ring-1 focus:ring-green-500/60 transition-all font-mono"
                placeholder="agent@pimoclick.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-green-500/80 uppercase tracking-wider ml-1">Security Key</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-green-500/50 group-focus-within:text-green-400 transition-colors">
                <Lock size={18} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900/50 border border-green-500/20 rounded-lg py-3 pl-10 pr-10 text-white placeholder-green-500/20 focus:outline-none focus:border-green-500/60 focus:ring-1 focus:ring-green-500/60 transition-all font-mono"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-500/50 hover:text-green-400 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Account Type Dropdown (Signup Only) */}
          {mode === 'signup' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-2 overflow-hidden"
            >
              <label className="text-xs font-mono text-green-500/80 uppercase tracking-wider ml-1">Clearance Level</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-green-500/50 group-focus-within:text-green-400 transition-colors">
                  {accountType === 'affiliate' ? <Zap size={18} /> : <Briefcase size={18} />}
                </div>
                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value as 'affiliate' | 'advertiser')}
                  className="w-full bg-slate-900/50 border border-green-500/20 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-green-500/60 focus:ring-1 focus:ring-green-500/60 transition-all font-mono appearance-none"
                >
                  <option value="affiliate">Affiliate (Publisher)</option>
                  <option value="advertiser">Advertiser (Merchant)</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-green-500/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-500 text-black font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_-5px_rgba(34,197,94,0.6)] uppercase tracking-wider font-mono flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
            ) : (
              mode === 'login' ? 'Authenticate' : 'Initialize Account'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-green-400/60 text-sm font-mono">
            {mode === 'login' ? "Don't have access?" : "Already initialized?"}
            <button
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="ml-2 text-green-400 hover:text-green-300 underline underline-offset-4 decoration-green-500/30 transition-all"
            >
              {mode === 'login' ? 'Request Clearance' : 'System Login'}
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
};