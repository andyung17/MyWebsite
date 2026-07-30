import React from 'react';

export default function Projects() {
    const projects = [
        {
            title: 'SteamProfileTrends',
            description: 'A full-stack personal application featuring a Vue.js frontend and a Prisma-managed relational database with typed SQL queries.',
            tags: ['Vue.js', 'Prisma', 'TypeScript', 'PostgreSQL'],
            date: '2026 - Present',
            github: 'https://github.com/andyung17/SteamProfileTrends'
        },
        {
            title: 'Machine Learning Genre Recommendation Engine',
            description: 'A Python-based recommendation engine utilizing Scikit-Learn to process game genres, descriptive tags, and vector similarity matrices.',
            tags: ['Python', 'Scikit-Learn', 'Machine Learning'],
            date: '2026 - Present',
            github: 'https://github.com/andyung17/Genre-Recommendation-Model'
        },
        {
            title: 'Discord Bot',
            description: 'Developed an interactive community bot featuring custom command handling, automated moderation utilities, and real-time event triggers.',
            tags: ['Node.js', 'JavaScript', 'Discord API', 'Heroku'],
            date: '2023',
            github: null
        },
        {
            title: 'Facial Recognition System',
            description: 'Built a computer vision application utilizing Dlib and OpenCV for real-time facial landmark detection, alignment, and identification.',
            tags: ['Python', 'Dlib', 'OpenCV', 'Computer Vision'],
            date: '2022',
            github: 'https://github.com/andyung17/FacialRecognition'
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight inline-block relative pb-3">
                    Projects
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
                </h1>
                <p className="text-slate-600 text-sm md:text-base mt-4 max-w-lg">
                    A few applications and systems I have built.
                </p>
            </div>

            <div className="relative w-full max-w-4xl">

                <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-slate-200 hidden md:block"></div>

                <div className="space-y-12">
                    {projects.map((project, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div key={project.title} className={`flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>

                                <div className="w-full md:w-[53%]">
                                    <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg text-left transition-all hover:border-blue-300 flex flex-col justify-between h-full">

                                        <div>
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                                                <h3 className="text-slate-900 font-bold text-xl leading-snug">{project.title}</h3>
                                                <span className="text-[11px] font-semibold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl border border-blue-200 text-center leading-tight self-start sm:self-auto">
                                                    {project.date}
                                                </span>
                                            </div>

                                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-slate-100 mt-auto">
                                            <div className="flex flex-wrap gap-2 mb-5">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200 font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 px-4 py-2 rounded-xl transition-all"
                                                >
                                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                                    </svg>
                                                    View Repository →
                                                </a>
                                            )}
                                        </div>

                                    </div>
                                </div>

                                <div className="hidden md:flex md:w-[14%] justify-center relative">
                                    <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md z-10"></div>
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
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 px-5 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                    ↑ Back to Top
                </button>
            </div>
        </div>
    );
}