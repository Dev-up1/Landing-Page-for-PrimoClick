import React from 'react';
import { Shield, Target, Zap, Users, Award, Globe } from 'lucide-react';

export const About = () => {
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
              Mission Brief
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                PimoClick
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed">
              We're building the future of performance marketing with military-grade tracking 
              technology and affiliate-first innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 bg-slate-900/40 border border-green-500/10 rounded-2xl">
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg inline-block mb-6">
                <Target className="text-green-500" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 font-mono">
                Our Mission
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                To empower digital marketers with the most advanced affiliate tracking platform 
                on the planet. We eliminate the technical barriers between you and your revenue, 
                delivering enterprise-grade tools with startup agility.
              </p>
            </div>

            <div className="p-8 bg-slate-900/40 border border-green-500/10 rounded-2xl">
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg inline-block mb-6">
                <Zap className="text-green-500" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 font-mono">
                Our Vision
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                A world where every click is traceable, every conversion is attributed correctly, 
                and every affiliate has the data intelligence to scale profitably. We're making 
                performance marketing transparent, secure, and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Origin Story
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Built by Affiliates, for Affiliates
              </h2>
            </div>

            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                PimoClick was born from frustration. Our founders spent years navigating clunky 
                affiliate networks, dealing with inaccurate tracking, delayed payouts, and platforms 
                that treated publishers as second-class citizens.
              </p>
              
              <p>
                In 2019, a team of veteran performance marketers and cybersecurity engineers came 
                together with a radical idea: what if we built an affiliate network that actually 
                worked the way affiliates needed it to?
              </p>

              <p>
                We started with the hardest problem first—tracking. Using cutting-edge server-side 
                architecture and distributed edge computing, we created a system that could process 
                millions of clicks per second with 99.9% accuracy.
              </p>

              <p>
                Today, PimoClick serves over 15,000 publishers across 120 countries, processing 
                $50M+ in annual payouts. But we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Operational Principles
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Security First',
                description: 'We protect your data and your revenue like it\'s our own. Military-grade encryption, fraud prevention, and continuous security audits.',
              },
              {
                icon: Zap,
                title: 'Speed Obsessed',
                description: 'Every millisecond counts. Our infrastructure is optimized for sub-50ms response times globally.',
              },
              {
                icon: Target,
                title: 'Precision Tracking',
                description: '99.9% accuracy isn\'t a goal—it\'s the baseline. We\'re constantly innovating to make tracking even more reliable.',
              },
              {
                icon: Users,
                title: 'Affiliate-Centric',
                description: 'Publishers come first. Every feature, every decision, every line of code is designed with your success in mind.',
              },
              {
                icon: Award,
                title: 'Transparent Operations',
                description: 'No hidden fees, no delayed reports, no excuses. You deserve real-time visibility into your performance.',
              },
              {
                icon: Globe,
                title: 'Global Scale',
                description: 'From day one, we built for the world. Edge servers in 50+ regions ensure fast, reliable tracking anywhere.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="group p-6 bg-slate-900/40 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all hover:bg-slate-900/60"
              >
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg inline-block mb-4 group-hover:bg-green-500/20 transition-all">
                  <value.icon className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              By the Numbers
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Team Members', value: '45+' },
                { label: 'Countries', value: '120+' },
                { label: 'Uptime', value: '99.99%' },
                { label: 'Support Response', value: '<5min' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 bg-slate-900/40 border border-green-500/10 rounded-xl">
                  <div className="text-4xl font-bold text-green-400 font-mono mb-2">
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

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Ready to Join the Network?
            </h2>
            
            <p className="text-lg text-slate-400">
              Experience the difference that true affiliate-first technology makes.
            </p>

            <div className="pt-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_40px_-5px_rgba(34,197,94,0.5)]"
              >
                <span className="font-mono uppercase tracking-widest">
                  Get Started
                </span>
                <Zap size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};