import React from "react";
import { useInteractiveStyles } from "../../utils/useInteractiveStyles";
import { TooltipProps } from "./types";
import { TooltipBottom, TooltipContainer, TooltipContent, TooltipLeft, TooltipTop } from "./styles";

export const Tooltip = ({
  children,
  text,
  colorScheme = "#000000",
  forPosition = "bottom",
  ...rest
}: TooltipProps) => {
  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: rest,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  return (
    <TooltipContainer
      style={combinedStyles}
      {...eventHandlers}
    >
      <div style={beforeStyles}></div>
      {children}
      <div style={afterStyles} />
      {forPosition === "top" && (
        <TooltipTop>
          <TooltipContent>{text}</TooltipContent>
        </TooltipTop>
      )}
      {forPosition === "bottom" && (
        <TooltipBottom>
          <TooltipContent>{text}</TooltipContent>
        </TooltipBottom>
      )}
      {forPosition === "left" && (
        <TooltipLeft>
          <TooltipContent>{text}</TooltipContent>
        </TooltipLeft>
      )}
      {forPosition === "right" && (
        <TooltipContent>
          <TooltipContent>{text}</TooltipContent>
        </TooltipContent>
      )}
    </TooltipContainer>
  );
};

export default Tooltip;
