
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User, Lightbulb, Zap, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-display font-bold text-teal-600 flex items-center group">
            <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-500 group-hover:to-teal-500">
              SnappyTips
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
                      <Link to="/minifacts/science" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50">
                        <div className="text-sm font-medium leading-none text-purple-800">Science Facts</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-600">
                          Fascinating discoveries from the world of science.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/minifacts/history" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50">
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
                      <Link to="/lifehacks/home" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 focus:bg-teal-50">
                        <div className="text-sm font-medium leading-none text-teal-800">Home Hacks</div>
                        <p className="line-clamp-2 text-sm leading-snug text-teal-600">
                          Smart solutions for everyday home problems.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/lifehacks/kitchen" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 focus:bg-teal-50">
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
                      <Link to="/tech" className="flex select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md">
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
                <Link to="/submit" className="group flex items-center justify-between gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600">
                  Submit
                  <span className="text-xs text-gray-400 transition-colors group-hover:text-teal-500">→</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-700 hover:bg-gray-100 hover:text-teal-600">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700 hover:bg-gray-100 hover:text-teal-600 md:hidden">
            <Menu size={20} />
          </Button>
          <Button variant="outline" className="hidden md:flex border-teal-200 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 transition-colors">
            <User size={18} className="mr-2" />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
