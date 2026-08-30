// app/page.js
import { getAllPosts } from '@/lib/wordpress';
import Link from 'next/link'; // <-- 1. Import it <<< LINK ADDING OVA EAaaa!!



export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My WordPress + Next.js App</h1>
      
      <div className="space-y-6">
        {posts.map((post) => {
          const featuredImage = 
            post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

          return (
            <article key={post.id} className="border p-6 rounded-lg shadow-sm bg-white">
              <h2 
                className="text-2xl font-semibold mb-2 text-gray-900" 
                dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
              />
              <p className="text-gray-500 text-sm mb-4">
                Published on: {new Date(post.date).toLocaleDateString()}
              </p>

              {featuredImage && (
                <img 
                  src={featuredImage} 
                  alt={post.title.rendered} 
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}

              <div 
                className="text-gray-700 line-clamp-3 mb-4"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
              />
            </article>
          );
        })}
      </div>





         {/* 2. Add your link here <<< LINK ADDING OVA EAaaa!! */}
   <Link 
  href="/tours" 
  className="inline-block bg-blue-600 text-white font-medium px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors"
>
  View Tours &rarr;
</Link>




    </main>
  );
}