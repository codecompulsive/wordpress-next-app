// app/tours/page.js
import { getPageBySlug } from '@/lib/wordpress';
import { notFound } from 'next/navigation';



export default async function ToursPage() {
  // Fetch both the tours page and the site-footer page from WordPress
  const [page, footerPage] = await Promise.all([
    getPageBySlug('tours'),
    getPageBySlug('site-footer'), // Change this to whatever your WP footer slug is
  ]);

  // If the tours page doesn't exist in WP yet, throw a 404
  if (!page) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="max-w-4xl mx-auto p-6 w-full">
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

      {/* WordPress Footer Content */}
      {footerPage && (
        <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-8 px-6 w-full">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose max-w-none text-gray-700 space-y-4"
              dangerouslySetInnerHTML={{ __html: footerPage.content.rendered }}
            />
          </div>
        </footer>
      )}
    </div>
  );
}