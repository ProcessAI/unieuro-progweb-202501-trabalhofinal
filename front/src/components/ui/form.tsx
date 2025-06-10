"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  ControllerProps,
  FieldPath,
  FieldValues,
  FieldError,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

// Define um tipo genérico para as props do formulário, que pode ser inferido ou especificado
type FormProps<TFieldValues extends FieldValues = FieldValues> =
  React.ComponentProps<typeof FormProvider<TFieldValues>>;

// FormProvider é tipado para aceitar um tipo genérico
const Form = FormProvider as (<TFieldValues extends FieldValues>(
  props: FormProps<TFieldValues>
) => React.ReactElement);

// Contexto para o FormField, para passar o 'name' para useFormField
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue | undefined>(undefined);

// Contexto para o FormItem, para passar o 'id'
interface FormItemContextValue {
  id: string;
}

const FormItemContext = React.createContext<FormItemContextValue | undefined>(undefined);

// --- FormField Component ---
interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<ControllerProps<TFieldValues, TName>, "render"> { // Omitimos 'render' aqui para que possamos defini-lo internamente
  // 'children' agora pode ser um ReactNode ou uma função que retorna um ReactNode
  // Mas a função render do Controller exige um ReactElement.
  // Vamos garantir que a função retorne um ReactElement ou que o children passado seja um ReactElement
  children:
    | React.ReactElement // Aceita um elemento direto
    | ((
        field: ControllerRenderProps<TFieldValues, TName>,
        fieldState: ControllerFieldState,
        formState: UseFormStateReturn<TFieldValues>
      ) => React.ReactElement); // Função deve retornar um ReactElement
}

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  children,
  ...props
}: FormFieldProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller
        {...props}
        render={({ field, fieldState, formState }) => {
          if (typeof children === "function") {
            // Se 'children' é uma função, ela deve retornar um ReactElement
            return children(field, fieldState, formState);
          }
          // Se 'children' é um elemento, clonamos e passamos as props do campo
          // É importante que 'children' aqui seja garantidamente um ReactElement
          // Se houver chance de ser null, undefined, string ou número, isso falharia.
          // Para ser mais robusto, você pode adicionar uma verificação:
          if (!React.isValidElement(children)) {
            console.error("FormField children must be a ReactElement or a function returning one.");
            return null; // Ou jogue um erro
          }
          return React.cloneElement(children, { ...field });
        }}
      />
    </FormFieldContext.Provider>
  );
};

// --- useFormField Hook ---
// Agora é um hook genérico, recebendo os tipos para inferência
const useFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(): {
  id: string;
  name: TName; // TName agora é corretamente inferido/passado
  formItemId: string;
  formDescriptionId: string;
  formMessageId: string;
  error?: FieldError;
  isDirty: boolean;
  isTouched: boolean;
  isValidating: boolean;
} => {
  const fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue<TFieldValues, TName> | undefined;
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, control } = useFormContext<TFieldValues>(); // Tipar useFormContext

  if (!fieldContext?.name) {
    throw new Error("useFormField should be used within <FormField>");
  }

  if (!itemContext?.id) {
    throw new Error("useFormField should be used within <FormItem>");
  }

  const { id } = itemContext;
  const fieldName = fieldContext.name; // Já é TName

  // useFormState para obter o estado do campo específico, otimizado para re-render
  const { errors, dirtyFields, touchedFields, isValidating } = useFormState({
    control,
    name: fieldName,
  });

  // getFieldState é melhor para obter o estado sem acionar re-renderizações adicionais
  // O segundo argumento de getFieldState agora aceita FormState
  const fieldState = getFieldState(fieldName, control._formState); // Acessa o estado interno para o mais recente

  return {
    id,
    name: fieldName, // TName já está correto aqui
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    error: fieldState.error,
    isDirty: fieldState.isDirty,
    isTouched: fieldState.isTouched,
    isValidating: fieldState.isValidating,
  };
};

// --- FormItem Component ---
interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function FormItem({ className, ...props }: FormItemProps) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}

// --- FormLabel Component ---
interface FormLabelProps extends React.ComponentPropsWithoutRef<typeof Label> {
  className?: string;
}

const FormLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  FormLabelProps
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField(); // Aqui useFormField está usando a tipagem correta

  return (
    <Label
      ref={ref}
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

// --- FormControl Component ---
interface FormControlProps extends React.ComponentPropsWithoutRef<typeof Slot> {
  // 'children' já é tipado pela Slot, então não precisa explicitar aqui a menos que queira restringir.
}

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>, // O ref pode ser para qualquer elemento que o Slot renderize
  FormControlProps
>(({ ...props }, ref) => {
  // As variáveis aqui serão usadas, resolvendo o aviso 6198
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? formDescriptionId
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

// --- FormDescription Component ---
interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

// --- FormMessage Component ---
interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children?: React.ReactNode;
}

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  FormMessageProps
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};