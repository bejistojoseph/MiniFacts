
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lightbulb, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Sample facts data
const factsData = [
  {
    id: 'f1',
    category: 'science',
    title: 'Honey Never Spoils',
    description: 'Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.',
    icon: '🍯'
  },
  {
    id: 'f2',
    category: 'science',
    title: 'Octopus Intelligence',
    description: 'Octopuses have three hearts, nine brains, and can solve complex puzzles. They are considered the most intelligent invertebrates.',
    icon: '🐙'
  },
  {
    id: 'f3',
    category: 'history',
    title: 'Cleopatra Lived Closer to Pizza Hut',
    description: 'Cleopatra lived closer to the invention of the iPhone than she did to the building of the Great Pyramid of Giza.',
    icon: '👑'
  },
  {
    id: 'f4',
    category: 'history',
    title: 'Longest War Over A Bucket',
    description: 'The "War of the Bucket" was fought in 1325 between Bologna and Modena in Italy. It was sparked when soldiers from Modena stole a bucket.',
    icon: '🪣'
  },
  {
    id: 'f5',
    category: 'science',
    title: 'Lightning Creates Glass',
    description: 'When lightning strikes sand, it creates glass tubes called fulgurites.',
    icon: '⚡'
  },
  {
    id: 'f6',
    category: 'history',
    title: 'First Vending Machine',
    description: 'The first vending machine was invented in the 1st century CE by Hero of Alexandria. It dispensed holy water when a coin was inserted.',
    icon: '🏛️'
  },
  {
    id: 'f7',
    category: 'science',
    title: 'Space Smells',
    description: 'Astronauts report that space smells like seared steak, hot metal, and welding fumes.',
    icon: '🚀'
  },
  {
    id: 'f8',
    category: 'history',
    title: 'Oxford Predates Aztecs',
    description: 'Oxford University is older than the Aztec Empire. Teaching began at Oxford in 1096, and the Aztec civilization began in 1325.',
    icon: '🎓'
  },
  {
    id: 'f9',
    category: 'science',
    title: '10% Brain Myth',
    description: 'The myth that humans only use 10% of their brains is false. Brain scans show activity throughout the entire brain.',
    icon: '🧠'
  }
];

const Minifacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm text-purple-600 font-medium text-sm mb-6 shadow-sm">
                Knowledge & Wonder
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Mind-Blowing Facts
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-8">
                Discover incredible facts that will amaze and expand your knowledge
              </p>
              
              <div className="flex justify-center gap-4">
                <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
                  <Sparkles className="mr-2 h-4 w-4" /> Random Fact
                </Button>
                <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                  Browse Categories
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Browse Facts By Category</h2>
              <Button variant="ghost" className="text-purple-600 hover:text-purple-800 hover:bg-purple-50">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/minifacts/science" className="block group">
                <div className="p-6 rounded-xl border border-purple-100 bg-white hover:bg-purple-50 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-purple-600 group-hover:bg-purple-200 transition-colors">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Science Facts</h3>
                  <p className="text-gray-600">Fascinating discoveries and phenomena from the world of science.</p>
                </div>
              </Link>
              
              <Link to="/minifacts/history" className="block group">
                <div className="p-6 rounded-xl border border-blue-100 bg-white hover:bg-blue-50 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-200 transition-colors">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Historical Facts</h3>
                  <p className="text-gray-600">Surprising events and stories from throughout human history.</p>
                </div>
              </Link>
              
              <Link to="/minifacts/space" className="block group">
                <div className="p-6 rounded-xl border border-indigo-100 bg-white hover:bg-indigo-50 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Space & Universe</h3>
                  <p className="text-gray-600">Mind-bending facts about space, stars, planets and cosmic phenomena.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Facts Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Featured Facts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {factsData.map((fact) => (
                <div key={fact.id} className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{fact.icon}</div>
                    <div>
                      <div className="inline-block px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full mb-2">
                        {fact.category === 'science' ? 'Science' : 'History'}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{fact.title}</h3>
                      <p className="text-gray-600">{fact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Load More Facts
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Minifacts;
