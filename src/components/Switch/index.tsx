import React, { useState, CSSProperties, InputHTMLAttributes } from 'react';
import { useInteractiveStyles } from '../../utils/useInteractiveStyles';
import { SwitchProps } from './types';

export const Switch = ({
  onToggle,
  defaultChecked,
  colorScheme = '#40962b',
  switchSize,
  ...rest
}: SwitchProps & InputHTMLAttributes<HTMLInputElement>) => {
  const [isChecked, setIsChecked] = useState(defaultChecked || false);

  const [combinedStyles] = useInteractiveStyles({
    baseStyles: rest,
  });

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onToggle && onToggle(newCheckedState);
  };

  const getSizeStyles = () => {
    switch (switchSize) {
      case 'sm':
        return {
          '--switch-width': '38px',
          '--switch-height': '23px',
          '--ball-size': '16px',
        };
      case 'md':
        return {
          '--switch-width': '44px',
          '--switch-height': '23px',
          '--ball-size': '16px',
        };
      case 'lg':
        return {
          '--switch-width': '46px',
          '--switch-height': '23px',
          '--ball-size': '16px',
        };
      case 'xl':
        return {
          '--switch-width': '50px',
          '--switch-height': '26px',
          '--ball-size': '20px',
        };
      default:
        return {
          '--switch-width': '44px',
          '--switch-height': '23px',
          '--ball-size': '16px',
        };
    }
  };

  const combinedStylesWithSize = {
    ...combinedStyles,
    ...getSizeStyles(),
  };

  const switchStyles: CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    width: 'var(--switch-width, 40px)',
    height: 'var(--switch-height, 20px)',
    ...(combinedStylesWithSize as any),
  };

  const sliderStyles: CSSProperties = {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ccc',
    borderRadius: '20px',
    transition: 'background-color 0.3s',
  };

  const sliderBeforeStyles: CSSProperties = {
    position: 'absolute',
    content: '',
    height: 'var(--ball-size, 16px)',
    width: 'var(--ball-size, 16px)',
    left: isChecked ? '0px' : '3px',
    bottom: '3px',
    backgroundColor: 'white',
    borderRadius: '50%',
    transition: 'transform 0.3s, background 0.3s, border-radius 0.3s',
    background: '#ffffff',
  };

  if (isChecked) {
    sliderStyles.backgroundColor = colorScheme;
    sliderBeforeStyles.transform =
      'translateX(calc(var(--switch-width) - var(--ball-size, 16px) - 3px))';
  } else {
    sliderBeforeStyles.transform = 'translateX(0)';
  }

  return (
    <label style={switchStyles}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        style={{ opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span style={sliderStyles}>
        <span style={sliderBeforeStyles}></span>
      </span>
    </label>
  );
};
