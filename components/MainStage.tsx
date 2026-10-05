import type { ReactNode } from "react";

export default function MainStage({ children }: { children: ReactNode }) {
  return (
    <section className="elev-1 overflow-hidden rounded-[20px] bg-surface-container-low p-6 md:p-10">
      {children}
    </section>
  );
}
