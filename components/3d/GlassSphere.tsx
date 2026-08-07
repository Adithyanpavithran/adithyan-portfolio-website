"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Ring } from "@react-three/drei";
import * as THREE from "three";

export const GlassSphere: React.FC<{ mousePos?: { x: number; y: number } }> = ({ mousePos }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;

      // Mouse tilt physics
      if (mousePos) {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          mousePos.x * 0.8,
          0.05
        );
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          -mousePos.y * 0.8,
          0.05
        );
      }
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.15;
      ringRef1.current.rotation.x += delta * 0.05;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.z -= delta * 0.2;
      ringRef2.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group scale={1.2}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Core Glass Sphere */}
        <Sphere ref={meshRef} args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#0F0F0F"
            emissive="#4F8CFF"
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.9}
            distort={0.3}
            speed={2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            wireframe={false}
          />
        </Sphere>

        {/* Orbiting Blue Ring */}
        <mesh ref={ringRef1} rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[2.2, 2.25, 64]} />
          <meshBasicMaterial
            color="#4F8CFF"
            side={THREE.DoubleSide}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Orbiting Purple Ring */}
        <mesh ref={ringRef2} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <ringGeometry args={[2.5, 2.54, 64]} />
          <meshBasicMaterial
            color="#8B5CF6"
            side={THREE.DoubleSide}
            transparent
            opacity={0.4}
          />
        </mesh>
      </Float>

      {/* Point Lights */}
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#4F8CFF" />
      <pointLight position={[-5, -5, -5]} intensity={1.5} color="#8B5CF6" />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
    </group>
  );
};
