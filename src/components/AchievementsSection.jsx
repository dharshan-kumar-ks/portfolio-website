import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";

function AchievementsSection() {
  const projects = [
    {
      title: "Weighted Average Ensemble Approach for Pediatric Pneumonia Diagnosis Using Channel Attention Deep CNN Architectures",
      description:
        "Developed a deep learning model for classification of chest X-ray images having Pneumonia. In this paper, we proposed an efficient Channel Attention (ECA) module attached to the end of pre-trained ResNet50 and DenseNet121, VGG19 with an accuracy of 95.67%.",
      details: [
        "Proposed a Weighted Average Ensemble approach combining ResNet50, DenseNet121, and VGG19, each integrated with an Efficient Channel Attention (ECA) module to enhance feature focus.",
        "Achieved high performance with 95.67% accuracy, 94.81% precision, 98.46% recall, 96.60% F1-score, and 94.74% AUC, significantly improving diagnostic reliability.",
        "Tackled low-radiation pediatric X-rays using transfer learning and attention modules for improved visual sensitivity.",
        "Showcased potential for real-time diagnosis in clinics and reduced human error in pneumonia detection by doctors.",
        "Also published two related works as conference papers alongside the main journal.",
      ],
      tools: "ResNet50, DenseNet121, VGG19, ECA module, Python, TensorFlow",
      github: "https://link.springer.com/chapter/10.1007/978-3-031-44084-7_24",
    },
    {
      title: "Object Detection Under Low Lighting Conditions – A Comparative Deep Learning Study",
      description:
        "Conducted a comparative study on detecting and identifying the objects in low-light/dark environments by combining advanced image enhancement techniques (HE, LHE, CLAHE) with deep learning-based detection models (RCNN, YOLO, SSD).",
      details: [
        "Applied three image enhancement methods—Histogram Equalization (HE), Local Histogram Equalization (LHE), and CLAHE—to improve object visibility in dark scenes.",
        "Evaluated performance using state-of-the-art detection algorithms including RCNN, YOLO, and SSD, across the ExDark dataset, a benchmark dataset designed for low-light conditions.",
        "Addressed class imbalance in the dataset using equisampling, ensuring fair model evaluation.",
        "Proposed improvements to bounding box predictions using enhanced RCNN pipelines for better localization accuracy.",
        "Won the Best Paper Award in ADSC-2022 Conference since our paper contributes to object detection in surveillance, autonomous driving, and nighttime applications."
      ],
      tools: "HE, LHE, CLAHE, RCNN, YOLO, SSD, Python, TensorFlow",
      github: "https://link.springer.com/chapter/10.1007/978-981-99-3656-4_27",
    },
  ];

  return (
    <section id="publications" className="py-32 max-w-7xl mx-auto gap-12">
      <h2 className="text-4xl font-bold mb-12">Publications</h2>
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
                <IoNewspaper className="mr-2" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default AchievementsSection;