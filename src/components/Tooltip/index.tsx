import React from 'react';
import { useInteractiveStyles } from '../../utils/useInteractiveStyles';
import { TooltipProps } from './types';
import {
  TooltipBottom,
  TooltipContainer,
  TooltipContent,
  TooltipLeft,
  TooltipTop,
} from './styles';

export const Tooltip = ({
  children,
  text,
  colorScheme = '#000000',
  forPosition = 'bottom',
  ...rest
}: TooltipProps) => {
  const [combinedStyles] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <TooltipContainer style={combinedStyles}>
      {children}
      {forPosition === 'top' && (
        <TooltipTop>
          <TooltipContent className="tooltip-content">{text}</TooltipContent>
        </TooltipTop>
      )}
      {forPosition === 'bottom' && (
        <TooltipBottom>
          <TooltipContent className="tooltip-content">{text}</TooltipContent>
        </TooltipBottom>
      )}
      {forPosition === 'left' && (
        <TooltipLeft>
          <TooltipContent className="tooltip-content">{text}</TooltipContent>
        </TooltipLeft>
      )}
      {forPosition === 'right' && (
        <TooltipContent>
          <TooltipContent className="tooltip-content">{text}</TooltipContent>
        </TooltipContent>
      )}
    </TooltipContainer>
  );
};

export default Tooltip;
