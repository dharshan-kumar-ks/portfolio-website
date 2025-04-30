import React from "react";

function Navbar({ activeSection, handleNavClick, isMenuOpen, toggleMenu }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl py-6 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-3xl font-bold">
          Dharshan<span className="text-green-400">.</span>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-green-400 focus:outline-none"
          >
            ☰
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:space-x-6 md:items-center md:justify-end`}
        >
          {["home", "about", "experience", "skills", "projects", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => {
                  handleNavClick(section);
                  toggleMenu(false);
                }}
                className={`block md:inline-block w-full md:w-auto text-left md:text-center px-4 py-2 md:p-0 hover:text-green-400 transition-colors ${
                  activeSection === section ? "text-green-400" : "text-white"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;