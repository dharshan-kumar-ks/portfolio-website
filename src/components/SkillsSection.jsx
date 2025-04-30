import React from "react";
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiSpringboot,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiExpress,
  SiGit,
  SiLinux,
  SiAmazonwebservices,
  SiGooglecloud,
  SiPostgresql,
  SiMongodb,
  SiMicrogenetics,
  SiPostman,
} from "react-icons/si";

function SkillsSection() {
  const skills = [
    { icon: FaJava, text: "Java" },
    { icon: SiPython, text: "Python" },
    { icon: SiCplusplus, text: "C++" },
    { icon: SiC, text: "C" },
    { icon: SiJavascript, text: "JavaScript" },
    { icon: SiHtml5, text: "HTML" },
    { icon: SiCss3, text: "CSS" },
    { icon: SiTypescript, text: "TypeScript" },
    { icon: SiSpringboot, text: "Spring Boot" },
    { icon: SiExpress, text: "Express.js" },
    { icon: FaReact, text: "React" },
    { icon: FaNodeJs, text: "Node.js" },
    { icon: SiGit, text: "Git" },
    { icon: SiLinux, text: "Linux" },
    { icon: SiAmazonwebservices, text: "AWS" },
    { icon: SiGooglecloud, text: "GCP" },
    { icon: SiPostgresql, text: "SQL" },
    { icon: SiMongodb, text: "MongoDB" },
    { icon: SiMicrogenetics, text: "Microservices" },
    { icon: SiPostman, text: "Postman" },
  ];

  return (
    <section id="skills" className="py-32 max-w-7xl mx-auto gap-12">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">My skills</h2>
          <p className="text-gray-400 mb-6">
            Proficient in backend and frontend technologies.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, text }, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg flex flex-col items-center hover:bg-green-400 hover:text-black transition-colors"
            >
              <Icon className="text-4xl mb-2" />
              <p className="text-lg font-bold">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;