import Section from './Section'

const Resume = () => {
    return (
        <Section id="resume">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 max-w-4xl w-full text-center">
                <h2 className="text-4xl font-serif font-bold text-gray-800 mb-8 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                    My Resume
                </h2>

                <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                    Check out my resume to see my detailed work history, skills, and education.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    {/* 
                        UPLOAD INSTRUCTION: 
                        Move your PDF file to the 'public' folder in your project directory.
                        Name it 'resume.pdf'.
                        The path string '/resume.pdf' below automatically points to that file.
                    */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent-blue text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg flex items-center gap-2"
                    >
                        <span className="text-xl">📄</span> View Resume
                    </a>


                </div>
            </div>
        </Section>
    )
}

export default Resume
