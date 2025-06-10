import * as React from "react";

import { cn } from "@/lib/utils";

// 1. Tipagem para Input
// Extende React.InputHTMLAttributes<HTMLInputElement> para incluir todas as props padrão de um input HTML.
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string; // Adicionado explicitamente para ser mais claro, embora já esteja incluído em InputHTMLAttributes
  type?: string; // Adicionado explicitamente, embora já esteja incluído em InputHTMLAttributes
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        ref={ref} // Adicione o ref aqui
        {...props}
      />
    );
  }
);
Input.displayName = "Input"; // Define displayName para melhor depuração

export { Input };