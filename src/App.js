import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import Footer from "./components/Footer";
import Work from "./scenes/Work";
import Projects from "./scenes/Projects";
import About from "./scenes/About";
import Contact from "./scenes/Contact";
import useMediaQuery from './hooks/useMediaQuery';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } 
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
            <Landing setSelectedPage={setSelectedPage}/>
        </motion.div>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("work")}
        >
            <Work/>
        </motion.div>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto">
        <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("projects")}
        >
            <Projects/>
        </motion.div>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("about")}
        >
            <About/>
        </motion.div>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("contact")}
        >
            <Contact/>
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
