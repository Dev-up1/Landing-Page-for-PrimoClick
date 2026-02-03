import React from 'react';
import { Users, Globe, TrendingUp, Zap, Award, Shield, DollarSign, Target, BarChart3, Headphones } from 'lucide-react';

export const Network = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Publisher Network
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Join the Elite{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Affiliate Network
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed">
              15,000+ verified publishers earning $50M+ annually with PimoClick's 
              advanced tracking and premium offers.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { label: 'Publishers', value: '15K+' },
                { label: 'Countries', value: '120+' },
                { label: 'Monthly Clicks', value: '50M+' },
                { label: 'Avg Revenue', value: '$3.2K' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-slate-900/40 border border-green-500/10 rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-green-400 font-mono mb-1">
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

      {/* Network Benefits */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Network Advantages
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Publishers Choose PimoClick
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: 'Highest Payouts',
                description: 'Industry-leading commission rates with weekly Net-7 payments via wire, PayPal, or crypto.',
              },
              {
                icon: Zap,
                title: 'Instant Access',
                description: 'Fast approval process with same-day access to 2,500+ premium offers.',
              },
              {
                icon: Shield,
                title: 'Reliable Tracking',
                description: '99.9% attribution accuracy with server-side tracking and real-time reporting.',
              },
              {
                icon: Target,
                title: 'Exclusive Offers',
                description: 'Access to private campaigns and direct advertiser relationships not available elsewhere.',
              },
              {
                icon: BarChart3,
                title: 'Advanced Analytics',
                description: 'Deep insights with custom reports, A/B testing tools, and conversion optimization.',
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                description: 'Dedicated account managers and round-the-clock technical support via Slack and email.',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="group p-6 bg-slate-900/40 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all hover:bg-slate-900/60"
              >
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg inline-block mb-4 group-hover:bg-green-500/20 transition-all">
                  <benefit.icon className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">
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

      {/* Publisher Tiers */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Tier System
            </div>
            <h2 className="text-4xl font-bold text-white">
              Publisher Tier Levels
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Unlock better rates, exclusive offers, and premium support as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                tier: 'Starter',
                icon: Users,
                color: 'slate',
                requirements: 'New publishers',
                benefits: [
                  'Access to 1,500+ offers',
                  'Standard commission rates',
                  'Net-15 payment terms',
                  'Email support',
                  'Basic reporting dashboard',
                ],
              },
              {
                tier: 'Elite',
                icon: Award,
                color: 'green',
                requirements: '$5K+ monthly revenue',
                benefits: [
                  'Access to 2,500+ offers',
                  '+10% commission bonus',
                  'Net-7 payment terms',
                  'Priority support',
                  'Advanced analytics',
                  'Dedicated account manager',
                ],
              },
              {
                tier: 'Partner',
                icon: TrendingUp,
                color: 'emerald',
                requirements: '$25K+ monthly revenue',
                benefits: [
                  'All offers + exclusives',
                  '+20% commission bonus',
                  'Net-3 payment terms',
                  '24/7 VIP support',
                  'Custom tracking solutions',
                  'Direct advertiser access',
                  'Revenue share opportunities',
                ],
              },
            ].map((level) => (
              <div
                key={level.tier}
                className={`p-6 bg-slate-900/40 border rounded-xl hover:scale-105 transition-all ${
                  level.color === 'green'
                    ? 'border-green-500/30 bg-green-500/5'
                    : level.color === 'emerald'
                    ? 'border-emerald-500/30 bg-emerald-500/5'
                    : 'border-green-500/10'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-lg border ${
                    level.color === 'green'
                      ? 'bg-green-500/20 border-green-500/30'
                      : level.color === 'emerald'
                      ? 'bg-emerald-500/20 border-emerald-500/30'
                      : 'bg-green-500/10 border-green-500/20'
                  }`}>
                    <level.icon className={
                      level.color === 'green'
                        ? 'text-green-400'
                        : level.color === 'emerald'
                        ? 'text-emerald-400'
                        : 'text-green-500'
                    } size={28} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white text-center mb-2 font-mono">
                  {level.tier}
                </h3>
                <p className="text-center text-sm text-slate-400 font-mono mb-6">
                  {level.requirements}
                </p>

                <ul className="space-y-3">
                  {level.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        level.color === 'green'
                          ? 'bg-green-400'
                          : level.color === 'emerald'
                          ? 'bg-emerald-400'
                          : 'bg-green-500'
                      }`}></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Case Studies
            </div>
            <h2 className="text-4xl font-bold text-white">
              Publisher Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Sarah K.',
                role: 'Media Buyer',
                revenue: '$125K/mo',
                growth: '+340%',
                quote: 'PimoClick\'s tracking accuracy and exclusive offers helped me 3x my revenue in just 6 months. The support team is phenomenal.',
              },
              {
                name: 'Marcus T.',
                role: 'Media Buyer',
                revenue: '$85K/mo',
                growth: '+220%',
                quote: 'Switched from two other networks to PimoClick. Higher payouts, better tracking, and actually helpful account managers.',
              },
              {
                name: 'Lisa Chen',
                role: 'Social Media Marketer',
                revenue: '$45K/mo',
                growth: '+180%',
                quote: 'As someone new to affiliate marketing, PimoClick made it easy to get started. Their dashboard is intuitive and the offers convert well.',
              },
              {
                name: 'David R.',
                role: 'Email Marketing',
                revenue: '$210K/mo',
                growth: '+290%',
                quote: 'The exclusive finance offers and direct advertiser relationships have been game-changing for my email campaigns.',
              },
            ].map((story) => (
              <div
                key={story.name}
                className="p-6 bg-slate-900/40 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">
                      {story.name}
                    </h3>
                    <p className="text-sm text-slate-400">{story.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-400 font-mono">
                      {story.revenue}
                    </div>
                    <div className="text-xs text-green-500/70 font-mono">
                      {story.growth} growth
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Getting Started
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Join in 3 Simple Steps
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Create Your Account',
                  description: 'Sign up with your email and complete the verification process. Takes less than 5 minutes.',
                },
                {
                  step: '02',
                  title: 'Get Approved',
                  description: 'Our team reviews your application within 24 hours. Most publishers get instant approval.',
                },
                {
                  step: '03',
                  title: 'Start Promoting',
                  description: 'Browse 2,500+ offers, grab your tracking links, and start earning with real-time reporting.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 p-6 bg-slate-900/40 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-all">
                      <span className="text-2xl font-bold text-green-400 font-mono">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-mono">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Join 15,000+ Elite Publishers?
            </h2>
            
            <p className="text-lg text-slate-400">
              Start earning with the most advanced affiliate network. No setup fees, 
              no hidden costs, just pure performance marketing.
            </p>

            <div className="pt-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_40px_-5px_rgba(34,197,94,0.5)]"
              >
                <span className="font-mono uppercase tracking-widest">
                  Join the Network
                </span>
                <Zap size={18} />
              </a>
            </div>

            <div className="pt-6 text-xs text-slate-600 font-mono uppercase tracking-[0.2em]">
              Free to Join • Instant Approval • 24/7 Support
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};