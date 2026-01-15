import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Section = ({ children, id, className = "" }) => {
    const sectionRef = useRef()

    useEffect(() => {
        const el = sectionRef.current

        gsap.fromTo(el,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%", // Start when top of section is 80% down viewport
                    toggleActions: "play none none reverse",
                    scroller: ".overflow-y-auto" // Important: define the scroller since we have a custom overflow div
                }
            }
        )
    }, [])

    return (
        <section ref={sectionRef} id={id} className={`min-h-screen w-full flex items-center justify-center p-6 md:p-16 opacity-0 ${className}`}>
            <div className="max-w-7xl w-full mx-auto pointer-events-auto">
                {children}
            </div>
        </section>
    )
}

export default Section
