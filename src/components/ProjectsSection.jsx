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
      tools: "Java, Spring Boot, mySQL, React, Websockets, JWT, Bcrypt",
      github: "https://github.com/dharshan-kumar-ks/PGBuddy",
    },
    {
      title: "Multicast Analyser",
      description:
        "Collaborated with a team of 4 to develop a microservices-based web application using Java (Spring Boot) and React, enabling users to simulate and visualize multicast traffic which reduced lab replications by 20%, saving ~360 lab switch hours monthly.",
      details: [
        "Built a backend pipeline to ingest tech-support files (via manual upload or Salesforce API), processing 500+ files using custom regex parsers to extract key network insights.",
        "Implemented backend logic for 20+ automated troubleshooting checks to detect misconfigurations, and exposed APIs to display multicast traffic visualizations in the React.js frontend.",
        "Developed JWT-based authentication to enforce role-based access for 400+ TAC users and deployed the platform on GCP with 99.9% uptime.",
      ],
      tools: "Java, Spring Boot, mySQL, JWT, GCP",
      github: null,
    },
    {
      title: "Electrical substation detection using satellite images",
      description:
        "Developed a deep learning model to accurately detect electrical substations of varying shapes and surroundings from satellite imagery with a 97% accuracy and 0.68 Intersection over Union (IoU)  securing 9th rank (out of 72) in a competition conducted by ISRO in July, 2021",
      details: [
        "Applied SegNet architecture for semantic image segmentation, and enhanced it by replacing the encoder with deeper VGG-16 and VGG-19 models for improved feature extraction.",
        "Implemented data augmentation techniques to expand the training set by 500+ images which diversified visual conditions in satellite images, boosting accuracy to 90%.",
        "Leveraged transfer learning with pre-trained weights to further raise model performance to 95%.",
        "Employed Stochastic Gradient Descent (SGD) optimizer and used Mean Squared Error (MSE) as the loss function.",
      ],
      tools: "Python, TensorFlow, OpenCV, SegNet, VGG-19",
      github: "https://github.com/dharshan-kumar-ks/electrical_substation_detection",
    },
    {
      title: "Food Hub App",
      description:
        "Developed an Android-based food ordering application that allows users to discover restaurants, place food orders, mark favorites, and manage order history seamlessly.",
      details: [
        "Designed an intuitive front-end using XML layouts and implemented backend logic in Kotlin.",
        "Integrated third-party APIs to fetch restaurant and menu data in JSON format and store it locally using ROOM persistence library with a SQL relational database.",
        "Utilized Volley for efficient network operations to fetch text-based JSON data and Picasso for dynamic image loading from URLs.",
        "Applied Google Android Material Components to enhance UI design and maintain modern design standards.",
        "Integrated Makeramen library to apply custom image styles and improve visual aesthetics.",
      ],
      tools: "Kotlin, ROOM, Volley, Picasso, Android Material Components",
      github: "https://github.com/dharshan-kumar-ks/Food_Hub_App",
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