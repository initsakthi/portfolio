import Section from './Section'

const About = () => {
    return (
        <Section id="about-me">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-8 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                About Me
            </h2>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/50">
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    Enthusiastic MCA student skilled in Java, Python, and full-stack development. Passionate about building scalable applications, data-driven solutions, and exploring emerging technologies in software and machine learning.
                </p>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2">Education</h3>

                    {/* Education Items */}
                    <div className="relative border-l-4 border-accent-blue pl-6 ml-2">
                        {/* MCA */}
                        <div className="mb-8 relative">
                            <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-accent-blue border-4 border-white shadow-sm"></div>
                            <h4 className="text-xl font-bold text-gray-900">Master of Computer Applications (MCA)</h4>
                            <p className="text-accent-blue font-semibold">Mepco Schlenk Engineering College, Sivakasi</p>
                            <p className="text-sm text-gray-500 mb-1">Aug 2024 – Present | CGPA: 8.28</p>
                        </div>

                        {/* BSc IT */}
                        <div className="mb-8 relative">
                            <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow-sm"></div>
                            <h4 className="text-xl font-bold text-gray-900">Bachelor of Science in Information Technology</h4>
                            <p className="text-accent-blue font-semibold">The American College, Madurai</p>
                            <p className="text-sm text-gray-500 mb-1">Aug 2021 – May 2024 | CGPA: 7.25</p>
                        </div>

                        {/* HSC */}
                        <div className="relative">
                            <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow-sm"></div>
                            <h4 className="text-xl font-bold text-gray-900">Higher Secondary</h4>
                            <p className="text-accent-blue font-semibold">NVS Higher Secondary School</p>
                            <p className="text-sm text-gray-500">Computer Science & Mathematics | 8.5/10</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About
