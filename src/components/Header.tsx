
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 border-b border-slate-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-blue-600">Forge</span>
            <span className="text-orange-500">Pitch</span>
          </h1>
          <nav className="hidden md:flex ml-10">
            <a href="#" className="text-slate-600 hover:text-blue-600 flex items-center mr-6">
              <Calendar className="mr-1 h-4 w-4" />
              Daily Ideas
            </a>
            <a href="#" className="text-slate-600 hover:text-blue-600 flex items-center mr-6">
              <Users className="mr-1 h-4 w-4" />
              Talent
            </a>
            <a href="#" className="text-slate-600 hover:text-blue-600 flex items-center">
              <Search className="mr-1 h-4 w-4" />
              Browse Ideas
            </a>
          </nav>
        </div>
        <div className="flex items-center">
          <Button variant="outline" className="mr-3">Sign In</Button>
          <Button>Join Free</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
