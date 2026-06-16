'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, ChevronDown, Zap, Shield, Leaf } from 'lucide-react';

const floatingStats = [
  { value: '200km', label: 'Max Range' },
  { value: '120', label: 'km/h Top Speed' },
  { value: '15+', label: 'Models' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-bg pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glow orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-green-500/5 blur-[120px]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-green-400/30"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 5) * 15}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left — Text */}
          <div className="flex flex-col justify-center py-16 lg:py-0">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/25 bg-green-500/8 mb-6 w-fit"
            >
              <Leaf className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400 text-xs font-medium tracking-wide">100% Electric · Zero Emissions</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-5xl sm:text-6xl xl:text-7xl leading-[1.05] mb-6"
            >
              <span className="text-white">The Future of</span>
              <br />
              <span className="gradient-text glow-text">Urban Mobility</span>
              <br />
              <span className="text-white">Is Here.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Experience Pakistan&apos;s most premium electric scooters. Built for performance, designed for elegance, engineered for tomorrow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link href="/products" className="btn-primary group">
                Explore Scooters
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-outline group">
                <Play className="w-4 h-4" />
                Our Story
              </Link>
            </motion.div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex items-center gap-6"
            >
              {floatingStats.map((s, i) => (
                <div key={i} className={`${i > 0 ? 'pl-6 border-l border-white/10' : ''}`}>
                  <p className="font-display font-bold text-2xl text-white">{s.value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <div className="relative flex items-center justify-center">
            {/* Glow behind scooter */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-green-500/10 blur-3xl" />
            </div>

            {/* Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="w-[500px] h-[500px] rounded-full border border-green-500/8"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[380px] h-[380px] rounded-full border border-green-500/12"
              />
            </div>

            {/* Main scooter visual */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full max-w-sm"
            >
              {/* Placeholder scooter silhouette */}
              <div className="w-full aspect-square flex items-center justify-center">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 rounded-full border-2 border-green-500/20 bg-green-500/5 flex items-center justify-center">
                    <Zap className="w-24 h-24 text-green-500/40" strokeWidth={1} />
                  </div>
                  {/* Inner glow */}
                  <div className="absolute inset-8 rounded-full bg-green-500/5 blur-xl" />
                </div>
              </div>
            </motion.div>

            {/* Floating info cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-12 right-0 glass border border-white/8 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-500/15 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">200 km</p>
                  <p className="text-white/40 text-xs">Max Range</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-16 left-0 glass border border-white/8 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-500/15 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">5-Year</p>
                  <p className="text-white/40 text-xs">Warranty</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
