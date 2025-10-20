import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode } from "react-icons/fa";

const projects = [

    {
    title: "Flipkart UI Clone",
    description:
      "Designed and developed a Flipkart-inspired user interface using modern web technologies, focusing on clean layout, smooth navigation, and user-friendly design.",
    technologies: "HTML,CSS",
    delay: 300,
    sourceCode: 'https://github.com/sahad336/Flipkart-clone ',  
  },
    {
    title: "ShopEase Ecommerce",
    description:
      "A modern e-commerce web application built with React and Redux for seamless state management. It features dynamic product listings, an interactive shopping cart, and a responsive design to ensure smooth user experience across all devices.",
    technologies: "React.js, Redux, Java Script, Bootstrap",
    delay: 400,
      liveLink: "https://shopease-ecommerce-kmww.vercel.app/", // Add deployed link here
    sourceCode: 'https://github.com/sahad336/shopease-ecommerce',
  },
  {
    title: "Login Page UI",
    description:
      "A clean login interface built using HTML and CSS. It features a modern layout, user-friendly form design, and smooth styling for an attractive and accessible user experience.",
    technologies: "HTML, CSS",
    delay: 500,
    sourceCode: 'https://github.com/sahad336/Login-page-UI',
  },
  // {
  //   title: "Weather App",
  //   description:
  //     "Built a responsive weather application that provides real-time weather updates based on location or user input using an external weather API.",
  //   technologies: "React.js, Tailwind CSS, JavaScript",
  //   delay: 600,
  //   sourceCode: 'https://github.com/HridyaDEV/softronics-react/tree/main/weather-app',
  // },
  //   {
  //   title: "E-Learning App",
  //   description:
  //     "Developed an innovative e-learning application using machine learning to predict individual learning styles. Enhanced user experience with CSS and Java, leveraging tools like Android Studio and Firebase.",
  //   technologies: "Java, CSS, Android Studio, Firebase",
  //   delay: 700,
  // },
  // {
  //   title: "Library Management System",
  //   description:
  //     "Engineered a web-based platform to streamline library tasks like pre-booking, issuing, and fine tracking. Integrated with tools like phpMyAdmin and XAMPP.",
  //   technologies: "Java, HTML, CSS, XAMPP",
  //   delay: 800,
  // },


];

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div
          className="flex justify-center items-center gap-5 flex-wrap font-signika"
          data-aos="fade-up"
        >
          <FaLaptopCode className="text-purple-500 text-5xl" />
          <h3 className="text-4xl md:text-5xl text-gray-800 text-center">
            My <span className="text-purple-500">Projects</span>
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              <h4 className="text-2xl font-semibold text-purple-500">
                {project.title}
              </h4>
              <p className="mt-4 text-gray-600">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                <span className="font-semibold">Technologies:</span> {project.technologies}
              </p>
              {project.liveLink && (
  <a
    href={project.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors mr-2"
  >
    Live Demo
  </a>
)}
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-2 rounded-lg hover:scale-105 transform transition"
                >
                  View Source Code
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
