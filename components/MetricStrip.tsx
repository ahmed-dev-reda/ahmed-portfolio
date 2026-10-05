import { portfolioMetrics } from "@/data/portfolio";

export default function MetricStrip() {
  return (
    <div className="rounded-xl bg-surface-container-lowest p-6">
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {portfolioMetrics.map((metric) => (
          <div key={metric.label} className="text-center lg:text-left">
            <dt className="order-2 mt-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.06em] text-outline">
              {metric.label}
            </dt>
            <dd className="font-display order-1 text-[24px] font-semibold leading-8 tracking-[-0.01em] text-primary">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
