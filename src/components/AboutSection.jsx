import React from "react";

function AboutSection() {
  return (
    <section id="about" className="py-32 max-w-7xl mx-auto gap-12">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400">
            Software Engineer with expertise in Java, Spring Boot, and React,
            specializing in developing scalable backend systems and dynamic web
            applications. Experienced in designing RESTful APIs, microservices,
            and automation tools to optimize performance and efficiency. Proven
            ability to improve troubleshooting speed, enhance security, and
            streamline operations through innovative software solutions.
            Passionate about solving complex problems using technology,
            contributing to knowledge-sharing, and driving impact through
            well-architected systems.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center justify-center">
          <div>
            <p className="text-gray-400">Name</p>
            <p className="text-xl font-bold">Dharshan Kumar</p>
          </div>
          <div>
            <p className="text-gray-400">Education</p>
            <p className="text-xl font-bold">BTech, CSE</p>
          </div>
          <div>
            <p className="text-gray-400">Experience</p>
            <p className="text-xl font-bold">2+ Years</p>
          </div>
          <div>
            <p className="text-gray-400">Email</p>
            <p className="text-xl font-bold">dharshankumar55@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-400">Location</p>
            <p className="text-xl font-bold">Bengaluru, Karnataka, India</p>
          </div>
          <div>
            <p className="text-gray-400">Languages</p>
            <p className="text-xl font-bold">English, Tamil</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;