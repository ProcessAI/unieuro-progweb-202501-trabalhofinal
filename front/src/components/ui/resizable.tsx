"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

// 1. Tipagem para ResizablePanelGroup
// O `PanelGroup` do `react-resizable-panels` não exporta diretamente sua interface de props.
// Precisamos inferir ou criar manualmente com base na documentação ou uso.
// Pelo uso, parece que aceita props de um div e as props do PanelGroup.
interface ResizablePanelGroupProps
  extends React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelGroup> {
  className?: string;
  // `direction` é uma prop importante para PanelGroup, mas já está em ComponentPropsWithoutRef
  // direction: "horizontal" | "vertical";
}

const ResizablePanelGroup = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.PanelGroup>, // O ref para PanelGroup
  ResizablePanelGroupProps
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.PanelGroup
    ref={ref}
    data-slot="resizable-panel-group"
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
));
ResizablePanelGroup.displayName = "ResizablePanelGroup"; // Define displayName explicitamente

// 2. Tipagem para ResizablePanel
interface ResizablePanelProps
  extends React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Panel> {
  // `defaultSize`, `minSize`, `maxSize`, `collapsible`, etc. já estão incluídos.
}

const ResizablePanel = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.Panel>, // O ref para Panel
  ResizablePanelProps
>(({ ...props }, ref) => (
  <ResizablePrimitive.Panel ref={ref} data-slot="resizable-panel" {...props} />
));
ResizablePanel.displayName = "ResizablePanel"; // Define displayName explicitamente

// 3. Tipagem para ResizableHandle
interface ResizableHandleProps
  extends React.ComponentPropsWithoutRef<
    typeof ResizablePrimitive.PanelResizeHandle
  > {
  withHandle?: boolean;
  className?: string;
}

const ResizableHandle = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.PanelResizeHandle>, // O ref para PanelResizeHandle
  ResizableHandleProps
>(({ withHandle, className, ...props }, ref) => (
  <ResizablePrimitive.PanelResizeHandle
    ref={ref}
    data-slot="resizable-handle"
    className={cn(
      "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
        <GripVerticalIcon className="size-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
));
ResizableHandle.displayName = "ResizableHandle"; // Define displayName explicitamente

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };