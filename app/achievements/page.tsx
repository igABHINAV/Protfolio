"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: 'Rank 219 - CodeChef Starters 112',
    organization: 'CodeChef',
    description: 'Achieved Rank 219 in CodeChef Starters 112',
    icon: Award
  },
  {
    title: 'Rank 722 - CodeChef Starters 134',
    organization: 'CodeChef',
    description: 'Achieved Rank 722 in CodeChef Starters 134',
    icon: Award
  },
  {
    title: 'Rank 787 - Weekly Contest 440',
    organization: 'LeetCode',
    description: 'Achieved Rank 787 in LeetCode Weekly Contest 440',
    icon: Trophy
  },
  {
    title: 'Rank 986 - Biweekly Contest 147',
    organization: 'LeetCode',
    description: 'Achieved Rank 986 in LeetCode Biweekly Contest 147',
    icon: Trophy
  },
  {
    title: 'Rank 1976 - Weekly Contest 432',
    organization: 'LeetCode',
    description: 'Achieved Rank 1976 in LeetCode Weekly Contest 432',
    icon: Trophy
  },
  {
    title: 'Rank 2457 - Weekly Contest 409',
    organization: 'LeetCode',
    description: 'Achieved Rank 2457 in LeetCode Weekly Contest 409',
    icon: Trophy
  },
  {
    title: 'Rank 2535 - Weekly Contest 381',
    organization: 'LeetCode',
    description: 'Achieved Rank 2535 in LeetCode Weekly Contest 381',
    icon: Trophy
  },
  {
    title: 'Rank 3109 - Weekly Contest 363',
    organization: 'LeetCode',
    description: 'Achieved Rank 3109 in LeetCode Weekly Contest 363',
    icon: Trophy
  },
  {
    title: 'Rank 3134 - Weekly Contest 386',
    organization: 'LeetCode',
    description: 'Achieved Rank 3134 in LeetCode Weekly Contest 386',
    icon: Trophy
  },
  {
    title: 'Rank 3287 - Weekly Contest 384',
    organization: 'LeetCode',
    description: 'Achieved Rank 3287 in LeetCode Weekly Contest 384',
    icon: Trophy
  }
];


export default function Achievements() {
  const achievementsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.achievement-card', {
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.achievements-grid',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });
    }, achievementsRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={achievementsRef} className="min-h-screen pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Achievements</h1>
      <div className="achievements-grid grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <Card key={index} className="achievement-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <CardDescription>{achievement.organization}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
