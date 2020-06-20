import React from "react";

export function Field({ name, children, type = "text", ...props }) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input type={type} name={name} />
    </>
  );
}
