import { cn } from "@/lib/cn";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-lg border border-white/15 bg-[#11161D] px-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-[var(--accent)]",
        className
      )}
      {...props}
    />
  );
}
