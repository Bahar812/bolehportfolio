import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const certificates = [
    {
      image: "https://github.com/Bahar812/bolehportfolio/blob/main/src/data/Photo%20Certificate%20Data%20Science%20101.png",
      name: "Certificate Data Science 101",
      issuer: "IBM"
    },
    {
      image: "https://github.com/Bahar812/bolehportfolio/blob/main/src/data/Photo%20Certificate%20Deep%20Learning%20with%20TensorFlow.png",
      name: "Certificate Deep Learning with TensorFlow",
      issuer: "IBM"
    },
    {
      image: "https://github.com/Bahar812/bolehportfolio/blob/main/src/data/Photo%20Certificate%20Machine%20Learning%20with%20Python.png",
      name: "Certificate Machine Learning with Python",
      issuer: "IBM"
    },
    {
      image: "https://github.com/Bahar812/bolehportfolio/blob/main/src/data/Photo%20Certificate%20Python%20101%20for%20Data%20Science.png",
      name: "Certificate Python 101 for Data Science",
      issuer: "IBM"
    },
    {
      image: "https://github.com/Bahar812/bolehportfolio/blob/main/src/data/Photo%20Certificate%20SQL%20and%20Relational%20Databases%20101.png",
      name: "Certificate SQL and Relational Databases 101",
      issuer: "IBM"
    }, 
    {
      image: "https://github.com/Bahar812/bolehportfolio/blob/main/src/data/Photo%20Certificate%20of%20Completion%20Intro%20to%20Programming.png",
      name: "Certificate of Completion Intro to Programming",
      issuer: "Kaggle"
    },
    {
      image: "https://github.com/Bahar812/bolehportfolio/blob/main/src/data/Photo%20Certificate%20of%20Completion%20Python.png",
      name: "Certificate of Completion Python",
      issuer: "Kaggle"
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.set(cards, { opacity: 0, y: 50 });
        
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
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
    <section id="achievements" className="py-20 bg-gray-900 px-4" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-purple-500">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of certificates and recognition from various competitions and events.
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/20 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-400">
                  Issued by: {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;