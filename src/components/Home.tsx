import React from 'react';
import { Link } from 'react-router-dom';
import georgiaTechLogo from '../assets/georgia_tech.png';
import faceImage from '../assets/face.jpeg';

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-20">
            <div className="text-center mb-16 flex flex-col items-center">
                <h1 className="text-5xl font-bold text-slate-950 tracking-tighter mb-4">
                    About Me
                </h1>
                <p className="text-slate-700 text-lg max-w-2xl mx-auto mb-6">
                    Software Engineer & AI Specialist pursuing an Online Master of Science in Computer Science at Georgia Tech.
                </p>

                <div className="flex items-center gap-3 mt-2">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-full text-sm shadow-sm transition-all"
                    >
                        <span>✉️</span> Get in Touch
                    </Link>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-medium px-5 py-2.5 rounded-full text-sm border border-slate-200 shadow-sm transition-all"
                    >
                        <span>📄</span> Resume
                    </a>
                </div>
            </div>

            <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-lg border border-slate-100">

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 border-b border-slate-100 pb-8 text-center sm:text-left">
                    <div className="w-40 h-40 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 shrink-0 shadow-inner overflow-hidden">
                        <img
                            src={faceImage}
                            alt="Andy Ung Avatar"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>

                    <div className="flex-grow pt-1 flex flex-col sm:flex-row justify-between items-center sm:items-start w-full gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-950">Andy Ung</h2>
                            <p className="text-blue-600 font-medium text-xs tracking-wider mt-1">OTTAWA, ON, CANADA</p>
                        </div>

                        <div className="flex items-center gap-3 bg-white border-2 border-emerald-500 px-4 py-2 rounded-full shadow-sm">
                            <img
                                src={georgiaTechLogo}
                                alt="Georgia Tech Logo"
                                className="h-7 w-auto object-contain"
                            />
                            <div className="text-center border-l border-slate-100 pl-3">
                                <p className="text-xs font-semibold text-slate-900 leading-tight">OMSCS</p>
                                <p className="text-[10px] text-slate-600">AI Specialization</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                        Passionate about building scalable backend services, full-stack web applications, and artificial intelligence models. Currently expanding technical depth through the Online Master of Science in Computer Science (OMSCS) program at Georgia Tech, specializing in Artificial Intelligence. Experienced with TypeScript, Python, React, PostgreSQL, and Prisma.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2.5">
                        {['TypeScript', 'Python', 'React', 'PostgreSQL', 'Prisma', 'OMSCS AI', 'Machine Learning'].map(skill => (
                            <span
                                key={skill}
                                className="bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-medium border border-slate-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <Link
                        to="/skills"
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors whitespace-nowrap self-start sm:self-auto"
                    >
                        View More →
                    </Link>
                </div>
            </div>
        </div>
    );
}