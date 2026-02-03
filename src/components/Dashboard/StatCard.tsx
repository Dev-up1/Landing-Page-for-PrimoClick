import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  color?: 'green' | 'blue' | 'purple';
}

export const StatCard = ({ label, value, icon: Icon, trend, color = 'green' }: StatCardProps) => {
  const colorStyles = {
    green: {
      bg: 'bg-green-500/5',
      border: 'border-green-500/20',
      text: 'text-green-500',
      shadow: 'shadow-[0_0_20px_-10px_rgba(34,197,94,0.2)]'
    },
    blue: {
      bg: 'bg-blue-500/5',
      border: 'border-blue-500/20',
      text: 'text-blue-500',
      shadow: 'shadow-[0_0_20px_-10px_rgba(59,130,246,0.2)]'
    },
    purple: {
      bg: 'bg-purple-500/5',
      border: 'border-purple-500/20',
      text: 'text-purple-500',
      shadow: 'shadow-[0_0_20px_-10px_rgba(168,85,247,0.2)]'
    }
  };

  const style = colorStyles[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={`${style.bg} backdrop-blur-sm border ${style.border} p-6 rounded-xl ${style.shadow} relative overflow-hidden group`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-1">{label}</p>
          <h3 className="text-3xl font-bold text-white font-mono">{value}</h3>
          {trend && (
            <p className={`text-xs mt-2 font-mono ${style.text} flex items-center gap-1`}>
              <span>▲</span> {trend} this week
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${style.bg} ${style.text} group-hover:scale-110 transition-transform`}>
          <Icon size={24} />
        </div>
      </div>
      
      {/* Decorative scanline */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${color}-500 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-700 animate-scan`} />
    </motion.div>
  );
};
