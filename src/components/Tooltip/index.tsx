import "./Tooltip.css"
import React, { ReactNode, CSSProperties, useState } from "react";
import {
  useInteractiveStyles,
  ExtendedCSSProperties,
} from "../../utils/useInteractiveStyles";

interface TooltipProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
  forPosition?: "top" | "bottom" | "left" | "right";
  text: string;
  colorScheme?: string;
}

export const Tooltip = ({
  children,
  text,
  colorScheme = "#000000",
  forPosition = "bottom",
  ...rest
}: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const tooltipClass = `tooltip-content tooltip-position-${
    forPosition || "bottom"
  }`;

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: rest,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  const tooltipStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    margin: "10px",
    padding: "1rem",

    ...rest,
  };

  const tooltipContentStyle: React.CSSProperties = {
    position: "absolute",
    padding: "0.4rem",
    borderRadius: "6px",
    backgroundColor: colorScheme,
    color: "#fff",
    opacity: isHovered ? "1" : "0",
    fontSize: "1rem",
    zIndex: 1,
    width: "100%",
    minWidth: "140px",
    textAlign: "center",
    transition: "all 0.4s ease",
    ...combinedStyles,
  };

  const triangleStyle: React.CSSProperties = {
    content: "",
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
    transform: "transform(-50%, -50%)",
    zIndex: 2,
    ...combinedStyles,
  };

  switch (forPosition) {
    case "top":
      tooltipContentStyle.bottom = "100%";
      tooltipContentStyle.left = "50%";
      tooltipContentStyle.transform = "translateX(-50%)";
      triangleStyle.bottom = "-8px";
      triangleStyle.left = "45%";
      triangleStyle.borderWidth = "8px 8px 0";
      triangleStyle.borderColor = `${colorScheme} transparent transparent transparent`;
      break;
    case "bottom":
      tooltipContentStyle.top = "100%";
      tooltipContentStyle.left = "50%";
      tooltipContentStyle.transform = "translateX(-50%)";
      triangleStyle.top = "-8px";
      triangleStyle.left = "45%";
      triangleStyle.borderWidth = "0 8px 8px";
      triangleStyle.borderColor = `transparent transparent ${colorScheme}  transparent`;
      break;
    case "left":
      tooltipContentStyle.top = "50%";
      tooltipContentStyle.right = "100%";
      tooltipContentStyle.transform = "translateY(-50%)";
      triangleStyle.top = "26%";
      triangleStyle.right = "-8px";
      triangleStyle.borderWidth = "8px 0 8px 8px";
      triangleStyle.borderColor = `transparent transparent transparent ${colorScheme}`;
      break;
    case "right":
      tooltipContentStyle.top = "50%";
      tooltipContentStyle.left = "100%";
      tooltipContentStyle.transform = "translateY(-50%)";
      triangleStyle.top = "26%";
      triangleStyle.left = "-8px";
      triangleStyle.borderWidth = "8px 8px 8px 0";
      triangleStyle.borderColor = `transparent ${colorScheme} transparent transparent`;
      break;
    default:
      break;
  }

  return (
    <div
      className="tooltip-container"
      style={tooltipStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...eventHandlers}
    >
      <div style={beforeStyles} />
      {children}
      <div className={tooltipClass} style={tooltipContentStyle}>
        {text}
        <span className="tooltip-triangle" style={triangleStyle}></span>
      </div>
      <div style={afterStyles} />
    </div>
  );
};

export default Tooltip;
