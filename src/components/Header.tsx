
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, User, Lightbulb, Zap, Cpu, Cube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const { toast } = useToast();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  const handleSignIn = () => {
    toast({
      title: "Authentication Coming Soon",
      description: "Sign in functionality will be implemented with Supabase integration",
      duration: 3000,
    });
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-display font-bold text-teal-600 flex items-center group">
            <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-500 group-hover:to-teal-500">
              Minifacts
            </span>
          </Link>
        </div>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">
                  <Lightbulb className="mr-1 text-purple-500" size={18} /> Amazing Facts
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link to="/minifacts" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-50 to-purple-100 p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium text-purple-600">
                            Mind-Blowing Facts
                          </div>
                          <p className="text-sm leading-tight text-purple-700 opacity-90">
                            Discover incredible facts that will amaze and surprise you.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link 
                        to="/minifacts/science" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50"
                        onClick={() => {
                          toast({
                            title: "Science Facts",
                            description: "Browsing science facts",
                          });
                        }}
                      >
                        <div className="text-sm font-medium leading-none text-purple-800">Science Facts</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-600">
                          Fascinating discoveries from the world of science.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/minifacts/history" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50"
                        onClick={() => {
                          toast({
                            title: "History Facts",
                            description: "Browsing historical facts",
                          });
                        }}
                      >
                        <div className="text-sm font-medium leading-none text-purple-800">Historical Facts</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-600">
                          Surprising events and stories from history.
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">
                  <Zap className="mr-1 text-teal-500" size={18} /> Life Hacks
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                    <li>
                      <Link 
                        to="/lifehacks/home" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 focus:bg-teal-50"
                        onClick={() => {
                          toast({
                            title: "Home Hacks",
                            description: "Browsing home hacks",
                          });
                        }}
                      >
                        <div className="text-sm font-medium leading-none text-teal-800">Home Hacks</div>
                        <p className="line-clamp-2 text-sm leading-snug text-teal-600">
                          Smart solutions for everyday home problems.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/lifehacks/kitchen" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 focus:bg-teal-50"
                        onClick={() => {
                          toast({
                            title: "Kitchen Hacks",
                            description: "Browsing kitchen hacks",
                          });
                        }}
                      >
                        <div className="text-sm font-medium leading-none text-teal-800">Kitchen Tricks</div>
                        <p className="line-clamp-2 text-sm leading-snug text-teal-600">
                          Clever cooking and food storage solutions.
                        </p>
                      </Link>
                    </li>
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link to="/lifehacks" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal-50 to-teal-100 p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium text-teal-600">
                            Smart Life Hacks
                          </div>
                          <p className="text-sm leading-tight text-teal-700 opacity-90">
                            Clever solutions to make your life easier and more efficient.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">
                  <Cpu className="mr-1 text-blue-500" size={18} /> Tech Tips
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                    <li>
                      <Link 
                        to="/tech" 
                        className="flex select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                        onClick={() => {
                          toast({
                            title: "Tech Tips",
                            description: "Browsing technology tips & tricks",
                          });
                        }}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-blue-600">
                          Technology Tips & Tricks
                        </div>
                        <p className="text-sm leading-tight text-blue-700 opacity-90">
                          Improve your tech skills and discover hidden features in your devices.
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">
                  <Cube className="mr-1 text-teal-600" size={18} /> 3D Models
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                    <li>
                      <Link 
                        to="/3dmodels" 
                        className="flex select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal-50 to-teal-100 p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-teal-600">
                          Interactive 3D Models
                        </div>
                        <p className="text-sm leading-tight text-teal-700 opacity-90">
                          Explore fascinating objects and concepts in interactive 3D.
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  to="/submit" 
                  className="group flex items-center justify-between gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600"
                  onClick={() => {
                    toast({
                      title: "Submit Content",
                      description: "Submit your own facts and hacks",
                    });
                  }}
                >
                  Submit
                  <span className="text-xs text-gray-400 transition-colors group-hover:text-teal-500">→</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-700 hover:bg-gray-100 hover:text-teal-600 md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu size={20} />
          </Button>
          <Button 
            variant="outline" 
            className="hidden md:flex border-teal-200 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 transition-colors"
            onClick={handleSignIn}
          >
            <User size={18} className="mr-2" />
            Sign In
          </Button>
        </div>
      </div>

      {showMobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/minifacts" 
              className="flex items-center p-2 rounded-md hover:bg-gray-50"
              onClick={() => {
                setShowMobileMenu(false);
                toast({
                  title: "Amazing Facts",
                  description: "Browsing amazing facts",
                });
              }}
            >
              <Lightbulb className="mr-3 text-purple-500" size={18} />
              <span>Amazing Facts</span>
            </Link>
            <Link 
              to="/lifehacks" 
              className="flex items-center p-2 rounded-md hover:bg-gray-50"
              onClick={() => {
                setShowMobileMenu(false);
                toast({
                  title: "Life Hacks",
                  description: "Browsing life hacks",
                });
              }}
            >
              <Zap className="mr-3 text-teal-500" size={18} />
              <span>Life Hacks</span>
            </Link>
            <Link 
              to="/tech" 
              className="flex items-center p-2 rounded-md hover:bg-gray-50"
              onClick={() => {
                setShowMobileMenu(false);
                toast({
                  title: "Tech Tips",
                  description: "Browsing tech tips",
                });
              }}
            >
              <Cpu className="mr-3 text-blue-500" size={18} />
              <span>Tech Tips</span>
            </Link>
            <Link 
              to="/3dmodels" 
              className="flex items-center p-2 rounded-md hover:bg-gray-50"
              onClick={() => {
                setShowMobileMenu(false);
                toast({
                  title: "3D Models",
                  description: "Browsing 3D models",
                });
              }}
            >
              <Cube className="mr-3 text-teal-600" size={18} />
              <span>3D Models</span>
            </Link>
            <Link 
              to="/submit" 
              className="flex items-center p-2 rounded-md hover:bg-gray-50"
              onClick={() => {
                setShowMobileMenu(false);
                toast({
                  title: "Submit Content",
                  description: "Submit your own facts and hacks",
                });
              }}
            >
              <span>Submit</span>
            </Link>
            <Button 
              variant="outline" 
              className="w-full border-teal-200 hover:bg-teal-50 mt-2"
              onClick={() => {
                setShowMobileMenu(false);
                handleSignIn();
              }}
            >
              <User size={18} className="mr-2" />
              Sign In
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
