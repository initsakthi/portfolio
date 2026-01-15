import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Scene from './components/canvas/Scene'
import Overlay from './components/dom/Overlay'
import Content from './components/dom/Content'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <div className="canvas-container">
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 2, 12]} fov={50} />
          <Suspense fallback={null}>
            <Scene setLoading={setLoading} />
          </Suspense>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            autoRotate={false}
            enableDamping={true}
            dampingFactor={0.05} // Smooth damping
          />
        </Canvas>
      </div>

      <Content />
      <Overlay loading={loading} />
    </>
  )
}

export default App
