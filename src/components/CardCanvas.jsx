import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function Shape({ shape, color, isActive }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const speed = isActive ? 0.4 : 0.15
    meshRef.current.rotation.x = state.clock.elapsedTime * speed
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.7
  })

  const getGeometry = () => {
    switch (shape) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />
      case 'torusKnot':
        return <torusKnotGeometry args={[0.6, 0.25, 100, 24]} />
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[0.9, 0]} />
      case 'torus':
        return <torusGeometry args={[0.65, 0.28, 24, 48]} />
      case 'cone':
        return <coneGeometry args={[0.8, 1.4, 6]} />
      case 'tetrahedron':
        return <tetrahedronGeometry args={[1, 0]} />
      default:
        return <icosahedronGeometry args={[1, 0]} />
    }
  }

  return (
    <Float speed={isActive ? 2 : 0.8} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={meshRef} scale={isActive ? 1 : 0.75}>
        {getGeometry()}
        <meshPhysicalMaterial
          color={color}
          metalness={0.8}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={isActive ? 0.85 : 0.35}
        />
      </mesh>
    </Float>
  )
}

export default function CardCanvas({ shape, color, isActive }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 3.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-3, -2, 4]} intensity={0.3} color="#8888ff" />
      <pointLight position={[-2, -1, 3]} intensity={0.8} color={color} />
      <pointLight position={[2, 2, -2]} intensity={0.3} color="#ffffff" />
      <Shape shape={shape} color={color} isActive={isActive} />
    </Canvas>
  )
}
