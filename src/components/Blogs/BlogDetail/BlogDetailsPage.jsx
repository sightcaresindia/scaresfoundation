'use client'

import React, { useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPage = ({ hclass, blogData }) => {
    
    return(
        <section className={hclass}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col col-lg-12 col-md-12 col-sm-12 mt-4" >
                        <div className='row'>
                            <div className="blog-single-content">
                                <div dangerouslySetInnerHTML={{ __html: blogData.content }}></div>
                            </div>
                        </div>
                    </div>
                 </div>   
            </div>
        </section>
    )
};

export default BlogDetailsPage;
