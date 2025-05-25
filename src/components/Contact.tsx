import React from 'react';
import { Mail, Github, Linkedin, Globe } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { ContactModelViewer } from './ContactModelViewer';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 h-[400px]">
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
              <Stage environment="city" intensity={0.5}>
                <ContactModelViewer />
              </Stage>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-gray-800 rounded-lg p-8 md:p-12 shadow-lg">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:baharalhamid410@gmail.com" 
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <div className="rounded-full bg-gray-700 p-3 mr-4 group-hover:bg-purple-500/20 transition-colors">
                      <Mail className="text-purple-400" size={20} />
                    </div>
                    <span>baharalhamid410@gmail.com</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/bahar-al-hamid" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <div className="rounded-full bg-gray-700 p-3 mr-4 group-hover:bg-purple-500/20 transition-colors">
                      <Linkedin className="text-purple-400" size={20} />
                    </div>
                    <span>linkedin.com/in/bahar-al-hamid</span>
                  </a>
                  
                  <a 
                    href="https://github.com/Bahar812" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <div className="rounded-full bg-gray-700 p-3 mr-4 group-hover:bg-purple-500/20 transition-colors">
                      <Github className="text-purple-400" size={20} />
                    </div>
                    <span>github.com/Bahar812</span>
                  </a>
                  
                  <a 
                    href="https://bahar812.github.io/BaharPortfolio/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <div className="rounded-full bg-gray-700 p-3 mr-4 group-hover:bg-purple-500/20 transition-colors">
                      <Globe className="text-purple-400" size={20} />
                    </div>
                    <span>bahar812.github.io/BaharPortfolio</span>
                  </a>
                </div>

                <div className="pt-6">
                  <p className="text-gray-300 mb-6">
                    Looking for a developer to bring your ideas to life? Let's collaborate on your next project!
                  </p>
                  
                  <a 
                    href="mailto:baharalhamid410@gmail.com"
                    className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 block w-full"
                  >
                    Send a Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;