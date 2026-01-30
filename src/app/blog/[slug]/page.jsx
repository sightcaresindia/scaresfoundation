import BlogDetail from '@/components/Blogs/BlogDetail';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function fetchBlogData(slug) {
  const res = await fetch(`${API_URL}/blog-details/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  return res.json();
}

export async function generateMetadata({ params }) {
  const blogData = await fetchBlogData(params.slug);

  if (!blogData) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: blogData.meta_title || blogData.title,
    description: blogData.meta_description || blogData.brief,
    openGraph: {
      title: blogData.meta_title || blogData.title,
      description: blogData.meta_description || blogData.brief,
    },
  };
}

export default async function Page({ params }) {
  const blogData = await fetchBlogData(params.slug);

  if (!blogData) {
    return (
      <div className="container py-5">
        <h1>Blog Not Found</h1>
        <p>The requested blog post could not be found.</p>
      </div>
    );
  }

  return <BlogDetail blogData={blogData} />;
}