
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { IdeaType } from '@/data/ideas';
import CommentSection from './CommentSection';

interface DailyIdeaProps {
  idea: IdeaType;
}

const DailyIdea: React.FC<DailyIdeaProps> = ({ idea }) => {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-r from-blue-900/30 to-indigo-900/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center text-blue-400 mb-4">
          <Calendar className="h-5 w-5 mr-2" />
          <p className="font-semibold">Today's Idea • {idea.date}</p>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          {idea.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-8">
          {idea.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {idea.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm bg-blue-900/50 text-blue-200 border-blue-800">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-800/60 p-6 rounded-lg border border-slate-700">
            <h3 className="font-semibold text-lg mb-2 text-slate-200">The Problem</h3>
            <p className="text-slate-400">{idea.problem}</p>
          </div>
          
          <div className="bg-slate-800/60 p-6 rounded-lg border border-slate-700">
            <h3 className="font-semibold text-lg mb-2 text-slate-200">The Solution</h3>
            <p className="text-slate-400">{idea.solution}</p>
          </div>
          
          <div className="bg-slate-800/60 p-6 rounded-lg border border-slate-700">
            <h3 className="font-semibold text-lg mb-2 text-slate-200">Market Size</h3>
            <p className="text-slate-400">{idea.marketSize}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <Button size="lg">Build This Idea</Button>
          <Button size="lg" variant="outline" className="flex items-center bg-transparent border-slate-600 text-slate-200 hover:bg-slate-800">
            Next Idea <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="flex items-center bg-transparent border-slate-600 text-slate-200 hover:bg-slate-800">
            <MessageCircle className="mr-1 h-4 w-4" /> Join Discussion
          </Button>
        </div>
        
        <CommentSection ideaId={idea.id} />
      </div>
    </div>
  );
};

export default DailyIdea;
