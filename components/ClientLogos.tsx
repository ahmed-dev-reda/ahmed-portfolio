import { clients } from "@/data/about";

export default function ClientLogos() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {clients.map((client) => (
        <div
          key={client}
          className="hover-glow flex h-16 items-center justify-center rounded-xl border border-transparent bg-surface-container-lowest px-3 text-center text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-outline transition hover:text-primary-container"
        >
          {client}
        </div>
      ))}
    </div>
  );
}
