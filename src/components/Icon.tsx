import React from "react";
export default function Icon({ icon, className, color }) {
  return React.createElement(icon, {
    className: className,
    style: { color: color },
  });
}
