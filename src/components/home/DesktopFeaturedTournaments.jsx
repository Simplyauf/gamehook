import { ASSETS } from '../../data/assets';
import { tournaments } from '../../data/mockData';
import SectionHeader from './SectionHeader';

function DesktopTournamentCard({ tournament }) {
  return (
    <div className="w-[334px] h-[250px] rounded-[8px] overflow-hidden border border-[#002e14] relative bg-[#001208] shrink-0">
      <div className="absolute top-0 left-0 w-full h-[170px] overflow-hidden">
        <img src={tournament.image} alt={tournament.title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-[11px] left-[11px] bg-[rgba(0,18,8,0.8)] rounded-[16px] px-2 py-1">
        <span className="text-white text-[12px] font-semibold font-['Inter',sans-serif] leading-[16px]">
          {tournament.status}
        </span>
      </div>
      <div className="absolute top-[11px] right-[11px] bg-[rgba(0,18,8,0.8)] rounded-[16px] px-2 py-1 flex items-center gap-1">
        <img src={ASSETS.deskGroupIcon} alt="" className="w-3 h-3" />
        <span className="text-white text-[12px] font-semibold font-['Inter',sans-serif]">
          {tournament.slots.filled}/{tournament.slots.total}
        </span>
      </div>
      <div className="absolute top-[145px] left-0 right-0 bg-[#121726] flex items-center gap-1 px-3 py-1">
        <img src={ASSETS.deskTrophyIcon} alt="" className="w-6 h-6" />
        <span className="text-white text-[14px] font-normal font-['Inter',sans-serif]">
          Prize Pool- <span className="font-semibold">{tournament.prizePool}</span>
        </span>
        <img src={ASSETS.deskCoinLg} alt="" className="w-3 h-3" />
      </div>
      <div className="absolute right-3 top-[133px] w-12 h-12 rounded-[40px] overflow-hidden">
        <img src={tournament.logo} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute left-[11px] top-[191px]">
        <p className="text-white text-[16px] font-semibold font-['Inter',sans-serif] leading-[20px]">
          {tournament.title}
        </p>
      </div>
      <div className="absolute left-[11px] bottom-3 flex items-center gap-2">
        {tournament.tags.map((tag, i) => {
          const label = typeof tag === 'string' ? tag : tag.label;
          const hasCoin = typeof tag === 'object' && tag.coin;
          return (
            <div key={i} className="bg-[#002e14] rounded-[4px] px-2 py-[2px] flex items-center gap-[2px]">
              <span className="text-white text-[12px] font-normal font-['Inter',sans-serif] leading-[16px]">{label}</span>
              {hasCoin && <img src={ASSETS.deskCoin} alt="" className="w-[10px] h-[10px]" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DesktopFeaturedTournaments() {
  return (
    <section className="hidden xl:block">
      <SectionHeader title="Featured Tournaments" actionLabel="VIEW ALL" />
      <div className="flex gap-6">
        {tournaments.slice(0, 2).map((tournament) => (
          <DesktopTournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </section>
  );
}
