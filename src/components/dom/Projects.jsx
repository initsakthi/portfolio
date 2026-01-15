import Section from './Section'

const projects = [
    {
        title: "Patient Food Recommendation System",
        year: "2025",
        description: "A full-stack web application recommending personalized meal plans for patients with health-based restrictions.",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "Rest APIs"],
        points: [
            "Developed a full-stack MERN application for health-based meal planning.",
            "Designed a responsive React UI for dynamic meal visualization."
        ],
        link: "#"
    },
    {
        title: "Market Basket Analysis Using Apriori",
        year: "2025",
        description: "Data mining project to extract product bundling insights from transaction data.",
        tech: ["Python", "Pandas", "mlxtend", "Matplotlib"],
        points: [
            "Applied Apriori algorithm to discover product associations.",
            "Generated rules to support cross-selling and marketing efficiency."
        ],
        link: "#"
    },
    {
        title: "Sentiment Analysis (Amazon Dataset)",
        year: "2024",
        description: "Performed sentiment classification on Amazon reviews using NLP techniques.",
        tech: ["Python", "NLTK", "VADER", "Matplotlib", "Seaborn"],
        points: [
            "Utilized VADER and NLP preprocessing for sentiment classification.",
            "Improved model accuracy through normalization and visualization."
        ],
        link: "#"
    },
    {
        title: "Sentiment Analysis (Twitter Dataset)",
        year: "2023",
        description: "Fine-tuned BERT transformer model for real-time tweet sentiment classification.",
        tech: ["Python", "BERT", "Transformers", "Twitter API"],
        points: [
            "Fine-tuned BERT model for high-accuracy sentiment detection.",
            "Evaluated performance using precision, recall, and F1-score."
        ],
        link: "#"
    }
]

const Projects = () => {
    return (
        <Section id="projects">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-8 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-xl border border-white/50 hover:transform hover:-translate-y-2 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-900 leading-tight">{project.title}</h3>
                            <span className="text-sm font-bold text-accent-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{project.year}</span>
                        </div>

                        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                        <div className="mb-4">
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Key Contributions</h4>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {project.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t, i) => (
                                <span key={i} className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Projects
