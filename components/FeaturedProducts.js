'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductCard from './ProductCard';
import initialProducts from '../data/products';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProducts() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('revoo_products');
    const allProducts = stored ? JSON.parse(stored) : initialProducts;
    setFeatured(allProducts.filter((p) => p.featured).slice(0, 3));
  }, []);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-green-glow opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-400 text-sm font-medium tracking-wider uppercase mb-2 block">
              ✦ Our Collection
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
              Featured<br />
              <span className="gradient-text">Scooters</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/products"
              className="group flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors text-sm"
            >
              View All 11 Models
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/products" className="btn-outline">
            Browse Full Lineup
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
