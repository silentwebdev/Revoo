'use client';
import Link from 'next/link';
import { Zap, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[#060609]">
      {/* Top gradient line */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                <Zap className="w-5 h-5 text-black" fill="black" />
              </div>
              <span className="gradient-text font-display font-extrabold text-xl">REVOO</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Pakistan&apos;s premier electric scooter brand. Redefining urban mobility with cutting-edge technology and premium design.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-500/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-2 text-white/50 hover:text-green-400 text-sm transition-all duration-200 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>123 Tech Hub, Blue Area, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="w-4 h-4 text-green-500 shrink-0" />
                <a href="tel:+923000000000" className="hover:text-green-400 transition-colors">+92 300 0000000</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="w-4 h-4 text-green-500 shrink-0" />
                <a href="mailto:info@revoo.pk" className="hover:text-green-400 transition-colors">info@revoo.pk</a>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Get in Touch</h4>
            <p className="text-white/50 text-sm mb-4">Have questions? Chat with us on WhatsApp for instant support.</p>
            <a
              href="https://wa.me/923008603898?text=Hello, I am interested in REVOO electric scooters."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 text-sm font-medium hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.535 5.845L.057 23.48l5.804-1.524A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.876 0-3.636-.49-5.163-1.348l-.369-.218-3.444.904.92-3.353-.239-.387A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="section-divider mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© 2025 REVOO Pakistan. All rights reserved.</p>
          <p>Crafted with passion for electric mobility 🔋</p>
        </div>
      </div>
    </footer>
  );
}
