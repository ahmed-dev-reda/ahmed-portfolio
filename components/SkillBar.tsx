interface SkillBarProps {
  name: string;
  level: number;
}

export default function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium leading-[18px] text-primary">
          {name}
        </span>
        <span className="text-[13px] font-medium leading-[18px] text-primary-container">
          {level}%
        </span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-surface-container p-0.5">
        <div
          className="h-full rounded-full bg-primary-container shadow-[0_0_12px_rgba(255,219,112,0.45)] transition-[width] duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
