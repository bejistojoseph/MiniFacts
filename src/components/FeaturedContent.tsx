
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import FactCard from './FactCard';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data (in a real app, this would come from an API or database)
const featuredFacts = [
  {
    id: '1',
    title: 'Honey never spoils - archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old',
    description: `Due to its chemical makeup and low moisture content, honey creates an environment where bacteria and microorganisms cannot survive, making it one of the only foods that never spoils.`,
    category: 'Amazing Fact',
    categoryColor: 'bg-purple-100 text-purple-600',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    slug: 'honey-never-spoils'
  },
  {
    id: '2',
    title: 'Use a rubber band to open a stuck jar lid',
    description: `Wrap a thick rubber band around the edge of a jar lid to get a better grip. The rubber creates traction, making it much easier to twist open stubborn lids.`,
    category: 'Life Hack',
    categoryColor: 'bg-teal-100 text-teal-600',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    slug: 'rubber-band-jar-hack'
  },
  {
    id: '3',
    title: 'Use airplane mode to charge your phone faster',
    description: `When you need a quick charge, switch your phone to airplane mode. This disables all wireless transmissions, which use significant battery power and slows down charging.`,
    category: 'Tech Tip',
    categoryColor: 'bg-blue-100 text-blue-600',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    slug: 'airplane-mode-charging'
  },
  {
    id: '4',
    title: 'Cats purr not just when happy, but also to heal themselves',
    description: `The frequency of a cat's purr (between 25 and 150 Hz) can improve bone density and promote healing. This may explain why cats recover more quickly from injuries than dogs.`,
    category: 'Amazing Fact',
    categoryColor: 'bg-purple-100 text-purple-600',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    slug: 'cat-purring-healing'
  },
  {
    id: '5',
    title: 'Use toothpaste to clean foggy headlights',
    description: `Apply regular white toothpaste (not gel) to foggy headlights, scrub gently with a brush, and rinse. The mild abrasives in toothpaste remove oxidation leaving headlights clearer.`,
    category: 'Life Hack',
    categoryColor: 'bg-teal-100 text-teal-600',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    slug: 'toothpaste-headlight-clean'
  },
  {
    id: '6',
    title: 'Press Ctrl+Shift+T to reopen closed browser tabs',
    description: `If you accidentally close a browser tab, this keyboard shortcut will bring it back. You can press it multiple times to reopen several recently closed tabs in order.`,
    category: 'Tech Tip',
    categoryColor: 'bg-blue-100 text-blue-600',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    slug: 'reopen-browser-tabs'
  }
];

