import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

// 1. Tipagem para Breadcrumb (Root)
interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {} // Herda as props de uma tag <nav>

function Breadcrumb({ ...props }: BreadcrumbProps) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

// 2. Tipagem para BreadcrumbList
interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<"ol"> {
  className?: string;
}

function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  );
}

// 3. Tipagem para BreadcrumbItem
interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<"li"> {
  className?: string;
}

function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

// 4. Tipagem para BreadcrumbLink
interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> { // Herda as props de uma tag <a>
  asChild?: boolean;
  className?: string;
}

function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  );
}

// 5. Tipagem para BreadcrumbPage
interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<"span"> { // Herda as props de uma tag <span>
  className?: string;
}

function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  );
}

// 6. Tipagem para BreadcrumbSeparator
interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<"li"> { // Herda as props de uma tag <li>
  children?: React.ReactNode;
  className?: string;
}

function BreadcrumbSeparator({ children, className, ...props }: BreadcrumbSeparatorProps) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

// 7. Tipagem para BreadcrumbEllipsis
interface BreadcrumbEllipsisProps extends React.ComponentPropsWithoutRef<"span"> { // Herda as props de uma tag <span>
  className?: string;
}

function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};