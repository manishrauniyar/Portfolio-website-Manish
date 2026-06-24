export function TechStackContent({ project }) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-center">
      <span className="mb-5 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
        {project?.type}
      </span>

      <h2 className="mb-2 text-3xl font-black text-white md:text-5xl">
        {project?.title}
      </h2>

      <p className="mb-5 text-lg font-semibold text-cyan-200">
        {project?.small}
      </p>

      <div className="mb-7 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
        <p className="text-sm font-bold text-cyan-300">Highlight</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          {project?.highlight}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {project?.tech?.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-cyan-400/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStackPage({ project }) {
  return (
    <div className="absolute left-0 top-0 z-[70] h-full w-1/2 overflow-hidden rounded-l-[2rem] border-r border-black/40 bg-linear-to-br from-slate-900 via-slate-800 to-slate-950 p-7 text-left shadow-2xl md:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.16),transparent_35%)]" />

      <TechStackContent project={project} />
    </div>
  );
}