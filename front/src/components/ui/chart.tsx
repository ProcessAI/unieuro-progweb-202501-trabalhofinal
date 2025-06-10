"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import {
  type Payload as RechartsTooltipContentPayloadBase,
  type NameType, // Recharts exporta NameType e ValueType no nível superior
  type ValueType,
} from "recharts/types/component/DefaultTooltipContent"; // Caminho correto para TooltipContent e seus tipos
import { type Payload as RechartsLegendPayload } from "recharts/types/component/DefaultLegendContent";

import { cn } from "@/lib/utils";

// 1. Definições de Tipos para a Configuração do Gráfico
type ChartConfig = {
  [key: string]: {
    label?: string;
    color?: string;
    icon?: React.ElementType;
    theme?: {
      light: string;
      dark: string;
    };
  };
};

const THEMES = {
  light: "",
  dark: ".dark",
};

// 2. Tipagem para o Contexto do Gráfico
interface ChartContextType {
  config: ChartConfig;
}

const ChartContext = React.createContext<ChartContextType | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

// 3. Tipagem para ChartContainer
interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  className?: string;
  children: React.ReactNode; // Mais genérico, ResponsiveContainer aceita ReactNode
  config: ChartConfig;
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: ChartContainerProps) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        {/* ResponsiveContainer espera ReactElement, mas ReactNode é mais flexível aqui */}
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

// 4. Tipagem para ChartStyle
interface ChartStyleProps {
  id: string;
  config: ChartConfig;
}

const ChartStyle = ({ id, config }: ChartStyleProps) => {
  const colorConfig = Object.entries(config).filter(([, configItem]) => configItem.theme || configItem.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    // Acessar a propriedade 'theme' com segurança e o tipo correto
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .filter(Boolean)
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

// 5. ChartTooltip é um componente do Recharts, não precisa de tipagem extra aqui.
const ChartTooltip = RechartsPrimitive.Tooltip;

// 6. Tipagem para ChartTooltipContent
// Use interseção para combinar as props do Recharts com as suas
interface ChartTooltipContentProps extends React.ComponentProps<typeof RechartsPrimitive.Tooltip> {
  // Removendo 'active', 'payload', 'label' pois já vêm do RechartsPrimitive.Tooltip
  className?: string;
  indicator?: "dot" | "line" | "dashed";
  hideLabel?: boolean;
  hideIndicator?: boolean;
  // label?: string | number; // Remova se você não quiser sobrescrever o label do Tooltip
  labelFormatter?: (label: ValueType, payload: RechartsTooltipContentPayloadBase["payload"]) => React.ReactNode;
  labelClassName?: string;
  formatter?: (
    value: ValueType,
    name: NameType,
    props: RechartsTooltipContentPayloadBase["payload"][number],
    index: number,
    payload: object
  ) => React.ReactNode;
  color?: string;
  nameKey?: string;
  labelKey?: string;
}

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label, // Vem das props do RechartsPrimitive.Tooltip
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: ChartTooltipContentProps) {
  const { config } = useChart();

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value =
      !labelKey && typeof label === "string"
        ? config[label]?.label || label
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>;
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ]);

  if (!active || !payload?.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item: RechartsTooltipContentPayloadBase["payload"][number], index: number) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload?.fill || item.color;

          return (
            <div
              key={item.dataKey || index} // Usar index como fallback para key se dataKey for undefined
              className={cn(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center"
              )}
            >
              {formatter && item?.value !== undefined && item.name !== undefined ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0 rounded-[2px]",
                          {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          },
                          // Classes base para o indicador, se não estiver usando Tailwind com bg-(--color-bg)
                          indicatorColor ? `bg-[var(--color-bg)]` : "bg-muted" // Usar var() para custom property
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                            backgroundColor: indicatorColor,
                            borderColor: indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value !== undefined && (
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 7. ChartLegend é um componente do Recharts, não precisa de tipagem extra aqui.
const ChartLegend = RechartsPrimitive.Legend;

// 8. Tipagem para ChartLegendContent
interface ChartLegendContentProps {
  className?: string;
  hideIcon?: boolean;
  payload?: RechartsLegendPayload[];
  verticalAlign?: "top" | "middle" | "bottom";
  nameKey?: string;
}

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: ChartLegendContentProps) {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item: RechartsLegendPayload, index: number) => { // Tipar item e index
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value || index} // Usar index como fallback para key
            className={cn(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

// 9. Tipagem para getPayloadConfigFromPayload helper
function getPayloadConfigFromPayload(
  config: ChartConfig,
  // Payload pode vir do Tooltip ou Legend, ambos têm 'payload' e 'dataKey'/'name'
  payload: RechartsTooltipContentPayloadBase["payload"][number] | RechartsLegendPayload,
  key: string
): ChartConfig[string] | undefined {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  // Acessar 'payload' aninhado de forma mais segura para Tooltip
  const nestedPayload: Record<string, any> | undefined =
    "payload" in payload &&
    typeof (payload as any).payload === "object" && // Cast para 'any' para acessar 'payload'
    (payload as any).payload !== null
      ? (payload as any).payload
      : undefined;

  let configLabelKey: string = key;

  // Prioriza o valor da chave se ele existir diretamente no payload ou no nestedPayload
  if (key in payload && typeof (payload as Record<string, any>)[key] === "string") {
    configLabelKey = (payload as Record<string, any>)[key];
  } else if (
    nestedPayload &&
    key in nestedPayload &&
    typeof nestedPayload[key] === "string"
  ) {
    configLabelKey = nestedPayload[key];
  }

  // Se a chave não for encontrada na configuração, tente usar a chave original
  return configLabelKey in config ? config[configLabelKey] : config[key];
}


export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};