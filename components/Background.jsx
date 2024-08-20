"use client"

import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';
import { easing } from 'maath';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, AccumulativeShadows, Environment, Lightformer, PerformanceMonitor, RandomizedLight } from '@react-three/drei';
import { Suspense } from 'react';
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

const innerMaterial = new THREE.MeshStandardMaterial({
  transparent: true,
  opacity: 1,
  color: '#FFFFFF',
  roughness: 0,
  side: THREE.FrontSide,
  blending: THREE.AdditiveBlending,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  envMapIntensity: 2
})


const Overlay = () => {
  return (
    <Flex
      w={'75%'}
      h={'60vh'}
      position="absolute"
      margin={10}
      align="center"
      justify="center"
      zIndex={1} // Ensure the component overlays on top of the Canvas
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={'full'} align={'flex-start'} spacing={5}>
          <Text
            color={'#1a202c'}
            outlineColor={'black'}
            letterSpacing={-1.2}
            fontWeight={800}
            lineHeight={1}
            fontFamily={'inter'}
            fontSize={useBreakpointValue({ base: '5xl', md: '7xl' })}
          >
           Elevating the Mundane with Better Foods
          </Text>
          <Text
            color={'#1a202c'}
            fontWeight={400}
            lineHeight={1.2}
            letterSpacing={-1.2}
            fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
          >
            We are a one-stop-shop for curated food picks.
          </Text>
          <Stack direction={'row'}>
            <a href="https://form.jotform.com/rootandgrounds/order-form">
              <Button
                color={'#FFFFFF'}
                bg={'#FF5757'}
                fontWeight={650}
                fontSize={'1xl'}
                padding={'1rem'}
                sx={{
                  _hover: {
                    bg: 'linear-gradient(78deg, rgba(159, 122, 234, 0.7) 0%, rgba(255, 97, 218, 0.7) 50%)',
                    textDecoration: 'none',
                  },
                  _before: {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bg: 'linear-gradient(to right, rgba(87, 161, 152, 0.7), rgba(87, 161, 152, 0.3))',
                    opacity: 0,
                    transition: 'opacity 0.2s ease-in-out',
                  },
                  _hover: {
                    _before: {
                      opacity: 1,
                    },
                  },
                }}
              >
                Order Now
              </Button>
            </a>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default function App() {
  const [perfSucks, degrade] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Access document and perform necessary operations here
    }
  }, []);

  return (
    <>
    <Overlay />
    <Canvas
        shadows
        dpr={[1, perfSucks ? 1.5 : 2]}
        camera={{ position: [100, 100, 300], fov: 50 }}>
        <PerformanceMonitor onDecline={() => degrade(false)} />
        <color attach="#FF5757" args={['#000000']} />
        <Suspense fallback={null}>
          <group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
            <Scene />
            <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.1} color="white" scale={20} position={[0, -210.805, 0]}>
              <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
            </AccumulativeShadows>
          </group>
          <Env perfSucks={perfSucks} />
        </Suspense>
      </Canvas>
      
    </>
  );
}

function Scene(props) {
  const { nodes, materials } = useGLTF('coffee-gold.glb')
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
    <Environment frames={perfSucks ? 1 : Infinity} preset="studio" resolution={256} background blur={0.8}>
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer key={i} intensity={1} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
        ))}
      </group>
      <group ref={ref}>

      </group>
    </Environment>
  )
}