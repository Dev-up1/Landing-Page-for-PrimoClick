import React from 'react';
import { LayoutDashboard, ShoppingBag, BarChart2, Settings, LogOut, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { supabase } from '../../lib/supabaseClient';
import { toast } from 'sonner@2.0.3';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

export const Sidebar = ({ activeTab, setActiveTab, onLogout }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'offers', label: 'Offers', icon: ShoppingBag },
    { id: 'reports', label: 'Reports', icon: BarChart2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
    toast.success('Logged out successfully');
  };

  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-slate-950 border-r border-green-500/10 flex flex-col z-40">
      <div className="p-6 border-b border-green-500/10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-green-500/10 rounded border border-green-500/20">
            <Terminal className="text-green-500" size={20} />
          </div>
          <h1 className="text-xl font-bold text-white tracking-wider font-mono">
            <span className="text-green-500">PRIME</span>CLICK
          </h1>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-mono text-sm uppercase tracking-wider relative overflow-hidden group ${
                isActive 
                  ? 'text-black bg-green-500 font-bold shadow-[0_0_15px_-3px_rgba(34,197,94,0.4)]' 
                  : 'text-slate-400 hover:text-green-400 hover:bg-green-500/5'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-black' : 'text-slate-500 group-hover:text-green-400'} />
              <span>{item.label}</span>
              {isActive && (
                <motion.div 
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-green-500 mix-blend-multiply opacity-20"
                />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-green-500/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/5 transition-all font-mono text-sm uppercase tracking-wider group"
        >
          <LogOut size={18} className="text-slate-500 group-hover:text-red-400" />
          <span>Disconnect</span>
        </button>
      </div>
    </div>
  );
};
