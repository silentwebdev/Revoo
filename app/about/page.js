import { Zap, Target, Eye, Award, Leaf, Cpu } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Learn about REVOO Pakistan — our story, mission, vision, and commitment to electric mobility.',
};

const timeline = [
  { year: '2020', title: 'Founded', desc: 'REVOO was born with a single mission: bring world-class electric scooters to Pakistan.' },
  { year: '2021', title: 'First Launch', desc: 'Launched our first 3 models to overwhelming demand across major Pakistani cities.' },
  { year: '2022', title: 'Nationwide Expansion', desc: 'Expanded to 30+ service centers and 50+ dealer outlets across Pakistan.' },
  { year: '2023', title: '5000+ Riders', desc: 'Crossed the milestone of 5,000 happy REVOO riders on Pakistan\'s roads.' },
  { year: '2024', title: 'New Flagship Models', desc: 'Introduced the B12 and E52 flagship models with industry-leading specs.' },
  { year: '2025', title: 'Future Forward', desc: 'Continuing to innovate with fast-charge LFP technology and smart connectivity.' },
];

const values = [
  { icon: Zap,   title: 'Performance',   desc: 'Every watt optimized. Every component engineered for maximum output and efficiency.' },
  { icon: Leaf,  title: 'Sustainability', desc: 'Zero emissions, 100% electric — protecting Pakistan\'s environment for future generations.' },
  { icon: Award, title: 'Quality',        desc: 'PSQCA certified, rigorous QC testing, and premium materials in every scooter we build.' },
  { icon: Cpu,   title: 'Innovation',     desc: 'From graphene batteries to LFP fast-charge — we stay ahead of the technology curve.' },
];

export default function AboutPage() {
  return (
    <div className="page-enter min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Header */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-green-400 text-sm font-medium tracking-wider uppercase mb-3 block">✦ Our Story</span>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Driving Pakistan&apos;s<br />
            <span className="gradient-text">Electric Future</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl mx-auto leading-relaxed">
            REVOO was founded to solve a simple problem — Pakistan deserved world-class electric mobility.
            Five years later, we&apos;re the nation&apos;s most trusted electric scooter brand.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {[
            {
              icon: Target,
              label: 'Our Mission',
              title: 'Make Electric Mobility Accessible',
              desc: 'To provide every Pakistani with a premium, affordable, and reliable electric scooter that reduces fuel costs, cuts emissions, and delivers an unmatched riding experience.',
              gradient: 'from-green-500/15 to-green-500/5',
              border: 'border-green-500/20',
            },
            {
              icon: Eye,
              label: 'Our Vision',
              title: 'A Greener Pakistan by 2030',
              desc: 'We envision a Pakistan where every city street is filled with clean, silent, electric vehicles — where REVOO is synonymous with sustainable urban mobility.',
              gradient: 'from-blue-500/15 to-blue-500/5',
              border: 'border-blue-500/20',
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${item.gradient} border ${item.border} overflow-hidden transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/2 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/8 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">{item.label}</span>
                <h2 className="font-display font-bold text-2xl text-white mb-3">{item.title}</h2>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-green-400 text-sm font-medium tracking-wider uppercase mb-3 block">✦ What We Stand For</span>
            <h2 className="font-display font-bold text-4xl text-white">Our Core <span className="gradient-text">Values</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="glass border border-white/8 rounded-2xl p-6 hover:border-green-500/25 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                  <v.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-green-400 text-sm font-medium tracking-wider uppercase mb-3 block">✦ Scooter Technology</span>
            <h2 className="font-display font-bold text-4xl text-white">
              What Makes REVOO <span className="gradient-text">Different</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Graphene Batteries', desc: 'Our Graphene battery cells deliver superior energy density, longer cycle life, and stable performance in Pakistan\'s extreme temperatures.', tag: 'Standard Models' },
              { title: 'LFP Technology', desc: 'Lithium Iron Phosphate batteries offer fast charging (3-3.5 hrs), longer lifespan (2000+ cycles), and are 20–26% lighter than conventional batteries.', tag: 'LFP Models' },
              { title: 'BLDC Motors', desc: 'Brushless DC motors from 350W to 3000W deliver instant torque, near-zero maintenance, and whisper-quiet operation on every ride.', tag: 'All Models' },
            ].map((tech) => (
              <div
                key={tech.title}
                className="glass border border-white/8 rounded-2xl p-6 hover:border-green-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="inline-block px-2.5 py-1 rounded-full bg-green-500/12 border border-green-500/20 text-green-400 text-xs font-medium mb-4">{tech.tag}</span>
                <h3 className="font-display font-bold text-lg text-white mb-2">{tech.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-green-400 text-sm font-medium tracking-wider uppercase mb-3 block">✦ Our Journey</span>
            <h2 className="font-display font-bold text-4xl text-white">How We <span className="gradient-text">Got Here</span></h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-green-500/20 to-transparent hidden sm:block" />
            <div className="space-y-6">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="relative sm:pl-16 flex items-start gap-4 group"
                >
                  {/* Dot */}
                  <div className="hidden sm:flex absolute left-0 w-12 h-12 rounded-full bg-green-500/12 border border-green-500/30 items-center justify-center shrink-0">
                    <span className="text-green-400 text-xs font-bold">{item.year.slice(2)}</span>
                  </div>
                  <div className="glass border border-white/8 rounded-2xl p-5 flex-1 hover:border-green-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-green-400 font-display font-bold text-sm">{item.year}</span>
                      <span className="w-px h-3 bg-white/20" />
                      <span className="font-display font-bold text-white text-sm">{item.title}</span>
                    </div>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Warranty Info */}
        <div className="glass border border-green-500/20 rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-br from-green-500/8 to-transparent">
          <Award className="w-12 h-12 text-green-400 mx-auto mb-5" />
          <h2 className="font-display font-bold text-3xl text-white mb-4">Industry-Leading Warranty</h2>
          <p className="text-white/55 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Every REVOO scooter comes backed by our comprehensive warranty — giving you total peace of mind from day one.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Graphene Models', value: '12–24 Months', sub: 'Battery Warranty' },
              { label: 'LFP Models',      value: '36 Months',    sub: 'Battery Warranty' },
              { label: 'Motor (B12)',     value: '24 Months',    sub: 'Motor Warranty' },
            ].map((w) => (
              <div key={w.label} className="bg-white/5 rounded-2xl p-4">
                <p className="text-white/45 text-xs mb-1">{w.label}</p>
                <p className="font-display font-bold text-xl gradient-text">{w.value}</p>
                <p className="text-white/40 text-xs mt-1">{w.sub}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}