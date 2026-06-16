'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductGallery from '../../../components/ProductGallery';
import Image from 'next/image';
import RevooImage from '../../../public/revoo-spec-sheet.jpg';
import {
  MessageCircle, ArrowLeft, Zap, Gauge, Battery, Clock,
  ChevronDown, ChevronUp, Package, Shield, Plug, Weight,
  ArrowUpDown, Wrench
} from 'lucide-react';

const statusConfig = {
  'in-stock':     { label: 'In Stock',       className: 'badge-in-stock', dot: 'bg-green-400' },
  'limited':      { label: 'Limited Stock',  className: 'badge-limited',  dot: 'bg-amber-400' },
  'out-of-stock': { label: 'Out of Stock',   className: 'badge-out',      dot: 'bg-red-400' },
  'coming-soon':  { label: 'Coming Soon',    className: 'badge-soon',     dot: 'bg-blue-400' },
};

export default function ProductDetailClient({ product: initialProduct }) {
  const [product, setProduct] = useState(initialProduct);
  const [selectedColor, setSelectedColor] = useState(0);
  const [showAllSpecs, setShowAllSpecs] = useState(false);

  // Load admin-edited version from localStorage if available
  useEffect(() => {
    const stored = localStorage.getItem('revoo_products');
    if (stored) {
      const products = JSON.parse(stored);
      const found = products.find((p) => p.slug === initialProduct.slug);
      if (found) setProduct(found);
    }
  }, [initialProduct.slug]);

  const status = statusConfig[product.status] || statusConfig['in-stock'];

  const waMessage = encodeURIComponent(
    `Hello! I am interested in the *${product.name}* (${product.price}). Please share availability and booking details.`
  );

  const allSpecs = [
    { key: 'range',            label: 'Range',              icon: Zap },
    { key: 'speed',            label: 'Top Speed',          icon: Gauge },
    { key: 'motor',            label: 'Motor',              icon: Wrench },
    { key: 'battery',          label: 'Battery',            icon: Battery },
    { key: 'chargingTime',     label: 'Charging Time',      icon: Clock },
    { key: 'unitPerCharge',    label: 'Unit Per Charge',    icon: Plug },
    { key: 'groundClearance',  label: 'Ground Clearance',   icon: ArrowUpDown },
    { key: 'weight',           label: 'Weight',             icon: Weight },
    { key: 'warranty',         label: 'Battery Warranty',   icon: Shield },
    { key: 'motorWarranty',    label: 'Motor Warranty',     icon: Shield },
  ].filter((s) => product[s.key] && product[s.key] !== 'N/A' && product[s.key] !== '');

  const visibleSpecs = showAllSpecs ? allSpecs : allSpecs.slice(0, 6);

  return (
    <div className="page-enter min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/45 hover:text-green-400 text-sm mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Scooters
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* ─── Gallery ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <ProductGallery images={product.images} name={product.name} />
          </motion.div>

          {/* ─── Info ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${status.className}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`} />
                {status.label}
              </span>
              {product.badge && (
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-green-500/15 text-green-400 border border-green-500/25">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Name */}
            <div>
              <h1 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-white/50 text-base leading-relaxed">{product.tagline}</p>
            </div>

            {/* Price card */}
            <div className="flex items-center justify-between p-5 glass border border-green-500/15 rounded-2xl bg-green-500/4">
              <div>
                <p className="text-white/40 text-xs mb-1">Starting Price</p>
                <p className="font-display font-black text-4xl gradient-text">{product.price}</p>
              </div>
              <div className="text-right">
                <p className="text-white/40 text-xs mb-1">Stock</p>
                <p className="font-semibold text-white text-sm">
                  {product.quantity > 0 ? `${product.quantity} units` : '—'}
                </p>
              </div>
            </div>

            {/* Quick spec pills */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Zap,     label: 'Range',     value: product.range },
                { icon: Gauge,   label: 'Top Speed', value: product.speed },
                { icon: Battery, label: 'Battery',   value: product.battery?.split(' ').slice(0, 2).join(' ') },
                { icon: Clock,   label: 'Charge',    value: product.chargingTime },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3 p-3.5 glass border border-white/8 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-green-500/12 flex items-center justify-center shrink-0">
                    <s.icon className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/40 text-xs truncate">{s.label}</p>
                    <p className="text-white text-sm font-semibold truncate">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Color Swatches */}
            {product.colors?.length > 0 && (
              <div>
                <p className="text-white/50 text-sm mb-3">
                  Color:{' '}
                  <span className="text-white font-semibold">{product.colorNames?.[selectedColor] || product.colors[selectedColor]}</span>
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      title={product.colorNames?.[i]}
                      className={`w-9 h-9 rounded-full border-[3px] transition-all duration-200 ${
                        selectedColor === i
                          ? 'border-green-400 scale-110 shadow-[0_0_16px_rgba(34,197,94,0.5)]'
                          : 'border-white/20 hover:border-white/50 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Stock info row */}
            <div className="flex items-center gap-2 text-sm">
              <Package className="w-4 h-4 text-white/35" />
              {product.quantity > 0 ? (
                <span className="text-white/50">
                  <span className="text-white font-medium">{product.quantity}</span> units available
                </span>
              ) : product.status === 'coming-soon' ? (
                <span className="text-blue-400">Launching Soon — Register your interest below</span>
              ) : (
                <span className="text-red-400">Currently Out of Stock — Join the waitlist</span>
              )}
            </div>

            {/* Warranty row */}
            <div className="flex items-start gap-2 text-sm p-3.5 glass border border-white/8 rounded-xl">
              <Shield className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
              <div>
                <span className="text-white/50">Warranty: </span>
                <span className="text-white font-medium">{product.warranty}</span>
                {product.motorWarranty && product.motorWarranty !== 'N/A' && (
                  <span className="text-white/50"> · Motor: <span className="text-white font-medium">{product.motorWarranty}</span></span>
                )}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/923008603898?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20c060] text-white font-bold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.535 5.845L.057 23.48l5.804-1.524A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.876 0-3.636-.49-5.163-1.348l-.369-.218-3.444.904.92-3.353-.239-.387A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </a>

            <Link href="/contact" className="w-full btn-outline justify-center py-3.5">
              Contact for Booking
            </Link>
          </motion.div>
        </div>

        {/* ─── Full Specifications Table ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-3xl text-white">
              Full <span className="gradient-text">Specifications</span>
            </h2>
            <span className="text-white/30 text-sm">{product.name}</span>
          </div>

          <div className="glass border border-white/8 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-green-500/5 border-b border-white/8">
                    <th className="text-left px-6 py-4 text-white/50 text-xs font-semibold uppercase tracking-wider w-2/5">
                      Specification
                    </th>
                    <th className="text-left px-6 py-4 text-white/50 text-xs font-semibold uppercase tracking-wider">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visibleSpecs.map(({ key, label, icon: Icon }, i) => (
                    <tr
                      key={key}
                      className={`border-b border-white/5 hover:bg-white/3 transition-colors ${
                        i % 2 === 0 ? 'bg-white/[0.015]' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-green-500/8 flex items-center justify-center shrink-0">
                            <Icon className="w-3.5 h-3.5 text-green-500/70" />
                          </div>
                          <span className="text-white/60 text-sm font-medium">{label}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-white text-sm font-semibold">{product[key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {allSpecs.length > 6 && (
              <div className="px-6 py-4 border-t border-white/5 bg-white/[0.01]">
                <button
                  onClick={() => setShowAllSpecs(!showAllSpecs)}
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                >
                  {showAllSpecs ? (
                    <><ChevronUp className="w-4 h-4" /> Show Less</>
                  ) : (
                    <><ChevronDown className="w-4 h-4" /> Show All {allSpecs.length} Specifications</>
                  )}
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* ─── Spec Sheet Banner ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <div className="glass border border-white/8 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/6 flex items-center justify-between">
              <h3 className="font-display font-semibold text-white text-sm">Official REVOO Model Comparison Chart</h3>
              <span className="text-white/30 text-xs">All 11 Models</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              width={1200}
              height={800}
              src={RevooImage.src}  
              alt="REVOO Pakistan official product comparison spec sheet"
              className="w-full object-contain"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
