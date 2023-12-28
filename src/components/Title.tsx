import React, { HTMLAttributes } from "react";

const titleStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#333333",
  marginBottom: "10px",
};

type TitleProps = HTMLAttributes<HTMLParagraphElement>;

export function Title({ style, ...restProps }: TitleProps) {
  
  return <p style={{ ...titleStyle, ...style }} {...restProps} />;
}
