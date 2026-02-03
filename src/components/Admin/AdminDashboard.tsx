import React, { useState } from 'react';
import { UserManager } from './UserManager';
import { OfferManager } from './OfferManager';
import { Financials } from './Financials';
import { 
  LayoutDashboard, 
  Users, 
  Shield, 
  DollarSign, 
  Terminal, 
  LogOut,
  Activity,
  AlertTriangle,
  Globe
} from 'lucide-react';
import { motion } from 'motion/react';

interface AdminDashboardProps {
  session: any;
  onLogout: () => void;
}

export const AdminDashboard = ({ session, onLogout }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <AdminHome />;
      case 'agents': return <UserManager session={session} />;
      case 'armory': return <OfferManager session={session} />;
      case 'financials': return <Financials session={session} />;
      case 'logs': return <SystemLogs />;
      default: return <AdminHome />;
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'agents', label: 'Agents (Users)', icon: Users },
    { id: 'armory', label: 'Armory (Offers)', icon: Shield },
    { id: 'financials', label: 'Financials', icon: DollarSign },
    { id: 'logs', label: 'System Logs', icon: Terminal },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 flex font-sans selection:bg-green-500/30 selection:text-green-200">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed left-0 top-0 bg-black/90 border-r border-green-900/30 flex flex-col z-40 backdrop-blur-xl">
        <div className="p-6 border-b border-green-900/20">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold font-mono tracking-wider text-white">
              <span className="text-green-500">PRIME</span>CLICK
            </div>
          </div>
          <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-green-500/60 pl-1">
            Command Center
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-mono text-xs uppercase tracking-wider group relative overflow-hidden ${
                  isActive
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'text-slate-500 hover:text-green-400 hover:bg-green-500/5'
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 shadow-[0_0_10px_2px_rgba(34,197,94,0.5)]"></div>
                )}
                <Icon size={18} className={isActive ? "text-green-500" : "text-slate-600 group-hover:text-green-500/70"} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-green-900/20">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:text-white hover:bg-red-500/10 hover:border-red-500/20 border border-transparent transition-all font-mono text-xs uppercase tracking-wider group"
          >
            <LogOut size={18} className="group-hover:text-red-500" />
            <span>Disconnect</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-10 flex justify-between items-end border-b border-white/5 pb-6">
            <div>
              <h1 className="text-3xl font-bold font-mono tracking-tight text-white">
                WELCOME BACK, <span className="text-green-500 shadow-green-500/20 drop-shadow-sm">OVERSEER</span>
              </h1>
              <p className="mt-2 font-mono text-sm text-slate-400">
                System Privilege: <span className="text-green-500 font-bold tracking-wider">ROOT ACCESS</span>
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-xs font-mono text-green-500/70 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                SECURE CONNECTION ESTABLISHED
              </div>
              <div className="text-slate-500 font-mono text-xs">
                IP: 192.168.0.1 :: SESSION_ID: {session?.user?.id.slice(0, 8) || 'UNKNOWN'}
              </div>
            </div>
          </header>
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

// --- Sub-components ---

const AdminHome = () => {
  // Mock Data for the UI design
  const metrics = [
    { label: 'Network Profit', value: '$124,592.00', color: 'text-green-400', icon: DollarSign, sub: '+12.5% this week' },
    { label: 'Pending Payouts', value: '$12,450.00', color: 'text-orange-400', icon: AlertTriangle, sub: '8 requests pending' },
    { label: 'Active Agents', value: '1,204', color: 'text-blue-400', icon: Globe, sub: '+45 new today' },
  ];

  const trafficLogs = [
    { id: 'LOG_8921', time: '10:42:05', agent: 'Agent_X', action: 'CLICK', target: 'Offer #102', ip: '45.22.19.112', status: 'VERIFIED' },
    { id: 'LOG_8922', time: '10:42:12', agent: 'Cipher_User', action: 'CONVERSION', target: 'Offer #88', ip: '102.33.21.9', status: 'PAID' },
    { id: 'LOG_8923', time: '10:43:45', agent: 'Neon_Drift', action: 'CLICK', target: 'Offer #102', ip: '89.11.22.4', status: 'VERIFIED' },
    { id: 'LOG_8924', time: '10:44:01', agent: 'Agent_X', action: 'LOGIN', target: 'Dashboard', ip: '45.22.19.112', status: 'SUCCESS' },
    { id: 'LOG_8925', time: '10:45:30', agent: 'Unknown', action: 'ATTEMPT', target: 'Admin Panel', ip: '192.168.1.1', status: 'BLOCKED' },
  ];

  return (
    <div className="space-y-8">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl p-6 relative overflow-hidden group hover:border-slate-700 transition-all">
             {/* Glassmorphism gradient */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
             
             <div className="flex justify-between items-start mb-4">
                <div className="text-slate-400 font-mono text-xs uppercase tracking-widest">{m.label}</div>
                <m.icon className={`opacity-50 ${m.color}`} size={20} />
             </div>
             <div className={`text-3xl font-bold font-mono ${m.color} mb-2`}>{m.value}</div>
             <div className="text-xs text-slate-500 font-mono">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Live Traffic Feed */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
        <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-black/20">
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-green-500 animate-pulse" />
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Live Traffic Feed</h3>
          </div>
          <div className="text-[10px] font-mono text-slate-500">REAL-TIME MONITORING</div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/40 text-slate-500 font-mono text-xs uppercase tracking-wider border-b border-slate-800">
                <th className="px-6 py-3 font-normal">Timestamp</th>
                <th className="px-6 py-3 font-normal">Log ID</th>
                <th className="px-6 py-3 font-normal">Agent</th>
                <th className="px-6 py-3 font-normal">Action</th>
                <th className="px-6 py-3 font-normal">Target</th>
                <th className="px-6 py-3 font-normal text-right">Status</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs divide-y divide-slate-800/50">
              {trafficLogs.map((log, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-3 text-slate-400 group-hover:text-white">{log.time}</td>
                  <td className="px-6 py-3 text-slate-600">{log.id}</td>
                  <td className="px-6 py-3 text-blue-400">{log.agent}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      log.action === 'CONVERSION' ? 'bg-purple-500/20 text-purple-400' :
                      log.action === 'CLICK' ? 'bg-blue-500/20 text-blue-400' :
                      log.action === 'BLOCKED' ? 'bg-red-500/20 text-red-400' :
                      'bg-slate-700/50 text-slate-300'
                    }`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-slate-300">{log.target}</td>
                  <td className="px-6 py-3 text-right">
                    <span className={
                      log.status === 'PAID' ? 'text-green-500' :
                      log.status === 'BLOCKED' ? 'text-red-500' : 
                      'text-slate-500'
                    }>[{log.status}]</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Placeholder for System Logs tab
const SystemLogs = () => (
  <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center text-center h-96">
    <Terminal size={48} className="text-slate-700 mb-4" />
    <h3 className="text-xl font-mono text-white mb-2">SYSTEM LOGS ARCHIVE</h3>
    <p className="text-slate-500 max-w-md">Detailed system logs are encrypted and stored in cold storage. Root access required for decryption.</p>
  </div>
);
