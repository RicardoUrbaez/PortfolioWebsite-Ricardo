import React, { useState } from "react";
import ElectricBorder from "../ElectricBorder";

export default function ElectricBorderWrapper({
  children,
  className = "",
  color = "#7df9ff",
  speed = 1,
  chaos = 0.12,
  thickness = 2,
  radius = 16,
  style = {},
  enabledOnHover = true
}) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldRenderBorder = !enabledOnHover || isHovered;

  return (
    <div
      className={className}
      style={{ borderRadius: radius, ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {shouldRenderBorder ? (
        <ElectricBorder
          color={color}
          speed={speed}
          chaos={chaos}
          borderRadius={radius}
          style={{ "--eb-thickness": `${thickness}px`, borderRadius: radius }}
        >
          {children}
        </ElectricBorder>
      ) : (
        <div style={{ borderRadius: radius }}>{children}</div>
      )}
    </div>
  );
}
