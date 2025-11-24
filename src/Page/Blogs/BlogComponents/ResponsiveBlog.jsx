import React, { useState, useMemo } from 'react';
import SectionHeading from '../../../Components/SharedComponents/SectionHeading';

// CloughShopBlogWithImages.jsx
// React + Tailwind responsive blog page for "Clough Shop" with images
// - Uses remote image URLs (Unsplash) for demo — replace with your own assets
// - Responsive grid, featured area, modal reader, search & categories

const POSTS = [
  {
    id: 1,
    title: 'Top 10 Cozy Picks for Winter 2025',
    excerpt: 'Curated selection of warm throws, candles and seasonal decor from Clough Shop.',
    content:
      'Winter is here — and we rounded up our best-selling cozy items that keep your home warm and stylish. From chunky knit throws to soy candles, each item was chosen for comfort and durability.',
    date: '2025-11-01',
    categories: ['Eggs', 'Clothes'],
    featured: true,
    "image": "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/34_1.jpg"
  },
  {
    id: 2,
    title: 'How to Style a Minimal Shelf with Clough Finds',
    excerpt: 'Simple steps to turn any shelf into a design statement using small, affordable pieces.',
    content:
      'Start with a base layer of books, add textures with ceramics, and finish with greenery. We show examples using products from Clough Shop that are under $30.',
    date: '2025-10-15',
    categories: ['Clothes', 'Watches'],
    "image": "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/35_2.jpg"
  },
  {
    id: 3,
    title: 'Gift Guide: Home Gifts That Actually Get Used',
    excerpt: 'Practical, beautiful, and affordable — gift ideas from Clough Shop for friends and family.',
    content:
      'We focused on items that are both functional and beautiful: reusable kitchen tools, linen napkins, and curated mug sets. Learn how to wrap them for a great unboxing experience.',
    date: '2025-09-20',
    categories: ['Dresses'],
    "image": "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/32_1.jpg"
  },
  {
    id: 4,
    title: 'Small Table Styling Tips',
    excerpt: 'Make the most of a small table with layered styling and practical accents.',
    content: 'Layer textures, use a single statement object, and keep negative space for balance. Examples from Clough Shop included.',
    date: '2025-08-05',
    categories: ['Design', 'Tips'],
    "image": "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/38_1.jpg"
  },
  {
    id: 5,
    title: 'Caring for Natural Fiber Textiles',
    excerpt: 'How to wash and maintain linen and cotton pieces so they last longer.',
    content: 'Natural fibers need gentle care. We recommend cold washes, air-dry, and avoiding harsh bleaches. Read our full care guide.',
    date: '2025-06-30',
    categories: ['Dresses', 'Watches'],
    "image": "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/54_1.jpg"
  },
  {
    id: 6,
    title: 'Everyday Kitchen Tools We Love',
    excerpt: 'Small, useful kitchen items that make daily cooking easier and more enjoyable.',
    content: 'From wooden spoons to quality peelers, the right tools speed up prep. See our favorites from Clough Shop.',
    date: '2025-05-10',
    categories: ['Clothes', 'Watches'],
    "image": "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/50_1.jpg"
  }
];

const CategoryPill = ({ label, active, onClick }) => (
  <button
    onClick={() => onClick(label === active ? null : label)}
    className={`text-sm px-3 py-1 rounded-full border ${active === label ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-gray-700 border-gray-200'} hover:opacity-90 transition`}
  >
    {label}
  </button>
);

const PostCard = ({ post, onOpen }) => (
  <article className="bg-white rounded-lg shadow-sm border hover:shadow-md transition overflow-hidden">
    <div className="h-44 sm:h-48 w-full overflow-hidden">
      <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover" />
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between mb-3">
        <time className="text-xs text-gray-400">{post.date}</time>
        <div className="flex gap-2">
          {post.categories.map((c) => (
            <span key={c} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{c}</span>
          ))}
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>

      <div className="flex items-center gap-3">
        <button onClick={() => onOpen(post)} className="text-sm font-medium text-emerald-600 hover:underline">Read more</button>
        <button className="ml-auto text-xs px-3 py-1 rounded-md border text-gray-600">Save</button>
      </div>
    </div>
  </article>
);

