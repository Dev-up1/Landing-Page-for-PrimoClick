import React from 'react';
import { Server, Database, Lock, Zap, Globe, Code2, Shield, Terminal, Activity, Cpu } from 'lucide-react';

export const Technology = () => {
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
              Technical Architecture
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Built on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Next-Gen Infrastructure
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed">
              Enterprise-grade technology stack designed for speed, security, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Core Systems
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Technology Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Server,
                title: 'Edge Computing',
                description: 'Distributed servers in 50+ regions powered by Cloudflare Workers and AWS Lambda@Edge for sub-50ms global response times.',
                specs: ['50+ Edge Locations', 'Auto-Scaling', 'DDoS Protection'],
              },
              {
                icon: Database,
                title: 'Real-Time Database',
                description: 'Supabase PostgreSQL with read replicas and automatic failover ensures zero data loss and 99.99% uptime.',
                specs: ['PostgreSQL 15', 'Real-time Subscriptions', 'Point-in-time Recovery'],
              },
              {
                icon: Lock,
                title: 'Security Layer',
                description: 'Military-grade AES-256 encryption, OAuth 2.0, and continuous penetration testing by third-party security firms.',
                specs: ['AES-256 Encryption', 'OAuth 2.0', 'SOC 2 Compliant'],
              },
              {
                icon: Zap,
                title: 'Event Processing',
                description: 'Apache Kafka streams process millions of events per second with exactly-once delivery semantics.',
                specs: ['5M+ events/sec', 'Exactly-once delivery', 'Real-time Analytics'],
              },
              {
                icon: Globe,
                title: 'CDN & Caching',
                description: 'Multi-tier caching with Redis and edge-level caching reduces latency and database load by 95%.',
                specs: ['Redis Cluster', 'Edge Caching', '95% Cache Hit Rate'],
              },
              {
                icon: Code2,
                title: 'API Gateway',
                description: 'RESTful and GraphQL APIs with automatic rate limiting, versioning, and comprehensive documentation.',
                specs: ['REST & GraphQL', 'Rate Limiting', 'Auto Documentation'],
              },
            ].map((tech) => (
              <div
                key={tech.title}
                className="group p-6 bg-slate-900/40 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all hover:bg-slate-900/60"
              >
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg inline-block mb-4 group-hover:bg-green-500/20 transition-all">
                  <tech.icon className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">
                  {tech.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {tech.description}
                </p>
                <div className="space-y-2">
                  {tech.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-green-500/70 font-mono">
                      <div className="w-1 h-1 rounded-full bg-green-500"></div>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking System */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Tracking Engine
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Server-Side Tracking Architecture
              </h2>
              
              <p className="text-lg text-slate-400 leading-relaxed">
                Our proprietary tracking system uses server-side redirects and encrypted pixel 
                callbacks to ensure 99.9% attribution accuracy, even with ad blockers and privacy 
                browsers.
              </p>

              <div className="space-y-3">
                {[
                  'Server-side click tracking via Edge Functions',
                  'Encrypted postback URLs with HMAC validation',
                  'Multi-touch attribution with customizable windows',
                  'Real-time fraud detection and bot filtering',
                  'Cookie-less tracking for iOS 14.5+ compliance',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3 p-3 bg-slate-900/40 border border-green-500/10 rounded-lg">
                    <Terminal className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-green-500/20 rounded-xl">
                <div className="font-mono text-xs text-green-400 mb-4">// Click Flow</div>
                <div className="space-y-3 text-sm font-mono">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-500">1.</span> User clicks affiliate link
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-500">2.</span> Edge Function captures click data
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-500">3.</span> Generate unique click_id
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-500">4.</span> Store in distributed cache (Redis)
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-500">5.</span> Redirect to advertiser with click_id
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-500">6.</span> Advertiser fires postback on conversion
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-500">7.</span> Validate HMAC signature
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-500">8.</span> Credit affiliate account
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Tracking Accuracy', value: '99.9%' },
                  { label: 'Avg Response Time', value: '<50ms' },
                  { label: 'Daily Events', value: '50M+' },
                  { label: 'Uptime SLA', value: '99.99%' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-slate-900/60 border border-green-500/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Security Infrastructure
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Military-Grade Protection
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Encryption',
                description: 'AES-256 encryption for all data at rest and TLS 1.3 for data in transit.',
              },
              {
                icon: Lock,
                title: 'Authentication',
                description: 'Multi-factor authentication, OAuth 2.0, and session management.',
              },
              {
                icon: Activity,
                title: 'Monitoring',
                description: '24/7 threat detection with Datadog and automated incident response.',
              },
              {
                icon: Cpu,
                title: 'Fraud Prevention',
                description: 'ML-powered bot detection and behavioral analysis on every click.',
              },
            ].map((security) => (
              <div
                key={security.title}
                className="group p-6 bg-slate-900/40 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all hover:bg-slate-900/60"
              >
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg inline-block mb-4 group-hover:bg-green-500/20 transition-all">
                  <security.icon className="text-green-500" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-mono">
                  {security.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {security.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Performance Metrics
              </div>
              <h2 className="text-4xl font-bold text-white">
                Infrastructure by the Numbers
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'API Requests/day', value: '500M+', icon: Zap },
                { label: 'Database Queries/sec', value: '100K+', icon: Database },
                { label: 'Edge Locations', value: '50+', icon: Globe },
                { label: 'Avg Latency', value: '47ms', icon: Activity },
                { label: 'Storage Capacity', value: '500TB', icon: Server },
                { label: 'Concurrent Users', value: '1M+', icon: Cpu },
                { label: 'Uptime (Last 12mo)', value: '99.99%', icon: Shield },
                { label: 'Security Audits/yr', value: '4', icon: Lock },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="p-6 bg-slate-900/40 border border-green-500/10 rounded-xl text-center group hover:border-green-500/30 transition-all"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-2 bg-green-500/10 border border-green-500/20 rounded-lg group-hover:bg-green-500/20 transition-all">
                      <metric.icon className="text-green-500" size={20} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-green-400 font-mono mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">
                    {metric.label}
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
              Ready to Experience the Difference?
            </h2>
            
            <p className="text-lg text-slate-400">
              Join thousands of affiliates already leveraging our technology.
            </p>

            <div className="pt-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_40px_-5px_rgba(34,197,94,0.5)]"
              >
                <span className="font-mono uppercase tracking-widest">
                  Deploy Now
                </span>
                <Terminal size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