// New amazing facts from different categories
const amazingFacts = {
  nature: [
    {
      id: 'n1',
      title: 'A single lightning bolt contains enough energy to toast 100,000 slices of bread',
      description: 'Lightning strikes are powerful electrical discharges that contain enormous amounts of energy - enough to power a household for weeks or toast thousands of slices of bread instantly.',
      category: 'Nature & Science',
      categoryColor: 'bg-green-100 text-green-600',
      image: 'https://images.unsplash.com/photo-1461511669078-d46bf351cd6e',
      slug: 'lightning-energy-fact'
    },
    {
      id: 'n2',
      title: 'Octopuses have three hearts, nine brains, and blue blood',
      description: 'Octopuses are among the most fascinating creatures on Earth. They have one main brain and a mini-brain in each arm, three hearts that pump blue blood containing copper rather than iron.',
      category: 'Nature & Science',
      categoryColor: 'bg-green-100 text-green-600',
      image: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10',
      slug: 'octopus-anatomy-fact'
    },
    {
      id: 'n3',
      title: 'Venus is the only planet that spins clockwise',
      description: 'While most planets in our solar system rotate counterclockwise, Venus rotates clockwise (retrograde rotation). This unique spin may be due to a massive collision in its early history.',
      category: 'Nature & Science',
      categoryColor: 'bg-green-100 text-green-600',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
      slug: 'venus-rotation-fact'
    },
    {
      id: 'n4',
      title: 'The smell of rain (petrichor) is caused by bacteria in the soil',
      description: 'The pleasant earthy smell after rainfall is called petrichor. It comes from an oil produced by certain plants during dry periods, which is then released into the air when it rains.',
      category: 'Nature & Science',
      categoryColor: 'bg-green-100 text-green-600',
      image: 'https://images.unsplash.com/photo-1428592953211-077101b2021b',
      slug: 'petrichor-fact'
    },
    {
      id: 'n5',
      title: "Bananas are berries, but strawberries aren't",
      description: "Botanically speaking, bananas are berries (developing from a single flower with one ovary) while strawberries are \"aggregate fruits\" from a flower with multiple ovaries.",
      category: 'Nature & Science',
      categoryColor: 'bg-green-100 text-green-600',
      image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919',
      slug: 'banana-berry-fact'
    },
    {
      id: 'n6',
      title: 'A day on Venus is longer than a year on Venus',
      description: 'Venus takes 243 Earth days to complete one rotation on its axis (a day), but only 225 Earth days to orbit the Sun (a year). This means a day on Venus is longer than its year!',
      category: 'Nature & Science',
      categoryColor: 'bg-green-100 text-green-600',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
      slug: 'venus-day-year'
    },
    {
      id: 'n7',
      title: 'The Great Pyramid of Giza can tell time - it acts as a giant sundial',
      description: 'The ancient Egyptians designed the Great Pyramid with such precision that its shadow can track time. During equinoxes, the shadow movement creates a remarkable timekeeping effect.',
      category: 'Nature & Science',
      categoryColor: 'bg-green-100 text-green-600',
      image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368',
      slug: 'pyramid-sundial'
    },
    {
      id: 'n8',
      title: 'Cows have best friends and get stressed when separated',
      description: 'Studies have shown that cows form close emotional bonds with other cows. They have preferred companions and show signs of stress when separated from their bovine friends.',
      category: 'Nature & Science',
      categoryColor: 'bg-green-100 text-green-600',
      image: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53',
      slug: 'cow-friendships'
    },
    {
      id: 'n9',
      title: 'A teaspoon of a neutron star weighs 6 billion tons',
      description: 'Neutron stars are so incredibly dense that a single teaspoon of their material would weigh around 6 billion tons - equivalent to the weight of a mountain on Earth.',
      category: 'Nature & Science',
      categoryColor: 'bg-green-100 text-green-600',
      image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86',
      slug: 'neutron-star-density'
    },
  ],
  animals: [
    {
      id: 'a1',
      title: 'A group of flamingos is called a "flamboyance"',
      description: 'Collective animal names can be quite creative - flamingos gather in a "flamboyance," which perfectly captures their bright pink color and showy appearance.',
      category: 'Animal Kingdom',
      categoryColor: 'bg-amber-100 text-amber-600',
      image: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0',
      slug: 'flamingo-flamboyance'
    },
    {
      id: 'a2',
      title: 'Elephants can smell water from 3 miles away',
      description: 'Elephants have the strongest sense of smell in the animal kingdom - so powerful they can detect water sources from up to 3 miles away, which is crucial for survival in dry regions.',
      category: 'Animal Kingdom',
      categoryColor: 'bg-amber-100 text-amber-600',
      image: 'https://images.unsplash.com/photo-1557050543-4162f98d6094',
      slug: 'elephant-smell-fact'
    },
    {
      id: 'a3',
      title: 'Axolotls can regenerate their brains, spines, and limbs',
      description: 'These remarkable amphibians can regrow entire lost limbs, parts of their brain, spinal cord, and other body parts. Scientists study axolotls to better understand regenerative medicine.',
      category: 'Animal Kingdom',
      categoryColor: 'bg-amber-100 text-amber-600',
      image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2',
      slug: 'axolotl-regeneration'
    },
    {
      id: 'a4',
      title: 'Crows hold grudges and teach other crows to dislike humans who wronged them',
      description: 'Crows not only remember people who have threatened them, but they also communicate these threats to other crows. This "cultural transmission" of information can last for generations.',
      category: 'Animal Kingdom',
      categoryColor: 'bg-amber-100 text-amber-600',
      image: 'https://images.unsplash.com/photo-1567129587055-6c7f8caef2cc',
      slug: 'crow-grudges'
    },
    {
      id: 'a5',
      title: "A blue whale's heart is the size of a small car",
      description: "The heart of a blue whale can weigh up to 1,500 pounds (680 kg) and be as large as a Volkswagen Beetle. It beats just 8-10 times per minute but can be heard from two miles away.",
      category: 'Animal Kingdom',
      categoryColor: 'bg-amber-100 text-amber-600',
      image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f',
      slug: 'blue-whale-heart'
    },
    {
      id: 'a6',
      title: 'Pistol shrimp snap their claws so fast, they create underwater bubbles hotter than the sun',
      description: 'When a pistol shrimp snaps its claw, it creates a cavitation bubble that reaches temperatures of over 8,000°F (4,400°C) - nearly as hot as the surface of the sun!',
      category: 'Animal Kingdom',
      categoryColor: 'bg-amber-100 text-amber-600',
      image: 'https://images.unsplash.com/photo-1587634231376-d9f615730a7e',
      slug: 'pistol-shrimp-bubbles'
    },
    {
      id: 'a7',
      title: 'A hummingbird weighs less than a nickel',
      description: 'The average hummingbird weighs between 3-4 grams, less than a U.S. nickel (5 grams). Despite their tiny size, they can fly at speeds of up to 60 miles per hour!',
      category: 'Animal Kingdom',
      categoryColor: 'bg-amber-100 text-amber-600',
      image: 'https://images.unsplash.com/photo-1557648380-6921a4c8250e',
      slug: 'hummingbird-weight'
    },
    {
      id: 'a8',
      title: "Koala fingerprints are almost identical to humans' (even experts get fooled)",
      description: "Koalas have fingerprints so similar to humans that they can be confused at crime scenes. They're the only non-primates with fingerprints, evolved independently as they grip tree branches.",
      category: 'Animal Kingdom',
      categoryColor: 'bg-amber-100 text-amber-600',
      image: 'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80',
      slug: 'koala-fingerprints'
    },
    {
      id: 'a9',
      title: 'Tardigrades ("water bears") can survive in space, volcanoes, and Antarctica',
      description: 'These microscopic creatures are practically indestructible. They can survive extreme conditions including the vacuum of space, radiation, dehydration, and temperatures from near absolute zero to 300°F.',
      category: 'Animal Kingdom',
      categoryColor: 'bg-amber-100 text-amber-600',
      image: 'https://images.unsplash.com/photo-1598376006129-c9f69589d11c',
      slug: 'tardigrade-survival'
    },
    {
      id: 'a10',
      title: 'Giraffes have the same number of neck bones as humans: seven',
      description: "Despite their incredibly long necks, giraffes have the same number of cervical vertebrae as humans - just seven. The difference is that each of their neck bones can be over 10 inches long.",
      category: 'Animal Kingdom',
      categoryColor: 'bg-amber-100 text-amber-600',
      image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50',
      slug: 'giraffe-neck-bones'
    },
  ],
  human: [
    {
      id: 'h1',
      title: 'Your stomach acid can dissolve metal',
      description: 'Human stomach acid (hydrochloric acid) is powerful enough to corrode metal, yet your stomach lining regenerates so quickly that it protects itself from this powerful digestive fluid.',
      category: 'Human Body',
      categoryColor: 'bg-red-100 text-red-600',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7',
      slug: 'stomach-acid-fact'
    },
    {
      id: 'h2',
      title: "Humans glow in the dark (bioluminescence), but it's 1,000x weaker than our eyes can see",
      description: "The human body emits visible light (bioluminescence) that's too faint for the naked eye. This light fluctuates throughout the day, with lowest radiance in the afternoon and highest in the evening.",
      category: 'Human Body',
      categoryColor: 'bg-red-100 text-red-600',
      image: 'https://images.unsplash.com/photo-1607275121309-8b0404494786',
      slug: 'human-bioluminescence'
    },
    {
      id: 'h3',
      title: 'Your brain generates enough electricity to power a lightbulb',
      description: 'The human brain contains approximately 100 billion neurons that use electricity to communicate. Collectively, they generate 10-23 watts of power - enough to power a low-wattage LED light.',
      category: 'Human Body',
      categoryColor: 'bg-red-100 text-red-600',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc',
      slug: 'brain-electricity'
    },
    {
      id: 'h4',
      title: 'Babies have 60 more bones than adults',
      description: "Newborns have approximately 300 bones, while adults have 206. Many of a baby's bones fuse together as they grow, creating stronger, composite bones for adulthood.",
      category: 'Human Body',
      categoryColor: 'bg-red-100 text-red-600',
      image: 'https://images.unsplash.com/photo-1556782031-6882ffb5b3f5',
      slug: 'baby-bones-fact'
    },
    {
      id: 'h5',
      title: 'Your nose can remember 50,000 different scents',
      description: "The human nose contains roughly 400 types of scent receptors that can detect at least 1 trillion different odors. Our scent memory is remarkably durable and closely linked to emotional memories.",
      category: 'Human Body',
      categoryColor: 'bg-red-100 text-red-600',
      image: 'https://images.unsplash.com/photo-1527201987695-67c06571957e',
      slug: 'nose-memory-scents'
    },
    {
      id: 'h6',
      title: "You're taller in the morning than at night",
      description: "Throughout the day, gravity compresses your spine, making you up to half an inch shorter by evening. While you sleep, your spine decompresses and you return to your full height.",
      category: 'Human Body',
      categoryColor: 'bg-red-100 text-red-600',
      image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2',
      slug: 'height-morning-night'
    },
    {
      id: 'h7',
      title: 'Your left lung is smaller than your right to make room for your heart',
      description: 'The human left lung is about 10% smaller than the right lung, with two lobes instead of three. This asymmetry creates space to accommodate the heart on the left side of the chest cavity.',
      category: 'Human Body',
      categoryColor: 'bg-red-100 text-red-600',
      image: 'https://images.unsplash.com/photo-1631563019676-dcd343432b3e',
      slug: 'asymmetric-lungs'
    },
    {
      id: 'h8',
      title: 'The average person produces enough saliva in a lifetime to fill two swimming pools',
      description: 'Humans produce approximately 1-2 liters of saliva daily, which adds up to over 25,000 gallons in a lifetime - enough to fill multiple swimming pools! This saliva is crucial for digestion and oral health.',
      category: 'Human Body',
      categoryColor: 'bg-red-100 text-red-600',
      image: 'https://images.unsplash.com/photo-1625991504421-7615efc3dd0c',
      slug: 'lifetime-saliva-production'
    },
    {
      id: 'h9',
      title: 'You swallow about 1 liter of snot every day',
      description: 'Your nose and sinuses produce 1-2 liters of mucus daily, most of which slides down the back of your throat without you noticing. This mucus filters airborne particles before they reach your lungs.',
      category: 'Human Body',
      categoryColor: 'bg-red-100 text-red-600',
      image: 'https://images.unsplash.com/photo-1567532900258-91a64a9b5044',
      slug: 'daily-mucus-swallowing'
    },
    {
      id: 'h10',
      title: 'Your eyeballs stay the same size from birth, but your ears and nose never stop growing',
      description: "Your eyes are fully grown by age 3, but your ears and nose continue to grow throughout your life because they're made of cartilage, which continues to develop and change as you age.",
      category: 'Human Body',
      categoryColor: 'bg-red-100 text-red-600',
      image: 'https://images.unsplash.com/photo-1586184072871-645a28fadedf',
      slug: 'eye-ear-nose-growth'
    },
  ],
  history: [
    {
      id: 'hs1',
      title: 'Cleopatra lived closer to the invention of the iPhone than to the building of the Great Pyramid',
      description: 'Cleopatra lived around 30 BCE, about 2,500 years after the Great Pyramid was built (2560 BCE) but only 2,050 years before the iPhone was created (2007), demonstrating the vast age of ancient Egyptian civilization.',
      category: 'History & Culture',
      categoryColor: 'bg-indigo-100 text-indigo-600',
      image: 'https://images.unsplash.com/photo-1568322445389-f9b4639bd710',
      slug: 'cleopatra-iphone-pyramid'
    },
    {
      id: 'hs2',
      title: 'The shortest war in history was 38 minutes (Britain vs. Zanzibar, 1896)',
      description: 'The Anglo-Zanzibar War of 1896 started at 9:02 AM and ended at 9:40 AM when Zanzibar surrendered after British ships bombarded the palace. It remains the shortest recorded war in history.',
      category: 'History & Culture',
      categoryColor: 'bg-indigo-100 text-indigo-600',
      image: 'https://images.unsplash.com/photo-1580164631075-b3f1304f4051',
      slug: 'shortest-war-history'
    },
    {
      id: 'hs3',
      title: 'Albert Einstein was offered the presidency of Israel',
      description: 'In 1952, Einstein was offered the position of President of Israel following the death of its first president. Despite being deeply honored, he declined, stating his lack of aptitude for state matters.',
      category: 'History & Culture',
      categoryColor: 'bg-indigo-100 text-indigo-600',
      image: 'https://images.unsplash.com/photo-1621252179027-94459d278660',
      slug: 'einstein-israel-presidency'
    },
    {
      id: 'hs4',
      title: 'The first computer "bug" was a real insect',
      description: "In 1947, Grace Hopper found a moth causing problems in Harvard's Mark II computer. After removing it, she taped it in the logbook with the note \"first actual case of bug being found\" - originating the term \"debugging.\"",
      category: 'History & Culture',
      categoryColor: 'bg-indigo-100 text-indigo-600',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      slug: 'first-computer-bug'
    },
    {
      id: 'hs5',
      title: 'Before alarm clocks, there were "knocker-uppers"',
      description: "During the Industrial Revolution, professional \"knocker-uppers\" would tap on clients' windows with long sticks or shoot peas at their windows to wake them up for work, before alarm clocks became affordable.",
      category: 'History & Culture',
      categoryColor: 'bg-indigo-100 text-indigo-600',
      image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f',
      slug: 'knocker-uppers-history'
    },
    {
      id: 'hs6',
      title: "The Titanic's survivors could hear victims' screams for hours after it sank",
      description: "After the Titanic sank, survivors in lifeboats could hear the screams of people in the water for hours. The water was so cold (-2°C/28°F) that most victims died of hypothermia within 15-30 minutes.",
      category: 'History & Culture',
      categoryColor: 'bg-indigo-100 text-indigo-600',
      image: 'https://images.unsplash.com/photo-1516280946430-1c5acc3422cb',
      slug: 'titanic-aftermath'
    },
    {
      id: 'hs7',
      title: 'Napoleon was once attacked by a horde of rabbits',
      description: "In 1807, Napoleon arranged a rabbit hunt to celebrate a treaty. When the cages opened, thousands of rabbits charged toward Napoleon and his men instead of fleeing, forcing them to retreat to their carriages.",
      category: 'History & Culture',
      categoryColor: 'bg-indigo-100 text-indigo-600',
      image: 'https://images.unsplash.com/photo-1518796745738-41048802f99a',
      slug: 'napoleon-rabbit-attack'
    },
    {
      id: 'hs8',
      title: 'The "Dreadnought hoax" (1910): Fake Abyssinian princes tricked the British Navy',
      description: 'In 1910, pranksters including Virginia Woolf disguised themselves as "Abyssinian royalty" with fake beards and dark makeup. The Royal Navy welcomed them with full honors for a tour of HMS Dreadnought.',
      category: 'History & Culture',
      categoryColor: 'bg-indigo-100 text-indigo-600',
      image: 'https://images.unsplash.com/photo-1500589524348-2d4ffe0085ad',
      slug: 'dreadnought-hoax'
    },
    {
      id: 'hs9',
      title: 'In 1923, a jockey won a race despite being dead',
      description: 'Frank Hayes suffered a heart attack mid-race but his body stayed in the saddle as his horse, Sweet Kiss, crossed the finish line first. He remains the only jockey to win a race after death.',
      category: 'History & Culture',
      categoryColor: 'bg-indigo-100 text-indigo-600',
      image: 'https://images.unsplash.com/photo-1504376626853-81f83b3e63b1',
      slug: 'dead-jockey-victory'
    },
    {
      id: 'hs10',
      title: 'The Library of Alexandria burned for six months when Julius Caesar set fire to enemy ships',
      description: 'In 48 BCE, Julius Caesar accidentally set fire to the Library of Alexandria, destroying countless ancient texts and knowledge, when he burned enemy ships in the harbor during his civil war.',
      category: 'History & Culture',
      categoryColor: 'bg-indigo-100 text-indigo-600',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
      slug: 'library-alexandria-burning'
    },
  ],
  space: [
    {
      id: 'sp1',
      title: "There's a planet made of diamond",
      description: '55 Cancri e, a planet orbiting a star 40 light-years away, is believed to have a surface made largely of diamond. It has a mass eight times that of Earth but is twice as dense.',
      category: 'Space & Technology',
      categoryColor: 'bg-violet-100 text-violet-600',
      image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031',
      slug: 'diamond-planet'
    },
    {
      id: 'sp2',
      title: "Apollo astronauts' footprints on the Moon will last 100 million years",
      description: 'With no atmosphere, wind or water on the Moon to erode them, the footprints left by Apollo astronauts will remain intact for millions of years, only slowly fading from micrometeorite impacts.',
      category: 'Space & Technology',
      categoryColor: 'bg-violet-100 text-violet-600',
      image: 'https://images.unsplash.com/photo-1446776858070-70c3d5ed6758',
      slug: 'moon-footprints'
    },
    {
      id: 'sp3',
      title: 'Your smartphone has more computing power than NASA used to land Apollo 11 on the Moon',
      description: 'The Apollo Guidance Computer that took astronauts to the Moon had less computing power than a modern calculator. Today\'s smartphones are millions of times more powerful.',
      category: 'Space & Technology',
      categoryColor: 'bg-violet-100 text-violet-600',
      image: 'https://images.unsplash.com/photo-1589300380144-2c06e5fa275c',
      slug: 'smartphone-vs-apollo'
    },
    {
      id: 'sp4',
      title: 'Astronauts grow 2 inches taller in space',
      description: "Without Earth's gravity compressing the spine, astronauts experience spinal elongation in space that can make them grow up to 2 inches taller. They return to their normal height when back on Earth.",
      category: 'Space & Technology',
      categoryColor: 'bg-violet-100 text-violet-600',
      image: 'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700',
      slug: 'astronaut-height'
    },
    {
      id: 'sp5',
      title: 'Saturn would float in water',
      description: "Saturn has such low density (0.687 g/cm³) that if you could find a bathtub large enough, the planet would actually float in it. Water's density is 1 g/cm³, making Saturn the only planet that would float.",
      category: 'Space & Technology',
      categoryColor: 'bg-violet-100 text-violet-600',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
      slug: 'saturn-floating'
    },
    {
      id: 'sp6',
      title: 'A day on Pluto lasts 6.4 Earth days',
      description: 'Pluto rotates very slowly on its axis, taking approximately 6.4 Earth days (153.3 hours) to complete one rotation. It also takes 248 Earth years to orbit the Sun once.',
      category: 'Space & Technology',
      categoryColor: 'bg-violet-100 text-violet-600',
      image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3',
      slug: 'pluto-day-length'
    },
    {
      id: 'sp7',
      title: 'The Internet weighs about as much as a strawberry',
      description: 'The weight of all the electrons moving around the Internet at any moment is equivalent to about 50 grams - roughly the weight of a strawberry. This calculation is based on the mass of electrons in motion.',
      category: 'Space & Technology',
      categoryColor: 'bg-violet-100 text-violet-600',
      image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2',
      slug: 'internet-weight'
    },
    {
      id: 'sp8',
      title: 'The first website (info.cern.ch) is still online',
      description: 'The first web page, created by Tim Berners-Lee at CERN in 1991, is still accessible online in its original form. It explains what the World Wide Web is and how to use it.',
      category: 'Space & Technology',
      categoryColor: 'bg-violet-100 text-violet-600',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      slug: 'first-website'
    },
    {
      id: 'sp9',
      title: 'The "404 error" is named after Room 404 at CERN',
      description: 'The famous "404 Not Found" error allegedly gets its name from room 404 at CERN where the World Wide Web was developed, which housed the first web servers. When a page couldn\'t be found, "Room 404" was the error response.',
      category: 'Space & Technology',
      categoryColor: 'bg-violet-100 text-violet-600',
      image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd',
      slug: '404-error-origin'
    },
    {
      id: 'sp10',
      title: "The Sun's core is as dense as gold",
      description: "The Sun's core has a density of about 150 g/cm³, close to gold's 19.3 g/cm³. This extreme density is what allows nuclear fusion to occur, powering our sun and all life on Earth.",
      category: 'Space & Technology',
      categoryColor: 'bg-violet-100 text-violet-600',
      image: 'https://images.unsplash.com/photo-1532526338225-bc66ea49a8b9',
      slug: 'sun-core-density'
    },
  ],
  wtf: [
    {
      id: 'w1',
      title: "McDonald's once made bubblegum-flavored broccoli",
      description: "In an attempt to create healthier happy meal options that would appeal to kids, McDonald's developed bubblegum-flavored broccoli. The product never reached the market after children in taste tests were confused by the conflicting flavors.",
      category: 'Strange but True',
      categoryColor: 'bg-pink-100 text-pink-600',
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc',
      slug: 'mcdonalds-bubblegum-broccoli'
    },
    {
      id: 'w2',
      title: 'In Japan, you can buy square watermelons',
      description: "Japanese farmers grow watermelons in square glass boxes so they're easier to stack and store. These decorative luxury items can cost over $100 each and are mainly for display rather than eating.",
      category: 'Strange but True',
      categoryColor: 'bg-pink-100 text-pink-600',
      image: 'https://images.unsplash.com/photo-1563114773-84221bd62daa',
      slug: 'square-watermelons'
    },
    {
      id: 'w3',
      title: 'The "dot" over an "i" is called a tittle',
      description: 'The small dot above lowercase "i" and "j" has a name - it\'s called a "tittle." This linguistic term comes from Latin and was used as far back as the 11th century.',
      category: 'Strange but True',
      categoryColor: 'bg-pink-100 text-pink-600',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
      slug: 'tittle-dot-i'
    },
    {
      id: 'w4',
      title: 'The longest wedding veil was longer than 63 football fields',
      description: 'The longest wedding veil, worn by a bride in Cyprus in 2018, measured 22,843 feet (6,962.6 meters) - longer than 63 football fields placed end-to-end or the height of Mount Everest if stood vertically.',
      category: 'Strange but True',
      categoryColor: 'bg-pink-100 text-pink-600',
      image: 'https://images.unsplash.com/photo-1525184782196-8e2ded604bf7',
      slug: 'longest-wedding-veil'
    },
    {
      id: 'w5',
      title: 'Sweden has a "chocolate boy" tradition',
      description: 'During Easter in Sweden, children dress up as "Påskkärring" (Easter witches) or "Chokladpojken" (chocolate boys), going door to door handing out decorated letters and receiving candy in return.',
      category: 'Strange but True',
      categoryColor: 'bg-pink-100 text-pink-600',
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834',
      slug: 'sweden-chocolate-boy'
    },
  ],
};

