import { useEffect, useRef, useState } from 'react';
import sendImage from '../assets/send.png';

export default function Experience() {
    const [isLoaded, setIsLoaded] = useState(false);

    const experiences = [
        {
            id: 'ford',
            role: 'Middleware Software Developer',
            company: 'Ford Motor Company',
            location: 'Ottawa, ON',
            date: 'May 2023 - Aug 2023',
            duration: '4 Months',
            type: 'Co-op',
            points: [
                'Engineered a high-throughput data pipeline using Python and RabbitMQ to stream ROS telemetry across 50+ vehicle hardware features and 1000+ lines of telemetry data, facilitating high-fidelity simulation testing.',
                'Architected a C++ API to collect 52+ real-time metrics from critical vehicle hardware, enabling live diagnostic overlays on the vehicle display.',
                'Authored test cases and test plans for a vehicle simulation suite using pytest, increasing test coverage by 30+ and surfacing critical defects before deployment, improving vehicle safety and reliability.'
            ],
            tags: ['Python', 'C++', 'RabbitMQ', 'Protobuf']
        },
        {
            id: 'bluwave',
            role: 'Backend Software Developer',
            company: 'Bluwave-AI',
            location: 'Ottawa, ON',
            date: 'May 2022 - Aug 2022',
            duration: '4 Months',
            type: 'Co-op',
            points: [
                'Built a data ingestion pipeline using Python, Node.js, and OpenCV to digitize legacy forecast charts, establishing a second validated data source used to cross-check and supplement the primary training dataset.',
                'Optimized inference logic to dynamically bypass low-value nighttime predictions, reducing cloud computational cost by 25% with zero impact on model accuracy.',
                'Monitored Kubernetes pod health via Prometheus, Grafana, and CLI tooling to maintain observability across a distributed microservice architecture.'
            ],
            tags: ['Python', 'Node.js', 'OpenCV', 'Kubernetes', 'Prometheus', 'Grafana', 'Golang', 'Microservices']
        },
        {
            id: 'transport',
            role: 'Full-Stack Software Developer',
            company: 'Government of Canada | Transport Canada',
            location: 'Ottawa, ON',
            date: 'Sept 2021 - Apr 2022',
            duration: '8 Months',
            type: 'Co-op',
            points: [
                'Optimized a relational database (Microsoft SQL Server), reducing average query execution time from 900ms to 300ms through query refactoring and index tuning.',
                'Shipped 5 core feature updates to an aircraft information system on Azure, gathering requirements through stakeholder meetings to streamline internal reporting workflows.',
                'Architected a data access layer using the DAO pattern in ASP.NET, decoupling business logic from data persistence to improve modularity, simplify unit testing, and eliminate duplicate query code.'
            ],
            tags: ['C#', 'Microsoft SQL Server', 'XML', 'Azure', 'ASP.NET', 'DAO Pattern']
        },
        {
            id: 'arkalumen',
            role: 'Software Designer',
            company: 'Arkalumen',
            location: 'Ottawa, ON',
            date: 'Jan 2021 - Apr 2021',
            duration: '4 Months',
            type: 'Co-op',
            points: [
                'Designed an extensible hardware abstraction layer in C#/MVVM Light Toolkit, enabling support for 10+ LED controller hardware models without requiring core product rewrites.',
                'Built real-time synchronization middleware between Firebase and a desktop application, syncing configuration data within seconds across 50+ customer deployments.'
            ],
            tags: ['C#', 'MVVM', 'Firebase']
        }
    ];

    const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({});
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 50);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const indexStr = entry.target.getAttribute('data-index');
                        if (indexStr !== null) {
                            const index = Number(indexStr);
                            setVisibleItems((prev) => ({ ...prev, [index]: true }));
                        }
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
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 [.dark_&]:text-white tracking-tight inline-block relative pb-3">
                    Experience
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mt-4 max-w-lg">
                    My professional career and software engineering background.
                </p>
            </div>

            <div className="relative w-full max-w-4xl">

                <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;
                        const isVisible = visibleItems[index];

                        return (
                            <div
                                key={exp.id}
                                ref={(el) => { itemRefs.current[index] = el; }}
                                data-index={index}
                                className={`flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''} transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                    }`}
                            >

                                <div className="w-full md:w-[53%]">
                                    <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-lg text-left transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 flex flex-col justify-between h-full">

                                        <div>
                                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-1">
                                                <h3 className="text-slate-900 dark:text-white font-bold text-xl leading-snug">{exp.role}</h3>
                                                <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                                                    <span className="text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-xl border border-blue-200 dark:border-blue-900 text-center leading-tight whitespace-nowrap">
                                                        {exp.date}
                                                    </span>
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-xl border border-blue-200 dark:border-blue-900 text-center leading-tight whitespace-nowrap">
                                                            {exp.type}
                                                        </span>
                                                        <span className="text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-xl border border-blue-200 dark:border-blue-900 text-center leading-tight whitespace-nowrap">
                                                            {exp.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6">
                                                {exp.company} <span className="text-slate-400 dark:text-slate-500 font-normal">• {exp.location}</span>
                                            </div>

                                            <div className="space-y-4 mb-6">
                                                {exp.points.map((point, pointIndex) => (
                                                    <div key={pointIndex}>
                                                        <div className="flex items-start gap-3">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0"></span>
                                                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                                                {point}
                                                            </p>
                                                        </div>
                                                        {pointIndex < exp.points.length - 1 && (
                                                            <div className="border-t border-slate-100 dark:border-slate-800 my-4"></div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tags.map(tag => (
                                                    <span key={tag} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="hidden md:flex md:w-[14%] justify-center relative">
                                    <div className={`w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-slate-950 shadow-md z-10 transition-transform duration-500 delay-200 ${isVisible ? 'scale-100' : 'scale-0'}`}></div>
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
                    className="group inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-200 hover:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-600 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all hover:scale-105 active:scale-95 duration-200 whitespace-nowrap cursor-pointer"
                >
                    Back to Top <img src={sendImage} alt="Send icon" className="w-3.5 h-3.5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert rotate-[-90deg]" />
                </button>
            </div>
        </div>
    );
}