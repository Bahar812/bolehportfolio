import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function ContactModelViewer() {
  const { scene } = useGLTF('/Cowbot_Sheriff_0525055117_texture.glb');
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2} position={[0, -1, 0]} />;
}