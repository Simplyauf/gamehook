import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import HomePage from './pages/HomePage';

import DesktopHeader from './components/layout/DesktopHeader';
import DesktopSidebar from './components/layout/DesktopSidebar';
import DesktopRightSidebar from './components/layout/DesktopRightSidebar';

export default function App() {
  return (
    <>
      <div className="xl:hidden min-h-svh bg-[#001208] flex flex-col w-full max-w-[412px] mx-auto relative overflow-x-hidden">
        <Header />
        <HomePage />
        <BottomNav active="home" />
      </div>

      <div className="hidden xl:flex flex-col h-screen bg-[#001208] overflow-hidden">
        <DesktopHeader />
        <div className="flex flex-1 overflow-hidden">
          <DesktopSidebar active="home" />
          <HomePage />
          <DesktopRightSidebar />
        </div>
      </div>
    </>
  );
}
