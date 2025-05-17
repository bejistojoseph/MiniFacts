
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingObjectProps {
  position: [number, number, number];
  color: string;
  speed: number;
  size: number;
}

const FloatingCube: React.FC<FloatingObjectProps> = ({ position, color, speed, size }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!mesh.current) return;
    
    mesh.current.rotation.x += 0.01 * speed;
    mesh.current.rotation.y += 0.015 * speed;
    
    // Add a slight floating motion with a safer approach
    const time = Date.now() * 0.001 * speed;
    mesh.current.position.y = position[1] + Math.sin(time) * 0.1;
  });
  
  return (
    <Box 
      ref={mesh}
      args={[size, size, size]}
      position={position}
    >
      <meshStandardMaterial color={color} />
    </Box>
  );
};

const FloatingSphere: React.FC<FloatingObjectProps> = ({ position, color, speed, size }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!mesh.current) return;
    
    mesh.current.rotation.x += 0.005 * speed;
    mesh.current.rotation.z += 0.01 * speed;
    
    // Add a slight floating motion with a safer approach
    const time = Date.now() * 0.001 * speed;
    mesh.current.position.y = position[1] + Math.sin(time) * 0.1;
  });
  
  return (
    <Sphere 
      ref={mesh}
      args={[size, 16, 16]}
      position={position}
    >
      <meshStandardMaterial color={color} />
    </Sphere>
  );
};

const FloatingTorus: React.FC<FloatingObjectProps> = ({ position, color, speed, size }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!mesh.current) return;
    
    mesh.current.rotation.x += 0.01 * speed;
    mesh.current.rotation.y += 0.005 * speed;
    
    // Add a slight floating motion with a safer approach
    const time = Date.now() * 0.001 * speed;
    mesh.current.position.y = position[1] + Math.sin(time) * 0.1;
  });
  
  return (
    <Torus 
      ref={mesh}
      args={[size * 1.5, size * 0.5, 16, 32]}
      position={position}
    >
      <meshStandardMaterial color={color} />
    </Torus>
  );
};

const ProcessorCore: React.FC = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += 0.01;
  });
  
  return (
    <group ref={group}>
      <RoundedBox args={[1.8, 1.8, 1.8]} radius={0.2} position={[0, 0, 0]}>
        <meshStandardMaterial color="#5046e5" />
      </RoundedBox>
      
      <Torus args={[2.2, 0.1, 16, 32]} position={[0, 0, 0]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#4299e1" />
      </Torus>
      
      <Torus args={[2.2, 0.1, 16, 32]} position={[0, 0, 0]} rotation={[0, Math.PI/2, 0]}>
        <meshStandardMaterial color="#4299e1" />
      </Torus>
      
      <Torus args={[2.2, 0.1, 16, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4299e1" />
      </Torus>
    </group>
  );
};

const DataParticles: React.FC = () => {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  const points = useRef<THREE.Points>(null);
  
  useEffect(() => {
    const bufferGeometry = new THREE.BufferGeometry();
    
    // Create random particles around the center
    const count = 300;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 8;
      positions[i3 + 1] = (Math.random() - 0.5) * 8;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;
    }
    
    bufferGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    setGeometry(bufferGeometry);
  }, []);
  
  useFrame(() => {
    if (!points.current) return;
    points.current.rotation.y += 0.001;
  });
  
  if (!geometry) return null;
  
  return (
    <points ref={points}>
      <primitive object={geometry} />
      <pointsMaterial size={0.05} color="#a0aec0" />
    </points>
  );
};

// This component avoids direct canvas manipulation and provides a more stable animation
const TechProcessor: React.FC = () => {
  return (
    <div className="w-full h-60 sm:h-80">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'default' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        
        {/* Central processor */}
        <ProcessorCore />
        
        {/* Data particles */}
        <DataParticles />
        
        {/* Floating elements with explicit position typing */}
        <FloatingCube position={[-2.5, 1.5, 0]} color="#3182ce" speed={1.2} size={0.5} />
        <FloatingCube position={[2.8, -1.2, 0]} color="#805ad5" speed={0.8} size={0.4} />
        <FloatingCube position={[0, 2.3, -1]} color="#38b2ac" speed={1} size={0.3} />
        
        <FloatingSphere position={[2.2, 1.8, -0.5]} color="#ed64a6" speed={1.3} size={0.35} />
        <FloatingSphere position={[-2, -1.5, 1]} color="#f56565" speed={0.9} size={0.45} />
        
        <FloatingTorus position={[-1.8, 0.8, -1]} color="#ecc94b" speed={1.1} size={0.25} />
      </Canvas>
    </div>
  );
};

export default TechProcessor;
