// app/page.js
import { getAllPosts, getPageBySlug } from '@/lib/wordpress';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Home() {
  // Fetch the page where the slug in WordPress is "home" (or change this to your actual WP homepage slug)
  const page = await getPageBySlug('home'); // <<<<<<<< GET CONTENT ID HERE

  // If the page doesn't exist in WP yet, throw a 404
  if (!page) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Dynamic Title from WordPress */}
      <h1 
        className="text-4xl font-bold mb-6 text-gray-900"
        dangerouslySetInnerHTML={{ __html: page.title.rendered }}
      />
      
      {/* Dynamic Content / Body text from WordPress */}
      <div 
        className="prose max-w-none text-gray-700 space-y-4"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </main>
  );
}