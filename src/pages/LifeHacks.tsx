
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  ChefHat, 
  Home, 
  Smartphone, 
  Coins, 
  Luggage, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import RandomHackButton from '@/components/RandomHackButton';

// Life hacks data organized by categories
const lifehacksData = {
  kitchen: [
    {
      id: 'k1',
      title: 'Keep Brown Sugar Soft',
      description: 'Add a marshmallow or a slice of bread to the container to prevent hardening.',
      icon: '🍞'
    },
    {
      id: 'k2',
      title: 'Freeze Herbs in Olive Oil',
      description: 'Use ice cube trays to freeze herbs in olive oil for easy cooking portions.',
      icon: '🌿'
    },
    {
      id: 'k3',
      title: 'Pit Cherries with a Straw',
      description: 'Push a straw through the stem end to remove the pit cleanly.',
      icon: '🍒'
    },
    {
      id: 'k4',
      title: 'Revive Stale Chips',
      description: 'Microwave stale chips or crackers for 10 seconds with a damp paper towel.',
      icon: '🍪'
    },
    {
      id: 'k5',
      title: 'Easy Ginger Peeling',
      description: 'Peel ginger easily with a spoon—the skin scrapes right off!',
      icon: '🥄'
    }
  ],
  home: [
    {
      id: 'h1',
      title: 'Tension Rod for Spray Bottles',
      description: 'Use a tension rod under the sink to hang spray bottles and save space.',
      icon: '🧴'
    },
    {
      id: 'h2',
      title: 'Sheet Storage Hack',
      description: 'Store bed sheets inside their matching pillowcase to keep sets organized.',
      icon: '🛏️'
    },
    {
      id: 'h3',
      title: 'Bread Clip Cord Labels',
      description: 'Label cords with bread clips—write the device name on them and slide them onto wires.',
      icon: '🔌'
    },
    {
      id: 'h4',
      title: 'Upside-down Muffin Tin',
      description: 'Turn a muffin tin upside down to hold small items (nails, beads, etc.) while working.',
      icon: '🧁'
    },
    {
      id: 'h5',
      title: 'Coffee Filter Screen Cleaner',
      description: "Use a coffee filter to clean TV screens—it's lint-free and gentle.",
      icon: '📺'
    }
  ],
  tech: [
    {
      id: 't1',
      title: 'Find Phone with Smartwatch',
      description: 'Ping your phone even when on silent via Find My Device on your smartwatch.',
      icon: '⌚'
    },
    {
      id: 't2',
      title: 'Binder Clip Cable Organizer',
      description: 'Use binder clips as cable organizers on your desk.',
      icon: '📎'
    },
    {
      id: 't3',
      title: 'Fast Phone Charging',
      description: 'Charge your phone faster by switching to airplane mode while charging.',
      icon: '✈️'
    },
    {
      id: 't4',
      title: 'DIY Phone Stand',
      description: 'Fold a paperclip into a "Z" shape and prop up your phone.',
      icon: '📱'
    },
    {
      id: 't5',
      title: 'Fix Phone Scratches',
      description: 'Use toothpaste to buff out small phone scratches (works on plastic screens).',
      icon: '🪥'
    }
  ],
  money: [
    {
      id: 'm1',
      title: 'Efficient Pasta Cooking',
      description: 'Boil pasta in less water—it cooks just as well and saves energy.',
      icon: '🍝'
    },
    {
      id: 'm2',
      title: 'Homemade Laundry Detergent',
      description: 'Make your own with baking soda, grated soap, and washing soda.',
      icon: '🧺'
    },
    {
      id: 'm3',
      title: 'Rubber Band Jar Opener',
      description: 'Use a rubber band to open stuck jars—wrap it around the lid for extra grip.',
      icon: '🫙'
    },
    {
      id: 'm4',
      title: 'Freeze Leftover Wine',
      description: 'Freeze leftover wine in ice cube trays for cooking later.',
      icon: '🍷'
    },
    {
      id: 'm5',
      title: 'Repurpose Old Socks',
      description: 'Use old socks as dusting mitts or pet toys.',
      icon: '🧦'
    }
  ],
  travel: [
    {
      id: 'tr1',
      title: 'Roll Clothes for Packing',
      description: 'Roll clothes instead of folding to save luggage space and prevent wrinkles.',
      icon: '👕'
    },
    {
      id: 'tr2',
      title: 'Shoe Cover Hack',
      description: 'Use a shower cap to cover shoes in your suitcase and keep clothes clean.',
      icon: '👟'
    },
    {
      id: 'tr3',
      title: 'Offline Google Maps',
      description: 'Bookmark Google Maps offline before traveling to avoid data charges.',
      icon: '🗺️'
    },
    {
      id: 'tr4',
      title: 'Two-Minute Rule',
      description: 'If a task takes less than 2 minutes, do it immediately rather than later.',
      icon: '⏱️'
    },
    {
      id: 'tr5',
      title: 'Natural Wake-Up Trick',
      description: 'Drink water before bed to naturally wake up earlier without an alarm.',
      icon: '💧'
    }
  ]
};

// Get all hacks in a single array for random selection
const getAllHacks = () => {
  const allHacks = [];
  for (const category in lifehacksData) {
    allHacks.push(...lifehacksData[category]);
  }
  return allHacks;
};

const categories = [
  { 
    id: 'kitchen', 
    name: 'Kitchen Hacks', 
    icon: <ChefHat className="w-6 h-6" />, 
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100'
  },
  { 
    id: 'home', 
    name: 'Home & Organization', 
    icon: <Home className="w-6 h-6" />, 
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-100'
  },
  { 
    id: 'tech', 
    name: 'Tech & Gadgets', 
    icon: <Smartphone className="w-6 h-6" />, 
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100'
  },
  { 
    id: 'money', 
    name: 'Money-Saving Tricks', 
    icon: <Coins className="w-6 h-6" />, 
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100'
  },
  { 
    id: 'travel', 
    name: 'Travel & Productivity', 
    icon: <Luggage className="w-6 h-6" />, 
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100'
  }
];

const LifeHacks = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('kitchen');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    toast({
      title: `${categories.find(cat => cat.id === categoryId)?.name}`,
      description: "Showing life hacks for this category",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm text-teal-600 font-medium text-sm mb-6 shadow-sm">
                Tips & Tricks
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clever Life Hacks
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-8">
                Smart shortcuts and creative solutions to make everyday life easier
              </p>
              
              <div className="flex justify-center">
                <RandomHackButton allHacks={getAllHacks()} />
              </div>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-8 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`flex items-center gap-2 ${
                    activeCategory === category.id 
                      ? `${category.color.replace('text-', 'bg-')} text-white` 
                      : `${category.borderColor} ${category.color}`
                  }`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Life Hacks Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifehacksData[activeCategory].map((hack) => (
                <div 
                  key={hack.id} 
                  className={`p-6 rounded-xl border ${categories.find(cat => cat.id === activeCategory).borderColor} ${categories.find(cat => cat.id === activeCategory).bgColor} hover:shadow-md transition-shadow duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{hack.icon}</div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-2 ${categories.find(cat => cat.id === activeCategory).color}`}>{hack.title}</h3>
                      <p className="text-gray-700">{hack.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LifeHacks;
