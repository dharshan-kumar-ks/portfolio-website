import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between p-20 max-w-7xl mx-auto gap-12"
    >
      <div className="md:w-1/2">
        <p className="text-green-400">Software Engineer</p>
        <h1 className="text-5xl md:text-7xl font-bold my-4">
          Hello I'm <br />
          <span className="text-green-400">Dharshan Kumar</span>
        </h1>
        <p className="text-gray-400 mb-6">
          I am a software engineer passionate about solving complex problems
          through scalable and efficient solutions. I specialize in building
          robust backend systems and REST APIs while developing interactive
          frontends. I focus on designing well-architected systems, optimizing
          performance, and leveraging technology to drive meaningful impact.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://dk-sde-resume.tiiny.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-400 text-black px-6 py-3 rounded-full flex items-center hover:bg-green-500 transition-colors"
          >
            View Resume
          </a>
          <a
            href="https://github.com/dharshan-kumar-ks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 text-3xl transition-colors flex items-center"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dharshan-kumar-ba09521a0/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 text-3xl transition-colors flex items-center"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 text-3xl transition-colors flex items-center"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="dharshan_image.jpg"
          alt="Dharshan Kumar"
          className="w-80 h-80 rounded-full border-4 border-green-400"
        />
      </div>
    </section>
  );
}

export default HeroSection;