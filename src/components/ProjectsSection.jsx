import React from "react";
import { FaGithub } from "react-icons/fa";

function ProjectsSection() {
  const projects = [
    {
      title: "EasyShop",
      description:
        "Engineered a scalable Spring Boot REST API for an eCommerce platform, enabling seamless management of products, users, carts, and orders.",
      details: [
        "Optimized database performance by designing a PostgreSQL schema with JPA/Hibernate, reducing latency by 30%.",
        "Integrated Spring Security & JWT authentication, enforcing secure access control and improving user data protection.",
      ],
      tools: "Java, Spring Boot, PostgreSQL, JPA, JWT, Bcrypt",
      github: "https://github.com/dharshan-kumar-ks/easyshop",
    },
    {
      title: "Devnet Bootcamps",
      description:
        "Built a secure Node.js REST API for a Bootcamp portal, enabling user authentication and role-based access control.",
      details: [
        "Designed a React.js-based analytics interface to visualize student progress and boot camp performance metrics.",
        "Implemented JWT-based authentication with Bcrypt hashing, reducing security vulnerabilities by 40%.",
        "Secured file uploads using AWS S3, enhancing scalability and performance.",
      ],
      tools: "Node.js, Express.js, React.js, JavaScript, MongoDB, AWS S3, JWT",
      github: "https://github.com/dharshan-kumar-ks/devnet-bootcamps",
    },
    {
      title: "SONY - AgroESP",
      description:
        "Developed a web application for an Edge-based Cyber-Physical Polyhouse, funded by Sony Semiconductor Solutions.",
      details: [
        "Designed a React.js front-end to display real-time IoT sensor data.",
        "Constructed a Node.js-based REST API to manage IoT data, improving system efficiency by 30%.",
        "Integrated MQTT-based messaging for low-latency communication, reducing response time by 25%.",
      ],
      tools: "Node.js, Express.js, React.js, MySQL, Rabbit MQTT",
      github: null,
    },
  ];

  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto gap-12">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <ul className="list-disc list-inside text-gray-400 mb-4">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <p className="text-green-400 mb-4">Tools Used: {project.tools}</p>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 text-2xl transition-colors flex items-center"
              >
                <FaGithub className="mr-2" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;