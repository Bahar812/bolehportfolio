import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "LO Kreatif 2022 | National Competition",
      role: "UI/UX Design Contest Participants",
      date: "November 2022 - December 2022",
      description: "Participated in UI/UX Design Contest"
    },
    {
      title: "SI FEST UNJA 2023 | National Competition",
      role: "UI/UX Design Contest Participants",
      date: "February 2023 - March 2023",
      description: "Participated in UI/UX Design Contest"
    },
    {
      title: "Software Competition Amikom 2023",
      role: "Software Developer Contest Participants",
      date: "July 2023 - August 2023",
      description: "Participated in Software Developer Contest"
    },
    {
      title: "Hackfest Google 2023 | National Competition",
      role: "Hacker",
      date: "December 2023 – January 2024",
      description: "Participated in Hackfest 2024 as a hacker, focused on innovative problem-solving and creative technological solutions."
    },
    {
      title: "EPIC NATIONAL 2023",
      role: "Marketing Division",
      date: "November 2022 – January 2023",
      description: "Planning, compiling, and being responsible for work programs. Created promotion videos and posters for the event. Responsible for public relations and journalism."
    },
    {
      title: "Digital Student Development",
      role: "Member",
      date: "June 2023 - May 2024",
      description: "As a member of the Digital Student Development division, sharing competition details and developing the Student Union's website."
    },
    {
      title: "Application Development Assistant Lecture",
      role: "Teaching Assistant",
      date: "February 2024 - present",
      description: "Checking class assignments and homework. Helping lectures in student teaching activities. Giving grades to students."
    },
    {
      title: "Algorithm and Programming Assistant Lecture",
      role: "Teaching Assistant",
      date: "August 2023 - January 2024",
      description: "Checking class assignments and homework. Helping lectures in student teaching activities. Giving grades to students."
    },
    {
      title: "Public Relation Committee | UC Google Developer Student Club",
      role: "Member",
      date: "September 2023 - present",
      description: "Managing communication and promoting club activities to the community as a Public Relations Officer."
    },
    {
      title: "EPIC INTERNATIONAL 2024",
      role: "Inventory",
      date: "March 2024 - May 2024",
      description: "Handling server management duties for the MonsoonSim competition and ensuring the availability of all goods and facilities."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timelineItems = timelineRef.current?.children;
      if (timelineItems) {
        gsap.set(timelineItems, { opacity: 0, x: (index) => index % 2 === 0 ? -50 : 50 });
        
        gsap.to(timelineItems, {
          opacity: 1,
          x: 0,
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
    <section id="experience" className="py-20 bg-gray-900 px-4" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work <span className="text-purple-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-500/30"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center mb-8 relative`}
            >
              {/* Timeline point - Centered on mobile, alternating on desktop */}
              <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:flex-none md:mx-4 z-10">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="hidden md:block absolute top-1/2 w-8 h-0.5 bg-purple-500/30" style={{
                  left: index % 2 === 0 ? '100%' : 'auto',
                  right: index % 2 === 0 ? 'auto' : '100%',
                  transform: 'translateY(-50%)'
                }}></div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
              }`}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-col mb-2">
                    <span className="text-purple-400 font-medium">{exp.role}</span>
                    <span className="text-gray-400 text-sm">{exp.date}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;