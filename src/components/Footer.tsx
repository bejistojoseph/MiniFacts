
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-display font-bold text-teal-600 flex items-center">
              <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
                SnappyTips
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              Your daily source for amazing facts, clever lifehacks, and invaluable tips.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/minifacts" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Amazing Facts
                </Link>
              </li>
              <li>
                <Link to="/lifehacks" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Life Hacks
                </Link>
              </li>
              <li>
                <Link to="/tech" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Tech Tips
                </Link>
              </li>
              <li>
                <Link to="/food" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Food Hacks
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-teal-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to get the latest facts and hacks!
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="rounded-md"
              />
              <Button className="w-full bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600">
                <Mail size={16} className="mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SnappyTips. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-teal-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-teal-500 transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-teal-500 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
