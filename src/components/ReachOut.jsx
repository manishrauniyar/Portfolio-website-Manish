import { Mail } from "lucide-react";

function ReachOut() {
  return (
    <section id="contact" className="px-8 md:px-32 py-28">
      <h1 className="text-[90px] md:text-[150px] font-black leading-none">
        REACH <br />
        <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-gray-300 dark:from-white dark:to-gray-700">
          OUT
        </span>
      </h1>

      <div className="mt-16 rounded-3xl bg-gray-100 dark:bg-[#171717] border border-gray-300 dark:border-gray-800 p-16 text-center">

        <div className="mx-auto w-16 h-16 rounded-2xl bg-gray-200 dark:bg-[#222] border grid place-items-center">
          <Mail />
        </div>

        <p className="mt-10 font-mono tracking-[8px] text-sm">
          COLLAB & INQUIRY
        </p>

        <h2 className="mt-8 text-4xl md:text-5xl font-black max-w-3xl mx-auto">
          Open to collaborations, internships, research, or just a good conversation about AI.
        </h2>

        {/* Buttons */}
        <div className="mt-12  flex flex-wrap justify-center gap-6">

          <a
            href="https://www.linkedin.com/in/manishrauniyar8736/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-mono tracking-[3px] font-bold hover:scale-[1.05] transition duration-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/manishrauniyar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-mono tracking-[3px] font-bold hover:scale-[1.05] transition duration-300"
          >
            GitHub
          </a>

          <button
            onClick={() => alert("Taiyari abhi chal rahi hai 🚀")}
            className="px-5 py-5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-mono tracking-[3px] font-bold hover:scale-[1.05] transition duration-300"
          >
            LeetCode
          </button>

          <a
            href="mailto:yourmail@gmail.com"
            className=" px-5 py-5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-mono tracking-[3px] font-bold hover:scale-[1.05] transition duration-300 flex items-center gap-3"
          >
            <Mail size={20} /> Mail
          </a>

        </div>
      </div>
    </section>
  );
}

export default ReachOut;