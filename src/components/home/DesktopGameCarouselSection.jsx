import { useState } from 'react';
import { ASSETS } from '../../data/assets';
import SectionHeader from './SectionHeader';

const carouselGames = [
  { name: 'VALORANT', image: ASSETS.freeFireLarge },
  { name: 'FREEFIRE', image: ASSETS.freeFireLarge },
  { name: 'CALL OF DUTY', image: ASSETS.codLarge },
  { name: 'BGMI', image: ASSETS.bgmiLarge },
  { name: 'COD MOBILE', image: ASSETS.codLarge },
];

function ChevronIcon({ className = '' }) {
  return (
    <svg className={className} width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.2925 0.292486C6.10567 0.105233 5.85202 0 5.5875 0C5.32298 0 5.06933 0.105233 4.8825 0.292486L0.2925 4.88249C-0.0975 5.27249 -0.0975 5.90249 0.2925 6.29249L4.8825 10.8825C5.2725 11.2725 5.9025 11.2725 6.2925 10.8825C6.6825 10.4925 6.6825 9.86249 6.2925 9.47249L2.4125 5.58249L6.2925 1.70249C6.6825 1.31249 6.6725 0.672486 6.2925 0.292486Z"
        fill="#F2F2F2"
      />
    </svg>
  );
}

function DesktopGameCarousel() {
  const [centerIndex, setCenterIndex] = useState(3);
  const total = carouselGames.length;
  const leftIndex = (centerIndex - 1 + total) % total;
  const rightIndex = (centerIndex + 1) % total;
  const visibleGames = [carouselGames[leftIndex], carouselGames[centerIndex], carouselGames[rightIndex]];

  return (
    <div className="relative overflow-hidden">
      <button
        onClick={() => setCenterIndex((i) => (i - 1 + total) % total)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[rgba(1,167,75,0.85)] flex items-center justify-center drop-shadow-md transition-opacity"
      >
        <ChevronIcon />
      </button>

      <div className="flex gap-0 overflow-hidden rounded-[8px]">
        {visibleGames.map((game, i) => (
          <div
            key={game.name + i}
            className={`relative shrink-0 cursor-pointer group transition-all ${
              i === 1 ? 'w-[38%] z-10' : 'w-[31%]'
            }`}
          >
            <div className="relative h-[190px] rounded-[12px] overflow-hidden">
              <img
                src={game.image}
                alt={game.name}
                className={`w-full h-full object-cover ${i === 1 ? '' : 'brightness-50'}`}
              />
              {i !== 1 && <div className="absolute inset-0 bg-black/20" />}
            </div>
            <div className="pt-3 text-center">
              <span className="text-white text-[16px] font-semibold font-['Inter',sans-serif] leading-[20px] drop-shadow-md">
                {game.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setCenterIndex((i) => (i + 1) % total)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[rgba(1,167,75,0.85)] flex items-center justify-center drop-shadow-md transition-opacity"
      >
        <ChevronIcon className="rotate-180" />
      </button>
    </div>
  );
}

export default function DesktopGameCarouselSection() {
  return (
    <section className="hidden xl:block">
      <SectionHeader title="Play Tournaments by Games" />
      <DesktopGameCarousel />
    </section>
  );
}
