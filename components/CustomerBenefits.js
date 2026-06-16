'use client';
import { motion } from 'framer-motion';
import { PiggyBank, Leaf, Clock, MapPin, ShieldCheck, Headphones } from 'lucide-react';

const benefits = [
  { icon: PiggyBank, title: 'Save Up to 80% on Fuel', desc: 'Drastically cut your monthly commute costs versus petrol.' },
  { icon: Leaf, title: 'Zero Carbon Footprint', desc: '100% electric — no emissions, no pollution, no guilt.' },
  { icon: Clock, title: 'Fast Charging', desc: 'Full charge in as little as 1.5 hours with our rapid charge tech.' },
  { icon: MapPin, title: '200km+ Range', desc: 'Enough range for a full week of city commuting on a single charge.' },
  { icon: ShieldCheck, title: 'Warranty Coverage', desc: 'Up to 5-year warranty on motor, battery, and frame.' },
  { icon: Headphones, title: '24/7 Support', desc: 'WhatsApp, call, or visit — we are always here for you.' },
];

export default function CustomerBenefits() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 text-sm font-medium tracking-wider uppercase mb-3 block">✦ Customer Benefits</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Ride Smarter,
            <span className="gradient-text"> Live Better</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            REVOO ownership comes with a host of real-world benefits that make every ride worthwhile.
          </p>
        </motion.div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative glass border border-white/8 rounded-2xl p-6 hover:border-green-500/25 transition-all duration-300 group overflow-hidden"
            >
              {/* bg glow on hover */}
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/3 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-green-500/12 border border-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
                  <b.icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {b.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
