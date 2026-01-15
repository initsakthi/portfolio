import { useState, useEffect } from 'react'

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto flex items-center justify-start pointer-events-none z-10">
            <div className="px-6 md:px-12 max-w-4xl w-full pointer-events-auto">
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 md:p-12 shadow-2xl border border-white/40 transform hover:scale-[1.01] transition-transform duration-500">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                        Hi, I'm <span className="text-accent-blue inline-block hover:scale-105 transition-transform cursor-default">Sakthivel Chandramohan</span> <span className="animate-wave inline-block origin-bottom-right">👋</span>
                    </h1>
                    <p className="text-lg md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
                        A <span className="font-bold text-accent-blue">Backend Developer</span> from India
                    </p>

                    <a href="#about-me" className="inline-block bg-accent-blue text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base md:text-lg">
                        Explore My World
                    </a>
                </div>
            </div>

            <style jsx>{`
                @keyframes wave {
                    0% { transform: rotate(0deg); }
                    10% { transform: rotate(14deg); }
                    20% { transform: rotate(-8deg); }
                    30% { transform: rotate(14deg); }
                    40% { transform: rotate(-4deg); }
                    50% { transform: rotate(10deg); }
                    60% { transform: rotate(0deg); }
                    100% { transform: rotate(0deg); }
                }
                .animate-wave {
                    animation: wave 2.5s infinite;
                }
            `}</style>
        </section>
    )
}

export default Hero
