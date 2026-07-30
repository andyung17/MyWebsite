import React from 'react';

export default function Skills() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight inline-block relative pb-3 mb-4">
                Skills
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
            </h1>
            <p className="text-slate-600 text-sm md:text-base mb-12">
                Here are the technologies and tools I work with daily.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl text-left mb-10">
                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 className="text-slate-900 font-bold text-lg mb-3 flex items-center gap-2"><span>⚙️</span> Backend & Full-Stack</h3>
                        <p className="text-slate-600 text-sm">TypeScript, Python, Node.js, React, Vue.js, PostgreSQL, Prisma.</p>
                    </div>
                </div>
                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 className="text-slate-900 font-bold text-lg mb-3 flex items-center gap-2"><span>🤖</span> AI & Machine Learning</h3>
                        <p className="text-slate-600 text-sm">LLMs, Prompt Engineering, Scikit-Learn, Recommendation Pipelines.</p>
                    </div>
                </div>
            </div>

            <a
                href="/experience"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 px-5 py-2.5 rounded-xl transition-all shadow-sm"
            >
                View Experience →
            </a>
        </div>
    );
}