import React from 'react';
import './About.css';
import Image from '../../assets/avatar-9.png';
import Resume from '../../assets/resume.pdf';
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
                        Hello! I'm Arun Kumar, based in Coimbatore, India. I am currently pursuing my B.E. in Electronics and Communication Engineering at Karpagam Academy of Higher Education.<br /><br />
                        As a passionate final-year student with proficiency in C, C++, Java, and Swift, and foundational skills in Python and ReactJS, I've been dedicated to expanding my knowledge and skills in software development.
                        My journey so far has been both challenging and rewarding, and I am enthusiastic about further growth as a Software Engineer. Currently, I am focused on building a diverse portfolio of projects and contributing effectively as a team player in any role I undertake.<br /><br />
                        Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>C, C++,Python, Java</li>
                            <li>Swift</li>
                            <li>HTML, CSS, JavaScript</li>
                            <li>React JS</li>
                            <li>GitHub</li>
                            <li>VS Code, Eclipse, NetBeans</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download Resume</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About