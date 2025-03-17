"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: 'Bachelor of Technology in Electronics and Communication Engineering',
    institution: 'Indian Institute of Information Technology, Design and Manufacturing, Jabalpur',
    description:"CPI : 7.5",
    period: '2021 - 2025'
  },
  {
    degree: '12th',
    institution: 'Delhi Public School , Roorkee',
    period: '2020',
    description: 'Percentage : 89.6'
  },
  {
    degree: '10th',
    institution: 'Delhi Public School , Roorkee',
    period: '2018',
    description: 'Percentage : 81.6'
  },
  
  // Add more education entries as needed
];

export default function Education() {
  const educationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.education-card', {
        x: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.education-grid',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });
    }, educationRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={educationRef} className="min-h-screen pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <div className="education-grid space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="education-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-lg font-medium">{edu.institution}</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{edu.description}</p>
              
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}