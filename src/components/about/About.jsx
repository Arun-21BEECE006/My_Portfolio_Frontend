import React from 'react';
import './About.css';
import Image from '../../assets/avatar-9.png';
import Resume from '../../assets/Arun_Resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hello! I'm Arun Kumar, a Software Development Engineer based in Coimbatore, India, with 8 months of professional experience in building scalable backend systems and modern web applications.<br /><br />
                        I specialize in Python (Django) for backend development and have hands-on experience developing enterprise-level applications, REST APIs, and secure, scalable systems. During my time at Mitsogo (Hexnode), I contributed to building robust backend services and dynamic user interfaces, along with designing secure solutions like portal protection systems.<br /><br />
                        I have a strong foundation in data structures, algorithms, and object-oriented design, and I enjoy solving complex real-world problems through efficient and scalable solutions. Alongside backend development, I also work with modern frontend technologies to build complete full-stack applications.<br /><br />
                        Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>Python (Django, Flask), OOPS</li>
                            <li>Java, C, C++, Data Structures & Algorithms</li>
                            <li>HTML, CSS, JavaScript</li>
                            <li>React JS, Angular JS</li>
                            <li>SQL, MongoDB, PostgreSQL</li>
                            <li>Git, Postman, VS Code</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download Resume</button>
                    </div>

                    <br/>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Frontend Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Backend Development</h3>
                                <span className="skills__number">85%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Data Structures & Algorithms (Basics)</h3>
                                <span className="skills__number">50%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About