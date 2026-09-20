"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      aria-label="Go to top"
      className={` fixed bottom-6 right-6 z-50
        flex size-11 items-center justify-center
        rounded-full
        border border-white/10
        bg-[#181818]
        text-white/60
        shadow-lg
        transition-all
        hover:-translate-y-1
        hover:bg-white transition-all
        hover:text-black ${isVisible ? "visible translate-0" : "invisible translate-x-30"}`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
