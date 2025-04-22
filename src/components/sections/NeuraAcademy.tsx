import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Video, FileText, Award, Clock, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: "Web3 Fundamentals",
    description: "Learn the basics of blockchain technology and decentralized applications.",
    icon: <BookOpen className="w-5 h-5 text-neura-cyan" />,
    duration: "1h 45m",
    modules: 5,
    level: "Beginner"
  },
  {
    title: "Content Monetization",
    description: "Strategies for monetizing digital content in the Web3 ecosystem.",
    icon: <Video className="w-5 h-5 text-neura-cyan" />,
    duration: "2h 20m",
    modules: 7,
    level: "Intermediate"
  },
  {
    title: "Digital Rights Management",
    description: "Understanding NFTs and smart contracts for content ownership.",
    icon: <FileText className="w-5 h-5 text-neura-cyan" />,
    duration: "1h 30m",
    modules: 4,
    level: "Intermediate"
  }
];

export const NeuraAcademy: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              NeuraAcademy
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            On-platform learning modules for digital literacy, content monetization, and Web3 skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="bg-neura-dark/50 backdrop-blur-sm border border-neura-purple/20 hover:border-neura-purple/40 transition-all duration-300 overflow-hidden"
            >
              <div className="h-2 w-full bg-neura-cyan/20"></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-neura-dark/60 rounded-lg">
                    {course.icon}
                  </div>
                  <Badge className="bg-neura-purple/20 text-neura-cyan border-neura-purple/30">
                    {course.level}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white">{course.title}</h3>
                <p className="text-white/70 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-white/60 pt-3 border-t border-neura-purple/10">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {course.modules} modules
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center text-neura-cyan hover:text-neura-purple transition-colors">
            View all courses
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
