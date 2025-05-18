import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            I'm a 6th-semester Information Systems student at Universitas Ciputra with a GPA of 3.83. 
            I'm passionate about programming and continuously seek to grow and learn new things. 
            I love building impactful tech solutions.
          </p>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            My journey in technology has led me to work on various projects, from entrepreneurship 
            simulation apps to AI-driven safety solutions. I strive to create applications that not 
            only solve problems but also provide meaningful experiences for users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;