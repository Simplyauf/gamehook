import { ASSETS } from '../../data/assets';
import { scrims } from '../../data/mockData';
import SectionHeader from './SectionHeader';

function DesktopScrimCard({ scrim }) {
  return (
    <div
      className="w-[284px] h-[334px] rounded-[8px] overflow-hidden border border-[#002e14] relative flex flex-col items-center shrink-0"
      style={{ background: 'linear-gradient(to left, #4d5a53, #182920)' }}
    >
      <div className="mt-8 w-20 h-20 rounded-full overflow-hidden border border-white">
        <img src={scrim.logo} alt={scrim.title} className="w-full h-full object-cover" />
      </div>
      <p className="text-white text-[14px] font-semibold font-['Inter',sans-serif] leading-[20px] text-center mt-[18px] px-3 w-[190px]">
        {scrim.title}
      </p>
      <p className="text-white text-[10px] font-medium font-['Inter',sans-serif] leading-[14px] mt-2">
        {scrim.organizer}
      </p>
      <p className="text-white text-[12px] font-normal font-['Inter',sans-serif] leading-[16px] text-center mt-5 px-6 w-[230px]">
        {scrim.description}
      </p>
      <div className="absolute bottom-8 flex items-center gap-1">
        <span className="text-[#0cf285] text-[14px] font-medium font-['Inter',sans-serif] leading-[20px]">
          Explore scrims
        </span>
        <img src={ASSETS.deskChevronRight} alt="" className="w-4 h-4" />
      </div>
    </div>
  );
}

export default function DesktopCompeteInBattlesSection() {
  return (
    <section className="hidden xl:block">
      <SectionHeader title="Compete in Battles" actionLabel="VIEW ALL" />
      <div className="flex gap-6">
        {scrims.map((scrim) => (
          <DesktopScrimCard key={scrim.id} scrim={scrim} />
        ))}
      </div>
    </section>
  );
}
