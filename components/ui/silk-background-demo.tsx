import SilkBackground from "@/components/ui/silk-background-animation";

// ONLY DEFAULT EXPORT WILL BE TREATED AS A DEMO
export default function DemoOne() {
  return (
    <>
      {/* Scoped demo-only styles (fade-in keyframes) */}
      <style>{`
        .silk-demo-fade-up {
          animation: silk-demo-fade-up 1s ease-out 0.3s both;
        }
        .silk-demo-fade-corner {
          animation: silk-demo-fade-corner 1s ease-out 0.9s both;
        }
        @keyframes silk-demo-fade-up {
          from { opacity: 0; transform: translateY(1rem); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes silk-demo-fade-corner {
          from { opacity: 0; transform: translateY(-1rem); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative h-screen w-full overflow-hidden bg-black">
        <SilkBackground className="absolute inset-0" />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        {/* Demo content */}
        <div className="relative z-20 flex h-full items-center justify-center">
          <div className="px-8 text-center">
            <h1 className="text-6xl leading-none font-light tracking-[-0.05em] text-white sm:text-8xl md:text-9xl lg:text-[12rem]">
              silk
            </h1>
            <div className="silk-demo-fade-up mt-8 text-lg font-extralight tracking-[0.2em] text-gray-300 uppercase md:text-xl">
              <span className="inline-block">flowing</span>
              <span className="mx-4 text-gray-500">•</span>
              <span className="inline-block">texture</span>
              <span className="mx-4 text-gray-500">•</span>
              <span className="inline-block">art</span>
            </div>
          </div>
        </div>

        {/* Corner accent */}
        <div className="silk-demo-fade-corner absolute top-8 left-8 z-30 text-xs font-light tracking-widest text-gray-500 uppercase">
          2025
        </div>
      </div>
    </>
  );
}
