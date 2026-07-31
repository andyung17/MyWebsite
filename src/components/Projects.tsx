import React, { useEffect, useRef, useState } from 'react';
import sendImage from '../assets/send.png';

export default function Projects() {
    const [isLoaded, setIsLoaded] = useState(false);

    const projects = [
        {
            title: 'Steam Profile Analytics',
            description: 'Personal dashboard that tracks Steam playtime and provides key personal analytics with genre recommendations',
            tags: ['Vue.js', 'TypeScript', 'Python', 'Prisma', 'PostgreSQL'],
            date: '2026 - Present',
            github: 'https://github.com/andyung17/SteamProfileTrends',
            color: 'border-l-blue-400',
            bgAccent: 'bg-blue-50/70',
            hoverColor: 'hover:border-blue-400 hover:bg-blue-100/70',
            buttonHover: 'hover:bg-blue-600 hover:border-blue-600',
            align: 'left'
        },
        {
            title: 'Machine Learning Genre Recommendation Engine',
            description: 'A Python-based recommendation engine utilizing Scikit-Learn to process game details, tags, price, and vector similarity matrices to find recommendations.',
            tags: ['Python', 'Scikit-Learn', 'Machine Learning'],
            date: '2026 - Present',
            github: 'https://github.com/andyung17/Genre-Recommendation-Model',
            color: 'border-l-emerald-400',
            bgAccent: 'bg-emerald-50/70',
            hoverColor: 'hover:border-emerald-400 hover:bg-emerald-100/70',
            buttonHover: 'hover:bg-emerald-600 hover:border-emerald-600',
            align: 'right'
        },
        {
            title: 'Discord Bot',
            description: 'Developed an interactive community bot featuring custom command handling, and real-time event triggers to deliver airtime for shows.',
            tags: ['Node.js', 'JavaScript', 'Discord API', 'Heroku', 'Cronjob'],
            date: '2023',
            github: null,
            color: 'border-l-indigo-400',
            bgAccent: 'bg-indigo-50/70',
            hoverColor: 'hover:border-indigo-400 hover:bg-indigo-100/70',
            buttonHover: 'hover:bg-indigo-600 hover:border-indigo-600',
            align: 'left'
        },
        {
            title: 'Facial Recognition System',
            description: 'Built a computer vision application utilizing Dlib and OpenCV for real-time detection of photos to categorize family members.',
            tags: ['Python', 'Dlib', 'OpenCV', 'Computer Vision'],
            date: '2022',
            github: 'https://github.com/andyung17/FacialRecognition',
            color: 'border-l-rose-400',
            bgAccent: 'bg-rose-50/70',
            hoverColor: 'hover:border-rose-400 hover:bg-rose-100/70',
            buttonHover: 'hover:bg-rose-600 hover:border-rose-600',
            align: 'right'
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
                    Notable Projects
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
                </h1>
                <p className="text-slate-600 text-sm md:text-base mt-4 max-w-lg">
                    A few applications and systems I have built.
                </p>
            </div>

            <div className="w-full max-w-5xl relative flex flex-col items-center">
                {projects.map((project, index) => {
                    const isRight = project.align === 'right';
                    const isVisible = visibleItems[index];
                    const hasNext = index < projects.length - 1;

                    return (
                        <React.Fragment key={project.title}>
                            <div
                                ref={(el) => (itemRefs.current[index] = el)}
                                data-index={index}
                                className={`w-full flex ${isRight ? 'justify-end md:pr-4' : 'justify-start md:pl-4'} transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                    }`}
                            >
                                <div
                                    className={`w-full md:w-[70%] relative ${project.bgAccent} border-2 border-l-4 ${project.color} border-slate-200 ${project.hoverColor} rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col`}
                                >
                                    <div className="px-8 pt-8 pb-6 flex flex-col relative z-10">
                                        <h3 className="text-slate-900 font-bold text-xl leading-snug mb-3 text-center">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 text-center max-w-xl mx-auto">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs bg-white text-slate-700 px-3.5 py-1.5 rounded-xl border border-slate-200 font-semibold shadow-2xs">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="w-full border-t border-slate-200/60 relative z-10"></div>

                                    <div className="px-8 pt-5 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                                        <span className="text-xs font-bold bg-white text-slate-700 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs self-start sm:self-auto">
                                            {project.date}
                                        </span>

                                        {project.github ? (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`group inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-700 hover:text-white bg-white ${project.buttonHover} border border-slate-200 px-4 py-2.5 rounded-xl transition-all duration-300 whitespace-nowrap shadow-2xs self-stretch sm:self-auto`}
                                            >
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                                </svg>
                                                View Repository <img src={sendImage} alt="Send icon" className="w-3.5 h-3.5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
                                            </a>
                                        ) : (
                                            <span className="text-xs font-semibold text-slate-400 italic">
                                                Private Repository
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {hasNext && (
                                <div className="w-full flex justify-center my-2 h-14 relative pointer-events-none">
                                    <svg className="h-full w-48 overflow-visible" viewBox="0 0 100 50">
                                        <path
                                            d={isRight ? "M 80 0 Q 80 25 20 50" : "M 20 0 Q 20 25 80 50"}
                                            fill="none"
                                            stroke="#cbd5e1"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            <div className="mt-16">
                <div className="mt-16">
                    <button
                        onClick={scrollToTop}
                        className="group inline-flex items-center gap-2 bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-600 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all hover:scale-105 active:scale-95 duration-200 whitespace-nowrap cursor-pointer"
                    >
                        Back to Top <img src={sendImage} alt="Send icon" className="w-3.5 h-3.5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert object-contain rotate-[-90deg]" />
                    </button>
                </div>
            </div>
        </div>
    );
}