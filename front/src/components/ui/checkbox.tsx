import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

export function Checkbox({ onCheckedChange, className, ...rest }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={`checkbox ${className || ''}`}
      {...rest}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
    />
  );
}