export default function CloughShopBlogWithImages() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(null);
  const [page, setPage] = useState(1);
  const perPage = 6;
  const [openPost, setOpenPost] = useState(null);

  const categories = useMemo(() => {
    const s = new Set();
    POSTS.forEach((p) => p.categories.forEach((c) => s.add(c)));
    return Array.from(s);
  }, []);

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const matchesQuery = (p.title + ' ' + p.excerpt + ' ' + p.content).toLowerCase().includes(query.toLowerCase());
      const matchesCat = category ? p.categories.includes(category) : true;
      return matchesQuery && matchesCat;
    });
  }, [query, category]);

  const featured = POSTS.filter((p) => p.featured);
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  const goto = (n) => setPage(Math.min(Math.max(1, n), totalPages));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-24">
      <header className="max-w-6xl mx-auto mb-10 text-center">
        <div className="inline-block px-4 py-1 bg-black text-white rounded-full text-sm font-semibold">Clough Shop</div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold">Clough Shop Journal</h1>
        <p className="mt-2 text-gray-600">Stories, styling tips, and product highlights from Clough — home essentials with a warm heart.</p>
      </header>

      {featured.length > 0 && (
        <section className="max-w-6xl mx-auto mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((p) => (
              <div key={p.id} className="rounded-lg overflow-hidden bg-white shadow flex">
                <div className="p-6 flex-1">
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-gray-600">{p.excerpt}</p>
                  <div className="mt-4">
                    <button onClick={() => setOpenPost(p)} className="text-emerald-600 font-medium">Read story</button>
                  </div>
                </div>
                <div className="hidden md:block w-1/3">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto mb-6 flex flex-col md:flex-row gap-4 items-center md:items-stretch">
        <div className="flex-1">
          <input
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
            placeholder="Search Clough posts..."
            className="w-full py-3 px-4 rounded-md border border-gray-200 focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <button onClick={() => { setCategory(null); setPage(1); }} className={`px-3 py-2 rounded-md border ${category === null ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-gray-700 border-gray-200'}`}>All</button>
          {categories.map((c) => (
            <CategoryPill key={c} label={c} active={category} onClick={(val) => { setCategory(val); setPage(1); }} />
          ))}
        </div>
      </section>

      <main className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {visible.map((p) => (
          <PostCard key={p.id} post={p} onOpen={(post) => setOpenPost(post)} />
        ))}

        {visible.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">No posts found for your search.</div>
        )}
      </main>

      <footer className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">Showing {filtered.length === 0 ? 0 : (page-1)*perPage + 1} - {Math.min(page*perPage, filtered.length)} of {filtered.length} posts</div>
        <div className="flex items-center gap-2">
          <button onClick={() => goto(page-1)} disabled={page===1} className="px-3 py-2 rounded-md border disabled:opacity-60">Prev</button>
          <div className="hidden sm:flex items-center gap-1">
            {Array.from({length: totalPages}).map((_, i) => (
              <button key={i} onClick={() => goto(i+1)} className={`w-8 h-8 rounded-md ${page===i+1 ? 'bg-emerald-600 text-white' : 'bg-white border'}`}>{i+1}</button>
            ))}
          </div>
          <button onClick={() => goto(page+1)} disabled={page===totalPages} className="px-3 py-2 rounded-md border disabled:opacity-60">Next</button>
        </div>

        <div className="w-full md:w-1/3">
          <form onSubmit={(e) => { e.preventDefault(); alert('Thanks — subscribed to Clough Shop newsletter (demo)'); }} className="flex gap-2">
            <input type="email" required placeholder="Your email" className="w-full py-2 px-3 rounded-md border border-gray-200" />
            <button type="submit" className="px-4 py-2 rounded-md bg-emerald-600 text-white">Subscribe</button>
          </form>
        </div>
      </footer>

      {openPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpenPost(null)}></div>
          <article className="relative max-w-3xl w-full bg-white rounded-lg shadow-lg z-10 overflow-auto max-h-[90vh]">
            <header className="p-6 border-b flex items-start gap-4">
              <div className="w-full">
                <h2 className="text-2xl font-semibold">{openPost.title}</h2>
                <time className="text-sm text-gray-400">{openPost.date}</time>
              </div>
              <button onClick={() => setOpenPost(null)} className="ml-auto text-gray-500">Close</button>
            </header>
            <div className="p-6 text-gray-700 leading-relaxed">
              <img src={openPost.image} alt={openPost.title} className="w-full h-64 object-cover rounded-md mb-4" />
              <p className="mb-4">{openPost.content}</p>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Categories</h4>
                <div className="flex gap-2 flex-wrap">
                  {openPost.categories.map((t) => <span key={t} className="text-sm bg-gray-100 px-2 py-1 rounded-full">{t}</span>)}
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
