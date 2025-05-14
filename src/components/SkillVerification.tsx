
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { User, UserCheck } from 'lucide-react';

interface Skill {
  name: string;
  verified: boolean;
  endorsements: number;
}

interface SkillVerificationProps {
  profileId?: string;
}

const SkillVerification: React.FC<SkillVerificationProps> = ({ profileId }) => {
  const [skills, setSkills] = useState<Skill[]>([
    { name: 'React', verified: true, endorsements: 24 },
    { name: 'UI/UX Design', verified: true, endorsements: 18 },
    { name: 'TypeScript', verified: false, endorsements: 12 },
    { name: 'Node.js', verified: false, endorsements: 8 },
    { name: 'Product Strategy', verified: true, endorsements: 15 },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleEndorseSkill = (skillName: string) => {
    setSkills(skills.map(skill => 
      skill.name === skillName 
        ? { ...skill, endorsements: skill.endorsements + 1 } 
        : skill
    ));
    setIsDialogOpen(false);
  };

  return (
    <div className="py-8 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <UserCheck className="h-6 w-6 text-green-500 mr-2" />
          <h2 className="text-2xl font-bold text-white">Skill Verification</h2>
        </div>
        
        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-lg">Skills & Endorsements</CardTitle>
            <CardDescription className="text-slate-400">
              Verify your skills to stand out to potential collaborators and investors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 mb-6">
              {skills.map((skill) => (
                <Badge 
                  key={skill.name} 
                  variant={skill.verified ? "secondary" : "outline"}
                  className={`text-sm py-1.5 px-3 cursor-pointer ${
                    skill.verified 
                      ? "bg-green-800/30 hover:bg-green-800/50 text-green-400 border-green-700" 
                      : "hover:bg-slate-700"
                  }`}
                  onClick={() => {
                    setSelectedSkill(skill);
                    setIsDialogOpen(true);
                  }}
                >
                  {skill.name}
                  {skill.verified && (
                    <UserCheck className="ml-1 h-3.5 w-3.5 inline" />
                  )}
                  <span className="ml-1.5 text-xs opacity-70">
                    {skill.endorsements}
                  </span>
                </Badge>
              ))}
            </div>
            
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <h3 className="text-sm font-medium mb-2 text-slate-300">Verification Settings</h3>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="public-profile" className="text-sm">Public Profile</Label>
                  <p className="text-xs text-slate-400">Allow others to view and endorse your skills</p>
                </div>
                <Switch id="public-profile" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className="space-y-1">
                  <Label htmlFor="email-notifications" className="text-sm">Endorsement Notifications</Label>
                  <p className="text-xs text-slate-400">Get notified when someone endorses your skills</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-slate-700 flex justify-between">
            <Button variant="outline" className="border-slate-600 text-slate-300">
              Add New Skill
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Request Verification
            </Button>
          </CardFooter>
        </Card>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-slate-800 text-white border-slate-700">
            <DialogHeader>
              <DialogTitle>Endorse Skill: {selectedSkill?.name}</DialogTitle>
              <DialogDescription className="text-slate-400">
                Endorsing a skill confirms that you've seen this person demonstrate this expertise
              </DialogDescription>
            </DialogHeader>
            
            <div className="flex items-center space-x-2 py-4">
              <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">Jane Smith</p>
                <p className="text-sm text-slate-400">Product Designer</p>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button onClick={() => selectedSkill && handleEndorseSkill(selectedSkill.name)}>
                Endorse Skill
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SkillVerification;
