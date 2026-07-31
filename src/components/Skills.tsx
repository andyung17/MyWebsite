import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sendImage from '../assets/send.png';
import backendImage from '../assets/backend.png';
import computerImage from '../assets/computer.png';
import certificateImage from '../assets/certificate.png';

export default function Skills() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center transition-all duration-700 ease-out transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 [.dark_&]:text-white tracking-tight inline-block relative pb-3 mb-6">
                Skills & Certificates
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-12">
                Here are the technologies I work with and my certifications.
            </p>
            <br />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl text-left mb-6">
                <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-300">
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-3 flex items-center gap-2.5">
                            <img src={backendImage} alt="Backend icon" className="w-5 h-5 object-contain" />
                            Backend & Full-Stack
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">Python, C++, Node.js, React, Vue.js, PostgreSQL, Prisma.</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm flex flex-col justify-between hover:border-emerald-300 dark:hover:border-emerald-500 transition-colors duration-300">
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-3 flex items-center gap-2.5">
                            <img src={computerImage} alt="AI icon" className="w-5 h-5 object-contain" />
                            AI & Machine Learning
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">LLMs, Algorithms, Scikit-Learn, Recommendation Pipelines.</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-2xl text-left mb-10">
                <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors duration-300">
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-3 flex items-center gap-2.5">
                            <img src={certificateImage} alt="Certificate icon" className="w-5 h-5 object-contain" />
                            Certificates
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm italic">Currently learning!</p>
                    </div>
                </div>
            </div>

            <Link
                to="/experience"
                className="group inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-200 hover:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-600 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all hover:scale-105 active:scale-95 duration-200 whitespace-nowrap cursor-pointer"
            >
                View Experience
                <img src={sendImage} alt="Send icon" className="w-3.5 h-3.5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
            </Link>
        </div>
    );
}