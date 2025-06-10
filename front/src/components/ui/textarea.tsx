import * as React from "react";

import { cn } from "@/lib/utils";

// 1. Tipagem para TextareaProps
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = React.forwardRef<
  HTMLTextAreaElement, // Tipo do elemento HTML que a ref aponta
  TextareaProps
>(({ className, ...props }, ref) => {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref} // Passa a ref para o elemento textarea
      {...props}
    />
  );
});

Textarea.displayName = "Textarea"; // Define um nome de exibição para depuração

export { Textarea };