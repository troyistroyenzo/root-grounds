"use client"

import * as THREE from 'three'
import { useRef, useState, useEffect, useMemo } from 'react'
import { easing } from 'maath'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Center, Caustics, Environment, Lightformer, RandomizedLight, PerformanceMonitor, AccumulativeShadows, MeshTransmissionMaterial } from '@react-three/drei'
import { Suspense } from 'react'

const innerMaterial = new THREE.MeshStandardMaterial({
  transparent: true,
  opacity: 1,
  color: '#E6ECE8',
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
    if (typeof document !== 'undefined') {
      // Access document and perform necessary operations here
    }
  }, [])
  
  return (
    <a style={{ fontSize: '25px', fontWeight: 900, letterSpacing: 2 }} href="https://form.jotform.com/rootandgrounds/order-form" target='_blank'> 
      <Canvas
        shadows
        dpr={[1, perfSucks ? 1.5 : 2]}
        camera={{ position: [100, 100, 300], fov: 50 }}>
        <PerformanceMonitor onDecline={() => degrade(false)} />
        <color attach="background" args={['#F8F8F8']} />
        <Suspense fallback={null}>
          <group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
            <Scene />
            <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.1} color="white" scale={20} position={[0, -1.805, 0]}>
              <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
            </AccumulativeShadows>
          </group>
          <Env perfSucks={perfSucks} />
        </Suspense>
      </Canvas>
    </a>
  )
}

function Scene(props) {
  const { nodes, materials } = useGLTF('coffee.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object001_Object001_mtl_0.geometry}
        material={materials.Object001_mtl}
        position={[0.6, 0.7, 0]}
        scale={[0.15, 0.15, 0.15]}
        rotation={[-1.5, 0.2, 0.1]} 
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

      easing.damp3(ref.current.rotation, [Math.PI / 2, 0, time + x], 0.2, delta)
      easing.damp3(state.camera.position, [Math.sin(x / 4) * 9, 1.25 + y, Math.cos(x / 4) * 9], 0.5, delta)
      state.camera.lookAt(0, 0, 0)
    }
  })

  return (
    <Environment frames={perfSucks ? 1 : Infinity} preset="city" resolution={256} background blur={0.8}>
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer key={i} intensity={1} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
        ))}
      </group>
      <group ref={ref}>
        <Lightformer intensity={5} form="ring" color="#E6ECE8" rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[10, 10, 1]} />
      </group>
    </Environment>
  )
}
