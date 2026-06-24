function Card({ title, desc, tag }) {
  return (
    <div className="rounded-3xl bg-gray-100 dark:bg-[#171717] border border-gray-300 dark:border-gray-800 p-10 hover:-translate-y-3 transition duration-500">
      {tag && (
        <span className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg font-mono tracking-[4px] text-xs">
          {tag}
        </span>
      )}
      <h3 className="mt-8 text-3xl font-black">{title}</h3>
      <p className="mt-6 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
        {desc}
      </p>
    </div>
  );
}

export default Card;