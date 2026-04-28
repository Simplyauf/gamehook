export default function SectionHeader({ title, actionLabel }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-white text-[24px] font-bold font-['Inter',sans-serif] leading-[32px]">
        {title}
      </h2>
      {actionLabel ? (
        <button className="text-[#0cf285] text-[14px] font-semibold font-['Inter',sans-serif] leading-[20px] uppercase tracking-wide">
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
