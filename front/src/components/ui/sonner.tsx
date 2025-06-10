"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import * as React from "react"; // Importe React para tipagens

// 1. Tipagem para ToasterProps
interface ToasterProps extends React.ComponentPropsWithoutRef<typeof Sonner> {
  // `className` já está incluído em `ComponentPropsWithoutRef`, mas pode ser explicitado se preferir.
  // Quaisquer outras props que você passe diretamente para `Sonner` serão tipadas automaticamente.
}

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as "light" | "dark" | "system"} // Coerção de tipo para 'theme' para Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties // Coerção de tipo para CSS custom properties
      }
      {...props}
    />
  );
};

export { Toaster };