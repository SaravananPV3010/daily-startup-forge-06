
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, MessageCircle } from 'lucide-react';

interface RecommendedItem {
  id: string;
  type: 'person' | 'idea' | 'job';
  title: string;
  description: string;
  tags: string[];
  match: number;
  image?: string;
}

interface SmartRecommendationsProps {
  userId?: string;
}

const SmartRecommendations: React.FC<SmartRecommendationsProps> = ({ userId }) => {
  const recommendations: RecommendedItem[] = [
    {
      id: '1',
      type: 'person',
      title: 'Sarah Johnson',
      description: 'UI Designer with 5+ years experience in fintech',
      tags: ['UI/UX', 'Figma', 'Design Systems'],
      match: 95,
      image: '',
    },
    {
      id: '2',
      type: 'idea',
      title: 'AI-Powered Medical Diagnostics',
      description: 'Platform for early disease detection using machine learning',
      tags: ['Healthcare', 'AI', 'B2B'],
      match: 88,
    },
    {
      id: '3',
      type: 'job',
      title: 'Lead Developer at TechVision',
      description: 'Building the next generation of fintech solutions',
      tags: ['Remote', 'Full-time', 'Senior'],
      match: 92,
    },
  ];

  return (
    <div className="py-8 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Smart Recommendations</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Personalized suggestions based on your profile, skills, and interactions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* People recommendations */}
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader className="border-b border-slate-700">
              <CardTitle className="text-lg">People You Should Meet</CardTitle>
              <CardDescription className="text-slate-400">
                Connect with talented individuals
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 px-0">
              <div className="space-y-4">
                {recommendations.filter(r => r.type === 'person').map(person => (
                  <div key={person.id} className="flex items-center px-6 py-2 hover:bg-slate-700/30">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={person.image} alt={person.title} />
                      <AvatarFallback className="bg-blue-600">{person.title.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{person.title}</h4>
                      <p className="text-sm text-slate-400">{person.description}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {person.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs py-0 px-1 bg-transparent border-slate-600">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="ml-4 text-center">
                      <div className="text-xs font-medium text-green-500 mb-1">
                        {person.match}% match
                      </div>
                      <Button size="sm" variant="outline" className="border-slate-600 h-8 px-3 text-xs">
                        Connect
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="px-6 pt-2">
                  <Button variant="ghost" size="sm" className="w-full text-slate-400 hover:text-white">
                    View All Recommended People
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ideas recommendations */}
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader className="border-b border-slate-700">
              <CardTitle className="text-lg">Projects For You</CardTitle>
              <CardDescription className="text-slate-400">
                Ideas that match your expertise
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="text-slate-400">Project</TableHead>
                    <TableHead className="text-slate-400 text-right">Match</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recommendations.filter(r => r.type === 'idea').map(idea => (
                    <TableRow key={idea.id} className="border-slate-700 hover:bg-slate-700/30">
                      <TableCell>
                        <div>
                          <p className="font-medium text-white">{idea.title}</p>
                          <p className="text-sm text-slate-400">{idea.description}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {idea.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs py-0 px-1 bg-transparent border-slate-600">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="text-right text-green-500 font-medium mb-1">
                          {idea.match}%
                        </div>
                        <Button size="sm" className="h-7 px-2 text-xs">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="pt-2">
                <Button variant="ghost" size="sm" className="w-full text-slate-400 hover:text-white">
                  View All Recommended Projects
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Jobs recommendations */}
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader className="border-b border-slate-700">
              <CardTitle className="text-lg">Opportunities</CardTitle>
              <CardDescription className="text-slate-400">
                Jobs and roles that suit your profile
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {recommendations.filter(r => r.type === 'job').map(job => (
                <div key={job.id} className="mb-4 pb-4 border-b border-slate-700 last:mb-0 last:pb-0 last:border-0">
                  <h4 className="font-medium text-white mb-1">{job.title}</h4>
                  <p className="text-sm text-slate-400 mb-2">{job.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {job.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs py-0 px-1 bg-transparent border-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-green-500 flex items-center">
                      <Check className="mr-1 h-3 w-3" /> {job.match}% match
                    </span>
                    <Button size="sm" variant="outline" className="border-slate-600 h-8 px-3 text-xs">
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full text-slate-400 hover:text-white mt-2">
                View All Opportunities
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SmartRecommendations;
