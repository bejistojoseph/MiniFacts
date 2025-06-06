import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ✅ Inject Google AdSense script for site verification
const adsenseScript = document.createElement('script');
adsenseScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7280299117651575";
adsenseScript.async = true;
adsenseScript.crossOrigin = "anonymous";
document.head.appendChild(adsenseScript);

// ✅ Set favicon
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.href = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%230f766e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a1 1 0 0 1 .993.883L13 3v1.055l6.585 2.239.415.155V16l-.297.387-.102.06-6.514 2.199L13 18.945V21a1 1 0 0 1-1.993.117L11 21v-2.055l-6.585-2.239-.415-.155V6.55l.297-.387.102-.06 6.514-2.199L11 3.945V3a1 1 0 0 1 1-1zm1.99 5.221.3.9a3.008 3.008 0 0 1-.107 6.155l-.3.9-.3.9A5.007 5.007 0 0 0 15.9 10.12l-.2-.888a2.996 2.996 0 0 0-1.708-1.912zm-3.99.008a3.008 3.008 0 0 0-.107 6.155l-.3.9-.3.9A5.007 5.007 0 0 1 8.1 10.12l.2-.888a2.996 2.996 0 0 1 1.708-1.912z"/></svg>';
document.head.appendChild(favicon);

// ✅ Mount the app
createRoot(document.getElementById("root")!).render(<App />);
