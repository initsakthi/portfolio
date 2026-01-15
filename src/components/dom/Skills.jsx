import Section from './Section'

const skillCategories = [
    {
        title: "Languages",
        skills: ["Java", "Python", "C", "JavaScript"],
        icon: "💻"
    },
    {
        title: "Frameworks & Libs",
        skills: ["Angular", "React", "Node.js", "Express.js"],
        icon: "⚛️"
    },
    {
        title: "Databases",
        skills: ["MongoDB", "MySQL (SQL)"],
        icon: "🗄️"
    },
    {
        title: "Tools & Others",
        skills: ["Git", "VS Code", "Postman", "Jupyter NoteBook"],
        icon: "🛠️"
    }
]

const Skills = () => {
    return (
        <Section id="skills">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-8 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {skillCategories.map((category, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4 text-center">{category.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center border-b border-gray-100 pb-2">{category.title}</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {category.skills.map((skill, i) => (
                                <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Skills
