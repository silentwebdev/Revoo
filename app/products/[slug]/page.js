import products from '../../../data/products';
import ProductDetailClient from './ProductDetailClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | REVOO Pakistan`,
    description: `${product.name} — ${product.tagline}. Range: ${product.range}, Top Speed: ${product.speed}. Price: ${product.price}.`,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  return <ProductDetailClient product={product} />;
}