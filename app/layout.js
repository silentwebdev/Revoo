import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFAB from '../components/WhatsAppFAB';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: {
    default: 'REVOO Pakistan | Premium Electric Scooters',
    template: '%s | REVOO Pakistan',
  },
  description:
    'Discover Pakistan\'s most premium electric scooters. Experience the future of urban mobility with REVOO — powerful, stylish, and eco-friendly electric scooters.',
  keywords: [
    'electric scooter Pakistan',
    'REVOO',
    'electric bike Pakistan',
    'best electric scooter',
    'eco friendly scooter',
    'premium electric scooter',
  ],
  openGraph: {
    title: 'REVOO Pakistan | Premium Electric Scooters',
    description: 'Experience the future of urban mobility with REVOO electric scooters.',
    type: 'website',
    locale: 'en_PK',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#080810] text-white antialiased font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
