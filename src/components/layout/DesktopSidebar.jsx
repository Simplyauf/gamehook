import { ASSETS } from '../../data/assets';

const navItems = [
  { key: 'home',       label: 'Home',          icon: ASSETS.deskNavHome },
  { key: 'tournament', label: 'My Tournament',  icon: ASSETS.deskNavTournament },
  { key: 'social',     label: 'Social',         icon: ASSETS.deskNavSocial },
  { key: 'chat',       label: 'Chat',           icon: ASSETS.deskNavChat },
];

export default function DesktopSidebar({ active = 'home' }) {
  return (
    <aside
      className="hidden xl:flex flex-col w-[192px] shrink-0 bg-[#001208] min-h-full py-0 overflow-y-auto border-r border-white/15"
    >
      <nav className="flex flex-col gap-1 px-4 pt-8 flex-1">
        {navItems.map((item) => {
          const isActive = item.key === active;
          return (
            <button
              key={item.key}
              className={`flex items-center gap-2 px-3 py-2 rounded-[6px] w-full text-left transition-colors ${
                isActive
                  ? 'bg-gradient-to-r from-[#4d5a53] to-[#182920]'
                  : 'hover:bg-[#001a0c]'
              }`}
            >
              <img src={item.icon} alt="" className="w-6 h-6 shrink-0" />
              <span
                className={`text-[14px] whitespace-nowrap font-['Inter',sans-serif] tracking-[0.2px] leading-normal ${
                  isActive ? 'text-white font-semibold' : 'text-[#a8a8a8]'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

            <button className="flex items-center gap-2 mx-4 mb-8 px-3 py-2 text-[#a8a8a8] hover:text-white transition-colors rounded-[6px] hover:bg-[#001a0c]">
        <img src={ASSETS.deskLogout} alt="" className="w-6 h-6" />
        <span className="text-[14px] font-['Inter',sans-serif] tracking-[0.2px]">Logout</span>
      </button>
    </aside>
  );
}
