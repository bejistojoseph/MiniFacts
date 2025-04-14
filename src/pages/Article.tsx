
import React from 'react';
import { useParams } from 'react-router-dom';
import { Share2, Facebook, Twitter, Linkedin, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedContent from '@/components/FeaturedContent';

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In a real app, this would fetch the article data based on the slug
  // For now, we'll use a hardcoded article
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Article Header */}
        <div className="bg-white pt-8 pb-0">
          <div className="container mx-auto px-4">
            <Button variant="ghost" className="text-gray-500 mb-4" onClick={() => window.history.back()}>
              <ArrowLeft size={16} className="mr-2" />
              Back
            </Button>
            
            <div className="max-w-3xl mx-auto">
              <div className="category-badge bg-teal-100 text-teal-600 mb-4">Life Hack</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                Use a rubber band to open a stuck jar lid
              </h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>Published April 10, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>2 min read</span>
                </div>
              </div>
              
              {/* Social Share */}
              <div className="flex items-center gap-2 mb-8">
                <span className="text-sm text-gray-500">Share:</span>
                <Button variant="outline" size="icon" className="rounded-full w-8 h-8 p-0">
                  <Facebook size={14} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-8 h-8 p-0">
                  <Twitter size={14} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-8 h-8 p-0">
                  <Linkedin size={14} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-8 h-8 p-0">
                  <Share2 size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden bg-gray-100 mb-10">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
            alt="Rubber band jar hack" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Article Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="prose lg:prose-lg">
              <p className="lead text-xl text-gray-600 mb-6">
                Have you ever struggled to open a stubborn jar lid? This simple rubber band trick will make opening even the most stuck lids a breeze.
              </p>
              
              <h2>Why This Works</h2>
              <p>
                Jar lids can become difficult to open due to various factors such as vacuum seals, dried food residue, or simply because they've been tightened too firmly. The rubber band provides additional grip that your fingers can't achieve on the smooth surface of the jar lid.
              </p>
              
              <h2>What You'll Need</h2>
              <ul>
                <li>A thick rubber band (the wider, the better)</li>
                <li>A jar with a stuck lid</li>
              </ul>
              
              <h2>Step-by-Step Instructions</h2>
              <ol>
                <li>Take a thick rubber band and wrap it around the edge of the jar lid.</li>
                <li>Make sure the rubber band is sitting flat against the lid's surface for maximum grip.</li>
                <li>Twist the lid using the rubber band for extra traction. The rubber material creates friction against both your hand and the lid.</li>
                <li>If the lid is still stubborn, try running warm water over it for a few seconds to expand the metal slightly before trying again with the rubber band.</li>
              </ol>
              
              <h2>Other Uses for This Hack</h2>
              <p>
                This technique doesn't just work for food jars. You can use it for:
              </p>
              <ul>
                <li>Medicine bottles</li>
                <li>Cosmetic containers</li>
                <li>Any screw-top container that's difficult to open</li>
              </ul>
              
              <h2>Why It's Better Than Other Methods</h2>
              <p>
                Unlike other methods that might damage the jar or lid (like using a knife to break the seal), this technique is gentle and won't risk injury or damage to the container. It's also using something most people have readily available at home.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg my-8">
                <h3 className="text-blue-700 font-medium mb-2">Pro Tip</h3>
                <p className="text-blue-600 mb-0">
                  Keep a few thick rubber bands in your kitchen drawer specifically for this purpose. The thicker the rubber band, the better grip it will provide.
                </p>
              </div>
            </div>
            
            {/* Tags */}
            <div className="mt-12 pt-6 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-500">Tags:</span>
                <a href="#" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-600 transition-colors">Kitchen</a>
                <a href="#" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-600 transition-colors">Food</a>
                <a href="#" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-600 transition-colors">Easy Fixes</a>
                <a href="#" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-600 transition-colors">Simple Hacks</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Content */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-10 text-center">You Might Also Like</h2>
            <FeaturedContent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
