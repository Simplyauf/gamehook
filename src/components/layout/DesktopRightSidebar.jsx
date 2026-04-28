import { ASSETS } from '../../data/assets';

const highlights = [
  { title: 'Call of Duty',     image: ASSETS.deskCodHighlight },
  { title: 'BGMI Tournaments', image: ASSETS.deskBgmiHighlight },
  { title: 'Call of Duty',     image: ASSETS.deskCodHighlight },
  { title: 'BGMI Tournaments', image: ASSETS.deskBgmiHighlight },
  { title: 'Call of Duty',     image: ASSETS.deskCodHighlight },
  { title: 'BGMI Tournaments', image: ASSETS.deskBgmiHighlight },
];

export default function DesktopRightSidebar() {
  return (
    <aside
      className="hidden xl:flex flex-col w-[320px] shrink-0 bg-[#001208] overflow-y-auto border-l border-white/15"
    >
            <div className="flex items-center justify-between px-6 pt-8 pb-4">
        <h2 className="text-[#f2f2f2] text-[16px] font-semibold font-['Inter',sans-serif] leading-[20px]">
          Game Highlights
        </h2>
        <button className="text-[#0cf285] text-[14px] font-medium font-['Inter',sans-serif] leading-[20px]">
          View All
        </button>
      </div>

            <div className="flex flex-col px-6 gap-0">
        {highlights.map((item, i) => (
          <div key={i}>
            <div className="flex flex-col gap-2 py-5 cursor-pointer group">
              <div className="w-full h-[150px] rounded-[8px] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#3c4b43] border border-white flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <img src={ASSETS.playIcon} alt="Play" className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <p className="text-[#fffdfd] text-[12px] font-semibold font-['Inter',sans-serif] leading-[16px]">
                {item.title}
              </p>
            </div>
                        {i < highlights.length - 1 && (
              <div className="h-px bg-white/10 w-full" />
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
