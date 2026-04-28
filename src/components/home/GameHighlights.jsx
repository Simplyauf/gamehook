import { highlights } from '../../data/mockData';

export default function GameHighlights() {
  return (
    <section className="w-full">
            <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#f2f2f2] text-[16px] font-semibold font-['Inter',sans-serif] leading-[20px]">
          Game Highlights
        </h2>
        <button className="text-[#0cf285] text-[14px] font-medium font-['Inter',sans-serif] leading-[20px]">
          View All
        </button>
      </div>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4">
        {highlights.map((item) => (
          <div key={item.id} className="shrink-0 w-[270px] flex flex-col gap-2">
            <div className="w-[270px] h-[150px] rounded-[8px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#fffdfd] text-[12px] font-semibold font-['Inter',sans-serif] leading-[16px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
