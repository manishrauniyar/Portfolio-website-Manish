import SectionTitle from "./SectionTitle";
import manish from "../assets/mmmm.jpeg";

const skills = {
  "Full Stack Tech Stack": [
    "React.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "REST APIs",
  ],

  "Database & ORM": [
    "SQL",
    "MongoDB",
    "Prisma",
    "Mongoose",
  ],

  "Generative AI": [
    "Python",
    "LangChain",
    "AI Model APIs",
     "LLMOps",
     "Prompt eng",
    "Vector DB",
    "RAG",
  ],
};

function About() {
  return (
    <section id="about" className="px-7 md:px-30 py-30 relative overflow-hidden">
      <h1 className="absolute right-0 top-0 text-[220px] font-black text-gray-200 dark:text-gray-900 z-0">
        MR
      </h1>

      <SectionTitle title="about me" subtitle="Who am I" />

      {/* Top About Grid */}
      <div className="grid lg:grid-cols-[0.8fr_1.6fr] gap-8 relative z-10 items-stretch ">
        <div className=" rounded-2xl bg-linear-to-br overflow-hidden transition-all duration-300 hover:-translate-y-0.5">
          <div className="relative h-full min-h-125 rounded-2xl">

            <div className=" flex items-center gap-1.5 absolute top-5 left-3 bg-black text-white px-3 py-1 rounded-full text-[11px] font-semibold font-mono tracking-[1px]"> 

              <div className=" h-1.5 w-1.5 bg-green-500 rounded-full"></div> Learner</div>
            <img
              src={manish}
              alt="Manish"
              className=" w-full h-full object-cover "
            />
          </div>

        </div>

        {/* BASE: Gorakhpur, India
FOCUS: Full Stack + GenAI
CONNECT: LET'S BUILD */}

        <div className="h-full min-h-120 rounded-2xl bg-gray-100 dark:bg-[#171717] border border-gray-300 dark:border-gray-800 p-7 md:p-12 transition-all duration-300 hover:-translate-y-0.5">
          <p className="text-l md:text-xl leading-relaxed font-semibold">
            I'm a Full Stack Developer exploring the intersection
            of software engineering and Generative AI.

            I enjoy building intelligent systems that solve
            real-world problems and create meaningful impact.

          </p>

          <div className="mt-18 space-y-6 ">
            {Object.entries(skills).map(([title, items]) => (
              <div key={title}>
                <p className="font-mono tracking-[1px] mb-4">{title}</p>

                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-5 py-2 border border-gray-300 dark:border-gray-700 rounded-[5px] font-mono tracking-[2px] text-[11px] hover:scale-[1.02] transition duration-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8 relative z-10">
        <div className="h-[130px] rounded-[14px] bg-[#f1f1f1] border border-[#cfcfcf] flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer  dark:bg-black">
          <p className="font-mono text-[11px] tracking-[8px] uppercase">
            BASE
          </p>

          <h3 className="mt-4 text-[15px] font-black">
            Gorkhapur, India
          </h3>

          <p className="mt-3 font-mono text-[13px] tracking-[4px] text-gray-500">
            Open to remote(Internship)
          </p>
        </div>

        <div className="h-[130px] rounded-[14px] bg-[#f1f1f1] border border-[#cfcfcf] flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer  dark:bg-black">
          <p className="font-mono text-[11px] tracking-[8px] uppercase">
            FOCUS
          </p>

          <h3 className="mt-4 text-[15px] font-black">
            Full Stack + GenAI
          </h3>

          <p className="mt-3 font-mono text-[11px] tracking-[4px] text-gray-500">
            + AI Engineer
          </p>
        </div>

        <a
          href="#contact"
          className="h-[130px] rounded-[14px] bg-[#242424] border border-black flex flex-col items-center justify-center text-center text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl  dark:bg-gray-100 dark:text-black"
        >
          <p className="font-mono text-[11px] tracking-[8px] uppercase">
            CONNECT
          </p>

          <h3 className="mt-4 text-[15px] font-black">
            REACH OUT
          </h3>

          <p className="mt-3 font-mono text-[11px] tracking-[4px] text-gray-400">
            Let's talk →
          </p>
        </a>
      </div>
    </section>
  );
}

export default About;