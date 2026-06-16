import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with REVOO Pakistan. Contact us for queries, test rides, dealer inquiries, and support.',
};

const contactInfo = [
  { icon: MapPin,  label: 'Address',       value: 'Kallur Kot, Punjab, Pakistan' },
  { icon: Phone,   label: 'Phone',         value: '+92 300 0000000', href: 'tel:+923000000000' },
  { icon: Mail,    label: 'Email',         value: 'info@revoo.pk',   href: 'mailto:info@revoo.pk' },
  { icon: Clock,   label: 'Working Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM' },
];

export default function ContactPage() {
  return (
    <div className="page-enter min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-medium tracking-wider uppercase mb-3 block">✦ Get In Touch</span>
          <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4">
            Contact <span className="gradient-text">REVOO</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Have a question about a model? Want to book a test ride? We&apos;re here to help.
          </p>
        </div>

        {/* Main Grid: Sidebar + Map */}
        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12">

          {/* ── Sidebar (2 cols) ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* WhatsApp */}
            <a
              href="https://wa.me/923008603898?text=Hello, I need help with REVOO scooters."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/25 hover:bg-[#25D366]/18 hover:border-[#25D366]/45 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center group-hover:bg-[#25D366]/25 transition-colors shrink-0">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">WhatsApp Support</p>
                <p className="text-white/45 text-xs mt-0.5">Chat instantly — fastest response</p>
              </div>
            </a>

            {/* Contact Details */}
            <div className="glass border border-white/8 rounded-2xl p-5 space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="text-white text-sm hover:text-green-400 transition-colors">{value}</a>
                      : <p className="text-white text-sm">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Directions button */}
            <a
              href="https://www.google.com/maps/place/Revoo+Electric+bike+kallur+kot/@32.1570208,71.2687126,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-2xl border border-green-500/30 bg-green-500/8 hover:bg-green-500/15 hover:border-green-500/50 transition-all duration-300 text-green-400 text-sm font-medium"
            >
              <MapPin className="w-4 h-4" />
              Get Directions on Google Maps
            </a>
          </div>

          {/* ── Map (3 cols) ── */}
          <div className="lg:col-span-3">
            <div className="glass border border-white/8 rounded-2xl overflow-hidden w-full h-full min-h-[450px] lg:min-h-[500px]">
              <iframe
                title="REVOO Pakistan Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.5!2d71.2687126!3d32.1570208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3926f7dbf8534f1f%3A0x657d53756a48b771!2sRevoo%20Electric%20bike%20kallur%20kot!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}