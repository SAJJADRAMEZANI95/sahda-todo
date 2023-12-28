import { ButtonHTMLAttributes } from "react";

const buttonStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "12px",
  fontWeight: "bold",
  letterSpacing: "1px",
  color: "#ffffff",
  backgroundColor: "#3498db",
  border: "none",
  padding: "6px 14px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: "#2980b9",
  },
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ style, ...restProps }: ButtonProps) {
  return <button style={{ ...buttonStyle, ...style }} {...restProps} />;
}
