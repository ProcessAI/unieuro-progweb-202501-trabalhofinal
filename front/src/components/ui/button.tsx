import React, { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props;
  return <button className={`btn ${className || ''}`} {...rest}>{props.children}</button>;
}

