import React, { HTMLAttributes } from "react";

const listTitleStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  color: "#666666",
  marginBottom: "5px",
};

type ListItemProps = HTMLAttributes<HTMLLIElement>;

export const ListTitle: React.FC<ListItemProps> = ({ style, ...restProps }) => {
  return <li style={{ ...listTitleStyle, ...style }} {...restProps} />;
};
