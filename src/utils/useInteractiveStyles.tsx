import { CSSProperties, useState } from "react";

export interface ExtendedCSSProperties extends CSSProperties {
  _hover?: CSSProperties;
  _focus?: CSSProperties;
  _active?: CSSProperties;
}

export interface useInteractiveStylesProps {
  baseStyles: ExtendedCSSProperties;
  beforeStyles?: ExtendedCSSProperties & { _hover?: ExtendedCSSProperties };
  afterStyles?: ExtendedCSSProperties & { _hover?: ExtendedCSSProperties };
}

export function useInteractiveStyles(
  styles: useInteractiveStylesProps
): [CSSProperties, any] {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  const combinedStyles = {
    ...styles.baseStyles,
    ...(isHovered && styles.baseStyles._hover),
    ...(isFocused && styles.baseStyles._focus),
    ...(isActive && styles.baseStyles._active),
  };

  const beforeStyles = {
    ...styles.beforeStyles,
    ...(isHovered && (styles.beforeStyles?._hover as ExtendedCSSProperties)),
  };

  const afterStyles = {
    ...styles.afterStyles,
    ...(isHovered && (styles.afterStyles?._hover as ExtendedCSSProperties)),
  };

  const eventHandlers = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  };

  return [combinedStyles, { beforeStyles, afterStyles, eventHandlers }];
}
