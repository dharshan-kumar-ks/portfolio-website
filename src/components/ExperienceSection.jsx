import React from "react";
import experiences from "../data/experiences";

function ExperienceSection({ expandedExperience, toggleExperience }) {
  return (
    <section id="experience" className="py-32 max-w-7xl mx-auto gap-12">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">My experience</h2>
          <p className="text-gray-400 mb-6">
            Over 2 years of experience in backend development.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {experiences.map((experience) => (
            <div key={experience.id} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400">{experience.date}</p>
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-green-400">{experience.company}</p>
              {expandedExperience === experience.id && (
                <ul className="list-disc list-inside text-gray-400 mt-4">
                  {experience.details.map((detail, index) => (
                    Array.isArray(detail) ? (
                        <ul className="list-disc list-inside ml-6">
                          {detail.map((subDetail, subIndex) => (
                            <li key={subIndex}>{subDetail}</li>
                          ))}
                        </ul>
                    ) : (
                      <li key={index}>{detail}</li>
                    )
                  ))}
                </ul>
              )}
              <button
                onClick={() => toggleExperience(experience.id)}
                className="mt-4 text-green-400 hover:underline"
              >
                {expandedExperience === experience.id
                  ? "Read Less"
                  : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;