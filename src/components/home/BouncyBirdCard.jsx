import { ASSETS } from '../../data/assets';

export default function BouncyBirdCard() {
  return (
    <div className="relative w-full h-[168px] rounded-[12px] overflow-hidden shrink-0">
      <img
        src={ASSETS.bouncyBirdBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover "
      />

      <div className="absolute right-4 top-[28px] w-[110px] h-[78px] rotate-[-6deg]">
        <img
          src={ASSETS.bouncyBirdImg}
          alt="Bouncy Bird"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute left-4 top-5">
        <p
          className="text-[18px] font-bold leading-[24px] font-['Inter',sans-serif]"
          style={{
            background: 'linear-gradient(to left, #311a61, #1c192e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Introducing
        </p>
        <p
          className="text-[20px] leading-[normal] font-['Irish_Grover',sans-serif]"
          style={{ color: '#8f4216' }}
        >
          BOUNCY BIRD
        </p>
      </div>

      <div className="absolute left-4 top-[80px]">
        <p className="text-[#6b1df8] text-[12px] font-semibold font-['Inter',sans-serif] leading-[16px]">
          A game for everyone
        </p>
      </div>

      <div className="absolute left-4 bottom-[18px] flex items-center gap-1">
        <p className="text-[#091118] text-[12px] font-semibold font-['Inter',sans-serif] leading-[16px]">
          Play daily, win weekly
        </p>
        <img src={ASSETS.bouncyBirdSubtract} alt="" className="w-5 h-5" />
      </div>

      <button className="absolute right-4 bottom-[14px] h-[44px] min-w-[120px] rounded-[26px] border border-[#8d6a52] bg-gradient-to-b from-[#5be536] to-[#2aa627] px-6 text-white text-[16px] font-black font-['Inter',sans-serif] leading-none shadow-[inset_0_-2px_0_rgba(0,0,0,0.28)]">
        Play
      </button>
    </div>
  );
}
