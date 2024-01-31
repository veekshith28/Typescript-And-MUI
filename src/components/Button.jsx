import React from "react";
import "./Button.css";
function Button({ children, href }) {
  return (
    <a href={href} className="button talk to us">
      {children}
    </a>
  );
}

export default Button;
