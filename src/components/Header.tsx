
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 bg-slate-950">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-blue-500">Forge</span>
            <span className="text-orange-500">Pitch</span>
          </h1>
          <nav className="hidden md:flex ml-10">
            <a href="#" className="text-slate-300 hover:text-blue-400 flex items-center mr-6">
              <Calendar className="mr-1 h-4 w-4" />
              Daily Ideas
            </a>
            <a href="#" className="text-slate-300 hover:text-blue-400 flex items-center mr-6">
              <Users className="mr-1 h-4 w-4" />
              Talent
            </a>
            <a href="#" className="text-slate-300 hover:text-blue-400 flex items-center">
              <Search className="mr-1 h-4 w-4" />
              Browse Ideas
            </a>
          </nav>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-slate-300 hover:text-white mr-6">FAQs</a>
          <a href="#" className="text-slate-300 hover:text-white mr-6">Blog</a>
          <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500/10">LOGIN</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
