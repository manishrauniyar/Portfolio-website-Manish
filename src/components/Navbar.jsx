import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Dynamics", id: "dynamics" },
  { name: "Builds", id: "builds" },
  { name: "Contact", id: "contact" },
  { name: "Roles & Impact", id: "roles" },
];

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full h-[65px] border-b border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-black/90 backdrop-blur-xl flex items-center justify-between px-5 md:px-12">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl border-2 border-gray-300 dark:border-gray-700 grid place-items-center font-black text-sm">
          MR
        </div>

        <h2 className="text-sm md:text-base font-black tracking-[3px]">
          &lt;/Dev&gt;
        </h2>
      </div>

      <ul className="hidden lg:flex items-center gap-8 font-mono tracking-[1.5px] text-sm text-gray-700 dark:text-gray-300">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="hover:text-black dark:hover:text-white transition"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#1c1c1c] border border-gray-300 dark:border-gray-700 grid place-items-center hover:rotate-180 transition duration-500"
        >
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#1c1c1c] border border-gray-300 dark:border-gray-700 grid place-items-center"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[350px] py-5" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col ml-6 gap-5 font-mono tracking-[1px] text-sm text-gray-700 dark:text-gray-300">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-black dark:hover:text-white transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;