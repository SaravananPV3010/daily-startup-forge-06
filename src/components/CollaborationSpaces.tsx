
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Users } from 'lucide-react';

interface CollaborationSpace {
  id: string;
  name: string;
  description: string;
  members: number;
  active: boolean;
  lastActivity: string;
  tags: string[];
  image?: string;
}

const projects: CollaborationSpace[] = [
  {
    id: "1",
    name: "AI Content Engine",
    description: "Collaborative workspace for our AI recommendation platform development",
    members: 5,
    active: true,
    lastActivity: "10 minutes ago",
    tags: ["AI", "Content", "Recommendation"]
  },
  {
    id: "2",
    name: "FinTech Analytics",
    description: "Building next-gen financial analytics tools for small businesses",
    members: 7,
    active: true,
    lastActivity: "2 hours ago",
    tags: ["FinTech", "Analytics", "B2B"]
  },
  {
    id: "3",
    name: "GreenTech Solutions",
    description: "Sustainable technology solutions for environmental challenges",
    members: 4,
    active: false,
    lastActivity: "2 days ago",
    tags: ["Sustainability", "CleanTech", "IoT"]
  }
];

const CollaborationSpaces = () => {
  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-10">
          <Users className="h-6 w-6 text-blue-500 mr-2" />
          <h2 className="text-3xl font-bold text-white">Collaboration Spaces</h2>
        </div>

        <Tabs defaultValue="active" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-slate-700">
              <TabsTrigger value="active">Active Projects</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
              <TabsTrigger value="invitations">Invitations</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="active" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => project.active).map((project) => (
                <Card key={project.id} className="bg-slate-700 border-slate-600 text-white overflow-hidden">
                  <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription className="text-slate-300 mt-1">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={project.image} alt={project.name} />
                        <AvatarFallback className="bg-purple-800">{project.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-slate-800 text-blue-300 border-blue-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-slate-300">
                        <span className="font-semibold text-white">{project.members}</span> members
                      </div>
                      <div className="text-slate-300">
                        Active <span className="text-green-400">{project.lastActivity}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-slate-600 flex justify-between">
                    <Button variant="ghost" size="sm" className="text-slate-300">
                      <Code className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm">
                      Enter Space
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              
              {/* Create new space card */}
              <Card className="bg-slate-700 border-slate-600 border-dashed text-white h-full flex flex-col items-center justify-center p-8">
                <div className="rounded-full bg-slate-600/50 p-6 mb-4">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Create New Space</h3>
                <p className="text-slate-400 text-center mb-4">
                  Start a new collaboration space for your project idea
                </p>
                <Button variant="outline">Create Space</Button>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="archived" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.active).map((project) => (
                <Card key={project.id} className="bg-slate-700/50 border-slate-600 text-slate-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-slate-400">{project.name}</CardTitle>
                        <CardDescription className="text-slate-500">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Avatar className="h-10 w-10 opacity-70">
                        <AvatarImage src={project.image} alt={project.name} />
                        <AvatarFallback className="bg-slate-800">{project.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-transparent text-slate-400 border-slate-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <div>
                        <span>{project.members}</span> members
                      </div>
                      <div>
                        Archived <span>{project.lastActivity}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-slate-600/50 flex justify-between">
                    <Button variant="ghost" size="sm" className="text-slate-400">
                      View Archive
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-500 text-slate-300">
                      Restore
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="invitations">
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader>
                <CardTitle>Project Invitations</CardTitle>
                <CardDescription className="text-slate-300">
                  You haven't received any project invitations yet
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center py-10">
                <div className="rounded-full bg-slate-600/50 p-6 mb-4">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <p className="text-slate-300 text-center max-w-md">
                  When someone invites you to collaborate on their project, you'll see it here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CollaborationSpaces;
