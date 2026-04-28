import { games } from '../../data/mockData';

export default function GameGrid() {
  const rows = [];
  for (let i = 0; i < games.length; i += 3) {
    rows.push(games.slice(i, i + 3));
  }

  return (
    <section className="w-full">
      <div className="mb-6">
        <h2 className="text-[#f2f2f2] text-[16px] font-semibold font-['Inter',sans-serif] leading-[20px]">
          Play Tournament by Games
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {rows.map((row, ri) => (
          <div key={ri} className="grid grid-cols-3 gap-4">
            {row.map((game) => (
              <button key={game.id} className="flex flex-col items-center gap-1">
                <div className="w-full h-[92px] rounded-[8px] overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
                <span className="text-white text-[12px] font-semibold font-['Inter',sans-serif] leading-[16px]">
                  {game.name}
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
