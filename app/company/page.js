// app/tours/page.js
import { getPageBySlug } from '@/lib/wordpress';
import { notFound } from 'next/navigation';



export default async function CompanyPage() {
  // Fetch the page where the slug in WordPress is "tours"
  const page = await getPageBySlug('company'); // <<<<<<<< GET CONTENT ID HERE

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