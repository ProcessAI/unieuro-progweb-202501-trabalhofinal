"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

// 1. Tipagem para SliderProps
interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  className?: string;
  // defaultValue e value podem ser um array de números para múltiplos thumbs
  defaultValue?: number[];
  value?: number[];
  min?: number;
  max?: number;
  // onValueChange é uma prop comum para sliders controlados
  onValueChange?: (value: number[]) => void;
  // onValueCommit para quando o usuário termina de arrastar
  onValueCommit?: (value: number[]) => void;
  // stepped, se houver um comportamento de passos
  step?: number;
  // orientation, se você quiser controlar a orientação
  orientation?: "horizontal" | "vertical";
  // disabled, se o slider pode ser desabilitado
  disabled?: boolean;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      defaultValue,
      value,
      min = 0,
      max = 100,
      onValueChange,
      onValueCommit,
      step,
      orientation = "horizontal", // Adicionado padrão para orientation
      disabled,
      ...props
    },
    ref
  ) => {
    // Determine o valor inicial para o cálculo do número de thumbs
    // Se 'value' for fornecido, use-o. Caso contrário, use 'defaultValue'.
    // Se nenhum dos dois, use [min, max] como padrão para um slider de range.
    const _values = React.useMemo(() => {
      if (Array.isArray(value)) return value;
      if (Array.isArray(defaultValue)) return defaultValue;
      return [min, max]; // Fallback para um range padrão se nenhum for fornecido
    }, [value, defaultValue, min, max]);

    return (
      <SliderPrimitive.Root
        ref={ref}
        data-slot="slider"
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        onValueChange={onValueChange}
        onValueCommit={onValueCommit}
        step={step}
        orientation={orientation} // Passa a orientação para o componente Radix
        disabled={disabled}
        className={cn(
          "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(
            "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
          )}
        >
          <SliderPrimitive.Range
            data-slot="slider-range"
            className={cn(
              "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
            )}
          />
        </SliderPrimitive.Track>
        {/* Renderiza um thumb para cada valor em _values */}
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Root>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };