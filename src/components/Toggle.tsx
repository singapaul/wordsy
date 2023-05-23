import React from "react";

// @ts-ignore
const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
