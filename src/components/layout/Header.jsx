import { ASSETS } from '../../data/assets';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#001208]">
      <div className="flex items-center justify-between px-4 h-8">
        <span className="text-white text-[12px] font-medium font-['Inter',sans-serif]">10:28</span>
        <div className="flex items-center gap-1">
          <img src={ASSETS.networkCell} alt="" className="w-4 h-4" />
          <img src={ASSETS.wifi} alt="" className="w-4 h-4" />
          <img src={ASSETS.battery} alt="" className="w-4 h-4" />
        </div>
      </div>

      <div className="flex items-center justify-between px-4 h-[66px]">
        <div className="relative w-9 h-9 shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#f2f2f2] overflow-hidden">
            <img
              src={ASSETS.profileAvatar}
              alt="Profile"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
          <div className="absolute right-0 bottom-0 translate-x-[12%] translate-y-[8%]">
              <img
              src={ASSETS.menuIcon}
              alt=""
              className="w-[12px] h-[12px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-[#01a74b] rounded-full h-8 px-3">
            <img src={ASSETS.coins} alt="coins" className="w-4 h-4 object-contain" />
            <span className="text-white text-[12px] font-normal font-['Inter',sans-serif]">2456</span>
          </div>
          <button className="w-8 h-8 rounded-full border border-white/25 bg-[#001a0c] flex items-center justify-center">
            <img src={ASSETS.alert} alt="Notifications" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
