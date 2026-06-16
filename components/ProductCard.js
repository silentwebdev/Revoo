'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Gauge, ArrowRight } from 'lucide-react';

const statusConfig = {
  'in-stock':  { label: 'In Stock',      className: 'badge-in-stock' },
  'limited':   { label: 'Limited Stock', className: 'badge-limited' },
  'out-of-stock': { label: 'Out of Stock', className: 'badge-out' },
  'coming-soon':  { label: 'Coming Soon',  className: 'badge-soon' },
};

export default function ProductCard({ product, index = 0 }) {
  const status = statusConfig[product.status] || statusConfig['in-stock'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link href={`/products/${product.slug}`} className="block h-full">
        <div className="product-card glass border border-white/8 rounded-2xl overflow-hidden h-full flex flex-col group cursor-pointer">
          {/* Image Area */}
          <div className="relative bg-gradient-to-br from-white/5 to-white/2 overflow-hidden aspect-[4/3]">
            {/* Badge */}
            {product.badge && (
              <div className="absolute top-3 left-3 z-10">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${status.className}`}>
                  {product.badge}
                </span>
              </div>
            )}

            {/* Status badge */}
            <div className="absolute top-3 right-3 z-10">
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${status.className}`}>
                {status.label}
              </span>
            </div>

            {/* Product image */}
            <div className="relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative w-full h-full"
              >
                <Image
                  src={product.images?.[0] || '/placeholder-scooter.png'}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                {/* Fallback illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-green-500/5 border border-green-500/10 flex items-center justify-center">
                    <Zap className="w-16 h-16 text-green-500/30" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-all duration-500" />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-white group-hover:text-green-400 transition-colors duration-300 mb-1">
                {product.name}
              </h3>
              <p className="text-white/45 text-xs mb-4 line-clamp-1">{product.tagline}</p>

              {/* Stats row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-white/60 text-xs">{product.range}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-white/60 text-xs">{product.speed}</span>
                </div>
              </div>

              {/* Colors */}
              {product.colors?.length > 0 && (
                <div className="flex items-center gap-1.5 mb-4">
                  {product.colors.slice(0, 4).map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: color }}
                      title={product.colorNames?.[i] || color}
                    />
                  ))}
                  {product.colors.length > 4 && (
                    <span className="text-white/30 text-xs">+{product.colors.length - 4}</span>
                  )}
                </div>
              )}
            </div>

            {/* Price & CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-white/8">
              <div>
                <p className="text-white/40 text-xs mb-0.5">Starting from</p>
                <p className="font-display font-bold text-lg gradient-text">{product.price}</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black group-hover:border-green-500 transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
