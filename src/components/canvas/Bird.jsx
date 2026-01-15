import { useRef, useEffect, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const Bird = () => {
    const birdRef = useRef()
    const { scene, animations } = useGLTF('/assets/3d/bird.glb')
    const { actions } = useAnimations(animations, birdRef)

    // Play "Take 001" animation
    useEffect(() => {
        if (actions['Take 001']) {
            actions['Take 001'].play()
        }
    }, [actions])

    // Setup scroll based animation
    useLayoutEffect(() => {
        if (!birdRef.current) return

        // NOTE: We rely on GSAP's internal timer for this continuous loop, not ScrollTrigger scrubbing
        // because we want it to fly constantly, not just when scrolling.
        // If we want it to fly regardless of scroll:

        const tl = gsap.timeline({
            repeat: -1
        })

        // Initial state - Start relative to the island at z=0
        birdRef.current.position.set(13, 0, 0)
        birdRef.current.rotation.y = Math.PI / 2

        // Spiral Flight Path Orbiting the Island at [0, -2, 0]
        // Radius ~13 units
        tl.to(birdRef.current.position, {
            motionPath: {
                path: [
                    { x: 13, y: 0, z: 0 },    // Right
                    { x: 0, y: 1, z: 9 },     // Front 
                    { x: -13, y: 0, z: 0 },  // Left
                    { x: 0, y: -1, z: -9 },     // Back
                    { x: 13, y: 0, z: 0 }     // Return
                ],
                curviness: 1.5,
                autoRotate: true
            },
            duration: 25, // Significantly slower flight
            ease: "none"
        })

        return () => {
            tl.kill()
        }
    }, [])

    return (
        <group ref={birdRef} position={[-5, 2, 1]} scale={[0.01, 0.01, 0.01]}> {/* Smaller scale 0.01 */}
            <primitive object={scene} />
        </group>
    )
}

export default Bird
