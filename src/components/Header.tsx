
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-display font-bold text-teal-600 flex items-center">
            <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
              SnappyTips
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/minifacts" className="font-medium text-gray-700 hover:text-teal-600 transition-colors">
            Amazing Facts
          </Link>
          <Link to="/lifehacks" className="font-medium text-gray-700 hover:text-teal-600 transition-colors">
            Life Hacks
          </Link>
          <Link to="/tech" className="font-medium text-gray-700 hover:text-teal-600 transition-colors">
            Tech Tips
          </Link>
          <Link to="/submit" className="font-medium text-gray-700 hover:text-teal-600 transition-colors">
            Submit
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700 md:hidden">
            <Menu size={20} />
          </Button>
          <Button variant="outline" className="hidden md:flex">
            <User size={18} className="mr-2" />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
