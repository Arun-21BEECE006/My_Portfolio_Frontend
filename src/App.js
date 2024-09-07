import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import useLocalStorage from "use-local-storage";
import { useState } from "react";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const [loading, setLoading] = useState(false);
  console.log("asdjfhkasjdfhksdfas", theme);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleLoading = (loading) => {
    setLoading(loading);
    showLoader();
    function showLoader() {
      const loaderDiv = document.getElementById("semiTransparenDiv");
      if (loaderDiv) {
        loaderDiv.style.display = "block";
      }
    }
  };

  return (
    <div>
      {loading && (
        <div id="semiTransparenDiv">
          <div className={`${theme === 'dark' ? 'loaderbody' : 'lightloaderbody'}`}>
            <span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className={`${theme === 'dark' ? 'base' : 'lightbase'}`}>
              <span></span>
              <div className={`${theme === 'dark' ? 'face' : 'lightface'}`}></div>
            </div>
          </div>

          <div className={`${theme === 'dark' ? 'longfazers' : 'lightlongfazers'}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`${theme === 'dark' ? 'loaderheader' : 'lightloaderheader'}`}>Sending.....</div>
        </div>
      )}
      <div className="app" data-theme={theme}>
        <Sidebar theme={theme} switchTheme={switchTheme} />
        <main className="main">
          <Home />
          <About />
          <Services />
          <Resume />
          <Portfolio />
          <Testimonials />
          <Blog />
          <Contact theme={theme} handleLoading={handleLoading} />
        </main>
      </div>
    </div>
  );
}

export default App;
