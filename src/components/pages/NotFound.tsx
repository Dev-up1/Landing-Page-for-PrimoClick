import React from 'react';
import { Link } from 'react-router';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-full">
            <AlertTriangle className="text-red-500" size={48} />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-white font-mono">404</h1>
          <h2 className="text-2xl text-green-400 font-mono uppercase tracking-widest">
            Access Denied
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            The requested resource could not be located in the PimoClick network.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-black font-bold rounded-lg transition-all transform hover:scale-105"
        >
          <ArrowLeft size={18} />
          <span className="font-mono uppercase tracking-widest text-sm">
            Return to Base
          </span>
        </Link>
      </div>
    </div>
  );
};