"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Github, Linkedin, Mail, Code, List } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen">
      <section className="hero-section h-screen flex items-center justify-center px-4">
        <div className="hero-content max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">ABHINAV KUMAR</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Software Developer building scalable web applications within distributed systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/experience">
                Experience <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/igABHINAV" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/abhinav-kumar-8b6008247/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:igabhinav.2003@gmail.com">
                <Mail size={24} />
              </a>
            </Button>
            <Button variant="ghost"  asChild>
              <a href="https://leetcode.com/u/ig_abhinav/" target="_blank" rel="noopener noreferrer">
                
                LeetCode
              </a>
            </Button>
            <Button variant="ghost"  asChild>
              <a href="https://codeforces.com/profile/plot_armor" target="_blank" rel="noopener noreferrer">
                CodeForces
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
