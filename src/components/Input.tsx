// components/Input.js
import React, { InputHTMLAttributes } from "react";

const inputStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ value, onChange, placeholder, style }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{...inputStyle,...style}}
    />
  );
};
