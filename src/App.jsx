import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import { useState, useEffect } from "react";
import MobileNavigationBar from "./components/MobileNavigationBar";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100 || window.innerHeight <= 700);
    };

    handleResize(); // Call initially to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Add isMobile as a dependency
  return (
    <>
      <Router>
        <div
          className={`h-screen flex ${
            isMobile ? "flex-col" : ""
          } overflow-hidden`}
        >
          {isMobile ? <MobileNavigationBar /> : <NavigationBar />}
          <section className="divTwo bg-slate-200 flex-1 flex justify-center items-center px-10 md:text-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Navigate to="/home" />} />

              <Route path="/home" element={<Home />} />

              <Route path="/about" element={<About />} />
              {/* <Route path="/tools" element={<Tools />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;
