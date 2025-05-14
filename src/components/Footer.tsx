
import React from 'react';
import { Calendar, Users, Search } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-400">Forge</span>
              <span className="text-orange-400">Pitch</span>
            </h3>
            <p className="text-slate-300">
              One fresh startup idea every day, connect with talent to bring them to life.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white flex items-center">
                  <Calendar className="mr-2 h-4 w-4" /> Daily Ideas
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white flex items-center">
                  <Users className="mr-2 h-4 w-4" /> Talent Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white flex items-center">
                  <Search className="mr-2 h-4 w-4" /> Browse Archive
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white">For Entrepreneurs</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">For Job Seekers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Idea Validation</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 ForgePitch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
