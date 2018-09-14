import React from "react";

const Input = ({ type, onChange, value, name }) => (
  <input type={type || "text"} onChange={onChange} value={value} name={name} />
);

export default Input;
