import React from 'react';
import { Link, useLocation } from 'react-router';
import { Terminal } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Technology', path: '/technology' },
    { name: 'Offers', path: '/offers' },
    { name: 'Network', path: '/network' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`px-4 py-2 text-sm font-mono uppercase tracking-wider rounded-lg transition-all ${
            isActive(link.path)
              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
              : 'text-slate-400 hover:text-green-400 hover:bg-green-500/5'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
