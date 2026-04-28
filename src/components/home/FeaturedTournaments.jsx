import { ASSETS } from '../../data/assets';
import { tournaments } from '../../data/mockData';

function TournamentCard({ tournament }) {
  return (
    <div className="shrink-0 w-[calc(100vw-2rem)] max-w-[340px] h-[248px] rounded-[8px] overflow-hidden border border-[#002e14] relative bg-[#001208]">
      <div className="absolute top-0 left-0 w-full h-[170px] overflow-hidden">
        <img
          src={tournament.image}
          alt={tournament.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-[7px] left-[7px] bg-[rgba(0,18,8,0.8)] rounded-[16px] px-2 py-1">
        <span className="text-white text-[10px] font-medium font-['Inter',sans-serif] leading-[12px]">
          {tournament.status}
        </span>
      </div>

      <div className="absolute top-[7px] right-[7px] bg-[rgba(0,18,8,0.8)] rounded-[16px] px-2 py-1 flex items-center gap-1">
        <img src={ASSETS.groupIcon} alt="" className="w-3 h-3" />
        <span className="text-white text-[10px] font-medium font-['Inter',sans-serif]">
          {tournament.slots.filled}/{tournament.slots.total}
        </span>
      </div>

      <div className="absolute top-[145px] left-0 right-0 bg-[#121726] flex items-center gap-1 px-3 py-1">
        <img src={ASSETS.trophy} alt="" className="w-4 h-4" />
        <div className="flex items-center gap-1">
          <span className="text-white text-[12px] font-normal font-['Inter',sans-serif] leading-[16px]">
            Prize Pool-{' '}
            <span className="font-semibold">{tournament.prizePool}</span>
          </span>
          <img src={ASSETS.coinLg} alt="coins" className="w-3 h-3" />
        </div>
      </div>

      <div className="absolute right-[12px] top-[133px] w-12 h-12 rounded-[40px] overflow-hidden">
        <img
          src={tournament.logo}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute left-[12px] top-[183px]">
        <p className="text-white text-[14px] font-semibold font-['Inter',sans-serif] leading-[20px]">
          {tournament.title}
        </p>
      </div>

      <div className="absolute left-[12px] bottom-[12px] flex items-center gap-2">
        {tournament.tags.map((tag, i) => {
          const label = typeof tag === 'string' ? tag : tag.label;
          const hasCoin = typeof tag === 'object' && tag.coin;
          return (
            <div
              key={i}
              className="bg-[#002e14] rounded-[4px] px-2 py-[2px] flex items-center gap-[2px]"
            >
              <span className="text-white text-[10px] font-medium font-['Inter',sans-serif] leading-[14px]">
                {label}
              </span>
              {hasCoin && (
                <img src={ASSETS.coin} alt="" className="w-[10px] h-[10px]" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FeaturedTournaments() {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[#f2f2f2] text-[16px] font-semibold font-['Inter',sans-serif] leading-[20px]">
          Featured Tournaments
        </h2>
        <button className="text-[#0cf285] text-[14px] font-medium font-['Inter',sans-serif] leading-[20px] whitespace-nowrap">
          View All
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-1">
        {tournaments.map((t) => (
          <TournamentCard key={t.id} tournament={t} />
        ))}
      </div>
    </section>
  );
}
