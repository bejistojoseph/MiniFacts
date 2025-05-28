
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

const handleSocialClick = (platform: string) => {
  const shareUrl = encodeURIComponent("https://yourwebsite.com"); // Replace with your site or specific post
  const shareText = encodeURIComponent("Check out these amazing facts on Minifacts!");

  let url = "";

  switch (platform) {
    case 'Facebook':
      url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
      break;
    case 'Twitter':
      url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
      break;
    case 'Instagram':
      toast({
        title: "Instagram",
        description: "Instagram does not support web sharing. Please share manually.",
        duration: 4000,
      });
      return; // Instagram doesn't support web-based sharing
     case 'WhatsApp':
      url = `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`;
      break;
    default:
      return;
  }

  window.open(url, "_blank");
};

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    toast({
      title: "Subscription successful!",
      description: `You've been subscribed to our newsletter with ${email}`,
      duration: 5000,
    });
    
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-display font-bold text-teal-600 flex items-center">
              <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
                Minifacts
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              Your daily source for amazing facts, clever lifehacks, and invaluable tips.
            </p>
            <div className="flex space-x-4 mt-6">
              <button 
                className="text-gray-400 hover:text-teal-500 transition-colors"
                onClick={() => handleSocialClick('Facebook')}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </button>
              <button 
                className="text-gray-400 hover:text-teal-500 transition-colors"
                onClick={() => handleSocialClick('Twitter')}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </button>
              <button 
                className="text-gray-400 hover:text-teal-500 transition-colors"
                onClick={() => handleSocialClick('Instagram')}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </button>
          <button 
  className="text-gray-400 hover:text-teal-500 transition-colors"
  onClick={() => handleSocialClick('WhatsApp')}
  aria-label="WhatsApp"
>
  <MessageCircle size={20} />
</button>

            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/minifacts" 
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                  onClick={() => {
                    toast({
                      title: "Amazing Facts",
                      description: "Browsing amazing facts",
                      duration: 2000,
                    });
                  }}
                >
                  Amazing Facts
                </Link>
              </li>
              <li>
                <Link 
                  to="/lifehacks" 
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                  onClick={() => {
                    toast({
                      title: "Life Hacks",
                      description: "Browsing life hacks",
                      duration: 2000,
                    });
                  }}
                >
                  Life Hacks
                </Link>
              </li>
              <li>
                <Link 
                  to="/techtips" 
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                  onClick={() => {
                    toast({
                      title: "Tech Tips",
                      description: "Browsing tech tips",
                      duration: 2000,
                    });
                  }}
                >
                  Tech Tips
                </Link>
              </li>
              <li>
                <Link 
                  to="/food" 
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                  onClick={() => {
                    toast({
                      title: "Food Hacks",
                      description: "Browsing food hacks",
                      duration: 2000,
                    });
                  }}
                >
                  Food Hacks
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                  onClick={() => {
                    toast({
                      title: "About Us",
                      description: "Learn more about SnappyTips",
                      duration: 2000,
                    });
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                  onClick={() => {
                    toast({
                      title: "Contact Us",
                      description: "Get in touch with our team",
                      duration: 2000,
                    });
                  }}
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                  onClick={() => {
                    toast({
                      title: "Privacy Policy",
                      description: "Read our privacy policy",
                      duration: 2000,
                    });
                  }}
                >
                  Privacy Policy
                </Link>
              </li> */}
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                  onClick={() => {
                    toast({
                      title: "Terms of Service",
                      description: "Read our terms of service",
                      duration: 2000,
                    });
                  }}
                >
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
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600"
              >
                <Mail size={16} className="mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Minifacts. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <Link 
              to="/privacy" 
              className="text-sm text-gray-500 hover:text-teal-500 transition-colors"
              onClick={() => {
                toast({
                  title: "Privacy Policy",
                  description: "Reading our privacy policy",
                  duration: 2000,
                });
              }}
            >
              Privacy
            </Link> */}
            <Link 
              to="/terms" 
              className="text-sm text-gray-500 hover:text-teal-500 transition-colors"
              onClick={() => {
                toast({
                  title: "Terms of Service",
                  description: "Reading our terms of service",
                  duration: 2000,
                });
              }}
            >
              Terms
            </Link>
            <Link 
              to="/sitemap" 
              className="text-sm text-gray-500 hover:text-teal-500 transition-colors"
              onClick={() => {
                toast({
                  title: "Sitemap",
                  description: "Viewing site structure",
                  duration: 2000,
                });
              }}
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
