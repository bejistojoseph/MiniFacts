import React, { Suspense, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Float, Environment } from "@react-three/drei";
import { motion, useAnimation } from "framer-motion";

const tips: Record<string, string> = {
  "💡": "Use a binder clip to organize charging cables!",
  "🧠": "Your brain uses 20% of your total energy.",
  "📱": "Charge phones faster by switching to Airplane Mode.",
  "🍲": "Use ice cubes to remove extra oil from soups.",
  "💵": "Round-up apps help you save money automatically.",
  "🌍": "Roll clothes instead of folding when packing.",
  "🍎": "An apple a day can reduce cholesterol levels.",
  "🔧": "Fix squeaky hinges with petroleum jelly!",
  "🖥️": "Use keyboard shortcuts to boost productivity.",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const FloatingIcon = ({
  position,
  emoji,
  label,
  delay = 0,
}: {
  position: [number, number, number];
  emoji: string;
  label: string;
  delay?: number;
}) => {
  const [showTip, setShowTip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scale = isMobile ? 0.7 : 1;
  const adjustedPosition: [number, number, number] = [
    position[0] * scale,
    position[1] * scale,
    position[2],
  ];

  return (
    <Float
      speed={2}
      rotationIntensity={0}
      floatIntensity={1.2}
      position={adjustedPosition}
    >
      <Html
        center
        style={{ pointerEvents: "auto" }}
        zIndexRange={[10, 0]}
        transform
      >
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay * 0.2, duration: 0.5 }}
        >
          <div
            className="text-2xl md:text-4xl cursor-pointer select-none transition-transform hover:scale-125"
            onMouseEnter={() => setShowTip(true)}
            onMouseLeave={() => setShowTip(false)}
            onClick={() => setShowTip(!showTip)}
            title={label}
          >
            {emoji}
          </div>
          {showTip && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full mt-2 px-4 py-2 rounded-xl text-xs md:text-sm text-white bg-white/20 backdrop-blur-md border border-white/30 shadow-lg max-w-[140px] md:max-w-[180px] z-50"
            >
              {tips[emoji] || label}
            </motion.div>
          )}
        </motion.div>
      </Html>
    </Float>
  );
};

const Hero = () => {
  const { toast } = useToast();
  const controls = useAnimation();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="relative h-[85vh] md:h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <Environment preset="city" />
            <FloatingIcon
              position={[-4.5, 3.6, 0]}
              emoji="💡"
              label="Ideas"
              delay={0}
            />
            <FloatingIcon
              position={[2, 3.6, 0]}
              emoji="🧠"
              label="Minifacts"
              delay={1}
            />
            <FloatingIcon
              position={[-2.5, -3.8, 0]}
              emoji="📱"
              label="Tech Hacks"
              delay={2}
            />
            <FloatingIcon
              position={[2.8, -2.5, 0]}
              emoji="🍲"
              label="Kitchen Tips"
              delay={3}
            />
            <FloatingIcon
              position={[-5, -0.5, 0]}
              emoji="💵"
              label="Money Hacks"
              delay={4}
            />
            <FloatingIcon
              position={[0, 4.5, 0]}
              emoji="🌍"
              label="Travel Tips"
              delay={5}
            />
            <FloatingIcon
              position={[0.5, -2, 0]}
              emoji="🍎"
              label="Wellness"
              delay={6}
            />
            <FloatingIcon
              position={[2, 0, 0]}
              emoji="🔧"
              label="Life Hacks"
              delay={7}
            />
            <FloatingIcon
              position={[-1.9, 3.9, 0]}
              emoji="🖥️"
              label="Tech Tips"
              delay={8}
            />
             <FloatingIcon
              position={[-1.9, 5.9, 0]}
              emoji="🔭"
              label="Tech Tips"
              delay={9}
            />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            // autoRotate
            // autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-poetsen mb-6 text-white backdrop-blur-sm bg-white/5 rounded-2xl p-4"
          >
            Unlock Amazing Facts & Smart Hacks for a Better Life
          </motion.h1>

          {/* <motion.p
            variants={itemVariants}
            className="text-gray-200 text-base md:text-xl mb-8 backdrop-blur-sm bg-white/5 rounded-xl p-3"
          >
            Explore our collection of fascinating minifacts, clever lifehacks,
            and expert tips to upgrade your everyday life.
          </motion.p> */}

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 p-2 rounded-xl"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 group"
              asChild
            >
              <a
                href="#explore"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("amazing-facts-section");
                }}
              >
                Explore Facts
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-200 text-purple-100 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-purple-300 hover:shadow-md transition-all duration-300"
              asChild
            >
              <Link to="/lifehacks">View Lifehacks</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-200 text-blue-100 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              asChild
            >
              <Link to="/techtips">Tech Tips</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
