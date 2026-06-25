import ProjectBook3D from "./ProjectBook3D";
import SectionTitle from "./SectionTitle";
import { Code, ExternalLink } from "lucide-react";

// const projects = [
//   {
//     no: "01",
//     title: "Stack Stories",
//     small: "AI Blog Platform",
//     desc: "Full stack blogging platform with AI content generation, admin dashboard, JWT auth and MongoDB.",
//     tech: ["React", "Node", "MongoDB", "Gemini"],
//   },
//   {
//     no: "02",
//     title: "AI-email-router",
//     small: "Filter Email",
//     desc: "AI based email filtering and routing system using LLM tools.",
//     tech: ["Python", "Gemini-AI", "Langchain", "LLMOps", "RAG", "VectorDB"],
//   },
//   {
//     no: "03",
//     title: "Expenses Tracker",
//     small: "Real Time Track",
//     desc: "Expense tracking app with database, authentication and clean dashboard.",
//     tech: ["Next.js", "SQL", "Tailwind", "Prisma"],
//   },
//   {
//     no: "04",
//     title: "Chat Bot",
//     small: "Local AI Bot",
//     desc: "Local chatbot using LLM that answers questions with clean UI.",
//     tech: ["AI Model", "LLM", "Streamlit", "Python", "Langchain"],
//   },
// ];
const projects = [
  {
    no: "01",
    title: "Stack Stories",
    small: "AI-Powered Blog Platform",
    desc: "A full-stack blogging platform with AI content generation, secure JWT authentication, admin dashboard, blog management, comments control and MongoDB database integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Gemini AI"],
    type: "Full Stack",
    status: "Completed",
    highlight: "AI content generation with admin control",
    github: "https://github.com/manishrauniyar/Personal-Blog-Platform",
    live: "",
    gradient: "from-cyan-400 via-blue-500 to-purple-500",
  },
  {
    no: "02",
    title: "AI Hospital Email Router",
    small: "Smart Patient Query Routing System",
    desc: "An AI-powered hospital email routing system that analyzes patient messages, detects then automatically routes queries to the correct department such as Emergency, OPD, Billing,Doctor Support.",
    tech: ["Python", "Gemini AI", "LangChain", "RAG", "VectorDB", "LLMOps"],
    type: "AI Healthcare Project",
    status: "Completed",
    highlight: "Automatic hospital department routing using LLMs",
    github: "https://github.com/manishrauniyar/hospital-mail-route",
    live: "https://hospital-mail-route.vercel.app/",
    gradient: "from-emerald-400 via-cyan-500 to-blue-500",
  },
  {
    no: "03",
    title: "Expense Tracker",
    small: "Personal Finance Dashboard",
    desc: "A modern expense tracking application that helps users manage daily spending, monitor transactions, view summaries and organize financial data with a clean dashboard UI.",
    tech: ["Next.js", "SQL", "Prisma", "Tailwind CSS", "Authentication"],
    type: "Web App",
    status: "In Progress",
    highlight: "Real-time expense management dashboard",
    github: "https://github.com/manishrauniyar/Expense-Tracker-",
    live: "https://expense-tracker-five-lemon-35.vercel.app",
    gradient: "from-orange-400 via-pink-500 to-rose-500",
  },
  {
    no: "04",
    title: "Local AI Chatbot",
    small: "Private LLM Chat Assistant",
    desc: "A local AI chatbot built with LLM integration that can answer user questions through a simple and clean interface while keeping the system lightweight and easy to use.",
    tech: ["Python", "Streamlit", "LangChain", "LLM", "AI Model"],
    type: "GenAI",
    status: "Completed",
    highlight: "Lightweight private chatbot with clean UI",
    github: "https://github.com/yourusername/local-ai-chatbot",
    live: "",
    gradient: "from-violet-400 via-purple-500 to-indigo-600",
  },
];

function Builds() {
  return (
    <section id="builds" className="relative overflow-hidden px-8 md:px-32">
      <h1 className="absolute left-0 z-0 text-[260px] font-black text-gray-200 dark:text-gray-900">
        MR
      </h1>

      <SectionTitle title="builds" subtitle="Project archive" />

      <ProjectBook3D projects={projects} />

      <div className="relative z-10 grid gap-8 lg:grid-cols-2">

        {projects.map((p) => (
          <div
            key={p.no}
            className="relative overflow-hidden rounded-3xl border border-gray-300 bg-gray-100 p-10 transition duration-500 hover:scale-[1.02] dark:border-gray-800 dark:bg-[#171717]"
          >
            <span className="absolute right-8 top-3 text-[100px] font-black text-gray-300 dark:text-gray-800">
              {p.no}
            </span>

            <div className="relative z-10">
              <p className="font-mono text-sm tracking-[6px]">
                {p.small}
              </p>

              <div className="flex items-start justify-between">
                <h3 className="mt-4 text-4xl font-black">{p.title}</h3>

                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                  >
                    <Code size={22} />
                  </a>

                  <button
                    onClick={() => {
                      if (p.live === "") {
                        alert("Demo not completed");
                      } else {
                        window.open(p.live, "_blank", "noopener,noreferrer");
                      }
                    }}
                    className="hover:scale-110 transition cursor-pointer"
                  >
                    <ExternalLink size={22} />
                  </button>
                  
              </div>
            </div>

            <p className="mt-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {p.desc}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-gray-300 px-4 py-2 font-mono text-sm tracking-[3px] dark:border-gray-700 hover:scale-[1.02] transition duration-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          </div>
        ))}
    </div>
    </section >
  );
}

export default Builds;