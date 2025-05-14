
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Dice face textures could be added later for more realistic dice
const diceFaces = [
  { position: [0, 0, 1], rotation: [0, 0, 0], dots: 1 }, // Front face (1)
  { position: [0, 0, -1], rotation: [0, Math.PI, 0], dots: 6 }, // Back face (6)
  { position: [0, 1, 0], rotation: [Math.PI / 2, 0, 0], dots: 2 }, // Top face (2)
  { position: [0, -1, 0], rotation: [-Math.PI / 2, 0, 0], dots: 5 }, // Bottom face (5)
  { position: [1, 0, 0], rotation: [0, Math.PI / 2, 0], dots: 3 }, // Right face (3)
  { position: [-1, 0, 0], rotation: [0, -Math.PI / 2, 0], dots: 4 } // Left face (4)
];

interface DiceFaceProps {
  position: number[];
  rotation: number[];
  dots: number;
  size?: number;
}

const DiceFace: React.FC<DiceFaceProps> = ({ position, rotation, dots, size = 1 }) => {
  const faceGeometry = new THREE.PlaneGeometry(size, size);
  
  const renderDots = () => {
    const dotPositions = [];
    const dotSize = 0.15;
    
    switch (dots) {
      case 1:
        dotPositions.push([0, 0, 0.01]);
        break;
      case 2:
        dotPositions.push([-0.25, -0.25, 0.01], [0.25, 0.25, 0.01]);
        break;
      case 3:
        dotPositions.push([-0.25, -0.25, 0.01], [0, 0, 0.01], [0.25, 0.25, 0.01]);
        break;
      case 4:
        dotPositions.push(
          [-0.25, -0.25, 0.01], [0.25, -0.25, 0.01], 
          [-0.25, 0.25, 0.01], [0.25, 0.25, 0.01]
        );
        break;
      case 5:
        dotPositions.push(
          [-0.25, -0.25, 0.01], [0.25, -0.25, 0.01], 
          [0, 0, 0.01],
          [-0.25, 0.25, 0.01], [0.25, 0.25, 0.01]
        );
        break;
      case 6:
        dotPositions.push(
          [-0.25, -0.25, 0.01], [0.25, -0.25, 0.01], 
          [-0.25, 0, 0.01], [0.25, 0, 0.01], 
          [-0.25, 0.25, 0.01], [0.25, 0.25, 0.01]
        );
        break;
      default:
        break;
    }
    
    return dotPositions.map((pos, idx) => (
      <mesh key={idx} position={[pos[0], pos[1], pos[2]]} castShadow>
        <sphereGeometry args={[dotSize, 16, 16]} />
        <meshStandardMaterial color="#4a148c" />
      </mesh>
    ));
  };

  return (
    <group position={[position[0], position[1], position[2]]} rotation={[rotation[0], rotation[1], rotation[2]]}>
      <mesh receiveShadow>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {renderDots()}
    </group>
  );
};

interface DiceProps {
  isRolling: boolean;
  onRollComplete: (value: number) => void;
}

const Dice: React.FC<DiceProps> = ({ isRolling, onRollComplete }) => {
  const diceRef = useRef<THREE.Group>(null);
  const [rotationVector] = useState(() => new THREE.Vector3(
    Math.random() * 5 + 3,
    Math.random() * 5 + 3,
    Math.random() * 5 + 3
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
    
    if (rollTimer < 2) {
      // Initial fast rolling
      diceRef.current.rotation.x += rotationVector.x * delta;
      diceRef.current.rotation.y += rotationVector.y * delta;
      diceRef.current.rotation.z += rotationVector.z * delta;
      setRollTimer(prevTimer => prevTimer + delta);
    } else if (!rollComplete) {
      // Gradually stop at a face
      diceRef.current.rotation.x += (finalRotation.x - diceRef.current.rotation.x) * 0.1;
      diceRef.current.rotation.y += (finalRotation.y - diceRef.current.rotation.y) * 0.1;
      diceRef.current.rotation.z += (finalRotation.z - diceRef.current.rotation.z) * 0.1;
      
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

  return (
    <group ref={diceRef}>
      {diceFaces.map((face, idx) => (
        <DiceFace 
          key={idx} 
          position={face.position} 
          rotation={face.rotation} 
          dots={face.dots} 
          size={1.98} // Slightly smaller than 2 to avoid z-fighting
        />
      ))}
      <mesh castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#f3f3f3" transparent opacity={0.1} />
      </mesh>
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
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
        <Dice isRolling={isRolling} onRollComplete={handleRollComplete} />
      </Canvas>
    </div>
  );
};

export default Dice3D;
