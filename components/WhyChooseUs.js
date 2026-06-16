'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, TrendingUp, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Star,
    title: 'Premium Build Quality',
    desc: 'Aircraft-grade aluminum frames, premium components, and rigorous QC testing on every unit.',
  },
  {
    icon: TrendingUp,
    title: 'Cost Savings',
    desc: 'Save up to 80% on fuel costs annually. Electricity vs petrol — the math is simple.',
  },
  {
    icon: HeartHandshake,
    title: 'After-Sale Support',
    desc: 'Dedicated support team, spare parts availability, and annual maintenance packages included.',
  },
  {
    icon: CheckCircle2,
    title: 'PSQCA Certified',
    desc: 'All REVOO models meet Pakistan Standards & Quality Control Authority requirements.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative line */}
      <div className="section-divider mb-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Large card */}
            <div className="glass border border-white/8 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
              {/* Score ring */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative w-48 h-48">
                  <svg className="w-48 h-48 -rotate-90" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
                    <motion.circle
                      cx="100" cy="100" r="80" fill="none"
                      stroke="url(#grad)" strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray="502"
                      initial={{ strokeDashoffset: 502 }}
                      whileInView={{ strokeDashoffset: 502 * 0.02 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#4ade80" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display font-black text-5xl gradient-text">98%</span>
                    <span className="text-white/50 text-sm mt-1">Satisfaction</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Years in Business', value: '5+' },
                  { label: 'Scooters Delivered', value: '5K+' },
                  { label: 'Cities Covered', value: '50+' },
                  { label: 'Service Centers', value: '30+' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/4 rounded-xl p-4 text-center">
                    <p className="font-display font-bold text-2xl gradient-text">{item.value}</p>
                    <p className="text-white/45 text-xs mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — reasons */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-green-400 text-sm font-medium tracking-wider uppercase mb-3 block">✦ Why REVOO</span>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
                The Smarter
                <br />
                <span className="gradient-text">Choice for Pakistan</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                We don&apos;t just sell scooters — we deliver a complete electric lifestyle with unmatched support and quality.
              </p>
            </motion.div>

            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 glass border border-white/8 rounded-2xl hover:border-green-500/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/12 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors duration-300">
                    <reason.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">{reason.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
