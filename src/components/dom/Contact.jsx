import Section from './Section'

const Contact = () => {
    return (
        <Section id="contact">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 max-w-4xl w-full text-center">
                <h2 className="text-4xl font-serif font-bold text-gray-800 mb-8 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                    Connect with Me
                </h2>

                <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                    I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
                    {/* Email */}


                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/sakthivelchandramohan" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </div>
                        <span className="text-gray-800 font-medium group-hover:text-blue-700 transition-colors">LinkedIn</span>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/initsakthi" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </div>
                        <span className="text-gray-800 font-medium group-hover:text-gray-800 transition-colors">GitHub</span>
                    </a>
                </div>
            </div>


        </Section >
    )
}

export default Contact
