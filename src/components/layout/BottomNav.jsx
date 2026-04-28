import { ASSETS } from '../../data/assets';

const navItems = [
  { key: 'home',       label: 'Home',          icon: ASSETS.navHome },
  { key: 'tournament', label: 'My Tournament',  icon: ASSETS.navTournament },
  { key: 'social',     label: 'Social',         icon: ASSETS.navSocial },
  { key: 'chats',      label: 'Chats',          icon: ASSETS.navChat },
];

function ActiveMarker() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center overflow-visible h-full">
      {/* Active Pill SVG */}
      <svg width="36" height="3" viewBox="0 0 36 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H36C36 1.65685 34.6569 3 33 3H3C1.34315 3 0 1.65685 0 0Z" fill="#01A74B"/>
      </svg>
      
      {/* Cone SVG */}
      <svg width="44" height="44"  viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible top-[10px] relative">
        <path d="M22 -14C9.84974 -14 0 11.9675 0 44H44C44 11.9675 34.1503 -14 22 -14Z" fill="url(#paint0_linear_4_496)" fillOpacity="0.2"/>
        <defs>
          <linearGradient id="paint0_linear_4_496" x1="22" y1="-36.0496" x2="22" y2="116.86" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9"/>
            <stop offset="0.526815" stopColor="#00C800" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function BottomNav({ active = 'home' }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#08090a] h-16 z-50 border-t border-white/10">
      <div className="flex h-full px-2">
        {navItems.map((item) => {
          const isActive = item.key === active;
          return (
            <div key={item.key} className="relative flex-1 h-full flex items-center justify-center">
              {isActive && <ActiveMarker />}
              <button className="flex flex-col items-center gap-0.5 min-w-[60px] pt-2 relative z-10">
                <img 
                  src={item.icon} 
                  alt={item.label} 
                  className="w-6 h-6 transition-all duration-300"
                  style={isActive ? { 
                    filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1915%) hue-rotate(124deg) brightness(97%) contrast(102%)' 
                  } : {
                    filter: 'brightness(0.7)'
                  }}
                />
                <span
                  className={`text-[9px] font-medium font-['Inter',sans-serif] leading-[10px] mt-1 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#a8a8a8]'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
