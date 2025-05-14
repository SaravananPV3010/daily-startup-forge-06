
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { talents, jobs, TalentType, JobType } from '@/data/talents';

const TalentCard: React.FC<{ talent: TalentType }> = ({ talent }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={talent.avatarUrl} alt={talent.name} />
          <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{talent.name}</CardTitle>
          <CardDescription>{talent.title}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-slate-500">Experience: {talent.experience}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {talent.skills.map((skill) => (
            <Badge key={skill} variant="outline">{skill}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant={talent.available ? "success" : "secondary"}>
          {talent.available ? "Available Now" : "Unavailable"}
        </Badge>
        <Button size="sm">View Profile</Button>
      </CardFooter>
    </Card>
  );
};

const JobCard: React.FC<{ job: JobType }> = ({ job }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={job.logoUrl} alt={job.company} />
          <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{job.title}</CardTitle>
          <CardDescription>{job.company}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600 mb-4">{job.description}</p>
        <div className="flex items-center mb-2">
          <Badge variant={job.remote ? "outline" : "secondary"} className="mr-2">
            {job.remote ? "Remote" : "On-site"}
          </Badge>
          <span className="text-xs text-slate-500">{job.location}</span>
        </div>
        <div className="mt-4">
          <p className="text-xs font-medium text-slate-700 mb-2">Requirements:</p>
          <ul className="text-xs text-slate-600 list-disc list-inside">
            {job.requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full">Apply Now</Button>
      </CardFooter>
    </Card>
  );
};

const TalentSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Talent Marketplace</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Connect with top talent to build your startup idea or find exciting opportunities in innovative startups.
          </p>
        </div>
        
        <Tabs defaultValue="talents" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="talents">Find Talent</TabsTrigger>
              <TabsTrigger value="jobs">Find Opportunities</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="talents" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {talents.map((talent) => (
                <TalentCard key={talent.id} talent={talent} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">View All Talent</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="jobs" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">Browse All Jobs</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TalentSection;
