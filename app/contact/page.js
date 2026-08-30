// app/tours/page.js
import { getPageBySlug } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

export default async function ContactPage() {
  const page = await getPageBySlug('contact');

  if (!page) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Dynamic Title from WordPress */}
      <h1 
        suppressHydrationWarning
        className="text-4xl font-bold mb-6 text-gray-900"
        dangerouslySetInnerHTML={{ __html: page.title.rendered }}
      />

      {/* Dynamic Content / Body text from WordPress */}
      <div 
        suppressHydrationWarning
        className="prose max-w-none text-gray-700 space-y-4"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </main>
  );
}