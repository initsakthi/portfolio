import { useState } from 'react'

const Overlay = ({ loading }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    if (loading) {
        return (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-blue-100/80 backdrop-blur-sm transition-opacity duration-1000" style={{ pointerEvents: 'all' }}>
                <div className="text-3xl font-bold text-accent-blue animate-pulse">Loading World...</div>
            </div>
        )
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
            {/* Header / Like Button */}
            <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-auto">
                <button
                    onClick={(e) => {
                        const newCount = (parseInt(localStorage.getItem('likes') || '0') + 1);
                        localStorage.setItem('likes', newCount);

                        // Blast effect
                        const rect = e.target.getBoundingClientRect();
                        const x = (rect.left + rect.width / 2) / window.innerWidth;
                        const y = (rect.top + rect.height / 2) / window.innerHeight;

                        import('canvas-confetti').then(({ default: confetti }) => {
                            confetti({
                                particleCount: 100,
                                spread: 70,
                                origin: { x, y },
                                colors: ['#ff0000', '#ff69b4', '#ffffff']
                            });
                        });
                    }}
                    className="bg-white/30 backdrop-blur-md p-3 rounded-full shadow-lg border border-white/40 cursor-pointer hover:bg-white/50 transition-all flex items-center justify-center group w-12 h-12"
                >
                    <span className="text-2xl group-hover:scale-125 transition-transform">❤️</span>
                </button>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="bg-white/30 backdrop-blur-md p-3 px-6 rounded-xl shadow-lg border border-white/40 hover:bg-white/50 transition-all font-bold text-gray-900 uppercase tracking-widest text-sm"
                >
                    {menuOpen ? 'Close' : 'Menu'}
                </button>
            </header>

            {/* Navigation Menu Visual Placeholder */}
            <div
                className={`absolute top-0 right-0 h-full w-full md:w-1/3 bg-white/95 backdrop-blur-2xl shadow-2xl transform transition-transform duration-500 ease-in-out pointer-events-auto flex flex-col pt-24 pl-8 pr-8 md:pl-12 md:pr-12 overflow-y-auto
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <span className="absolute top-6 left-12 text-sm text-gray-500 uppercase tracking-widest">Navigation</span>

                <nav className="flex flex-col space-y-6">
                    {[
                        { label: 'Home', href: '#' },
                        { label: 'About Me', href: '#about-me' },
                        { label: 'Skills', href: '#skills' },
                        { label: 'Projects', href: '#projects' },
                        { label: 'Achievements', href: '#achievements' },
                        { label: 'Resume', href: '#resume' },
                        { label: 'Contact', href: '#contact' }
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl md:text-3xl font-serif font-bold text-gray-800 hover:text-accent-blue hover:translate-x-4 transition-all duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>


            </div>

        </div>
    )
}

export default Overlay
