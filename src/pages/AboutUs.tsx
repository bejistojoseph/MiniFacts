
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
                <p className='text-align-centre'>
                💡Welcome to Minifacts – your go-to hub for curious mini facts, clever life hacks, and everyday tricks that make life just a little easier (and a lot more fun)!

              <div></div> 💡This website was born out of a spontaneous idea – I received a free domain from XYZ, and thought, “Why not build something fun and useful?” That’s when Minifacts came to life.

                <div></div>💡But here’s the twist – I didn’t do it alone. I created this entire site with the help of AI tools like Lovable AI (for design inspiration), GitHub Copilot (for coding assistance), and of course, ChatGPT (for everything from ideas to content and development support). It’s a demo project, yes – but also a showcase of what you can build when creativity meets AI.

              <div></div> 💡 Whether you’re here to learn why bananas are berries or how to chop herbs faster with a pizza cutter, I hope this site brings a smile to your face – and maybe teaches you something new.

                


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


      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
