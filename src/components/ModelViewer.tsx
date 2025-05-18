import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ModelViewer({ mousePosition }) {
  const { scene } = useGLTF('/humanoid_crash_test_t_0518034651_texture.glb');
  const modelRef = useRef();

  useFrame((state, delta) => {
    if (modelRef.current && mousePosition.current) {
      // Rotate model based on mouse position
      const targetRotationY = (mousePosition.current.x - 0.5) * Math.PI * 0.5;
      const targetRotationX = (mousePosition.current.y - 0.5) * Math.PI * 0.25;
      
      modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.05;
      modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.05;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2} position={[0, -1, 0]} />;
}