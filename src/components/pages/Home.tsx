import React from 'react';
import { useOutletContext } from 'react-router';
import { Hero } from '../Hero';
import { Shield, Zap, TrendingUp, Lock, Globe, BarChart3, Users, Target, DollarSign } from 'lucide-react';

interface OutletContext {
  onLoginSuccess: (session: any) => void;
}

export const Home = () => {
  const { onLoginSuccess } = useOutletContext<OutletContext>();

  return (
    <div>
      <Hero onLoginSuccess={onLoginSuccess} />
      
      {/* Features Section */}
      <section className="py-24 px-6 bg-slate-950 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Core Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Built for performance marketers who demand precision, security, and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Military-Grade Security',
                description: 'End-to-end encryption with advanced fraud detection and prevention systems.',
              },
              {
                icon: Zap,
                title: 'Real-Time Tracking',
                description: 'Sub-second click attribution and conversion tracking across all traffic sources.',
              },
              {
                icon: TrendingUp,
                title: 'Performance Analytics',
                description: 'Deep insights with custom reporting, cohort analysis, and predictive modeling.',
              },
              {
                icon: Lock,
                title: 'Secure Postbacks',
                description: 'Encrypted server-to-server callbacks with automatic retry logic and validation.',
              },
              {
                icon: Globe,
                title: 'Global Infrastructure',
                description: 'Edge servers in 50+ regions for minimal latency and maximum reliability.',
              },
              {
                icon: BarChart3,
                title: 'Advanced Attribution',
                description: 'Multi-touch attribution models with customizable conversion windows.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group p-6 bg-slate-900/40 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all hover:bg-slate-900/60"
              >
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg inline-block mb-4 group-hover:bg-green-500/20 transition-all">
                  <feature.icon className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PimoClick */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Network Advantage
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Why Elite Affiliates Choose{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  PimoClick
                </span>
              </h2>
              
              <p className="text-lg text-slate-400 leading-relaxed">
                We've built the most advanced affiliate tracking platform designed specifically 
                for high-volume publishers and performance marketers who need enterprise features 
                without enterprise complexity.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  { label: 'Average Revenue Increase', value: '127%' },
                  { label: 'Tracking Accuracy', value: '99.9%' },
                  { label: 'Average Response Time', value: '<50ms' },
                  { label: 'Monthly Conversions', value: '5M+' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between p-4 bg-slate-900/40 border border-green-500/10 rounded-lg">
                    <span className="text-slate-400 font-mono text-sm uppercase tracking-widest">
                      {stat.label}
                    </span>
                    <span className="text-2xl font-bold text-green-400 font-mono">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Verified Publishers', value: '15,000+' },
                { icon: Target, label: 'Active Campaigns', value: '2,500+' },
                { icon: DollarSign, label: 'Total Payouts', value: '$50M+' },
                { icon: Globe, label: 'Countries Served', value: '120+' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 bg-gradient-to-br from-slate-900/60 to-slate-900/40 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all group"
                >
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg inline-block mb-4 group-hover:bg-green-500/20 transition-all">
                    <item.icon className="text-green-500" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-white font-mono mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-green-500/60 uppercase tracking-widest font-mono">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Ready to Deploy
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Start Monetizing Your Traffic Today
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Join thousands of elite affiliates already earning with PimoClick. 
              Get instant access to premium offers and start tracking in minutes.
            </p>

            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_40px_-5px_rgba(34,197,94,0.5)]"
              >
                <span className="font-mono uppercase tracking-widest">
                  Initialize Account
                </span>
                <Zap size={18} />
              </a>
            </div>

            <div className="pt-8 text-xs text-slate-600 font-mono uppercase tracking-[0.2em]">
              No Credit Card Required • Instant Approval • 24/7 Support
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};