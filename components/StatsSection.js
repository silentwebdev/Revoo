'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { value: 5000, suffix: '+', label: 'Happy Riders' },
  { value: 11,   suffix: '',  label: 'Scooter Models' },
  { value: 120,  suffix: 'km', label: 'Max Range' },
  { value: 98,   suffix: '%', label: 'Satisfaction Rate' },
];

function CountUp({ end, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            Trusted by Thousands Across Pakistan
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Our numbers speak for themselves — performance, reliability, and customer love.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center px-6 py-8 glass border border-white/8 rounded-2xl hover:border-green-500/20 transition-all duration-300"
            >
              <div className="font-display font-black text-5xl xl:text-6xl gradient-text mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/55 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
