
import React from 'react';
import Header from '@/components/Header';
import DailyIdea from '@/components/DailyIdea';
import TalentSection from '@/components/TalentSection';
import Footer from '@/components/Footer';
import { featuredIdea } from '@/data/ideas';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 text-center relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/c1aef68c-c00d-404f-8ca8-245e2a4a5458.png')] bg-cover opacity-10 z-0"></div>
        <div className="relative z-10">
          <p className="text-blue-500 font-medium mb-3">FORGEVISION.CO</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find your Team Members and Grow your<br />Startup Idea
          </h1>
          
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold mt-4">
            Join ForgePitch
          </Button>
          
          <div className="mt-8 flex justify-center items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-slate-900"></div>
              ))}
            </div>
            <p className="text-slate-300 ml-4">
              <span className="text-white font-bold">82,615</span> action takers have joined ForgePitch
            </p>
          </div>
          
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-400 to-orange-500">
              From <span className="font-bold">Idea</span> to Funded <span className="font-bold">Startup</span> 🚀 Build or <span className="font-bold">Join</span> Your <span className="font-bold">Dream Team</span>
            </p>
            <p className="text-slate-400 mt-2">Kickstart your journey with the right team, advice and investor exposure - All in one place.</p>
          </div>
        </div>
      </section>
      
      {/* Two Paths Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* I have an idea card */}
          <div className="bg-purple-900/70 backdrop-blur p-8 rounded-xl border border-purple-500/30 shadow-lg">
            <h3 className="text-yellow-400 text-xl font-bold mb-6 flex items-center">
              💡 I have an idea
            </h3>
            <ol className="text-white space-y-4 list-decimal list-inside">
              <li className="pl-2">Create a project card</li>
              <li className="pl-2">Select team members with roles</li>
              <li className="pl-2">Turn ideas into a funded startup together</li>
            </ol>
          </div>
          
          {/* I want to join card */}
          <div className="bg-purple-900/70 backdrop-blur p-8 rounded-xl border border-purple-500/30 shadow-lg">
            <h3 className="text-yellow-400 text-xl font-bold mb-6 flex items-center">
              💼 I want to join a project
            </h3>
            <ol className="text-white space-y-4 list-decimal list-inside">
              <li className="pl-2">Browse interesting projects</li>
              <li className="pl-2">Apply to your favorite team with skills</li>
              <li className="pl-2">Make a difference in new team from day one</li>
            </ol>
          </div>
        </div>
      </section>
      
      <main className="flex-grow">
        <DailyIdea idea={featuredIdea} />
        <TalentSection />
        
        <section className="py-16 container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Get a New Startup Idea Every Day</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Join ForgePitch for free and receive curated, innovative startup ideas in your inbox daily. 
            Connect with talent to bring them to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="px-4 py-3 rounded-md border border-slate-700 bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white flex-grow"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Subscribe Free
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
