import React from 'react';
import { Terminal } from 'lucide-react';
import { Navigation } from './Navigation';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-green-500/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20 group-hover:bg-green-500/20 group-hover:border-green-500/40 transition-all">
            <Terminal className="text-green-500" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wider font-mono">
            <span className="text-green-500">PIMO</span>CLICK
          </h1>
        </Link>

        <Navigation />

        <div className="hidden md:block">
           {/* Placeholder for future status indicator or similar */}
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-xs text-green-500/70 font-mono uppercase">System Operational</span>
           </div>
        </div>
      </div>
    </header>
  );
};