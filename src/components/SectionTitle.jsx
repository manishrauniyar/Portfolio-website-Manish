function SectionTitle({ title, subtitle }) {
  return (
    <div className="relative mb-20">
      <h2 className="text-[50px] md:text-[90px] font-black tracking-[-6px] leading-none">
        {title}
      </h2>
      <div className="flex items-center gap-4 mt-6">
        <span className="w-12 h-px bg-black dark:bg-white"></span>
        <p className="font-mono tracking-[8px] text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

export default SectionTitle;