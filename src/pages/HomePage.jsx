import SocialStarCard from '../components/home/SocialStarCard';
import FeaturedTournaments from '../components/home/FeaturedTournaments';
import DesktopFeaturedTournaments from '../components/home/DesktopFeaturedTournaments';
import DesktopGameCarouselSection from '../components/home/DesktopGameCarouselSection';
import DesktopCompeteInBattlesSection from '../components/home/DesktopCompeteInBattlesSection';
import BouncyBirdCard from '../components/home/BouncyBirdCard';
import GameGrid from '../components/home/GameGrid';
import CompeteInBattles from '../components/home/CompeteInBattles';
import GameHighlights from '../components/home/GameHighlights';

export default function HomePage() {
  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden pb-20 xl:pb-12">
      <div className="flex flex-col gap-8 px-4 max-[390px]:px-3 xl:px-12 pt-2 xl:pt-6 pb-4">
        <SocialStarCard />
        <div className="xl:hidden">
          <FeaturedTournaments />
        </div>
        <DesktopFeaturedTournaments />
        <div className="xl:hidden">
          <BouncyBirdCard />
        </div>
        <div className="xl:hidden">
          <GameGrid />
        </div>
        <DesktopGameCarouselSection />
        <div className="xl:hidden">
          <CompeteInBattles />
        </div>
        <DesktopCompeteInBattlesSection />
        <div className="xl:hidden">
          <GameHighlights />
        </div>
      </div>
    </main>
  );
}
