import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer"; // Import Footer

import emailjs from "emailjs-com"; // Import EmailJS

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about", // Ensure "about" is included here
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200; // Adjust for navbar height
      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80; // Adjust for navbar height
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const toggleExperience = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_636485z", // Replace with your EmailJS service ID
        "template_joc4bsl", // Replace with your EmailJS template ID
        e.target,
        "eivh9luuND-RJlL8F" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
    e.target.reset();
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection /> {/* Add AboutSection */}
        <ExperienceSection
          expandedExperience={expandedExperience}
          toggleExperience={toggleExperience}
        />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection sendEmail={sendEmail} />
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default App;