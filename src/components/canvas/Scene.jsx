import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Stars } from '@react-three/drei'
import Island from './Island'
import Sky from './Sky'
import Bird from './Bird'

const Scene = ({ setLoading }) => {
    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(null)

    useEffect(() => {
        // Simulate asset loading or wait for real assets
        const timer = setTimeout(() => {
            if (setLoading) setLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [setLoading])

    return (
        <>
            {/* Summer Atmosphere: Less fog, warmer light */}
            <fog attach="fog" args={['#a6d1ff', 30, 200]} /> {/* Very distant/light fog */}
            <ambientLight intensity={1.5} color="#fffde7" /> {/* Warm bright ambient */}
            <directionalLight
                position={[5, 10, 5]}
                intensity={1.5} // Stronger sunlight
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-bias={-0.0001}
                color="#fff8e1" // Warm Sunny Color
            />

            <Sky />

            {/* Island: Centered, Static (Rotation handled internally), Scaled [1,1,1] */}
            <Island
                position={[0, -2, 0]}
                rotation={[0.1, 4.7077, 0]}
                scale={[0.2, 0.2, 0.2]}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
            />

            <Bird />

            <Environment preset="city" />
        </>
    )
}

export default Scene
