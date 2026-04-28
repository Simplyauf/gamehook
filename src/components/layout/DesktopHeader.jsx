import { ASSETS } from '../../data/assets';

export default function DesktopHeader() {
  return (
    <header className="hidden xl:flex items-center justify-between px-6 h-[80px] bg-[#001208] shrink-0 relative z-50 border-b border-white/15">
      <div className="flex items-end gap-0">
        <img src={ASSETS.gamehokLogo} alt="G" className="w-[31px] h-[36px] object-contain" />
        <span className="text-white font-bold text-[24px] leading-[32px] font-['Inter',sans-serif]">AMEHOK</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-0 bg-[#01a74b] rounded-[24px] h-[32px]">
          <div className="flex items-center gap-1 px-2 py-1">
            <img src={ASSETS.twoTickets} alt="" className="w-4 h-4 object-contain" />
            <span className="text-white text-[14px] font-normal font-['Inter',sans-serif] leading-[20px]">245</span>
          </div>
          <div className="w-px h-4 bg-white/30" />
          <div className="flex items-center gap-1 px-2 py-1">
            <img src={ASSETS.deskCoins} alt="" className="w-4 h-4 object-contain" />
            <span className="text-white text-[14px] font-normal font-['Inter',sans-serif] leading-[20px]">2456</span>
          </div>
        </div>

        <button className="w-8 h-8 rounded-full border border-white/20 bg-[#001a0c] flex items-center justify-center">
          <img src={ASSETS.deskAlert} alt="Notifications" className="w-6 h-6 object-contain" />
        </button>

        <div className="w-px h-11 bg-white/10" />

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#f2f2f2] overflow-hidden">
            <img src={ASSETS.deskAvatar} alt="Sweta Rani" className="w-full h-full object-cover object-bottom" />
          </div>
          <span className="text-white text-[16px] font-normal font-['Inter',sans-serif] leading-[20px]">Sweta Rani</span>
        </div>
      </div>
    </header>
  );
}
