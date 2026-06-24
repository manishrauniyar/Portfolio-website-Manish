function Footer() {
  return (
    <footer className=" h-[65px] border-t border-gray-200 dark:border-gray-800 px-8 py-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 border rounded-lg grid place-items-center font-black">MR</div>
        <p className="font-black tracking-[3px]">&lt;/Dev&gt;</p>
      </div>

      <p className="mt-4 md:mt-0 text-center">
        © 2026 Manish. All rights reserved.
      </p>

      <a href="#home" className="mt-4 md:mt-0 font-mono tracking-[5px] text-sm">
        ↑ BACK TO TOP
      </a>
    </footer>
  );
}

export default Footer;