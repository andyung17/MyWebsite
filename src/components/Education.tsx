import React, { useEffect, useRef, useState } from 'react';
import sendImage from '../assets/send.png';

export default function Education() {
    const [isLoaded, setIsLoaded] = useState(false);

    const educationList = [
        {
            degree: 'Online Master of Science in Computer Science',
            institution: 'Georgia Institute of Technology',
            specialization: 'Artificial Intelligence Specialization • GPA 4.0',
            location: 'Atlanta, GA',
            date: 'Jan 2026 - Present',
            description: 'Pursuing advanced graduate level coursework focusing on artificial intelligence, machine learning systems, and computational algorithms.',
            tags: ['Artificial Intelligence', 'Machine Learning', 'Computer Science']
        },
        {
            degree: 'Bachelor of Applied Science, Software Engineering',
            institution: 'University of Ottawa',
            specialization: "GPA 3.9/4.0 • 7x Dean's Honours List",
            location: 'Ottawa, ON',
            date: 'Sept 2019 - July 2024',
            description: 'Completed a comprehensive software engineering curriculum maintaining top academic standing across multiple semesters.',
            tags: ['Software Engineering', 'Data Structures', 'Algorithms', 'System Design']
        }
    ];

    const [visibleItems, setVisibleItems] = useState({});
    const itemRefs = useRef([]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 50);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.getAttribute('data-index');
                        setVisibleItems((prev) => ({ ...prev, [index]: true }));
                    }
                });
            },
            { threshold: 0.15 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`max-w-6xl mx-auto px-6 py-20 flex flex-col items-center transition-all duration-700 ease-out transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight inline-block relative pb-3">
                    Education
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
                </h1>
                <p className="text-slate-600 text-sm md:text-base mt-4 max-w-lg">
                    My academic credentials and educational background.
                </p>
            </div>

            <div className="relative w-full max-w-4xl">

                <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-slate-200 hidden md:block"></div>

                <div className="space-y-12">
                    {educationList.map((edu, index) => {
                        const isLeft = index % 2 === 0;
                        const isVisible = visibleItems[index];

                        return (
                            <div
                                key={edu.degree}
                                ref={(el) => (itemRefs.current[index] = el)}
                                data-index={index}
                                className={`flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''} transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                    }`}
                            >

                                <div className="w-full md:w-[53%]">
                                    <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg text-left transition-all hover:border-blue-300 flex flex-col justify-between h-full">

                                        <div>
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                                                <h3 className="text-slate-900 font-bold text-xl leading-snug">{edu.degree}</h3>
                                                <span className="text-[11px] font-semibold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl border border-blue-200 text-center leading-tight self-start sm:self-auto whitespace-nowrap">
                                                    {edu.date}
                                                </span>
                                            </div>

                                            <div className="text-blue-600 font-semibold text-sm mb-1">
                                                {edu.institution} <span className="text-slate-400 font-normal">• {edu.location}</span>
                                            </div>

                                            <div className="text-xs font-medium text-slate-500 mb-4">
                                                {edu.specialization}
                                            </div>

                                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                                {edu.description}
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-slate-100 mt-auto">
                                            <div className="flex flex-wrap gap-2">
                                                {edu.tags.map(tag => (
                                                    <span key={tag} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200 font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="hidden md:flex md:w-[14%] justify-center relative">
                                    <div className={`w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md z-10 transition-transform duration-500 delay-200 ${isVisible ? 'scale-100' : 'scale-0'}`}></div>
                                </div>

                                <div className="hidden md:block md:w-[53%]"></div>

                            </div>
                        );
                    })}
                </div>

            </div>

            <div className="mt-16">
                <button
                    onClick={scrollToTop}
                    className="group inline-flex items-center gap-2 bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-600 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all hover:scale-105 active:scale-95 duration-200 whitespace-nowrap cursor-pointer"
                >
                    Back to Top <img src={sendImage} alt="Send icon" className="w-3.5 h-3.5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert object-contain rotate-[-90deg]" />
                </button>
            </div>
        </div>
    );
}