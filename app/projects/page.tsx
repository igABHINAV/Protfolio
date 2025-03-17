"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    "title": "LiveDocs",
    "description": [
        "Developed a real-time collaborative text editor similar to Google Docs using Next.js and Liveblocks, enabling seamless multi-user editing.",
        "Integrated authentication with Clerk and NextAuth, allowing secure user login via GitHub with session management.",
        "Implemented document management features, including creating, deleting, sharing, and listing documents with role-based access control.",
        "Added real-time presence indicators to show active collaborators in a document.",
        "Built an interactive commenting system with inline and threaded discussions for better collaboration."
    ],
    "image": "https://bookface-images.s3.amazonaws.com/logos/22ba8921676051e2778eccd66d60f13b8b6f109e.png?1645481021",
    "tags": ["Next.js", "TypeScript", "Liveblocks", "Tailwind CSS" , "Git" , "GitHub"],
    "github": "https://github.com/igABHINAV/LiveDocs",
    "demo": "https://livedocs-beige-eight.vercel.app/"
},
{
  "title": "Yoom",
  "description": [
    "Integrated secure authentication and authorization using Clerk, enabling seamless login via social sign-on and email/password with role-based access control.",
    "Developed a real-time video conferencing platform with advanced meeting controls, including recording, screen sharing, reactions, and participant management.",
    "Implemented meeting scheduling and history tracking, allowing users to set up future meetings and access past meeting details with recordings.",
    "Designed an intuitive and responsive UI using Shadcn-UI (TailwindCSS), ensuring a seamless user experience across devices."
  ],
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQVR1xTIGk4FmPoy7voTyzx1hZ-oNNQzmZw&s",
  "tags": ["Next.js", "TypeScript", "Clerk", "getStream", "Shadcn-ui (TailwindCSS)", "Git", "GitHub"],
  "github": "https://github.com/igABHINAV/Yoom",
  "demo": "https://yoom-beryl.vercel.app/"
},
{
  "title": "Blak",
  "description": [
    "Built a full-stack task management application with JWT authentication, enabling users to securely manage tasks.",
    "Designed a REST API using Node.js & Express.js, integrated MongoDB for scalable data storage.",
    "Developed an intuitive and responsive UI using TailwindCSS, ensuring a seamless user experience across devices."
  ],
  "image": "https://dcassetcdn.com/design_img/1092328/118063/118063_5852145_1092328_image.jpg",
  "tags": ["Next.js", "Express.js", "MongoDB", "TailwindCSS", "JWT Authentication", "Git", "GitHub"],
  "github": "https://github.com/igABHINAV/Blak"
}
  // Add more projects as needed
];

export default function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={projectsRef} className="min-h-screen pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="project-card w-full md:w-96 h-auto">
            <CardHeader>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4 p-4">
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  Code
                </a>
              </Button>
              {project.demo && (
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}