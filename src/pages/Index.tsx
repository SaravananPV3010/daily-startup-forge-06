
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Trophy } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-indigo-950 to-purple-900">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 md:py-32 container mx-auto px-4 text-center relative">
        <div className="relative z-10">
          <p className="text-blue-400 font-medium mb-3 uppercase tracking-wider">FORGEVISION.CO</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10">
            Find your Team Members and<br />Grow your Startup Idea
          </h1>
          
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-8 py-6 h-auto text-lg">
            <Trophy className="mr-2 h-5 w-5" /> Join ForgePitch
          </Button>
          
          <div className="mt-12 flex justify-center items-center">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              ))}
            </div>
            <p className="text-slate-200 ml-4 text-lg">
              <span className="text-white font-bold">82,615</span> action takers have joined ForgePitch
            </p>
          </div>
        </div>
      </section>
      
      {/* Curved Text Section with Arch Shape */}
      <section className="py-16 text-center relative">
        <div className="container mx-auto px-4">
          {/* Arch Shape Container */}
          <div className="relative">
            {/* Arch background */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl h-60 rounded-t-[100%] bg-purple-800/30 backdrop-blur-sm -top-10"></div>
            
            {/* Text content with gradient */}
            <div className="relative pt-8">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-400 to-orange-500 text-4xl md:text-5xl font-bold transform rotate-[-2deg]">
                From <span className="font-extrabold">Idea</span> to Funded <span className="font-extrabold">Startup</span> 🚀 <span className="font-extrabold">Build</span> or <span className="font-extrabold">Join</span> Your <span className="font-extrabold">Dream Team</span>
              </h2>
              <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg">
                Kickstart your journey with the right team, advice and investor exposure - All in one place.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Two Paths Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* I have an idea card */}
          <div className="bg-purple-800/80 backdrop-blur p-8 rounded-xl border border-purple-500/30 shadow-lg">
            <h3 className="text-yellow-400 text-2xl font-bold mb-6 flex items-center">
              💡 I have an idea
            </h3>
            <ol className="text-white space-y-4 list-decimal list-inside text-lg">
              <li className="pl-2">Create a project card</li>
              <li className="pl-2">Select team members with roles</li>
              <li className="pl-2">Turn vision into a funded startup together</li>
            </ol>
          </div>
          
          {/* I want to join card */}
          <div className="bg-purple-800/80 backdrop-blur p-8 rounded-xl border border-purple-500/30 shadow-lg">
            <h3 className="text-yellow-400 text-2xl font-bold mb-6 flex items-center">
              💼 I want to join a project
            </h3>
            <ol className="text-white space-y-4 list-decimal list-inside text-lg">
              <li className="pl-2">Browse interesting projects</li>
              <li className="pl-2">Apply to your favorite team with skills</li>
              <li className="pl-2">Make a difference in new team from day one</li>
            </ol>
          </div>
        </div>
      </section>
      
      {/* Email Subscription Section */}
      <section className="py-16 container mx-auto px-4 text-center mb-16">
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
      
      <Footer />
    </div>
  );
};

export default Index;
