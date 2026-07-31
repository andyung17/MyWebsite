import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import faceImage from '../assets/face.jpeg';
import letterImage from '../assets/letter.png';
import resumeImage from '../assets/resume.png';
import sendImage from '../assets/send.png';
import resumeFile from '../assets/Andy_Ung_Resume.pdf';

export default function About() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [typedText, setTypedText] = useState('');
    const fullText = 'OMSCS | AI Specialization';

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 50);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        let timeoutId: ReturnType<typeof setTimeout>;

        const animate = () => {
            if (!isDeleting) {
                if (currentIndex <= fullText.length) {
                    setTypedText(fullText.slice(0, currentIndex));
                    currentIndex++;
                    timeoutId = setTimeout(animate, 80);
                } else {
                    timeoutId = setTimeout(() => {
                        isDeleting = true;
                        animate();
                    }, 2000);
                }
            } else {
                if (currentIndex >= 0) {
                    setTypedText(fullText.slice(0, currentIndex));
                    currentIndex--;
                    timeoutId = setTimeout(animate, 40);
                } else {
                    timeoutId = setTimeout(() => {
                        isDeleting = false;
                        currentIndex = 0;
                        animate();
                    }, 500);
                }
            }
        };

        animate();

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={`max-w-6xl mx-auto px-4 pt-16 pb-16 transition-all duration-700 ease-out transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

            <div className="text-center mb-12 flex flex-col items-center">
                <h1 className="text-5xl font-bold text-slate-950 tracking-tighter mb-4 inline-block relative pb-3">
                    About Me
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
                </h1>
                <p className="text-slate-700 text-lg max-w-2xl mx-auto mb-6">
                    Software Engineer & AI Specialist pursuing an Online Master in Computer Science at Georgia Institute of Technology
                </p>

                <div className="flex items-center gap-3 mt-2">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-5 py-2.5 rounded-full text-sm shadow-sm transition-all hover:scale-105 active:scale-95 duration-200 cursor-pointer"
                    >
                        <img src={letterImage} alt="Letter icon" className="w-5 h-5 object-contain" /> Get in Touch
                    </Link>
                    <a
                        href={resumeFile}
                        download="Andy_Ung_Resume.pdf"
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-medium px-5 py-2.5 rounded-full text-sm border border-slate-200 shadow-sm transition-all hover:scale-105 active:scale-95 duration-200 cursor-pointer"
                    >
                        <img src={resumeImage} alt="Resume icon" className="w-5 h-5 object-contain" /> Resume
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center -mb-3 relative z-10 select-none pointer-events-none">
                <div className="w-8 h-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-md"></div>
                <div className="w-10 h-6 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 rounded-xs border border-slate-400 shadow-md flex items-center justify-center">
                    <div className="w-4 h-2 bg-slate-600 rounded-full"></div>
                </div>
                <div className="w-6 h-5 bg-slate-200/40 border-x border-slate-400 flex flex-col items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-500 bg-white shadow-inner my-auto"></div>
                </div>
                <div className="w-16 h-3 bg-blue-900/20 border-t-2 border-x-2 border-slate-300 rounded-t-lg shadow-xs"></div>
            </div>

            <div className="max-w-4xl mx-auto bg-blue-50/70 px-8 py-7 sm:px-10 sm:py-8 rounded-3xl shadow-lg border-2 border-l-4 border-l-blue-400 border-slate-200 hover:bg-blue-100/60 hover:shadow-xl transition-all duration-300">

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 border-b border-slate-200/60 pb-6 text-center sm:text-left">
                    <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center border border-blue-100 shrink-0 shadow-inner overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img
                            src={faceImage}
                            alt="Andy Ung Avatar"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>

                    <div className="flex-grow pt-1 flex flex-col justify-center sm:justify-start items-center sm:items-start w-full">
                        <h2 className="text-3xl font-bold text-slate-950">Andy Ung</h2>
                        <p className="text-slate-600 font-medium text-xs tracking-wider mt-1">SOFTWARE ENGINEER</p>
                        <p className="text-blue-600 font-medium text-xs tracking-wider mt-1">
                            OTTAWA, ON, CANADA
                        </p>

                        <div className="mt-3 w-full max-w-xs bg-black rounded-xl px-4 py-2.5 shadow-md border border-slate-800 text-left">
                            <p className="text-xs font-mono text-emerald-400 tracking-tight flex items-center gap-1.5">
                                <span className="text-slate-500">$</span> {typedText}
                                <span className="w-1.5 h-3 bg-emerald-400 animate-pulse inline-block"></span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                        Passionate about building scalable backend services, full-stack web applications, and artificial intelligence models. Currently expanding technical knowledge through a Online Master of Science in Computer Science (OMSCS) program at Georgia Tech, specializing in Artificial Intelligence.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'C++', 'React', 'PostgreSQL', 'Artificial Intelligence', 'Prisma', 'Masters Program'].map(skill => (
                            <span
                                key={skill}
                                className="bg-white text-slate-800 px-3 py-1 rounded-full text-xs font-medium border border-slate-200 shadow-2xs hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <Link
                        to="/skills"
                        className="group inline-flex items-center gap-2 bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-600 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all hover:scale-105 active:scale-95 duration-200 whitespace-nowrap cursor-pointer"
                    >
                        View More
                        <img src={sendImage} alt="Send icon" className="w-3.5 h-3.5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
                    </Link>
                </div>
            </div>
        </div>
    );
}