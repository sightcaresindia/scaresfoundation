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
      name: "Awareness & Advocacy",
      posts: [
        { id: 101, title: "Let Awareness Turn into Action.", image : Cimg1, docomunt: "Anil runs a small tea stall. Over the past year, he had noticed a fogginess in his vision but assumed it was due to fatigue or old age. He ignored it until one of our awareness sessions reached his neighbourhood.", progress: 25, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai"  },
        { id: 102, title: "Give Sunita her sight back", image : Cimg2, docomunt: "Sunita is a mother of three who works as a daily wage tailor. During our weekly mobile eye health camp in Narela, she walked in with complaints of headaches and blurred vision. After a check-up, she was diagnosed with progressive cataracts in both eyes.", progress: 55, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 103, title: "Help Preeti See Her Dreams", image : Cimg3, docomunt: "Preeti is a cheerful schoolgirl who suddenly started struggling to read and write. Her father brought her to one of our camps after a local volunteer encouraged them to do so.", progress: 55, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
      ],
    },
    {
      id: 2,
      name: "Eye Health Camps",
      posts: [
        { id: 201, title: "Help Preeti See Her Dreams", image : Cimg4, docomunt: "Preeti is a cheerful schoolgirl who suddenly started struggling to read and write. Her father brought her to one of our camps after a local volunteer encouraged them to do so.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 202, title: "Give Sunita her sight back", image : Cimg2, docomunt: "Sunita is a mother of three who works as a daily wage tailor. During our weekly mobile eye health camp in Narela, she walked in with complaints of headaches and blurred vision. After a check-up, she was diagnosed with progressive cataracts in both eyes.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 203, title: "Give Mohan the confidence he needs.", image : Cimg1, docomunt: "Mohan has lost most of his vision due to untreated glaucoma.on loss. During our follow-up camp, our doctors confirmed that he requires a white cane, a speech-enabled watch, and low-vision glasses for partial vision loss.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
      ],
    },
    {
      id: 3,
      name: "Subsidised Surgeries",
      posts: [
        { id: 301, title: "Let Awareness Turn into Action.", image : Cimg1, docomunt: "Anil runs a small tea stall. Over the past year, he had noticed a fogginess in his vision but assumed it was due to fatigue or old age. He ignored it until one of our awareness sessions reached his neighbourhood.", progress: 25, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 302, title: "Give Mohan the confidence he needs.", image : Cimg2, docomunt: "Mohan has lost most of his vision due to untreated glaucoma.on loss. During our follow-up camp, our doctors confirmed that he requires a white cane, a speech-enabled watch, and low-vision glasses for partial vision loss.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 303, title: "Give Sunita her sight back", image : Cimg3, docomunt: "Sunita is a mother of three who works as a daily wage tailor. During our weekly mobile eye health camp in Narela, she walked in with complaints of headaches and blurred vision. After a check-up, she was diagnosed with progressive cataracts in both eyes.", progress: 10, goal: 5000, raised: 5000, targetGoal: 250000, slug: "latest-in-ai" },
      ],
    },
    {
      id: 4,
      name: "Medicines & Assistive Devices",
      posts: [
        { id: 401, title: "Let Awareness Turn into Action.", image : Cimg4, docomunt: "Anil runs a small tea stall. Over the past year, he had noticed a fogginess in his vision but assumed it was due to fatigue or old age. He ignored it until one of our awareness sessions reached his neighbourhood.", progress: 25, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 402, title: "Help Preeti See Her Dreams", image : Cimg1, docomunt: "Preeti is a cheerful schoolgirl who suddenly started struggling to read and write. Her father brought her to one of our camps after a local volunteer encouraged them to do so.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
        { id: 403, title: "Give Mohan the confidence he needs.", image : Cimg2, docomunt: "Mohan has lost most of his vision due to untreated glaucoma.on loss. During our follow-up camp, our doctors confirmed that he requires a white cane, a speech-enabled watch, and low-vision glasses for partial vision loss.", progress: 75, goal: 5000, raised: 3750, targetGoal: 10000, slug: "latest-in-ai" },
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
