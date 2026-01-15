import Section from './Section'

const Achievements = () => {
    return (
        <Section id="achievements">
            {/* Certifications */}
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-8 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {[
                    { name: "Oracle Foundation Certificate", issuer: "Oracle University", year: "Jul 2025" },
                    { name: "Programming in Java", issuer: "NPTEL", year: "Jan 2025" },
                    { name: "Python for Data Science", issuer: "Infosys Springboard", year: "Apr 2025" },
                    { name: "Explore Machine Learning", issuer: "Infosys Springboard", year: "Apr 2025" },
                    { name: "Data Science & ML Training", issuer: "Infosys Springboard", year: "2025" }
                ].map((cert, i) => (
                    <div key={i} className="flex items-center bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/50">
                        <div className="bg-yellow-100 p-2 rounded-lg mr-4 text-yellow-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">{cert.name}</h4>
                            <p className="text-sm text-gray-500">{cert.issuer} • {cert.year}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Coursework & Interests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Coursework */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">Relevant Coursework</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Mobile Development", "Amazon Web Services", "AI/ML Training", "RDBMS",
                            "Operating Systems", "Data Mining", "Software Testing", "IoT", "Big Data Analytics"
                        ].map((course, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-50 text-blue-800 rounded text-sm font-medium border border-blue-100">{course}</span>
                        ))}
                    </div>
                </div>

                {/* Interests */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">Interests</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-gray-700 mb-1">Technical</h4>
                            <p className="text-gray-600 text-sm">Full-stack Development • Algorithmic Problem Solving • Machine Learning (Training & Evaluation)</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-700 mb-1">Non-Technical</h4>
                            <p className="text-gray-600 text-sm">Networking • PC Assembling • Gaming</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Achievements
