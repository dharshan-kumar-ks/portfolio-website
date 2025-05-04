import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import EducationSection from "./components/EducationSection"; 
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer"; // Import Footer

import emailjs from "emailjs-com"; // Import EmailJS

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [expandedEducation, setExpandedEducation] = useState(null); // State for expanded education
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
        "publications", 
        "education",
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
  const toggleEducation = (id) => {
    setExpandedEducation(expandedEducation === id ? null : id);
  };

  // EmailJS configuration - to send an email to yourself and an ack auto-reply email to the user
  const sendEmail = (e) => {
    e.preventDefault();

    // Send the original email to yourself
    emailjs
      .sendForm(
        "service_osei1oq", // Replace with your EmailJS service ID
        "template_3nvlqzs", // Replace with your EmailJS template ID
        e.target,
        "VQMYEcUQriwV2dxEe" // Replace with your EmailJS user ID
      )
      .then(() => {
        // Send the auto-reply to the user
        return emailjs.send(
          "service_osei1oq", // Same service ID
          "template_wpnf4we", // Your auto-reply template ID
          {
            //user_name: e.target.user_name.value,
            //user_email: e.target.user_email.value,
            //message: e.target.message.value
            user_name: "Test User",
            email: "dharshankumar5555@gmail.com",  // Use a real email you control
            message: "This is a test message"
          },
          "VQMYEcUQriwV2dxEe" // Same user ID
        );
      })
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
        <AchievementsSection /> 
        <EducationSection 
          expandedEducation={expandedEducation}
          toggleEducation={toggleEducation}
        /> 
        <ContactSection sendEmail={sendEmail} />
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default App;