
import React from 'react';
import Header from '@/components/Header';
import DailyIdea from '@/components/DailyIdea';
import TalentSection from '@/components/TalentSection';
import Footer from '@/components/Footer';
import { featuredIdea } from '@/data/ideas';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <DailyIdea idea={featuredIdea} />
        <TalentSection />
        
        <section className="py-16 container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a New Startup Idea Every Day</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Join ForgePitch for free and receive curated, innovative startup ideas in your inbox daily. 
            Connect with talent to bring them to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Subscribe Free
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
