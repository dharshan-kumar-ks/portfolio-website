import React from "react";
import educations from "../data/educations";

function EducationSection({ expandedEducation, toggleEducation }) {
  return (
    <section id="education" className="py-32 max-w-7xl mx-auto gap-12">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">Education</h2>
          <p className="text-gray-400 mb-6">
            Have a deep passion for technology and computer science, coupled with a strong desire to learn and grow.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {educations.map((education) => (
            <div key={education.id} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400">{education.date}</p>
              <h3 className="text-xl font-bold">{education.title}</h3>
              <p className="text-green-400">{education.company}</p>
              {expandedEducation !== education.id && (
                <p className="mt-4 text-green-400">{education.details}</p>
              )}
              {expandedEducation === education.id && (
                <div>
                  <ul className="list-disc list-inside text-gray-400 mt-4">
                    {education.courseworks.map((course, index) => (
                      Array.isArray(course) ? (
                          <ul className="list-disc list-inside ml-6">
                            {course.map((subCourse, subIndex) => (
                              <li key={subIndex}>{subCourse}</li>
                            ))}
                          </ul>
                      ) : (
                        <li key={index}>{course}</li>
                      )
                    ))}
                  </ul>
                </div>
              )}
  
              {education.courseworks && (
                <button
                  onClick={() => toggleEducation(education.id)}
                  className="mt-4 text-green-400 hover:underline"
                >
                  {expandedEducation === education.id
                    ? "Read Less"
                    : "Read More"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;