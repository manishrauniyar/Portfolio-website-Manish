export default function ProjectCard({ project }) {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl border border-white/80 bg-linear-to-br  from-white via-cyan-50 to-blue-100 p-6 text-left shadow-inner md:p-8 ">

      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-300/30 blur-2xl" />
      <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-purple-300/30 blur-2xl" />

      <div className="relative z-10 flex h-full flex-col justify-center">
        <div className="mb-5 flex flex-wrap gap-3">
          <span className="w-fit rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white md:text-sm">
            {project?.no} • {project?.type}
          </span>

          <span className="w-fit rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-700 md:text-sm">
            {project?.status}
          </span>
        </div>

        <h2 className="mb-2 text-2xl font-black text-slate-900 md:text-4xl">
          {project?.title}
        </h2>

        <p className="mb-4 text-sm font-bold text-blue-600 md:text-base">
          {project?.small}
        </p>

        <p className="mb-5 leading-7 text-slate-600">{project?.desc}</p>

        <div className="flex flex-wrap gap-3">
          {project?.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`rounded-full bg-linear-to-r ${project.gradient} px-5 py-2.5 text-sm font-bold text-white transition hover:scale-105`}
            >
              GitHub
            </a>
          )}

          {project?.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:scale-105"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}