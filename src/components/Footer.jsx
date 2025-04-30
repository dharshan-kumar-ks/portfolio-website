import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 py-6 text-center text-gray-400 w-screen">
      <p>© {new Date().getFullYear()} Dharshan Kumar. All rights reserved.</p>
    </footer>
  );
}

export default Footer;