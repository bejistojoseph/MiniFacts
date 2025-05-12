
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Available model types
type ModelType = 'geometric' | 'earth' | 'space';

interface ThreeDViewerProps {
  type: ModelType;
}

// Geometric shapes model
const GeometricModel = () => {
  const boxRef = useRef<THREE.Mesh>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);
  const icoRef = useRef<THREE.Mesh>(null!);

  // Animate the models
  useFrame(() => {
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
      <mesh ref={boxRef} position={[-1.5, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8B5CF6" />
      </mesh>
      
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
        <meshStandardMaterial color="#06B6D4" />
      </mesh>
      
      <mesh ref={icoRef} position={[1.5, 0, 0]}>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial color="#EC4899" wireframe />
      </mesh>
    </group>
  );
};

// Earth model
const EarthModel = () => {
  const earthRef = useRef<THREE.Mesh>(null!);
  
  // Create textures
  const earthTexture = useMemo(() => {
    const texture = new THREE.TextureLoader().load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'
    );
    return texture;
  }, []);
  
  const earthBumpMap = useMemo(() => {
    const texture = new THREE.TextureLoader().load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg'
    );
    return texture;
  }, []);

  // Animate the earth
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={earthRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial 
        map={earthTexture}
        bumpMap={earthBumpMap}
        bumpScale={0.05}
      />
    </mesh>
  );
};

// Space model
const SpaceModel = () => {
  const groupRef = useRef<THREE.Group>(null!);
  
  // Create textures
  const sunTexture = useMemo(() => {
    return new THREE.TextureLoader().load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/sun.jpg'
    );
  }, []);
  
  const marsTexture = useMemo(() => {
    return new THREE.TextureLoader().load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/mars.jpg'
    );
  }, []);

  // Animate the models
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={sunTexture} emissive="#FFA500" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Orbit path */}
      <mesh rotation-x={Math.PI/2}>
        <ringGeometry args={[2.5, 2.52, 64]} />
        <meshBasicMaterial color="#666" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Planet */}
      <mesh position={[2.5, 0, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial map={marsTexture} />
      </mesh>
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
        gl={{ alpha: true, antialias: true }}
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
