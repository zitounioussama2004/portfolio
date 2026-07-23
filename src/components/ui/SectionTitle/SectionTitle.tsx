import Badge from "../Badge";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) => {
  return (
    <div
      className={`mb-16 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {badge && (
        <Badge className="mb-4">
          {badge}
        </Badge>
      )}

      <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 max-w-3xl text-slate-500 dark:text-slate-400 text-lg leading-8 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;