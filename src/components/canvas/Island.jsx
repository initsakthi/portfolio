import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
    const islandRef = useRef()
    // Use a try-catch-like approach by checking if nodes exist, but useGLTF throws if file missing
    const { nodes, materials, scene } = useGLTF('/assets/3d/island.glb')
    const { viewport } = useThree()
    const lastX = useRef(0)
    const rotationSpeed = useRef(0)
    const dampingFactor = 0.95

    const handlePointerDown = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setIsRotating(true)
        const clientX = e.touches ? e.touches[0].clientX : e.clientX
        lastX.current = clientX
    }

    const handlePointerUp = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setIsRotating(false)
    }

    const handlePointerMove = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX
            const delta = (clientX - lastX.current) / viewport.width
            islandRef.current.rotation.y += delta * 0.01 * Math.PI
            lastX.current = clientX
            rotationSpeed.current = delta * 0.01 * Math.PI
        }
    }

    useFrame(() => {
        if (!isRotating) {
            // Auto-rotation (always active when not dragging)
            islandRef.current.rotation.y += 0.0002

            // Damping logic for momentum after drag (optional, blending both)
            rotationSpeed.current *= dampingFactor
            if (Math.abs(rotationSpeed.current) > 0.001) {
                islandRef.current.rotation.y += rotationSpeed.current
            }
        } else {
            const rotation = islandRef.current.rotation.y
            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)

            if (normalizedRotation >= 5.45 && normalizedRotation <= 5.85) setCurrentStage(4)
            else if (normalizedRotation >= 0.85 && normalizedRotation <= 1.3) setCurrentStage(3)
            else if (normalizedRotation >= 2.4 && normalizedRotation <= 2.6) setCurrentStage(2)
            else if (normalizedRotation >= 4.25 && normalizedRotation <= 4.75) setCurrentStage(1)
            else setCurrentStage(null)
        }
    })

    useEffect(() => {
        const scroller = document.querySelector('.overflow-y-auto')
        if (!scroller) return

        let lastScrollTop = scroller.scrollTop

        const handleScroll = () => {
            const scrollTop = scroller.scrollTop
            const rotationFactor = (scrollTop - lastScrollTop) * 0.005 // Adjust multiplier for sensitivity

            // Apply rotation directly based on scroll movement
            if (islandRef.current) {
                islandRef.current.rotation.y += rotationFactor
            }

            lastScrollTop = scrollTop
        }

        scroller.addEventListener('scroll', handleScroll)

        document.addEventListener('pointerdown', handlePointerDown)
        document.addEventListener('pointerup', handlePointerUp)
        document.addEventListener('pointermove', handlePointerMove)

        return () => {
            scroller.removeEventListener('scroll', handleScroll)
            document.removeEventListener('pointerdown', handlePointerDown)
            document.removeEventListener('pointerup', handlePointerUp)
            document.removeEventListener('pointermove', handlePointerMove)
        }
    }, [isRotating])

    // SAFE RENDERING: Use primitive object={scene} to avoid node name errors
    return (
        <a.group ref={islandRef} {...props}>
            <primitive object={scene} />
        </a.group>
    )
}

export default Island
