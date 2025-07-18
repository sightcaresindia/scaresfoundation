import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Cimg1 from '/public/images/causes/camp1.jpg';
import Cimg2 from '/public/images/causes/camp2.jpg';
import Cimg3 from '/public/images/causes/camp3.jpg';
import Cimg4 from '/public/images/causes/camp4.jpg';

export default function CategoriesWithPosts() {
  const categories = [
    {
      id: 1,
      name: "Campaigns 1",
      posts: [
        { id: 101, title: "Lorem Ipsum is simply", image : Cimg1, docomunt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 102, title: "Lorem Ipsum is simply", image : Cimg2, docomunt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", progress: 55, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 103, title: "Lorem Ipsum is simply", image : Cimg3, docomunt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", progress: 55, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
      ],
    },
    {
      id: 2,
      name: "Campaigns 2",
      posts: [
        { id: 201, title: "Lorem Ipsum is simply", image : Cimg4, docomunt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 202, title: "Lorem Ipsum is simply", image : Cimg2, docomunt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 203, title: "Lorem Ipsum is simply", image : Cimg1, docomunt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
      ],
    },
    {
      id: 3,
      name: "Campaigns 3",
      posts: [
        { id: 301, title: "Lorem Ipsum is simply", image : Cimg1, docomunt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 302, title: "Lorem Ipsum is simply", image : Cimg2, docomunt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 303, title: "Lorem Ipsum is simply", image : Cimg3, docomunt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
      ],
    },
    {
      id: 4,
      name: "Campaigns 4",
      posts: [
        { id: 401, title: "Healthy Eating Tips", image : Cimg4, docomunt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 402, title: "Mental Wellness", image : Cimg1, docomunt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 403, title: "Mental Wellness", image : Cimg2, docomunt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section className='section-padding service-section-s5 pt-5'>
    <div className="container mb-4">
        <div className="row align-items-center pb-5">
            <div className="col-lg-12 col-12">
                <div className="section-title text-center">
                    <h2>Our <span>Campaigns</span></h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-4">
      <ul className="nav nav-pills nav-justified">
        {categories.map((cat) => (
          <li className="nav-item" key={cat.id}>
            <button
              className={`nav-link ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content mt-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`tab-pane fade ${activeTab === cat.id ? 'show active' : ''}`}
          >
            <div className='row'>
              {cat.posts.map((post) => (
                <div key={post.id} className='col-md-4'>
                  <div className="causes-card">
                      <div className="image">
                          <Image src={post.image} alt="" />
                      </div>
                      <div className="text">
                          <h2><Link href="#">{post.title}</Link></h2>
                          <p>{post.docomunt}</p>
                      </div>
                      <div className="progress-wrap">
                          <div className="progress-item">
                              <div className="progress">
                                  <div className="bar" style={{ width: `${post.progress}%` }}>
                                      <span className="cssProgress-label">{post.progress}%</span>
                                  </div>
                              </div>
                          </div>
                          <ul>
                              <li>
                                  <span className="title">Goal:</span>
                                  <span>₹{post.goal}</span>
                              </li>
                              <li>
                                  <span className="title">Raised:</span>
                                  <span>₹{post.raised}</span>
                              </li>
                              <li>
                                  <span className="title">Goal:</span>
                                  <span>₹{post.targetGoal}</span>
                              </li>
                          </ul>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
