import React from "react";
import "./Blog.css";

import Image1 from "../../assets/Conference.png";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Conference</h2>

      <div className="blog__container grid">
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
                Presented Paper at ICCSICE'24
              </span>
            </a>

            <a
              href="https://drive.google.com/file/d/148nrb_LQuCg-MTT21EF6PYxmS1xHekmH/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Image1} alt="" className="blog__img" />
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
