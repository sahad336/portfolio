import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { MdGetApp } from 'react-icons/md';

function About() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true }); // Animate once when scrolled into view
    }, []);

    const profileInfo = {
        name: "Sahad P",
        resumeLink: "/ResumeHRIDYAPV.pdf",
        profileImage: "/profile-pic-1.png",
    };

    const details = [
        { label: "Phone", value: "+91 7510734097" },
        { label: "Email", value: "iamsahadddd@gmail.com" },
        { label: "Place", value: "Malappuram" },
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <div className="flex justify-center items-center gap-3 flex-wrap">
                        <IoPersonSharp className="text-5xl text-purple-500" />
                        <h3 className="text-4xl md:text-5xl font-signika text-gray-800">
                            About <span className="text-purple-500">Me</span>
                        </h3>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Profile Image */}
                    <div className="relative" data-aos="fade-left">
                        <img
                            src={profileInfo.profileImage}
                            alt="Profile"
                            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-purple-500 opacity-80 animate-pulse"></div>
                    </div>

                    {/* About Details */}
                    <div className="text-left max-w-lg" data-aos="fade-right">
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            I'm <span className="font-serif text-purple-600 font-bold">{profileInfo.name}</span>,a passionate and motivated learner from Malappuram, Kerala. I recently completed my 12th standard and have started my journey in the IT field, focusing on front-end web development. I enjoy exploring new technologies and building interactive web applications using HTML, CSS, JavaScript, React, Bootstrap, and MUI. I’m also currently doing an internship as a Front-End Developer at Upcode Software Labs, where I’m gaining hands-on experience in real-world projects. Apart from coding, I love gaming, football, music, and movies — they help me stay creative and inspired.
                        </p>

                        {/* Personal Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {details.map((detail, index) => (
                                <p key={index} className="text-gray-600">
                                    <span className="font-bold text-purple-500">{detail.label}:</span> {detail.value}
                                </p>
                            ))}
                        </div>

                        {/* Resume Button */}
                        {/* <a
                            href={profileInfo.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-md px-6 py-3 font-semibold hover:scale-105 transition-transform transform hover:shadow-lg"
                        >
                            <span>Get Resume</span>
                            <MdGetApp className="text-xl animate-bounce" />
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
