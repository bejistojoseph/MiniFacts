import { 
  Computer, 
  Smartphone, 
  Globe, 
  Laptop,
  Shield,
  Sparkles,
} from 'lucide-react';

// Tech tips data organized by categories
export const techTipsData = {
  computerLaptop: [
    {
      id: 'cl1',
      title: 'Speed up a slow PC',
      description: 'Press Ctrl + Shift + Esc to open Task Manager and kill unnecessary processes.',
      icon: '💻'
    },
    {
      id: 'cl2',
      title: 'Take a screenshot of just one area',
      description: 'Windows + Shift + S (Windows) or Cmd + Shift + 4 (Mac).',
      icon: '🖼️'
    },
    {
      id: 'cl3',
      title: 'Quickly minimize all windows',
      description: 'Windows + D (Windows) or Cmd + Option + H + M (Mac).',
      icon: '🪟'
    },
    {
      id: 'cl4',
      title: 'Right-click without a mouse',
      description: 'Press Shift + F10 on your keyboard.',
      icon: '🖱️'
    },
    {
      id: 'cl5',
      title: 'Instantly lock your PC',
      description: 'Windows + L (great for privacy!).',
      icon: '🔒'
    },
    {
      id: 'cl6',
      title: 'Laptop as Second Monitor',
      description: 'Use Windows "Projection" or Duet Display.',
      icon: '🖥️'
    },
    {
      id: 'cl7',
      title: 'Quick Split-Screen',
      description: 'Windows: Windows + Left/Right Arrow | Mac: Drag to screen edges.',
      icon: '⬅️'
    }
  ],
  smartphone: [
    {
      id: 's1',
      title: 'Charge your phone faster',
      description: 'Enable Airplane Mode while charging.',
      icon: '⚡'
    },
    {
      id: 's2',
      title: 'Find your lost phone (even on silent)',
      description: 'Use Google\'s Find My Device (Android) or Find My iPhone (iOS).',
      icon: '🔍'
    },
    {
      id: 's3',
      title: 'Use your phone as a free document scanner',
      description: 'Google Drive (iOS/Android) has a built-in Scan tool.',
      icon: '📄'
    },
    {
      id: 's4',
      title: 'Extend battery life',
      description: 'Enable Dark Mode on OLED screens (saves power).',
      icon: '🔋'
    },
    {
      id: 's5',
      title: 'Quickly delete typos',
      description: 'Shake your iPhone to undo text (Android: swipe left on Gboard).',
      icon: '⌨️'
    },
    {
      id: 's6',
      title: 'Fix a Wet Phone',
      description: 'Bury in uncooked rice or use silica gel packs.',
      icon: '💦'
    },
    {
      id: 's7',
      title: 'Type Hands-Free on iPhone',
      description: 'Enable "Hey Siri, type this…"',
      icon: '🗣️'
    },
    {
      id: 's8',
      title: 'Android Secret Menu',
      description: 'Dial *#*#4636#*#* for testing tools.',
      icon: '🔧'
    },
    {
      id: 's9',
      title: 'Scan Documents with Notes app',
      description: 'iPhone: New Note → Camera icon → Scan.',
      icon: '📝'
    },
    {
      id: 's10',
      title: 'Fix a Wet Phone',
      description: 'Bury in uncooked rice or use silica gel packs.',
      icon: '💦'
    },
    {
      id: 's11',
      title: 'Type Hands-Free on iPhone',
      description: 'Enable "Hey Siri, type this…"',
      icon: '🗣️'
    },
    {
      id: 's12',
      title: 'Android Secret Menu',
      description: 'Dial *#*#4636#*#* for testing tools.',
      icon: '🔧'
    }
  ],
  browserInternet: [
    {
      id: 'bi1',
      title: 'Reopen a closed tab',
      description: 'Ctrl + Shift + T (Windows) or Cmd + Shift + T (Mac).',
      icon: '🔄'
    },
    {
      id: 'bi2',
      title: 'Search a website directly from Google',
      description: 'Type site:example.com search term.',
      icon: '🔎'
    },
    {
      id: 'bi3',
      title: 'Bypass paywalls',
      description: 'Add a . after the domain (e.g., example.com.). (Works on some sites!)',
      icon: '💰'
    },
    {
      id: 'bi4',
      title: 'Watch YouTube in the background',
      description: 'Open in Desktop Mode on mobile or use YouTube Premium.',
      icon: '▶️'
    },
    {
      id: 'bi5',
      title: 'Find free Wi-Fi anywhere',
      description: 'Use apps like WiFi Map or Google Maps (search "free wifi").',
      icon: '📶'
    },
    {
      id: 'bi6',
      title: 'Find Wi-Fi Password on PC',
      description: 'Open CMD → Type netsh wlan show profile name="NETWORK" key=clear',
      icon: '🔑'
    },
    {
      id: 'bi7',
      title: 'Disable YouTube Autoplay',
      description: 'Click profile → Settings → Autoplay OFF.',
      icon: '⏹️'
    },
    {
      id: 'bi8',
      title: 'Google Photos Hack',
      description: 'Search "receipts" or "license plates" to find old pics.',
      icon: '🖼️'
    }
  ],
  softwareShortcuts: [
    {
      id: 'ss1',
      title: 'Type symbols fast',
      description: 'Hold Alt + type numbers (e.g., Alt + 3 = ♥).',
      icon: '♥'
    },
    {
      id: 'ss2',
      title: 'Quickly mute Zoom/Meet',
      description: 'Spacebar (hold to unmute temporarily).',
      icon: '🔇'
    },
    {
      id: 'ss3',
      title: 'Paste without formatting',
      description: 'Ctrl + Shift + V (Windows) or Cmd + Shift + V (Mac).',
      icon: '📋'
    },
    {
      id: 'ss4',
      title: 'Rotate a video without software',
      description: 'Open in VLC Player > Tools > Effects > Rotate.',
      icon: '🔄'
    },
    {
      id: 'ss5',
      title: 'Free up storage',
      description: 'Use WinDirStat (Windows) or Disk Utility (Mac) to find large files.',
      icon: '💾'
    },
    {
      id: 'ss6',
      title: 'Spotify Sleep Timer',
      description: 'Play song → Tap ⏱️ (Android) or "…" → Sleep Timer (iOS).',
      icon: '🎵'
    },
    {
      id: 'ss7',
      title: 'Laptop as Second Monitor',
      description: 'Use Windows "Projection" or Duet Display.',
      icon: '🖥️'
    },
    {
      id: 'ss8',
      title: 'Find Wi-Fi Password on PC',
      description: 'Open CMD → Type netsh wlan show profile name="NETWORK" key=clear',
      icon: '🔑'
    },
    {
      id: 'ss9',
      title: 'Scan Documents with Notes app',
      description: 'iPhone: New Note → Camera icon → Scan.',
      icon: '📝'
    },
    {
      id: 'ss10',
      title: 'Disable YouTube Autoplay',
      description: 'Click profile → Settings → Autoplay OFF.',
      icon: '⏹️'
    },
    {
      id: 'ss11',
      title: 'Google Photos Hack',
      description: 'Search "receipts" or "license plates" to find old pics.',
      icon: '🖼️'
    },
    {
      id: 'ss12',
      title: 'Spotify Sleep Timer',
      description: 'Play song → Tap ⏱️ (Android) or "…" → Sleep Timer (iOS).',
      icon: '🎵'
    },
    {
      id: 'ss13',
      title: 'Quick Split-Screen',
      description: 'Windows: Windows + Left/Right Arrow | Mac: Drag to screen edges.',
      icon: '⬅️'
    }
  ],
  privacySecurity: [
    {
      id: 'ps1',
      title: 'Check if your passwords were leaked',
      description: 'Visit Have I Been Pwned?.',
      icon: '🔑'
    },
    {
      id: 'ps2',
      title: 'Send self-destructing messages',
      description: 'Use Telegram\'s "Secret Chat" or Signal.',
      icon: '💥'
    },
    {
      id: 'ps3',
      title: 'Avoid phishing scams',
      description: 'Hover over links to see the real URL before clicking.',
      icon: '🎣'
    },
    {
      id: 'ps4',
      title: 'Stop apps from tracking you',
      description: 'Disable ad tracking in iOS/Android settings.',
      icon: '👁️'
    },
    {
      id: 'ps5',
      title: 'Encrypt files for free',
      description: 'Use 7-Zip (Windows) or FileVault (Mac).',
      icon: '🔐'
    }
  ],
  techMyths: [
    {
      id: 'tm1',
      title: 'Do magnets damage phones?',
      description: 'Modern phones use flash memory that isn\'t affected by magnets. Only very powerful magnets can damage specialized components.',
      icon: '🧲'
    },
    {
      id: 'tm2',
      title: 'Closing apps saves battery?',
      description: 'Usually no! Modern phones optimize background apps. Force-closing can actually use more battery when reopening.',
      icon: '🔋'
    },
    {
      id: 'tm3',
      title: 'Private browsing = totally anonymous?',
      description: 'Not quite. Your ISP and network admin can still see your activity. Only hides local browsing history.',
      icon: '🕵️'
    },
    {
      id: 'tm4',
      title: 'More megapixels = better camera?',
      description: 'Not necessarily. Sensor size and lens quality are often more important for image quality.',
      icon: '📸'
    },
    {
      id: 'tm5',
      title: 'Full discharge extends battery life?',
      description: 'Modern lithium-ion batteries last longest when kept between 20-80% charge.',
      icon: '⚡'
    }
  ]
};

// Get all tips in a single array for random selection
export const getAllTips = () => {
  const allTips = [];
  for (const category in techTipsData) {
    allTips.push(...techTipsData[category]);
  }
  return allTips;
};

export const categories = [
  { 
    id: 'computerLaptop', 
    name: 'Computer & Laptop Hacks', 
    icon: Laptop, 
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100'
  },
  { 
    id: 'smartphone', 
    name: 'Smartphone Tricks', 
    icon: Smartphone, 
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100'
  },
  { 
    id: 'browserInternet', 
    name: 'Browser & Internet Hacks', 
    icon: Globe, 
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100'
  },
  { 
    id: 'softwareShortcuts', 
    name: 'Software & Shortcuts', 
    icon: Computer, 
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100'
  },
  { 
    id: 'privacySecurity', 
    name: 'Privacy & Security Tips', 
    icon: Shield, 
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100'
  },
  { 
    id: 'techMyths', 
    name: 'Tech Myth Busters', 
    icon: Sparkles, 
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-100'
  }
];
