import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full py-8 bg-white border-t border-slate-100 mt-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <p className="text-xs text-slate-400 font-medium">
                    ANDY UNG &copy;{new Date().getFullYear()}
                </p>
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/andyung17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/andy-ung-76b970194/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}