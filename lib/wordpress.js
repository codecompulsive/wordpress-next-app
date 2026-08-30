// lib/wordpress.js

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL;

export async function getAllPosts() {
  if (!API_URL) {
    throw new Error("CRITICAL: NEXT_PUBLIC_WORDPRESS_URL is missing or undefined! Check your .env.local file.");
  }

  const res = await fetch(`${API_URL}/wp-json/wp/v2/posts?_embed`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch posts from WordPress. Status: ${res.status}`);
  }

  const posts = await res.json();
  return posts;
}






// get page.
export async function getPageBySlug(slug) {
  if (!API_URL) {
    throw new Error("CRITICAL: NEXT_PUBLIC_WORDPRESS_URL is missing!");
  }

  // WordPress pages endpoint filtered by slug
  const res = await fetch(`${API_URL}/wp-json/wp/v2/pages?slug=${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch page: ${slug}`);
  }

  const pages = await res.json();
  
  // WordPress returns an array of matches, so we grab the first one
  return pages.length > 0 ? pages[0] : null;
}