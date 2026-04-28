import { ASSETS } from '../../data/assets';
import { scrims } from '../../data/mockData';

function ScrimCard({ scrim }) {
  return (
    <div
      className="shrink-0 w-[182px] h-[248px] rounded-[8px] overflow-hidden border border-[#002e14] relative flex flex-col items-center"
      style={{
        background: 'linear-gradient(to left, #4d5a53, #182920)',
      }}
    >
            <div className="mt-[19px] w-14 h-14 rounded-[40px] overflow-hidden border border-white">
        <img
          src={scrim.logo}
          alt={scrim.title}
          className="w-full h-full object-cover"
        />
      </div>

            <p className="text-white text-[14px] whitespace-nowrap font-semibold font-['Inter',sans-serif] leading-[20px] text-center mt-[10px] px-3 w-[134px]">
        {scrim.title}
      </p>

            <p className="text-white text-[10px] font-medium font-['Inter',sans-serif] leading-[14px] mt-[4px]">
        {scrim.organizer}
      </p>

            <p className="text-white text-[10px] font-normal font-['Inter',sans-serif] leading-[16px] text-center mt-[10px] px-3 w-[150px]">
        {scrim.description}
      </p>

            <div className="absolute bottom-[15px] flex items-center gap-1">
        <span className="text-[#0cf285] text-[14px] font-medium font-['Inter',sans-serif] leading-[20px]">
          Explore scrims
        </span>
        <img src={ASSETS.chevronRight} alt="" className="w-4 h-4" />
      </div>
    </div>
  );
}

export default function CompeteInBattles() {
  return (
    <section className="w-full">
            <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#f2f2f2] text-[16px] font-semibold font-['Inter',sans-serif] leading-[20px] whitespace-pre">
          {'Compete in  Battles'}
        </h2>
        <button className="text-[#0cf285] text-[14px] font-medium font-['Inter',sans-serif] leading-[20px]">
          View All
        </button>
      </div>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4">
        {scrims.map((s) => (
          <ScrimCard key={s.id} scrim={s} />
        ))}
      </div>
    </section>
  );
}
