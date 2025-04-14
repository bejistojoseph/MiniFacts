
import React from 'react';
import { Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-500/10 to-purple-500/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6">
            <Mail size={24} className="text-teal-500" />
          </div>
          
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Get Weekly Facts & Hacks
          </h2>
          
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and receive amazing facts and useful lifehacks directly in your inbox every week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="rounded-md flex-1"
            />
            <Button className="bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600">
              Subscribe
            </Button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-4 text-xs text-gray-500">
            <div className="flex items-center">
              <Check size={12} className="text-teal-500 mr-1" />
              <span>Weekly digest</span>
            </div>
            <div className="flex items-center">
              <Check size={12} className="text-teal-500 mr-1" />
              <span>No spam</span>
            </div>
            <div className="flex items-center">
              <Check size={12} className="text-teal-500 mr-1" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
