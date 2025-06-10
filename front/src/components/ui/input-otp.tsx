"use client";

import * as React from "react";
import {
  OTPInput,
  OTPInputContext,
  OTPInputProps as OTPInputPrimitiveProps, // Renomeado para evitar conflito com o wrapper
} from "input-otp";
import { MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

// Definir a tipagem para o contexto da OTPInput
// É recomendado verificar o arquivo .d.ts da biblioteca input-otp para a definição exata
// de OTPInputContext. Se não for exportado diretamente, esta definição manual é um bom fallback.
interface CustomOTPInputContextValue {
  slots: {
    char: string | null;
    hasFakeCaret: boolean;
    isActive: boolean;
  }[];
  // Adicione outras propriedades do contexto da input-otp se você as usar,
  // como isFocused, disabled, etc., se forem expostas pelo contexto.
}

// 1. Tipagem para InputOTP (Wrapper do OTPInput)
// Usamos 'type' para combinar as props do OTPInput original com as suas customizadas.
type InputOTPProps = OTPInputPrimitiveProps & {
  className?: string; // Classe para o componente root (o próprio OTPInput)
  containerClassName?: string; // Classe para o container interno que o OTPInput cria
};

function InputOTP({ className, containerClassName, ...props }: InputOTPProps) {
  return (
    <OTPInput
      data-slot="input-otp"
      // A prop 'className' de OTPInputPrimitiveProps é usada para o elemento <input> real.
      // Você pode querer aplicá-la ao container ou ao input, dependendo da sua necessidade.
      // Mudei para aplicar 'className' ao OTPInput diretamente, e 'containerClassName' ao container.
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)} // Aplica ao input real
      {...props}
    />
  );
}

// 2. Tipagem para InputOTPGroup
interface InputOTPGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function InputOTPGroup({ className, ...props }: InputOTPGroupProps) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

// 3. Tipagem para InputOTPSlot
interface InputOTPSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  className?: string;
}

function InputOTPSlot({ index, className, ...props }: InputOTPSlotProps) {
  // Acessa o contexto com segurança, garantindo que não seja null/undefined
  const inputOTPContext = React.useContext(OTPInputContext) as
    | CustomOTPInputContextValue
    | undefined;

  // Usa optional chaining e nullish coalescing para acessar `slots[index]` com segurança
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots?.[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

// 4. Tipagem para InputOTPSeparator
interface InputOTPSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

function InputOTPSeparator({ ...props }: InputOTPSeparatorProps) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };