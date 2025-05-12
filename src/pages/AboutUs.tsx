
import React from 'react';
import { Bookmark, Users, Award, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">About Minifacts</h1>
              <p className="text-lg text-gray-600 mb-8">
                Bringing you fascinating facts, clever lifehacks, and expert tips to enrich your everyday life.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto">
                <p>
                  Minifacts was founded in 2023 with a simple mission: to make knowledge more accessible and entertaining. 
                  What started as a small blog sharing interesting facts has grown into a comprehensive platform dedicated 
                  to enriching lives through bite-sized knowledge and practical tips.
                </p>
                <p>
                  Our team consists of researchers, writers, and fact-checkers who are passionate about uncovering fascinating 
                  information and presenting it in engaging ways. We believe that learning should be fun, and that small pieces 
                  of knowledge can make a big difference in how we see and interact with the world around us.
                </p>
                <p>
                  Today, Minifacts reaches millions of curious minds each month, providing them with carefully curated content 
                  that inspires, educates, and occasionally makes them say "wow!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bookmark className="text-purple-500" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Accuracy</h3>
                <p className="text-gray-600">We're committed to providing accurate, well-researched information you can trust.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-teal-500" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Accessibility</h3>
                <p className="text-gray-600">We make knowledge accessible to everyone through clear, engaging content.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-500" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Quality</h3>
                <p className="text-gray-600">We maintain high standards in all our content and user experiences.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-rose-500" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Curiosity</h3>
                <p className="text-gray-600">We foster a sense of wonder and continuous learning in everything we do.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-teal-400 opacity-80"></div>
                </div>
                <h3 className="font-bold text-xl">Alex Morgan</h3>
                <p className="text-teal-600 mb-2">Founder & Editor-in-Chief</p>
                <p className="text-gray-600 text-sm">Leading our editorial vision with 15+ years in digital publishing.</p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-80"></div>
                </div>
                <h3 className="font-bold text-xl">Jamie Chen</h3>
                <p className="text-teal-600 mb-2">Head of Research</p>
                <p className="text-gray-600 text-sm">Ensuring all our facts are accurate with a background in data science.</p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-teal-400 to-green-400 opacity-80"></div>
                </div>
                <h3 className="font-bold text-xl">Sam Taylor</h3>
                <p className="text-teal-600 mb-2">Creative Director</p>
                <p className="text-gray-600 text-sm">Bringing our content to life with engaging visuals and design.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
