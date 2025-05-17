
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Trophy, ArrowRight } from 'lucide-react';

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
      
      {/* Semi-Circle Text Section */}
      <section className="py-16 text-center relative">
        <div className="container mx-auto px-4">
          <div className="relative h-64 mb-8">
            {/* Semi-circle curved text container */}
            <div className="absolute w-full left-0 bottom-0">
              <div className="mx-auto max-w-4xl relative">
                {/* Text follows semi-circular path */}
                <svg 
                  viewBox="0 0 500 200" 
                  className="w-full h-auto"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path 
                    id="curvedPath" 
                    d="M20,190 Q250,0 480,190" 
                    fill="none" 
                    stroke="transparent" 
                  />
                  <text 
                    className="text-base md:text-lg font-bold fill-transparent"
                    style={{ 
                      fill: "url(#gradientText)",
                      textAnchor: "middle" 
                    }}
                  >
                    <textPath xlinkHref="#curvedPath" startOffset="50%">
                      From Idea to Funded Startup 🚀 Build or Join Your Dream Team
                    </textPath>
                  </text>
                  <defs>
                    <linearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="50%" stopColor="#facc15" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <p className="text-slate-300 mt-12 max-w-3xl mx-auto text-lg">
            Kickstart your journey with the right team, advice and investor exposure - All in one place.
          </p>
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

      {/* Comparison Section */}
      <section className="py-16 container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">No more back-and-forth DM's to team up!</h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Unorganized */}
          <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center text-white">Unorganized teaming up</h3>
            
            <div className="space-y-3">
              {/* Chat message 1 */}
              <div className="bg-slate-900/80 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <span className="text-slate-400 text-sm">05/12/2024 1:35 AM</span>
                </div>
                <p className="text-white text-sm">Need members to form a group and participate in hackathons and ctfs and start some startups together in the future... feel free to dm</p>
              </div>
              
              {/* Chat message 2 */}
              <div className="bg-slate-900/80 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500"></div>
                  <span className="text-slate-400 text-sm">06/23/2024 5:51 AM</span>
                </div>
                <p className="text-white text-sm">What kind of skill are you looking for?</p>
              </div>
              
              {/* Chat message 3 */}
              <div className="bg-slate-900/80 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                  <span className="text-slate-400 text-sm">07/12/2024 3:16 PM</span>
                </div>
                <p className="text-white text-sm">Hey, I have a good experience of 3 years, if you still looking for, pls dm me!</p>
              </div>
            </div>
          </div>
          
          {/* Middle arrow */}
          <div className="hidden md:flex justify-center items-center">
            <ArrowRight className="text-purple-500 w-20 h-20" />
          </div>
          
          {/* Right side - Organized */}
          <div className="md:col-span-1 bg-slate-800/70 p-6 rounded-xl border border-slate-700 shadow-lg relative md:-ml-16">
            <h3 className="text-xl font-bold mb-4 text-center text-white">Organized teaming up</h3>
            
            <div className="bg-slate-900/80 p-4 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 gap-3">
                {/* Project cards */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gradient-to-br from-purple-900/80 to-indigo-900/80 rounded-lg p-3 border border-purple-700/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full">Hiring</span>
                      <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                    </div>
                    <h4 className="text-white font-bold text-sm">{["BrandStory VR", "Extreme Traveling Experience", "ViralGenie", "Discount Community"][i-1]}</h4>
                    <p className="text-xs text-slate-300 mt-1 truncate">Looking for {["developers", "designers", "marketers", "community managers"][i-1]}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-xs text-slate-400">3 roles open</span>
                      <span className="text-xs font-bold text-yellow-400">VIEW TEAM</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4 text-white">What you get access to when you join ForgePitch:</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            You don't need any prior connections, the journey starts from here!
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
