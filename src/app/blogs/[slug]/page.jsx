import React, { Fragment } from 'react';
import BlogCategoryPage from '@/components/Blogs/BlogCategoryPage';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function fetchBlogCategoryData(slug) {
  const res = await fetch(`${API_URL}/blog-category/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  return res.json();
}

export async function generateMetadata({ params }) {
  const categoryData = await fetchBlogCategoryData(params.slug);

  if (!categoryData) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };  
  }

  return {
    title: categoryData.meta_title || categoryData.name + 'Blogs' || 'Sight Cares India Foundation Blogs',
    description: categoryData.meta_description || `Blogs under ${categoryData.name} category.`,
    openGraph: {
      title: categoryData.meta_title || categoryData.name + 'Blogs',
      description: categoryData.meta_description || `Blogs under ${categoryData.name} category.`,
    },
  };
}



export default async function Page({ params }) {
    const categoryData = await fetchBlogCategoryData(params.slug);

    if (!categoryData) {
        return (
            <div className="container py-5">
                <h1>Category Not Found</h1>
                <p>The requested category could not be found.</p>
            </div>
        );
    }

    return (
        <Fragment>
            <BlogCategoryPage categoryData={categoryData} />
        </Fragment>
    )
};
