
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { IdeaType } from '@/data/ideas';

interface DailyIdeaProps {
  idea: IdeaType;
}

const DailyIdea: React.FC<DailyIdeaProps> = ({ idea }) => {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center text-blue-600 mb-4">
          <Calendar className="h-5 w-5 mr-2" />
          <p className="font-semibold">Today's Idea • {idea.date}</p>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {idea.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-8">
          {idea.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {idea.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="font-semibold text-lg mb-2 text-slate-800">The Problem</h3>
            <p className="text-slate-600">{idea.problem}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="font-semibold text-lg mb-2 text-slate-800">The Solution</h3>
            <p className="text-slate-600">{idea.solution}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="font-semibold text-lg mb-2 text-slate-800">Market Size</h3>
            <p className="text-slate-600">{idea.marketSize}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button size="lg">Build This Idea</Button>
          <Button size="lg" variant="outline" className="flex items-center">
            Next Idea <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DailyIdea;
