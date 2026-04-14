// import React, { useState } from "react";
// import "./Sidebar.css";
// import Logo from "../../assets/logo.svg";
// import LightLogo from "../../assets/light-logo.svg";

// import {
//     RiHome2Line,
//     RiUser3Line,
//     RiBriefcase2Line,
//     RiStackLine,
//     RiDraftLine,
//     RiChat3Line,
//     RiFileList3Line,
//     RiMoonLine,
//     RiSunLine,
//     RiMenu2Line,
// } from "react-icons/ri";


// const Sidebar = (props) => {
//     const [toggle, showMenu] = useState(false);

//     return (
//         <>
//             <aside className={toggle ? 'aside show-menu' : 'aside'}>
//                 <a href="#home" className="nav__logo">
//                     <img src={props.theme === 'light' ? LightLogo : Logo} alt="logo" />
//                 </a>

//                 <nav className="nav">
//                     <div className="nav__menu">
//                         <ul className="nav__list">
//                             <li className="nav__item">
//                                 <a href="#home" className="nav__link">
//                                     <RiHome2Line />
//                                 </a>
//                             </li>

//                             <li className="nav__item">
//                                 <a href="#about" className="nav__link">
//                                     <RiUser3Line />
//                                 </a>
//                             </li>

//                             <li className="nav__item">
//                                 <a href="#services" className="nav__link">
//                                     <RiFileList3Line />
//                                 </a>
//                             </li>

//                             <li className="nav__item">
//                                 <a href="#resume" className="nav__link">
//                                     <RiBriefcase2Line />
//                                 </a>
//                             </li>

//                             <li className="nav__item">
//                                 <a href="#portfolio" className="nav__link">
//                                     <RiStackLine />
//                                 </a>
//                             </li>

//                             <li className="nav__item">
//                                 <a href="#blog" className="nav__link">
//                                     <RiDraftLine />
//                                 </a>
//                             </li>

//                             <li className="nav__item">
//                                 <a href="#contact" className="nav__link">
//                                     <RiChat3Line />
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>

//                 <div className="nav__footer">
//                     <button onClick={() => { props.switchTheme(); showMenu(!toggle) }} className="nav__link footer__button">
//                         {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
//                     </button>
//                 </div>
//             </aside>

//             <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
//                 <RiMenu2Line />
//             </div>
//         </>
//     );
// };

// export default Sidebar;

import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import LightLogo from "../../assets/light-logo.svg";

import {
  RiHome2Line,
  RiUser3Line,
  RiBriefcase2Line,
  RiStackLine,
  RiDraftLine,
    RiChat3Line,
  RiFileList3Line,
  RiMoonLine,
  RiSunLine,
  RiMenu2Line,
} from "react-icons/ri";


const Sidebar = (props) => {
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 80;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveNav(`#${sectionId}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <aside className={toggle ? 'aside show-menu' : 'aside'}>
            <a href="#home" className="nav__logo">
                <img src={props.theme === 'light' ? LightLogo : Logo} alt="logo" />
            </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#home")}
                >
                  <RiHome2Line />
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#about"
                  className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#about")}
                >
                  <RiUser3Line />
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#services"
                  className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#services")}
                >
                  <RiFileList3Line />
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#resume"
                  className={activeNav === "#resume" ? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#resume")}
                >
                  <RiBriefcase2Line />
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#portfolio"
                  className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#portfolio")}
                >
                  <RiStackLine />
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#blog"
                  className={activeNav === "#blog" ? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#blog")}
                >
                  <RiDraftLine />
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#contact"
                  className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#contact")}
                >
                  <RiChat3Line />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <button onClick={() => { props.switchTheme(); showMenu(!toggle) }} className="nav__link footer__button">
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
          </button>
        </div>
      </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
        <RiMenu2Line />
      </div>
    </>
  );
};

export default Sidebar;
