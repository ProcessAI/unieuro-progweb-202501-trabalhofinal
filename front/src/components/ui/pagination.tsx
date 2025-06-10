import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority"; // Importar VariantProps se buttonVariants tiver variantes

// 1. Tipagem para Pagination (Root)
interface PaginationProps extends React.ComponentPropsWithoutRef<"nav"> {
  className?: string;
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
);
Pagination.displayName = "Pagination";

// 2. Tipagem para PaginationContent
interface PaginationContentProps
  extends React.ComponentPropsWithoutRef<"ul"> {
  className?: string;
}

const PaginationContent = React.forwardRef<HTMLUListElement, PaginationContentProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
);
PaginationContent.displayName = "PaginationContent";

// 3. Tipagem para PaginationItem
interface PaginationItemProps
  extends React.ComponentPropsWithoutRef<"li"> {}

const PaginationItem = React.forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ ...props }, ref) => (
    <li ref={ref} data-slot="pagination-item" {...props} />
  )
);
PaginationItem.displayName = "PaginationItem";


// 4. Tipagem para PaginationLink
// Este componente usa buttonVariants, então precisamos das variantes do botão.
interface PaginationLinkProps
  extends React.ComponentPropsWithoutRef<"a">,
    VariantProps<typeof buttonVariants> { // Herda as variantes do buttonVariants
  isActive?: boolean;
  className?: string;
  // 'size' já está em VariantProps, mas se o default for diferente, pode ser redefinido.
  // size?: "default" | "sm" | "lg" | "icon" | null | undefined;
}

const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, size = "icon", ...props }, ref) => (
    <a
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
);
PaginationLink.displayName = "PaginationLink";

// 5. Tipagem para PaginationPrevious
interface PaginationPreviousProps
  extends React.ComponentPropsWithoutRef<typeof PaginationLink> {
  className?: string;
}

const PaginationPrevious = React.forwardRef<
  HTMLAnchorElement,
  PaginationPreviousProps
>(({ className, ...props }, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
    {...props}
  >
    <ChevronLeftIcon />
    <span className="hidden sm:block">Previous</span>
  </PaginationLink>
));
PaginationPrevious.displayName = "PaginationPrevious";

// 6. Tipagem para PaginationNext
interface PaginationNextProps
  extends React.ComponentPropsWithoutRef<typeof PaginationLink> {
  className?: string;
}

const PaginationNext = React.forwardRef<
  HTMLAnchorElement,
  PaginationNextProps
>(({ className, ...props }, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
    {...props}
  >
    <span className="hidden sm:block">Next</span>
    <ChevronRightIcon />
  </PaginationLink>
));
PaginationNext.displayName = "PaginationNext";

// 7. Tipagem para PaginationEllipsis
interface PaginationEllipsisProps
  extends React.ComponentPropsWithoutRef<"span"> {
  className?: string;
}

const PaginationEllipsis = React.forwardRef<HTMLSpanElement, PaginationEllipsisProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};