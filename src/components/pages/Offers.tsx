import React from 'react';
import { Target, DollarSign, Globe, TrendingUp, Award, Zap, ShoppingCart, CreditCard, Smartphone, Gamepad2 } from 'lucide-react';

export const Offers = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Premium Campaigns
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              High-Converting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Offers
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed">
              2,500+ exclusive campaigns across multiple verticals with top-tier payouts 
              and real-time tracking.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              {[
                { label: 'Active Offers', value: '2,500+' },
                { label: 'Avg Payout', value: '$125' },
                { label: 'CR Rate', value: '3.2%' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-slate-900/40 border border-green-500/10 rounded-xl">
                  <div className="text-3xl font-bold text-green-400 font-mono mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offer Categories */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Verticals
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Campaign Categories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShoppingCart,
                title: 'E-Commerce',
                offers: '850+',
                avgPayout: '$75',
                description: 'Fashion, electronics, home goods, and subscription boxes with competitive payouts.',
              },
              {
                icon: CreditCard,
                title: 'Finance & Insurance',
                offers: '420+',
                avgPayout: '$250',
                description: 'Credit cards, loans, insurance, and investment platforms with premium commissions.',
              },
              {
                icon: Smartphone,
                title: 'Mobile Apps & Games',
                offers: '680+',
                avgPayout: '$45',
                description: 'App installs, in-app purchases, and mobile gaming offers with instant tracking.',
              },
              {
                icon: Target,
                title: 'Lead Generation',
                offers: '320+',
                avgPayout: '$90',
                description: 'Education, insurance quotes, real estate, and B2B lead gen campaigns.',
              },
              {
                icon: Globe,
                title: 'Travel & Hospitality',
                offers: '180+',
                avgPayout: '$120',
                description: 'Hotel bookings, flight deals, vacation packages, and travel insurance.',
              },
              {
                icon: Gamepad2,
                title: 'Gaming & Entertainment',
                offers: '240+',
                avgPayout: '$85',
                description: 'Online casinos, sports betting, streaming services, and gaming platforms.',
              },
            ].map((category) => (
              <div
                key={category.title}
                className="group p-6 bg-slate-900/40 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all hover:bg-slate-900/60"
              >
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg inline-block mb-4 group-hover:bg-green-500/20 transition-all">
                  <category.icon className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">
                  {category.title}
                </h3>
                <div className="flex items-center gap-4 mb-3 text-sm font-mono">
                  <div className="text-green-400">{category.offers} Offers</div>
                  <div className="text-slate-500">|</div>
                  <div className="text-green-400">{category.avgPayout} avg</div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performing Offers */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Featured Campaigns
            </div>
            <h2 className="text-4xl font-bold text-white">
              Top Performing Offers This Month
            </h2>
          </div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {[
              {
                name: 'Premium Credit Card Approval',
                category: 'Finance',
                payout: '$350',
                epc: '$4.85',
                conversionRate: '4.2%',
                geo: 'US, CA, UK',
                badge: 'Hot',
              },
              {
                name: 'Luxury Fashion Subscription',
                category: 'E-Commerce',
                payout: '$95',
                epc: '$3.20',
                conversionRate: '5.1%',
                geo: 'US, EU',
                badge: 'Trending',
              },
              {
                name: 'Mobile Casino App Install',
                category: 'Gaming',
                payout: '$180',
                epc: '$5.10',
                conversionRate: '3.8%',
                geo: 'US, AU, NZ',
                badge: 'Exclusive',
              },
              {
                name: 'Travel Insurance Quote',
                category: 'Travel',
                payout: '$65',
                epc: '$2.80',
                conversionRate: '6.5%',
                geo: 'Global',
                badge: 'New',
              },
              {
                name: 'Online MBA Program',
                category: 'Education',
                payout: '$450',
                epc: '$6.20',
                conversionRate: '2.9%',
                geo: 'US',
                badge: 'High Payout',
              },
            ].map((offer) => (
              <div
                key={offer.name}
                className="p-6 bg-slate-900/60 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white">
                        {offer.name}
                      </h3>
                      <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-mono uppercase rounded">
                        {offer.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-400 font-mono">
                      <span>{offer.category}</span>
                      <span className="text-slate-600">|</span>
                      <span>GEO: {offer.geo}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-1">
                        Payout
                      </div>
                      <div className="text-2xl font-bold text-green-400 font-mono">
                        {offer.payout}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-1">
                        EPC
                      </div>
                      <div className="text-xl font-bold text-white font-mono">
                        {offer.epc}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-1">
                        CR
                      </div>
                      <div className="text-xl font-bold text-white font-mono">
                        {offer.conversionRate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Offers */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Competitive Advantage
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Our Offers Convert Better
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Exclusive Deals',
                description: 'Access to private offers not available on other networks with higher payouts.',
              },
              {
                icon: TrendingUp,
                title: 'High EPCs',
                description: 'Our offers average 3x higher earnings per click than industry standard.',
              },
              {
                icon: Zap,
                title: 'Instant Approval',
                description: 'Most offers have instant or same-day approval for verified publishers.',
              },
              {
                icon: DollarSign,
                title: 'Weekly Payouts',
                description: 'Net-7 payment terms with multiple payout methods including wire and PayPal.',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="group p-6 bg-slate-900/40 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all hover:bg-slate-900/60 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg group-hover:bg-green-500/20 transition-all">
                    <benefit.icon className="text-green-500" size={28} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-mono">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Publisher Requirements
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                How to Access Premium Offers
              </h2>
              <p className="text-slate-400 text-lg">
                We maintain high standards to ensure quality traffic and protect our advertisers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900/40 border border-green-500/10 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 font-mono">
                  Basic Requirements
                </h3>
                <ul className="space-y-3 text-slate-400">
                  {[
                    'Valid government-issued ID',
                    'Proven traffic source or media buying experience',
                    'Compliance with our terms of service',
                    'No history of fraudulent activity',
                  ].map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-slate-900/40 border border-green-500/10 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 font-mono">
                  Exclusive Tier Access
                </h3>
                <ul className="space-y-3 text-slate-400">
                  {[
                    'Minimum 30 days account history',
                    '$5,000+ in generated revenue',
                    '95%+ tracking approval rate',
                    'Dedicated account manager assigned',
                  ].map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Ready to Start Promoting?
            </h2>
            
            <p className="text-lg text-slate-400">
              Join PimoClick today and get instant access to 2,500+ high-converting offers.
            </p>

            <div className="pt-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_40px_-5px_rgba(34,197,94,0.5)]"
              >
                <span className="font-mono uppercase tracking-widest">
                  Browse Offers
                </span>
                <Target size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};