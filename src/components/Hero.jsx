function Hero() {
  return (
    <section id="home" className="min-h-screen pt-44 text-center px-6">
      <p className="font-mono tracking-[10px] text-lg animate-pulse">
        &gt; Hello, World_
      </p>

      <h1 className="mt-12 text-[52px] sm:text-[75px] md:text-[110px] lg:text-[140px] xl:text-[170px] font-black leading-none tracking-[-3px] md:tracking-[-6px] lg:tracking-[-8px] animate-slideUp">
        MANISH
      </h1>


      <h3 className="mt-13 text-xl md:text-2xl animate-fadeIn">
        AI Engineer <span className="mx-5">//</span> Full Stack Developer
      </h3>

      <p className="mt-7 font-mono tracking-[2px] leading-8 text-sm md:text-lg text-gray-700 dark:text-gray-300">
        Building the future with Full Stack Development
        and Generative AI technologies. <br />


        Passionate about creating impactful solutions
        that are simple, scalable, and user-focused.
      </p>

      <div className="mt-14 md:mt-20 flex flex-wrap justify-center items-center gap-3 sm:gap-4 animate-slideUp">
        <a
          href="#roles"
          className="px-7 sm:px-10 md:px-12 py-4 md:py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold text-sm sm:text-base hover:scale-105 transition"
        >
          Impact
        </a>

        <a
          href="https://drive.google.com/file/d/1U2x9oYUOezggbhWnkEKRafAF9kfgMerq/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="px-7 sm:px-10 md:px-12 py-4 md:py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold text-sm sm:text-base hover:scale-105 transition"
        >
          Resume
        </a>

        <a
          href="#contact"
          className="px-7 sm:px-10 md:px-12 py-4 md:py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold text-sm sm:text-base hover:scale-105 transition"
        >
          Contact
        </a>
      </div>
    </section >
  );
}

export default Hero;