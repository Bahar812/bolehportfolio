import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900 px-4" ref={sectionRef}>
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2" ref={imageRef}>
            <img 
              src="https://bahar812.github.io/BaharPortfolio/src/png/baharabout.JPG" 
              alt="Programming workspace"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="w-full md:w-1/2" ref={textRef}>
            <div className="max-w-xl">
             <p className="text-gray-300 leading-relaxed mb-6 text-lg">
  I'm a 6th-semester Information Systems student at Universitas Ciputra. 
  I'm passionate about programming and continuously seek to grow and learn new things. 
  I love building impactful tech solutions.
</p>

<p className="text-gray-300 leading-relaxed text-lg mb-6">
  My journey in technology has led me to work on various projects, from entrepreneurship 
  simulation apps to AI-driven safety solutions. I strive to create applications that not 
  only solve problems but also provide meaningful experiences for users.
</p>

<p className="text-gray-300 leading-relaxed text-lg mb-8">
  In addition to my technical skills, I enjoy collaborating with diverse teams and believe that great software 
  comes from a strong blend of creativity, empathy, and continuous feedback. My goal is to use technology 
  to bring positive impact, empower communities, and help others access better digital experiences.
</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;