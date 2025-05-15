
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface Candidate {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  skills: string[];
  matchScore: number;
  location: string;
  experience: string;
}

const candidates: Candidate[] = [
  {
    id: "1",
    name: "Emma Chen",
    role: "Product Designer",
    avatarUrl: "/placeholder.svg",
    skills: ["UI/UX", "Design Systems", "User Research", "Figma"],
    matchScore: 96,
    location: "San Francisco",
    experience: "7 years"
  },
  {
    id: "2",
    name: "James Wilson",
    role: "Full Stack Developer",
    avatarUrl: "/placeholder.svg",
    skills: ["React", "Node.js", "GraphQL", "TypeScript"],
    matchScore: 92,
    location: "Remote",
    experience: "5 years"
  },
  {
    id: "3",
    name: "Sophie Taylor",
    role: "Data Scientist",
    avatarUrl: "/placeholder.svg",
    skills: ["Python", "Machine Learning", "Data Analysis", "TensorFlow"],
    matchScore: 88,
    location: "New York",
    experience: "4 years"
  }
];

interface Project {
  id: string;
  name: string;
  description: string;
  skills: string[];
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "AI Content Platform",
    description: "Building an AI-powered content recommendation engine",
    skills: ["Machine Learning", "React", "Node.js", "AWS"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Healthcare Analytics",
    description: "Analytics platform for healthcare providers",
    skills: ["Data Analysis", "Python", "Machine Learning", "Healthcare"],
    imageUrl: "/placeholder.svg"
  }
];

const SmartMatching = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "React", "UI/UX", "Machine Learning"
  ]);
  
  const seniorForm = useForm();
  const availabilityForm = useForm();
  
  const allSkills = Array.from(
    new Set([
      ...selectedSkills,
      "Node.js", "Python", "TypeScript", "Data Analysis", 
      "AWS", "Product Management", "Blockchain"
    ])
  );
  
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Smart Matching</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our AI-powered matching system connects projects with perfect-fit talent and helps individuals find their ideal opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left column: Skill selection */}
          <div>
            <Card className="bg-slate-900 border-slate-800 text-white mb-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Link className="h-5 w-5 mr-2" />
                  Smart Skill Matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-4">Select your skills or required expertise to find the perfect matches:</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {allSkills.map(skill => (
                    <Badge 
                      key={skill}
                      variant={selectedSkills.includes(skill) ? "secondary" : "outline"}
                      className={`cursor-pointer ${
                        selectedSkills.includes(skill) 
                          ? "bg-blue-900/30 text-blue-300 border-blue-800" 
                          : "text-slate-400"
                      }`}
                      onClick={() => toggleSkill(skill)}
                    >
                      {skill}
                      {selectedSkills.includes(skill) && (
                        <span className="ml-1.5 text-xs">✓</span>
                      )}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-3 rounded-lg">
                    <h4 className="font-medium text-slate-300 mb-1">Experience Level</h4>
                    <div className="space-y-2 text-sm">
                      <form>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="senior" />
                          <Label htmlFor="senior" className="text-slate-400">
                            Senior (5+ years)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mid" />
                          <Label htmlFor="mid" className="text-slate-400">
                            Mid-level (2-5 years)
                          </Label>
                        </div>
                      </form>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-3 rounded-lg">
                    <h4 className="font-medium text-slate-300 mb-1">Availability</h4>
                    <div className="space-y-2 text-sm">
                      <form>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fullTime" />
                          <Label htmlFor="fullTime" className="text-slate-400">
                            Full-time
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="partTime" />
                          <Label htmlFor="partTime" className="text-slate-400">
                            Part-time / Contract
                          </Label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Matching projects */}
            <h3 className="text-xl font-semibold text-white mb-4">Top Project Matches</h3>
            <div className="space-y-4">
              {projects.map(project => (
                <Card key={project.id} className="bg-slate-900 border-slate-800 text-white overflow-hidden">
                  <div className="grid md:grid-cols-3">
                    <div className="md:col-span-1">
                      <AspectRatio ratio={1/1} className="bg-slate-800">
                        <img 
                          src={project.imageUrl} 
                          alt={project.name}
                          className="object-cover h-full w-full opacity-80"
                        />
                      </AspectRatio>
                    </div>
                    <div className="md:col-span-2 p-4">
                      <h4 className="text-lg font-medium">{project.name}</h4>
                      <p className="text-slate-400 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map(skill => (
                          <Badge 
                            key={skill}
                            variant="outline" 
                            className={selectedSkills.includes(skill) ? "bg-blue-900/30 text-blue-300 border-blue-800" : ""}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-green-400">
                          {project.skills.filter(skill => selectedSkills.includes(skill)).length} skill matches
                        </span>
                        <Button size="sm">View Project</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Right column: Candidate matches */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Top Talent Matches</h3>
            <div className="space-y-4">
              {candidates.map(candidate => (
                <Card key={candidate.id} className="bg-slate-900 border-slate-800 text-white">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-slate-700">
                        <AvatarImage src={candidate.avatarUrl} alt={candidate.name} />
                        <AvatarFallback className="bg-purple-900">{candidate.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{candidate.name}</h4>
                        <p className="text-slate-400 text-sm">{candidate.role}</p>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="text-sm font-medium text-green-400">{candidate.matchScore}% match</div>
                        <div className="text-xs text-slate-400">{candidate.location}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-sm">
                        <span className="text-slate-400">Experience:</span> 
                        <span className="text-white ml-1">{candidate.experience}</span>
                      </div>
                      <div className="text-sm text-right">
                        <span className="text-slate-400">Available:</span> 
                        <span className="text-green-400 ml-1">Yes</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {candidate.skills.map(skill => (
                        <Badge 
                          key={skill}
                          variant="outline" 
                          className={selectedSkills.includes(skill) ? "bg-blue-900/30 text-blue-300 border-blue-800" : ""}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm" className="text-slate-300 border-slate-700">View Profile</Button>
                      <Button size="sm">Contact</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button variant="outline" className="w-full mt-4 text-slate-300 border-slate-700">
                View All Matches
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartMatching;
