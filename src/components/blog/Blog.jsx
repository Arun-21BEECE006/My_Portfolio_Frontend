import React from "react";
import "./Blog.css";

import Image3 from "../../assets/Conference.png";
import Image2 from "../../assets/Conference-1.png";
import Image1 from "../../assets/Conference-2.png";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Conference Publications</h2>

      <div className="blog__container grid">

        <div className="blog__card">
          <div className="blog__thumb">
            {/* <a href="https://drive.google.com/file/d/148nrb_LQuCg-MTT21EF6PYxmS1xHekmH/view?usp=drive_link"><span className="blog__category">Presented Paper at ICCSICE'24</span></a>
                        <a href="https://drive.google.com/file/d/148nrb_LQuCg-MTT21EF6PYxmS1xHekmH/view?usp=drive_link"><img src={Image1} alt="" className='blog__img' /></a> */}
            <a
              href="https://drive.google.com/file/d/103kCYMFUpKjQIRFJm2-zERqgE_C0HKld/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="blog__category">
                ICATSM 2025 – Paper Presentation
              </span>
            </a>

            <a
              href="https://drive.google.com/file/d/103kCYMFUpKjQIRFJm2-zERqgE_C0HKld/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              Advanced Technologies in Electronics, Signal Processing and Circuit Design
            </h3>
            <div className="blog__meta">
              <span>12th - 13th, March 2025</span>
              {/* <span className="blog__dot">.</span>
                            <span>Arun Kumar.M, Dharsini.M</span> */}
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            {/* <a href="https://drive.google.com/file/d/148nrb_LQuCg-MTT21EF6PYxmS1xHekmH/view?usp=drive_link"><span className="blog__category">Presented Paper at ICCSICE'24</span></a>
                        <a href="https://drive.google.com/file/d/148nrb_LQuCg-MTT21EF6PYxmS1xHekmH/view?usp=drive_link"><img src={Image1} alt="" className='blog__img' /></a> */}
            <a
              href="https://drive.google.com/file/d/1lCLhLTcVw3UlTjHB3deysodWXp1uq5NY/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="blog__category">
                ICIMSS 2024 – International Conference
              </span>
            </a>

            <a
              href="https://drive.google.com/file/d/1lCLhLTcVw3UlTjHB3deysodWXp1uq5NY/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Image2} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              Innovative Materials and Smart Solutions for Sustainability Systems
            </h3>
            <div className="blog__meta">
              <span>27th - 28th, December 2024</span>
              {/* <span className="blog__dot">.</span>
                            <span>Arun Kumar.M, Dharsini.M</span> */}
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            {/* <a href="https://drive.google.com/file/d/148nrb_LQuCg-MTT21EF6PYxmS1xHekmH/view?usp=drive_link"><span className="blog__category">Presented Paper at ICCSICE'24</span></a>
                        <a href="https://drive.google.com/file/d/148nrb_LQuCg-MTT21EF6PYxmS1xHekmH/view?usp=drive_link"><img src={Image1} alt="" className='blog__img' /></a> */}
            <a
              href="https://drive.google.com/file/d/148nrb_LQuCg-MTT21EF6PYxmS1xHekmH/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="blog__category">
                ICCSICE 2024 – Paper Presentation
              </span>
            </a>

            <a
              href="https://drive.google.com/file/d/148nrb_LQuCg-MTT21EF6PYxmS1xHekmH/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Image3} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              Challenges and Scopes in Information and Communication Engineering
            </h3>
            <div className="blog__meta">
              <span>07th - 08th, March 2024</span>
              {/* <span className="blog__dot">.</span>
                            <span>Arun Kumar.M, Dharsini.M</span> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;
