import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './Achievements'
import Contact from './Contact'
import Resume from './Resume'

const Content = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-10 overflow-y-auto no-scrollbar scroll-smooth">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />

            <Resume />
            <Contact />

            {/* Footer */}
            <footer className="w-full bg-white/80 py-6 text-center text-gray-600 backdrop-blur-md">
                <p>&copy; {new Date().getFullYear()} Developed by <span className="text-blue-600 font-semibold">Sakthivel Chandramohan</span></p>
            </footer>
        </div>
    )
}

export default Content
