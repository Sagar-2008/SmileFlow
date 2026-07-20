interface FloatingCardProps {
  icon: string;
  title: string;
  subtitle: string;
  className?: string;
}

export default function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
}: FloatingCardProps) {
  return (
    <div
      className={`
        absolute rounded-2xl
        border border-white/40
        bg-white/80
        backdrop-blur-xl
        shadow-xl
        px-5 py-4
        ${className}
      `}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>

        <div>
          <h3 className="font-bold text-slate-800">
            {title}
          </h3>

          <p className="text-sm text-slate-500">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}