'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
            <Zap className="w-10 h-10 text-green-500/50" />
          </div>
          <h1 className="font-display font-black text-8xl gradient-text mb-4">404</h1>
          <h2 className="font-display font-bold text-2xl text-white mb-3">Page Not Found</h2>
          <p className="text-white/45 text-base mb-8 max-w-sm mx-auto">
            Looks like this road doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Link href="/products" className="btn-outline">
              Browse Scooters
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
