import { ASSETS } from '../../data/assets';

const socialItems = [
  { label: 'Posts',     mobileIcon: ASSETS.ellipse52,    deskIcon: ASSETS.deskPostsIcon, mobileBorder: '#3b82f6' },
  { label: 'Followers', mobileIcon: ASSETS.ellipse53,    deskIcon: ASSETS.deskFollowersIcon, mobileBorder: '#f59e0b' },
  { label: 'Likes',     mobileIcon: ASSETS.ellipse54,    deskIcon: ASSETS.deskLikesIcon, mobileBorder: '#a855f7' },
];

export default function SocialStarCard() {
  return (
    <div
      className="relative w-full rounded-[8px] overflow-hidden flex flex-row h-[200px] max-[420px]:h-[188px] max-[385px]:h-[176px] xl:h-[204px]"
      style={{
        background:
          'radial-gradient(ellipse at 42% 7%, #00a155 0%, #006e3a 50%, #00552d 75%, #003b1f 100%)',
      }}
    >
      <div className="xl:order-last shrink-0 w-[155px] max-[420px]:w-[142px] max-[385px]:w-[128px] xl:w-[175px] flex items-center justify-center xl:justify-end xl:pr-6">
        <img
          src={ASSETS.starIntersect}
          alt=""
          className="xl:hidden w-[141px] h-[138px] max-[420px]:w-[126px] max-[420px]:h-[124px] max-[385px]:w-[112px] max-[385px]:h-[110px] object-contain"
        />
        <img
          src={ASSETS.deskStarIntersect}
          alt=""
          className="hidden xl:block w-[155px] h-[155px] object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between py-5 max-[420px]:py-4 max-[385px]:py-3 xl:py-6 pr-3 max-[420px]:pr-2 xl:pl-6 xl:pr-0">
        <div className="flex flex-col gap-2 max-[385px]:gap-1">
          <p className="font-bold text-[18px] max-[420px]:text-[16px] max-[385px]:text-[15px] xl:text-[24px] leading-[24px] max-[420px]:leading-[22px] max-[385px]:leading-[20px] xl:leading-[32px] font-['Inter',sans-serif]">
            <span className="text-white">Be the Gamehok's </span>
            <span className="text-[#ffcc4d]">Social Star</span>
          </p>
          <p className="font-semibold text-[13px] max-[420px]:text-[12px] max-[385px]:text-[11px] xl:text-[14px] leading-[18px] max-[420px]:leading-[16px] max-[385px]:leading-[15px] xl:leading-[20px] text-white font-['Inter',sans-serif] xl:max-w-[347px]">
            Earn rewards by levelling up your social game
          </p>
        </div>

        <div className="flex gap-[18px] max-[420px]:gap-3 max-[385px]:gap-2 xl:gap-[56px]">
          {socialItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-[3px] max-[385px]:gap-1 xl:gap-[6px]">
              <div
                className="xl:hidden w-11 h-11 max-[420px]:w-10 max-[420px]:h-10 max-[385px]:w-9 max-[385px]:h-9 rounded-full border flex items-center justify-center bg-black/5"
                style={{ borderColor: item.mobileBorder }}
              >
                <img src={item.mobileIcon} alt={item.label} className="w-7 h-7 max-[420px]:w-6 max-[420px]:h-6 max-[385px]:w-5 max-[385px]:h-5 object-contain" />
              </div>
              <div className="hidden xl:flex w-12 h-12">
                <img src={item.deskIcon} alt={item.label} className="w-full h-full object-contain" />
              </div>
              <span className="text-white text-[10px] max-[420px]:text-[9px] xl:text-[12px] font-medium xl:font-normal font-['Inter',sans-serif] leading-[14px] max-[420px]:leading-[12px] xl:leading-[16px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
