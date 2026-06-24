import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Dynamics from "./components/Dynamics";
import Builds from "./components/Builds";
import ReachOut from "./components/ReachOut";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // const [msg, setMsg] = useState("");

  // useEffect(() => {
  //   const showMessage = (text) => {
  //     setMsg(text);
  //     setTimeout(() => setMsg(""), 2000);
  //   };

  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //     showMessage("© MR rights reserved");
  //   };

  //   const handleKeyDown = (e) => {
  //     if (
  //       e.key === "F12" ||
  //       (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
  //       (e.ctrlKey && e.key === "U")
  //     ) {
  //       e.preventDefault();
  //       showMessage("Inspect blocked");
  //     }
  //   };

  //   const handleSelect = (e) => {
  //     e.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);
  //   document.addEventListener("keydown", handleKeyDown);
  //   document.addEventListener("selectstart", handleSelect);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("keydown", handleKeyDown);
  //     document.removeEventListener("selectstart", handleSelect);
  //   };
  // }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white text-black dark:bg-[#0b0b0b] dark:text-white transition-colors duration-500">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Dynamics />
        <Builds />
        {/* Bottom Toast Message */}
        {/* {msg && (
          <div className="fixed bottom-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-xl bg-white/10 border border-white/20 text-black dark:text-white text-sm font-mono backdrop-blur-2xl shadow-lg z-100">
            {msg}
          </div>
        )} */}
        <ReachOut />

        <Footer />
      </div>
    </div>
  );
}

export default App;