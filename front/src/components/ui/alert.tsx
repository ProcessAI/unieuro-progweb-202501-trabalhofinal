import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority"; // Importar 'type VariantProps'

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// 1. Tipagem para Alert
// Usamos VariantProps para obter as props geradas pelo cva, e combinamos com as props de uma div HTML padrão
interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>, // Herda as props de uma div HTML
    VariantProps<typeof alertVariants> {} // Adiciona as props de variante ('variant')

function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

// 2. Tipagem para AlertTitle
// É um wrapper para uma div, então React.HTMLAttributes<HTMLDivElement> é apropriado
interface AlertTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)}
      {...props}
    />
  );
}

// 3. Tipagem para AlertDescription
// Também é um wrapper para uma div
interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };