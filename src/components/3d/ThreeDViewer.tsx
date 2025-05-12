
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, useTexture, Sphere, Box, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// Available model types
type ModelType = 'geometric' | 'earth' | 'space';

interface ThreeDViewerProps {
  type: ModelType;
}

// Geometric shapes model
const GeometricModel = () => {
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);

  // Animate the models
  useFrame((state) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.005;
      boxRef.current.rotation.y += 0.005;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.003;
      torusRef.current.rotation.y += 0.002;
    }
    if (icoRef.current) {
      icoRef.current.rotation.x -= 0.003;
      icoRef.current.rotation.y -= 0.004;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Box 
        ref={boxRef}
        args={[1, 1, 1]} 
        position={[-1.5, 0, 0]}
      >
        <meshStandardMaterial color="#8B5CF6" />
      </Box>
      
      <Torus 
        ref={torusRef}
        args={[0.6, 0.2, 16, 32]} 
        position={[0, 0, 0]}
      >
        <meshStandardMaterial color="#06B6D4" />
      </Torus>
      
      <Icosahedron
        ref={icoRef}
        args={[0.7, 1]} 
        position={[1.5, 0, 0]}
      >
        <meshStandardMaterial color="#EC4899" wireframe />
      </Icosahedron>
    </group>
  );
};

// Earth model
const EarthModel = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  
  // Load textures
  const props = useTexture({
    map: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    bumpMap: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
  });

  // Animate the earth
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={earthRef} args={[1.5, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        {...props} 
        bumpScale={0.05}
      />
    </Sphere>
  );
};

// Space model
const SpaceModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Load textures
  const sunTexture = useTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/sun.jpg');
  const marsTexture = useTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/mars.jpg');

  // Animate the models
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Sun */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial map={sunTexture} emissive="#FFA500" emissiveIntensity={0.5} />
      </Sphere>
      
      {/* Orbit path */}
      <mesh rotation-x={Math.PI/2}>
        <ringGeometry args={[2.5, 2.52, 64]} />
        <meshBasicMaterial color="#666" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Planet */}
      <Sphere args={[0.4, 32, 32]} position={[2.5, 0, 0]}>
        <meshStandardMaterial map={marsTexture} />
      </Sphere>
    </group>
  );
};

// Main 3D viewer component
const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ type }) => {
  // Select the appropriate model based on type
  const Model = useMemo(() => {
    switch (type) {
      case 'geometric':
        return <GeometricModel />;
      case 'earth':
        return <EarthModel />;
      case 'space':
        return <SpaceModel />;
      default:
        return <GeometricModel />;
    }
  }, [type]);

  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="h-full w-full outline-none"
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* The selected model */}
        {Model}
        
        {/* Camera controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={10}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDViewer;
