function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 px-8 py-6 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 border border-gray-400 dark:border-gray-600 rounded-lg grid place-items-center font-black">
          MR
        </div>
        <p className="font-black tracking-[3px]">&lt;/Dev&gt;</p>
      </div>

      {/* Center Text */}
      <p className="mt-4 md:mt-0 text-center">
        © 2026 Manish. All rights reserved.
      </p>

      {/* Right Link */}
      <a
        href="#home"
        className="mt-4 md:mt-0 font-mono tracking-[5px] text-sm hover:opacity-70 transition"
      >
        ↑ BACK TO TOP
      </a>
    </footer>
  );
}

export default Footer;