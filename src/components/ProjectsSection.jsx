import React from "react";
import { FaGithub } from "react-icons/fa";

function ProjectsSection() {
  const projects = [
    {
      title: "PG Buddy",
      description:
        "Designed and developed a full-stack PG (Paying Guest) management platform enabling residents to raise service tickets, order food, vote food preferences, view notices, pay rent, and track payments.",
      details: [
        "Built admin dashboards to manage residents, tickets, and announcements, improving operational efficiency.",
        "Developed RESTful APIs with Spring Boot, built a responsive ReactJS frontend integrated with MySQL, and deployed the full-stack platform on Vercel and Render following CI/CD best practices.",
        "Implemented JWT-based authentication and hashed passwords using Bcrypt, enhancing security.", 
        "WebSocket-based real-time chat (STOMP over SockJS) for seamless ticket resolution between admin and residents.",
        "Integrated Razorpay API for payment processing simulation.",
      ],
      tools: "Java, Spring Boot, mySQL, JPA, JWT, Bcrypt",
      github: "https://github.com/dharshan-kumar-ks/PGBuddy",
    },
    {
      title: "Multicast Analyser ",
      description:
        "Collaborated with a team of 4 engineers to design and implement a web app that enables users to simulate and visualize multicast traffic using Python, enhancing network troubleshooting efficiency by 20% for support engineers.",
      details: [
        "Developed a pipeline to collect tech-support text files and display potential issues in the multicast setup.",
        "Created custom parsers using regex to extract information from command outputs.",
        "Utilized NetworkX and Bokeh libraries to visualize graph data effectively.",
        "Tested software for bugs and performance, resolving issues and improving efficiency by 18%.",
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