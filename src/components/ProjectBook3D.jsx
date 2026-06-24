import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import TechStackPage, { TechStackContent } from "./TechStackPage";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectBook3D({ projects = [] }) {
  const bookRef = useRef(null);
  const pausedRef = useRef(false);
  const audioRef = useRef(null);

  const [coverOpen, setCoverOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [introStarted, setIntroStarted] = useState(false);
  const [introRunning, setIntroRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [keyboardActive, setKeyboardActive] = useState(false);

  const activeIndex = Math.min(currentPage, projects.length - 1);
  const activeProject = projects[activeIndex];

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const waitIfPaused = async () => {
    while (pausedRef.current) {
      await sleep(100);
    }
  };

  const playFlipSound = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.volume = 0.35;
    audioRef.current.play().catch(() => {});
  };

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    if (!projects.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !introStarted) {
          setIntroStarted(true);
        }
      },
      { threshold: 0.35 }
    );

    if (bookRef.current) {
      observer.observe(bookRef.current);
    }

    return () => observer.disconnect();
  }, [introStarted, projects.length]);

  useEffect(() => {
    if (!introStarted || !projects.length) return;

    let cancelled = false;

    const runIntro = async () => {
      setIntroRunning(true);
      setCoverOpen(true);

      await sleep(500);

      for (let i = 1; i < projects.length; i++) {
        if (cancelled) return;

        await waitIfPaused();
        setCurrentPage(i);
        playFlipSound();
        await sleep(300);
      }

      await sleep(500);

      for (let i = projects.length - 2; i >= 0; i--) {
        if (cancelled) return;

        await waitIfPaused();
        setCurrentPage(i);
        playFlipSound();
        await sleep(240);
      }

      setCurrentPage(0);
      setIntroRunning(false);
    };

    runIntro();

    return () => {
      cancelled = true;
    };
  }, [introStarted, projects.length]);

  const nextPage = () => {
    if (introRunning) return;

    if (currentPage < projects.length - 1) {
      setCurrentPage((prev) => prev + 1);
      playFlipSound();
    }
  };

  const prevPage = () => {
    if (introRunning) return;

    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      playFlipSound();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!keyboardActive) return;

      const tag = e.target.tagName;

      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        e.target.isContentEditable
      ) {
        return;
      }

      if (introRunning) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextPage();
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyboardActive, introRunning, currentPage, projects.length]);

  if (!projects.length) return null;

  return (
    <div className="relative z-10 my-8 overflow-visible md:my-20">
      <audio ref={audioRef} src="/page-flip.mp3" preload="auto" />

      {/* Responsive outer box */}
      <div className="relative mx-auto h-[300px] w-full max-w-[390px] overflow-visible sm:h-[390px] sm:max-w-[520px] md:h-[560px] md:max-w-5xl">
        {/* Real book size stays fixed on mobile, only scale changes */}
        <div
          ref={bookRef}
          onMouseEnter={() => {
            setPaused(true);
            setKeyboardActive(true);
          }}
          onMouseLeave={() => {
            setPaused(false);
            setKeyboardActive(false);
          }}
          className="group/book absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 origin-top scale-[0.4] [perspective:2800px] sm:scale-[0.54] md:relative md:left-auto md:h-full md:w-full md:translate-x-0 md:scale-100"
        >
          {/* Outer Left Arrow */}
          <button
            onClick={prevPage}
            disabled={introRunning || currentPage === 0}
            className="absolute -left-5 top-1/2 z-[200] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-0 group-hover/book:-left-16 group-hover/book:opacity-100 md:-left-6 md:h-14 md:w-14 md:group-hover/book:-left-24"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Outer Right Arrow */}
          <button
            onClick={nextPage}
            disabled={introRunning || currentPage === projects.length - 1}
            className="absolute -right-5 top-1/2 z-[200] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-0 group-hover/book:-right-16 group-hover/book:opacity-100 md:-right-6 md:h-14 md:w-14 md:group-hover/book:-right-24"
          >
            <ChevronRight size={30} />
          </button>

          <div
            className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
              paused
                ? "[transform:rotateX(5deg)_rotateY(0deg)_scale(1.025)]"
                : "[transform:rotateX(9deg)_rotateY(-4deg)]"
            }`}
          >
            {/* Bottom shadow */}
            <div className="absolute -bottom-14 left-1/2 h-24 w-[90%] -translate-x-1/2 rounded-full bg-black/70 blur-3xl" />

            {/* Left page */}
            <TechStackPage project={activeProject} />

            {/* Spine */}
            <div className="absolute left-1/2 top-0 z-[90] h-full w-12 -translate-x-1/2 bg-linear-to-r from-black/60 via-slate-500 to-black/60 shadow-2xl" />
            <div className="absolute left-[49.3%] top-8 z-[95] h-[86%] w-2 rounded-full bg-white/10 blur-sm" />

            {/* Right page depth */}
            <div className="absolute right-0 top-2 h-[97%] w-1/2 rounded-r-[2rem] bg-slate-400 shadow-xl" />
            <div className="absolute right-2 top-5 h-[93%] w-1/2 rounded-r-[2rem] bg-slate-300 shadow-xl" />
            <div className="absolute right-4 top-8 h-[89%] w-1/2 rounded-r-[2rem] bg-slate-200 shadow-xl" />

            {/* Pages */}
            {projects.map((project, index) => (
              <div
                key={project.no}
                className="absolute left-1/2 top-0 h-full w-1/2 origin-left transition-transform duration-500 ease-in-out [transform-style:preserve-3d]"
                style={{
                  transform:
                    currentPage > index
                      ? "rotateY(-180deg)"
                      : "rotateY(0deg)",
                  zIndex:
                    currentPage > index
                      ? index + 20
                      : projects.length - index + 40,
                }}
              >
                {/* Front side */}
                <div className="absolute inset-0 rounded-r-[2rem] bg-slate-50 p-4 text-slate-900 shadow-2xl [backface-visibility:hidden] md:p-8">
                  <ProjectCard project={project} />
                </div>

                {/* Back side */}
                <div className="absolute inset-0 overflow-hidden rounded-l-[2rem] bg-linear-to-br from-slate-900 via-slate-800 to-slate-950 p-7 text-left text-white shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-12">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.16),transparent_35%)]" />

                  <TechStackContent
                    project={
                      projects[Math.min(index + 1, projects.length - 1)]
                    }
                  />
                </div>
              </div>
            ))}

            {/* Front cover */}
            <div
              className={`pointer-events-none absolute left-1/2 top-0 h-full w-1/2 origin-left rounded-r-[2rem] bg-linear-to-br from-cyan-500 via-blue-600 to-purple-700 shadow-2xl transition-transform duration-700 [transform-style:preserve-3d] ${
                coverOpen
                  ? "z-[15] [transform:rotateY(-180deg)]"
                  : "z-[120] [transform:rotateY(0deg)]"
              }`}
            >
              <div className="absolute inset-0 overflow-hidden rounded-r-[2rem] p-8 text-left [backface-visibility:hidden] md:p-12">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />

                <div className="relative z-10 flex h-full flex-col justify-center">
                  <span className="mb-6 w-fit rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold">
                    Auto Preview
                  </span>

                  <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
                    Project <br /> Showcase
                  </h2>

                  <p className="mt-6 leading-7 text-white/80">
                    Fast 3D page flipping animation starts automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Status text */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-sm text-gray-500 dark:text-slate-300">
            {introRunning
              ? paused
                ? "Paused on hover"
                : "Auto preview running..."
              : keyboardActive
              ? "Keyboard active: use ← →"
              : "Hover book to use keyboard"}
          </div>
        </div>
      </div>
       {/* Controls */}
      <div className="mt-1 flex justify-center items-center gap-3">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="px-6 py-3 rounded-full text-slate-900 font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition dark:text-white"
        >
          Prev
        </button>

        <span className="text-slate-300 font-semibold">
          Page {currentPage} / {projects.length}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === projects.length}
          className="px-6 py-3 rounded-full text-slate-900 font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition  dark:text-white"
        >
          Next
        </button>
      </div>

      {/* Page number */}
     
    </div>
  );
}