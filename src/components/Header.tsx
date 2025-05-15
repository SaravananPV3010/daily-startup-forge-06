
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full py-4 bg-transparent">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-blue-500">Forge</span>
            <span className="text-orange-500">Pitch</span>
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-300 hover:text-white">FAQs</a>
          <a href="#" className="text-slate-300 hover:text-white">Blogs</a>
          <Button variant="outline" className="border-yellow-400 bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black hover:border-yellow-500">LOGIN</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