const FeaturedContent = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState<string>("featured");

  // Combine all amazing facts into one array for the "All Facts" tab
  const allAmazingFacts = [
    ...amazingFacts.nature,
    ...amazingFacts.animals,
    ...amazingFacts.human,
    ...amazingFacts.history,
    ...amazingFacts.space,
    ...amazingFacts.wtf
  ];

  // Get facts based on active category
  const getDisplayedFacts = () => {
    if (activeCategory === "featured") return featuredFacts;
    if (activeCategory === "all") return allAmazingFacts;
    return amazingFacts[activeCategory as keyof typeof amazingFacts] || [];
  };

  return (
    <section id="amazing-facts-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Amazing Facts</h2>
            <p className="text-gray-600">
              Explore fascinating facts about our world and beyond
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button 
              variant="outline" 
              className="border-teal-200 text-teal-600 hover:bg-teal-50"
              onClick={() => {
                toast({
                  title: "View All Content",
                  description: "Browsing all facts and lifehacks",
                  duration: 3000,
                });
              }}
              asChild
            >
              <Link to="/browse">View All</Link>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="featured" className="mb-8">
          <TabsList className="flex flex-wrap mb-6 gap-2">
            <TabsTrigger
              value="featured"
              onClick={() => setActiveCategory("featured")} 
              className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-600 data-[state=active]:shadow-none"
            >
              Featured
            </TabsTrigger>
            <TabsTrigger
              value="nature"
              onClick={() => setActiveCategory("nature")} 
              className="data-[state=active]:bg-green-100 data-[state=active]:text-green-600 data-[state=active]:shadow-none"
            >
              Nature & Science
            </TabsTrigger>
            <TabsTrigger
              value="animals"
              onClick={() => setActiveCategory("animals")} 
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-600 data-[state=active]:shadow-none"
            >
              Animal Kingdom
            </TabsTrigger>
            <TabsTrigger
              value="human"
              onClick={() => setActiveCategory("human")} 
              className="data-[state=active]:bg-red-100 data-[state=active]:text-red-600 data-[state=active]:shadow-none"
            >
              Human Body
            </TabsTrigger>
            <TabsTrigger
              value="history"
              onClick={() => setActiveCategory("history")} 
              className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-600 data-[state=active]:shadow-none"
            >
              History & Culture
            </TabsTrigger>
            <TabsTrigger
              value="space"
              onClick={() => setActiveCategory("space")} 
              className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-600 data-[state=active]:shadow-none"
            >
              Space & Tech
            </TabsTrigger>
            <TabsTrigger
              value="wtf"
              onClick={() => setActiveCategory("wtf")} 
              className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-600 data-[state=active]:shadow-none"
            >
              Strange Facts
            </TabsTrigger>
            <TabsTrigger
              value="all"
              onClick={() => setActiveCategory("all")} 
              className="data-[state=active]:bg-gray-100 data-[state=active]:text-gray-600 data-[state=active]:shadow-none"
            >
              All Facts
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDisplayedFacts().map((fact) => (
                <FactCard key={fact.id} {...fact} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nature" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDisplayedFacts().map((fact) => (
                <FactCard key={fact.id} {...fact} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="animals" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDisplayedFacts().map((fact) => (
                <FactCard key={fact.id} {...fact} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="human" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDisplayedFacts().map((fact) => (
                <FactCard key={fact.id} {...fact} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDisplayedFacts().map((fact) => (
                <FactCard key={fact.id} {...fact} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="space" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDisplayedFacts().map((fact) => (
                <FactCard key={fact.id} {...fact} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="wtf" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDisplayedFacts().map((fact) => (
                <FactCard key={fact.id} {...fact} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDisplayedFacts().map((fact) => (
                <FactCard key={fact.id} {...fact} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedContent;
