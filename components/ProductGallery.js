'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';

export default function ProductGallery({ images, name }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border border-white/8 bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            {/* Fallback graphic */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-green-500/5 border border-green-500/10 flex items-center justify-center">
                <Zap className="w-24 h-24 text-green-500/20" strokeWidth={1} />
              </div>
            </div>
            <Image
              src={images[activeIdx] || '/placeholder-scooter.png'}
              alt={`${name} - Image ${activeIdx + 1}`}
              fill
              className="object-contain drop-shadow-2xl"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 glass border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-green-500/40 transition-all duration-200 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 glass border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-green-500/40 transition-all duration-200 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIdx
                  ? 'w-6 h-2 bg-green-400'
                  : 'w-2 h-2 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`relative flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden glass border transition-all duration-300 ${
              i === activeIdx
                ? 'border-green-500/60 shadow-[0_0_12px_rgba(34,197,94,0.3)]'
                : 'border-white/8 hover:border-white/20'
            } bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className="w-6 h-6 text-green-500/20" strokeWidth={1} />
            </div>
            <Image
              src={img}
              alt={`Thumbnail ${i + 1}`}
              fill
              className="object-contain p-2"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
