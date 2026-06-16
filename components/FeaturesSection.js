'use client';
import { motion } from 'framer-motion';
import { Battery, Zap, Shield, Gauge, Wifi, Wrench } from 'lucide-react';

const features = [
  {
    icon: Battery,
    title: 'Long-Range Battery',
    description: 'Advanced Lithium-Ion cells engineered for up to 200km per charge. More miles, fewer stops.',
    color: 'from-green-500/20 to-green-500/5',
    iconColor: 'text-green-400',
  },
  {
    icon: Zap,
    title: 'High-Performance Motor',
    description: 'Powerful BLDC motors delivering instant torque and smooth acceleration from 0 to top speed.',
    color: 'from-yellow-500/20 to-yellow-500/5',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Shield,
    title: 'Industry-Leading Warranty',
    description: 'Up to 5 years of motor warranty and 3 years battery coverage — peace of mind guaranteed.',
    color: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-400',
  },
  {
    icon: Gauge,
    title: 'Top Speed Performance',
    description: 'Reach speeds of up to 120 km/h with our performance-tuned models. Built for the road.',
    color: 'from-red-500/20 to-red-500/5',
    iconColor: 'text-red-400',
  },
  {
    icon: Wifi,
    title: 'Smart Connectivity',
    description: 'Integrated digital dashboards, GPS tracking, and smartphone connectivity for modern riders.',
    color: 'from-purple-500/20 to-purple-500/5',
    iconColor: 'text-purple-400',
  },
  {
    icon: Wrench,
    title: 'Nationwide Service',
    description: 'Authorized service centers across Pakistan. Expert technicians, genuine parts, fast turnaround.',
    color: 'from-orange-500/20 to-orange-500/5',
    iconColor: 'text-orange-400',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 text-sm font-medium tracking-wider uppercase mb-3 block">
            ✦ Built Different
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Technology That
            <br />
            <span className="gradient-text">Sets Us Apart</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Every REVOO scooter is engineered with cutting-edge components to deliver an unmatched riding experience.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              {/* Content */}
              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
