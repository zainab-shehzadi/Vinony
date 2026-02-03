
export default function AccountHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="py-2">
      <h1 className="text-[16px] md:text-[20px] font-bold text-foreground">{title}</h1>
      <p className="mt-1 text-sm md:text-[16px] text-[#475569] dark:text-accent">
        {subtitle}
      </p>
    </div>
  );
}
