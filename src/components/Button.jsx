import React from "react";

const Button = ({ children, classStyle, ...props }) => {
  return (
    <button
      className={classStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
