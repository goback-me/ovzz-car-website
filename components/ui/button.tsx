import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "orange" | "white" | "black" | "outline";
}

export function Button({
  variant = "orange",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "orange"
      ? "btn-orange"
      : variant === "white"
      ? "btn-white"
      : variant === "black"
      ? "btn-black"
      : "btn-outline-soft";

  return (
    <button type={type} className={cn(variantClass, className)} {...props} />
  );
}
