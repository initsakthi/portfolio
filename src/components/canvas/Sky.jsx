import { useRef } from 'react'
import { Sky as SkyDrei, Cloud } from '@react-three/drei'

const Sky = ({ isRotating }) => {
    const skyRef = useRef()

    return (
        <group ref={skyRef}>
            {/* Background Gradient Sphere (optional backup) */}
            <mesh scale={[100, 100, 100]}>
                <sphereGeometry />
                <meshBasicMaterial color="#87CEEB" side={2} />
            </mesh>

            <SkyDrei
                distance={450000}
                sunPosition={[1, 0.5, 0]} // Angled sun for shadows/shining
                inclination={0}
                azimuth={0.25}
                turbidity={8}
                rayleigh={2} // Richer blue sky
                mieCoefficient={0.005}
                mieDirectionalG={0.9} // Stronger sun glare
            />

            {/* Fluffy Clouds */}
            <group position={[0, 10, -50]}>
                <Cloud opacity={0.6} speed={0.4} width={30} depth={5} segments={20} color="#ffffff" />
                <Cloud opacity={0.6} speed={0.4} width={30} depth={5} segments={20} color="#ffffff" position={[30, 0, -20]} />
                <Cloud opacity={0.6} speed={0.4} width={30} depth={5} segments={20} color="#ffffff" position={[-30, 0, -20]} />
            </group>
        </group>
    )
}

export default Sky
