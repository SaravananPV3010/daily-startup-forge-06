
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Code, Link } from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  connected: boolean;
  benefits: string[];
}

const integrations: Integration[] = [
  {
    id: "github",
    name: "GitHub",
    description: "Connect your GitHub account to share repositories and collaborate on code with your team",
    icon: <Github className="h-6 w-6" />,
    connected: false,
    benefits: [
      "Import projects from your repositories",
      "Display coding experience on your profile",
      "Code collaboration within ForgePitch"
    ]
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Connect your LinkedIn profile to enhance your ForgePitch profile and expand your network",
    icon: <Linkedin className="h-6 w-6" />,
    connected: true,
    benefits: [
      "Import professional experience",
      "Find connections already on ForgePitch",
      "Share your projects to your LinkedIn profile"
    ]
  },
  {
    id: "api",
    name: "ForgePitch API",
    description: "Get API access to integrate ForgePitch with your own applications",
    icon: <Code className="h-6 w-6" />,
    connected: false,
    benefits: [
      "Programmatic access to ForgePitch data",
      "Build custom integrations",
      "Automate workflows with webhooks"
    ]
  }
];

const Integrations = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Connect & Integrate</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Connect your existing tools and platforms to enhance your ForgePitch experience and streamline your workflow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {integrations.map((integration) => (
            <Card 
              key={integration.id} 
              className={`bg-slate-800 border-slate-700 text-white overflow-hidden ${
                integration.connected ? "ring-2 ring-blue-500/50" : ""
              }`}
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-slate-700/50">
                    {integration.icon}
                  </div>
                  {integration.connected && (
                    <Badge className="bg-green-900/30 text-green-400 border-green-800">
                      Connected
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-3">{integration.name}</CardTitle>
                <CardDescription className="text-slate-300">
                  {integration.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Benefits:</h4>
                <ul className="space-y-1 text-sm text-slate-400">
                  {integration.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2 text-lg leading-none">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    integration.connected 
                      ? "bg-slate-700 hover:bg-slate-600 text-white" 
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {integration.connected ? "Manage Connection" : "Connect"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Looking for another integration?</p>
          <Button variant="outline" className="border-slate-700 text-slate-300">
            <Link className="h-4 w-4 mr-2" />
            Request Integration
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
