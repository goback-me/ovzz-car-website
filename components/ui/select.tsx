import { cn } from "@/lib/cn";

export function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-11 w-full rounded-lg border border-white/15 bg-[#11161D] px-3 text-sm text-white outline-none focus:border-[var(--accent)]",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
