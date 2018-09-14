import React from "react";

const Button = ({ onClick, text, style }) => (
  <button onClick={onClick} style={style || {}}>
    {text}
  </button>
);

export default Button;
