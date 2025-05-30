import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Github as GitHub, Linkedin, Mail, FileText } from 'lucide-react';
import { ModelViewer } from './ModelViewer';

const Hero: React.FC = () => {
  const mousePosition = useRef({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mousePosition.current = {
      x: clientX / window.innerWidth,
      y: clientY / window.innerHeight,
    };
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gray-950 pt-20 px-4"
      onMouseMove={handleMouseMove}
    >
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-start text-left max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Hi, I'm Bahar Al Hamid
            </h1>
            
            <h2 className="text-xl md:text-3xl font-medium mb-6">
              <span className="text-purple-400">FullStack Developer</span>
            </h2>
            
            <p className="text-gray-400 mb-8 text-lg">
              Building beautiful, functional websites and applications. Passionate about creating 
              digital experiences that make an impact.
            </p>
            
            <div className="flex space-x-4 md:space-x-6 mb-12">
              <a 
                href="https://github.com/Bahar812" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-purple-700 transition-colors p-3 rounded-full text-white"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/bahar-al-hamid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-purple-700 transition-colors p-3 rounded-full text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:baharalhamid410@gmail.com" 
                className="bg-gray-800 hover:bg-purple-700 transition-colors p-3 rounded-full text-white"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#portfolio" 
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
              <a 
                href="https://drive.google.com/file/d/10NDyw9Jn79odi-1Qeiy_W2e6UrNFo1EP/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <FileText size={18} />
                Download CV
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 h-[400px]">
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
              <Stage environment="city" intensity={0.5}>
                <ModelViewer mousePosition={mousePosition} />
              </Stage>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;