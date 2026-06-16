'use client';
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../../components/ProductCard';
import SkeletonCard from '../../components/SkeletonCard';
import initialProducts from '../../data/products';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const statusOptions = [
  { value: 'all',          label: 'All' },
  { value: 'in-stock',     label: 'In Stock' },
  { value: 'limited',      label: 'Limited' },
  { value: 'out-of-stock', label: 'Out of Stock' },
  { value: 'coming-soon',  label: 'Coming Soon' },
];

const sortOptions = [
  { value: 'default',    label: 'Default' },
  { value: 'price-asc',  label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'name-asc',   label: 'Name: A → Z' },
];

export default function ProductsPageClient() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [sort, setSort] = useState('default');

  useEffect(() => {
    // Load admin-edited products from localStorage, fallback to initial data
    const stored = localStorage.getItem('revoo_products');
    setProducts(stored ? JSON.parse(stored) : initialProducts);
    setLoading(false);
  }, []);

  const filtered = useMemo(() => {
    let list = [...products];
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline?.toLowerCase().includes(q) ||
          p.motor?.toLowerCase().includes(q)
      );
    }
    if (status !== 'all') list = list.filter((p) => p.status === status);
    if (sort === 'price-asc')  list.sort((a, b) => a.priceNum - b.priceNum);
    if (sort === 'price-desc') list.sort((a, b) => b.priceNum - a.priceNum);
    if (sort === 'name-asc')   list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [products, search, status, sort]);

  return (
    <div className="page-enter min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-green-400 text-sm font-medium tracking-wider uppercase mb-3 block">
            ✦ All Models
          </span>
          <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4">
            Our <span className="gradient-text">Lineup</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {initialProducts.length} premium electric scooters — find the one built for you.
          </p>
        </motion.div>

        {/* Spec Sheet Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 glass border border-white/8 rounded-2xl overflow-hidden"
        >
          <div className="px-5 py-3 border-b border-white/6 flex items-center justify-between">
            <p className="text-white/60 text-sm font-medium">Official REVOO Model Comparison</p>
            <span className="text-green-400 text-xs">All 11 Models</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/revoo-spec-sheet.jpg"
            alt="REVOO Pakistan official specification comparison chart for all models"
            className="w-full object-contain"
          />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35" />
            <input
              type="text"
              placeholder="Search models..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/35 text-sm focus:outline-none focus:border-green-500/50 transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/35 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Status filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-white/35 shrink-0" />
            {statusOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setStatus(opt.value)}
                className={`px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  status === opt.value
                    ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.35)]'
                    : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm focus:outline-none focus:border-green-500/50 transition-all cursor-pointer shrink-0"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value} className="bg-[#0d0d1a]">
                {o.label}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Results count */}
        {!loading && (
          <p className="text-white/35 text-xs mb-6">
            Showing <span className="text-white/60 font-medium">{filtered.length}</span> of{' '}
            <span className="text-white/60 font-medium">{products.length}</span> models
            {search && <span> for &ldquo;{search}&rdquo;</span>}
          </p>
        )}

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-28">
            <p className="text-6xl mb-4">🛵</p>
            <h3 className="font-display font-bold text-xl text-white mb-2">No models found</h3>
            <p className="text-white/40 text-sm mb-6">Try adjusting your search or filters.</p>
            <button
              onClick={() => { setSearch(''); setStatus('all'); }}
              className="btn-outline text-sm"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
