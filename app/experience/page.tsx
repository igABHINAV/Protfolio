"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  
  {
    "company": "Zolo",
    "position": "Software Development Engineering Intern",
    "period": "January 2025 - July 2025 (On-Site Bengaluru)",
    "description": [
        "Collaborated with the supply chain team to design and develop four API routes, automating critical processes and improving operational efficiency.",
        "Participated in code review sessions and optimized API calls, reducing redundant requests and decreasing overall API response time by 68%.",
        "Engineered a high-throughput real-time customizable notification service using ActiveMQ, optimizing message delivery for 50,000+ users.",
        "Implemented Role-Based Access Control (RBAC) using AWS Cognito, enhancing security compliance for a large-scale user base of 20,000+ users across India, and presented the solution to cross-functional teams and stakeholders.",
        "Upgraded ArgoCD from v2.0.4 to v2.13.5, reducing deployment failures and improving system reliability for 40,000+ users while following agile methodologies.",
        "Developed customizable field functionality in ZoTag’s SKU model, leveraging MongoDB and MVC architecture, optimizing warehouse operations.",
        "Designed and integrated AWS S3 pre-signed URLs for secure and efficient media uploads, enhancing Ops-Engine’s data retrieval efficiency.",
        "Optimized Kubernetes-based microservices by writing scalable YAML configurations, automating multi-pod deployments, and ensuring fault tolerance in a distributed system."
    ],
    "technologies": [
        "Java Spring Boot", "Shell Script", "MongoDB", "TypeScript", "Microservices", "AWS Cognito", 
        "GitLab", "ActiveMQ", "Docker", "Kubernetes", "ArgoCD", "SQL", "GitLab-CI"
    ]
}

,
{
  "company": "Open Source Contributor",
  "position": "Astronomy and Physics Society",
  "period": "June 2024 - November 2024 (Remote)",
  "description": [
      "Integrated an AI-powered chatbot using Gemini API, increasing website traffic by 56% and significantly enhancing user experience.",
      "Built an interactive text editor with real-time collaboration features using Liveblocks and BlockNote SDK, boosting team efficiency and workflow.",
      "Implemented Clerk for secure authentication, enabling seamless login via multiple social providers."
  ],
  "technologies": ["Next.js", "PrismaORM", "GeminiAPI", "BlockNote", "Liveblocks", "tRPC", "Docker", "Clerk", "Shadcn-UI (TailwindCSS)"]
}

,
  {
    "company": "AtiUttam",
    "position": "MERN Stack and Serverless Intern",
    "period": "November 2023 - January 2024 (Remote)",
    "description": [
        "Collaborated in a team of five to design a robust API with 4+ models and 15+ fields, ensuring scalability and project excellence.",
        "Developed a scalable pub/sub chat solution powered by Kafka, leveraging message queues to reduce server load and enhance user experience by 20%.",
        "Led code review sessions, identified and fixed 15+ bugs, and optimized system performance for better efficiency."
    ],
    "technologies": ["React.js", "Express.js", "Mongoose", "JSON Web Token (JWT)", "Tailwind CSS", "Kafka", "MongoDB"]
}

  
];

export default function Experience() {
  const experienceRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.experience-card', {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.experience-grid',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={experienceRef} className="min-h-screen pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Experience and Open Source</h1>
      <div className="experience-grid space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="experience-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{exp.position}</CardTitle>
                  <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="mb-4 list-disc list-inside">
                {exp.description.map((point, pointIndex) => (
                  <li key={pointIndex} className="mb-2">{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}