'use client'

import React, { use, useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";
import { usePathname } from "next/navigation";


const BlogCategoryList = ({ hclass, categoryData }) => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 12;

    const pathname = usePathname();
    const slug = pathname.split('/').pop() ?? '';

    useEffect(() => {
        const fetchBlogs = async () => {
            try{
                const params = new URLSearchParams({page, limit}).toString();
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogByCategory/${slug}?${params}`);
                if(!res.ok){
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const result = await res.json();
                setBlogs(result.data || []);
                setTotal(result.total || 0);
            } catch (error) {
                console.error('Error fetching Blogs:', error);
            }
        }

        fetchBlogs();
    }, [page]);

    const formatDate = (dateString) => {
        if (!dateString) return "";
        let s = String(dateString).trim();
        // Convert 'YYYY-MM-DD HH:MM:SS' to 'YYYY-MM-DDTHH:MM:SS' so Date parses reliably
        if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(s)) {
        s = s.replace(" ", "T");
        }
        // Some APIs may return only date part 'YYYY-MM-DD' which is OK for Date
        const date = new Date(s);
        if (isNaN(date)) return "";
        // Use day-month-year like '25 Oct 2025'
        return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        }).format(date);
    };


    return(
        <section className={hclass}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className='col col-lg-12 col-md-12 col-sm-12'>
                        <div className='category-description text-center mb-4'>
                            <h1>{categoryData.name? categoryData.name : ""}</h1>
                            {categoryData.description ? (
                                <div dangerouslySetInnerHTML={{ __html: categoryData.description }}></div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col col-lg-12 col-md-12 col-sm-12 mt-4" >
                        <div className='row'>
                        {blogs && blogs.map((blog) => (
                            <div key={blog.id} className='col-md-4 mb-4'>
                                <div className="blog-card">
                                    <div className="image">
                                        <Link href={`/blog/${blog.slug}`}>
                                            <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${blog.thumbnail}`} alt={blog.title} />
                                        </Link>
                                        {
                                            (() => {
                                            const pd = blog.post_date ? String(blog.post_date).trim() : "";
                                            // treat '0000-00-00' or '0000-00-00 00:00:00' (or variants) as invalid
                                            const isZeroDate = /^0{4}-0{2}-0{2}($|[ T])/.test(pd);
                                            const hasValidPostDate = pd !== "" && !isZeroDate;

                                            if (hasValidPostDate) {
                                                const d = formatDate(pd);
                                                return d ? (
                                                <div className='blog-card__date'>
                                                    <span>{d}</span>
                                                </div>
                                                ) : null;
                                            }

                                            if (item.created_at) {
                                                const d = formatDate(blog.created_at);
                                                return (
                                                <div className='blog-card__date'>
                                                    <span>{d || String(blog.created_at)}</span>
                                                </div>
                                                );
                                            }

                                            return null;
                                            })()
                                        }
                                    </div>
                                    <div className="text">
                                        <div className="blog-card__meta">
                                        {Array.isArray(blog.categories) && blog.categories.length > 0 ? (
                                                blog.categories
                                                .map((category, index) => (
                                                <span key={`${category.slug}-${index}`}>
                                                <Link href={`/blogs/${category.slug}`}>{category.name}</Link>
                                                {index < blog.categories.length - 2 ? ',\u00A0' : ''}
                                                
                                                </span>
                                                ))
                                        ) : "" }
                                        </div>
                                        <h3><Link href={`/blog/${blog.slug}`}>{blog.title}</Link></h3>
                                        <p>{blog.brief}</p>
                                        <Link href={`/blog/${blog.slug}`} className="blogBtn">&#x27A4; Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                        <Pagination
                            page={page}
                            total={total}
                            limit={limit}
                            onPageChange={setPage}
                        />
                    </div>
                 </div>   
            </div>
        </section>
    )
};

export default BlogCategoryList;
