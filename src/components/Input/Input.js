import React from "react";

const Input = ({ field, value, onChange }) => (
  <input
    value={value}
    onChange={({ target: { value } }) => onChange({ value, field })}
  />
);

export default Input;
