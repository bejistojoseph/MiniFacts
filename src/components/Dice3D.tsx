
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface DiceProps {
  isRolling: boolean;
  onRollComplete: (value: number) => void;
}

// Dice face positions and rotations for a standard dice
const diceFaces = [
  { position: [0, 0, 1], rotation: [0, 0, 0], dots: 1 }, // Front face (1)
  { position: [0, 0, -1], rotation: [0, Math.PI, 0], dots: 6 }, // Back face (6)
  { position: [0, 1, 0], rotation: [Math.PI / 2, 0, 0], dots: 2 }, // Top face (2)
  { position: [0, -1, 0], rotation: [-Math.PI / 2, 0, 0], dots: 5 }, // Bottom face (5)
  { position: [1, 0, 0], rotation: [0, Math.PI / 2, 0], dots: 3 }, // Right face (3)
  { position: [-1, 0, 0], rotation: [0, -Math.PI / 2, 0], dots: 4 } // Left face (4)
];

// Component for individual dice face with dots
const DiceFace: React.FC<{
  position: number[];
  rotation: number[];
  dots: number;
  size?: number;
}> = ({ position, rotation, dots, size = 1 }) => {
  // Render dots based on face value
  const renderDots = () => {
    const dotPositions = [];
    const dotSize = 0.15;
    
    switch (dots) {
      case 1: // Center dot
        dotPositions.push([0, 0, 0.01]);
        break;
      case 2: // Diagonal dots
        dotPositions.push([-0.25, -0.25, 0.01], [0.25, 0.25, 0.01]);
        break;
      case 3: // Diagonal dots + center
        dotPositions.push([-0.25, -0.25, 0.01], [0, 0, 0.01], [0.25, 0.25, 0.01]);
        break;
      case 4: // Four corners
        dotPositions.push(
          [-0.25, -0.25, 0.01], [0.25, -0.25, 0.01], 
          [-0.25, 0.25, 0.01], [0.25, 0.25, 0.01]
        );
        break;
      case 5: // Four corners + center
        dotPositions.push(
          [-0.25, -0.25, 0.01], [0.25, -0.25, 0.01], 
          [0, 0, 0.01],
          [-0.25, 0.25, 0.01], [0.25, 0.25, 0.01]
        );
        break;
      case 6: // Six dots in 2 columns of 3
        dotPositions.push(
          [-0.25, -0.25, 0.01], [0.25, -0.25, 0.01], 
          [-0.25, 0, 0.01], [0.25, 0, 0.01], 
          [-0.25, 0.25, 0.01], [0.25, 0.25, 0.01]
        );
        break;
    }
    
    return dotPositions.map((pos, idx) => (
      <mesh key={idx} position={[pos[0], pos[1], pos[2]]} castShadow>
        <sphereGeometry args={[dotSize, 16, 16]} />
        <meshStandardMaterial color="#4a148c" roughness={0.3} />
      </mesh>
    ));
  };

  return (
    <group position={[position[0], position[1], position[2]]} rotation={[rotation[0], rotation[1], rotation[2]]}>
      {/* Face plane with rounded corners */}
      <mesh receiveShadow>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
      {/* Dots */}
      {renderDots()}
    </group>
  );
};

// The 3D dice with physics and animation
const Dice: React.FC<DiceProps> = ({ isRolling, onRollComplete }) => {
  const diceRef = useRef<THREE.Group>(null);
  const [rotationVector] = useState(() => new THREE.Vector3(
    Math.random() * 5 + 5, // Faster rotation
    Math.random() * 5 + 5,
    Math.random() * 5 + 5
  ));
  const [finalRotation] = useState(() => {
    // Random final rotation that will show one of the faces directly up
    const values = [0, Math.PI/2, Math.PI, 3*Math.PI/2, 2*Math.PI];
    return new THREE.Vector3(
      values[Math.floor(Math.random() * values.length)],
      values[Math.floor(Math.random() * values.length)],
      values[Math.floor(Math.random() * values.length)]
    );
  });
  
  const [rollTimer, setRollTimer] = useState(0);
  const [rollComplete, setRollComplete] = useState(false);
  
  // Reset the dice when isRolling changes to true
  useEffect(() => {
    if (isRolling) {
      setRollTimer(0);
      setRollComplete(false);
    }
  }, [isRolling]);
  
  // Animation for rolling dice
  useFrame((state, delta) => {
    if (!diceRef.current || !isRolling) return;
    
    if (rollTimer < 1.5) { // Reduced roll time for better UX
      // Initial fast rolling
      diceRef.current.rotation.x += rotationVector.x * delta;
      diceRef.current.rotation.y += rotationVector.y * delta;
      diceRef.current.rotation.z += rotationVector.z * delta;
      setRollTimer(prevTimer => prevTimer + delta);
    } else if (!rollComplete) {
      // Gradually slow down and stop at a face
      diceRef.current.rotation.x += (finalRotation.x - diceRef.current.rotation.x) * 0.15; // Faster stopping
      diceRef.current.rotation.y += (finalRotation.y - diceRef.current.rotation.y) * 0.15;
      diceRef.current.rotation.z += (finalRotation.z - diceRef.current.rotation.z) * 0.15;
      
      // Check if dice has almost stopped
      if (
        Math.abs(diceRef.current.rotation.x - finalRotation.x) < 0.01 &&
        Math.abs(diceRef.current.rotation.y - finalRotation.y) < 0.01 &&
        Math.abs(diceRef.current.rotation.z - finalRotation.z) < 0.01
      ) {
        setRollComplete(true);
        
        // Determine which face is facing up
        const upDirection = new THREE.Vector3(0, 1, 0);
        const faces = diceFaces.map((face, index) => {
          const faceNormal = new THREE.Vector3(face.position[0], face.position[1], face.position[2]);
          faceNormal.applyEuler(diceRef.current!.rotation);
          return {
            index,
            dots: face.dots,
            alignment: faceNormal.dot(upDirection)
          };
        });
        
        // Find face with highest y-component (facing up)
        const topFace = faces.reduce((prev, current) => {
          return (current.alignment > prev.alignment) ? current : prev;
        });
        
        // Return result based on which face is up (opposite face is actually the result)
        const result = 7 - topFace.dots; // In a standard dice, opposite faces sum to 7
        onRollComplete(result);
      }
    }
  });

  // Enhanced dice with beveled edges and proper construction
  return (
    <group ref={diceRef}>
      {/* Dice faces */}
      {diceFaces.map((face, idx) => (
        <DiceFace 
          key={idx} 
          position={face.position} 
          rotation={face.rotation} 
          dots={face.dots} 
          size={1.95} // Slightly smaller than 2 to avoid z-fighting
        />
      ))}
      
      {/* Create a slightly transparent cube for the dice body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial
          color="#f5f5f5"
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.1} // Subtle glass-like effect
        />
      </mesh>
      
      {/* Add subtle edge bevels */}
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(2, 2, 2)]} />
        <lineBasicMaterial attach="material" color="#dddddd" linewidth={1} />
      </lineSegments>
    </group>
  );
};

interface Dice3DProps {
  isRolling: boolean;
  onRollComplete: () => void;
}

const Dice3D: React.FC<Dice3DProps> = ({ isRolling, onRollComplete }) => {
  const handleRollComplete = (value: number) => {
    console.log(`Dice rolled: ${value}`);
    onRollComplete();
  };

  return (
    <div className="w-36 h-36 mx-auto">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Improved lighting for better visual quality */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.5} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        <Dice isRolling={isRolling} onRollComplete={handleRollComplete} />
      </Canvas>
    </div>
  );
};

export default Dice3D;
