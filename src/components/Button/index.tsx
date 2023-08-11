import React, {
  MouseEvent,
  ReactNode,
  useRef,
  CSSProperties,
  ButtonHTMLAttributes,
} from 'react';

import {
  ExtendedCSSProperties,
  useInteractiveStyles,
} from '../../utils/useInteractiveStyles';

interface RippleProps {
  left: number;
  top: number;
  diameter: number;
}

interface ButtonProps extends ExtendedCSSProperties {
  children?: ReactNode;
  onClick?: () => void;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

export const Button = ({
  children,
  onClick,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const baseStylesWithDefault: CSSProperties = {
    overflow: 'hidden',
    position: 'relative',
    padding: '0.6rem 1rem',
    border: 'none',
    outline: 'none',
    borderRadius: '4px',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.16)',
    cursor: 'pointer',
    fontWeight: 600,
    color: '#575656',
    backgroundColor: '#f5f5f5',
    fontSize: '0.9rem',
    ...rest,
  };

  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: baseStylesWithDefault,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  const showRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const { left, top } = button.getBoundingClientRect();
    const { clientX, clientY } = event;

    const diameter = Math.max(button.offsetWidth, button.offsetHeight) * 1.5;
    const radius = diameter / 2;

    const ripple: RippleProps = {
      left: clientX - left - radius,
      top: clientY - top - radius,
      diameter,
    };

    let rippleElement: HTMLSpanElement | null = document.createElement('span');

    rippleElement.className = 'ripple';
    rippleElement.style.height = rippleElement.style.width = diameter + 'px';
    rippleElement.style.borderRadius = '50%';
    rippleElement.style.pointerEvents = 'none';
    rippleElement.style.position = 'absolute';
    rippleElement.style.top = ripple.top + 'px';
    rippleElement.style.left = ripple.left + 'px';
    rippleElement.style.transform = 'scale(0)';
    rippleElement.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
    rippleElement.style.background = 'rgba(255, 255, 255, 0.3)';

    button.appendChild(rippleElement);

    setTimeout(() => {
      if (rippleElement) {
        rippleElement.style.transform = 'scale(1.2)';
        rippleElement.style.opacity = '0';
      }
    }, 10);

    setTimeout(() => {
      if (rippleElement && rippleElement.parentElement === button) {
        button.removeChild(rippleElement);
      }
    }, 600);
  };

  return (
    <button
      ref={buttonRef}
      aria-label="Options"
      onClick={e => {
        if (onClick) onClick(e);
        showRipple(e);
      }}
      style={combinedStyles}
      {...rest}
      {...eventHandlers}
    >
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </button>
  );
};

export default Button;
