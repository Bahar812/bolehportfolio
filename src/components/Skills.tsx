import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'C#', icon: '🔷' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'ReactJs', icon: '⚛️' },
    { name: 'SQL', icon: '📊' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Java', icon: '☕' },
    { name: 'Swift', icon: '🚀' },
    { name: 'Laravel', icon: '🔺' },
    { name: 'Figma', icon: '🎯' },
    { name: 'NodeJs', icon: '🟢' },
    { name: 'MySQL', icon: '💾' },
    { name: 'Firebase', icon: '🔥' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const skillElements = skillsRef.current?.children;
      if (skillElements) {
        gsap.set(skillElements, { opacity: 0, y: 30 });
        
        gsap.to(skillElements, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-950 px-4" ref={sectionRef}>
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-purple-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>
        
        <div 
          ref={skillsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 flex items-center gap-4 transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/20 hover:shadow-lg"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-gray-200 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;