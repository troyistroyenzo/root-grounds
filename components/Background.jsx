"use client"

import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { easing } from 'maath'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  useGLTF,
  Center,
  Caustics,
  Environment,
  Lightformer,
  RandomizedLight,
  PerformanceMonitor,
  AccumulativeShadows,
  MeshTransmissionMaterial
} from '@react-three/drei'

const innerMaterial = new THREE.MeshStandardMaterial({
  transparent: true,
  opacity: 1,
  color: 'black',
  roughness: 0,
  side: THREE.FrontSide,
  blending: THREE.AdditiveBlending,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  envMapIntensity: 2
})

export default function App() {
  const [perfSucks, degrade] = useState(false)
  
  useEffect(() => {
    // Check if document is defined (browser environment)
    if (typeof document !== 'undefined') {
      // Access document and perform necessary operations here
    }
  }, [])
  
  return (
    <Canvas
      shadows
      dpr={[1, perfSucks ? 1.5 : 2]}
      camera={{ position: [100, 100, 300], fov: 50 }}>
      {/** PerfMon will detect performance issues */}
      <PerformanceMonitor onDecline={() => degrade(false)} />
      <color attach="background" args={['#f0f0f0']} />
      <group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
        <Scene />
      </group>
      <Env perfSucks={perfSucks} />
    </Canvas>
  )
}

function Scene(props) {
  // const { nodes, materials } = useGLTF('/glass-transformed.glb')
  const { nodes, materials } = useGLTF('coffee.glb')
  return (
    <group {...props} dispose={null}>
      {/* <mesh castShadow receiveShadow geometry={nodes.glass.geometry} material={materials.glass} /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object001_Object001_mtl_0.geometry}
        material={materials.Object001_mtl}
        position={[0.6, 0.7, 0]}
        scale={[0.12, 0.12, 0.12]}
        rotation={[-1.5, 0.2, 0.1]} // Adjust scale as needed
      />
    </group>
  )
}

function Env({ perfSucks }) {
  const ref = useRef()

  useFrame((state, delta) => {
    if (!perfSucks) {
      const time = state.clock.elapsedTime / 10
      const x = state.pointer.x
      const y = state.pointer.y

      // Smoothly animate rotation of the environment
      easing.damp3(ref.current.rotation, [Math.PI / 2, 0, time + x], 0.2, delta)

      // Smoothly animate camera position
      easing.damp3(state.camera.position, [Math.sin(x / 4) * 9, 1.25 + y, Math.cos(x / 4) * 9], 0.5, delta)

      // Make the camera look at the center of the scene
      state.camera.lookAt(0, 0, 0)
    }
  })
  // Runtime environments can be too slow on some systems, better safe than sorry with PerfMon
  // // preset="city" blur={0.8}
  return (
     <Environment  resolution={256} background > 
     
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer key={i} intensity={1} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
        ))}
      </group>
      <group ref={ref}>
        <Lightformer intensity={5} form="ring" color="white" rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[10, 10, 1]} />
      </group>
    </Environment>
  )
}
