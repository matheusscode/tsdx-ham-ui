import React, {
  ReactNode,
  CSSProperties,
  InputHTMLAttributes,
  useState,
  useRef,
  useEffect,
} from 'react';
import {
  ExtendedCSSProperties,
  useInteractiveStyles,
} from '../../utils/useInteractiveStyles';

interface InputProps extends ExtendedCSSProperties {
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _focus?: CSSProperties;
  _active?: CSSProperties;
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
}

interface InputElementProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _focus?: CSSProperties;
  _active?: CSSProperties;
}

interface InputGroupProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _focus?: CSSProperties;
  _active?: CSSProperties;
  groupDirection?: 'row' | 'column';
}

export const Input = ({
  variant,
  backgroundColor,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const baseStylesWithDefault: CSSProperties = {
    fontFamily: 'sans-serif',
    fontWeight: 500,
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: 'transparent',
    width: '100%',
    ...rest,
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const backgroundColorStyle = backgroundColor
    ? { backgroundColor: backgroundColor }
    : {};

  const [combinedStyles, { eventHandlers }] = useInteractiveStyles({
    baseStyles: {
      ...baseStylesWithDefault,
      ...backgroundColorStyle,
    },
  });

  const inputOutlineStyle: CSSProperties = {
    outline: 'none',
    border: isFocused ? '2px solid #0051ff' : '2px solid #cccccc65',
    borderRadius: '8px',
    color: '#8592a6',
    padding: '0.5rem 1rem',
    fontSize: '16px',
    transition: 'all 0.4s ease',
    ...rest,
  };

  const inputFilledStyle: CSSProperties = {
    backgroundColor: isFocused ? '#ffffff' : '#e2e8f0',
    color: '#8592a6',
    outline: 'none',
    border: isFocused ? '2px solid #0051ff' : '2px solid #e2e8f0',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
    fontSize: '16px',
    transition: 'all 0.4s ease',
    ...rest,
  };

  const inputFlushedStyle: CSSProperties = {
    outline: 'none',
    border: 'none',
    borderRadius: 0,
    borderBottom: isFocused ? '2px solid #0051ff' : '2px solid #e2e8f0',
    color: '#8592a6',
    padding: '0.5rem 1rem',
    transition: 'all 0.4s ease',
    fontSize: '16px',
    ...rest,
  };

  const inputUnstyledStyle: CSSProperties = {
    border: 'none',
    borderBottom: 'none',
    outline: 'none',
    borderRadius: 0,
    color: '#8592a6',
    padding: '0.5rem 1rem',
    fontSize: '16px',
    ...rest,
  };

  let inputStyle: CSSProperties = {
    ...combinedStyles,
  };

  switch (variant) {
    case 'outline':
      inputStyle = {
        ...inputStyle,
        ...inputOutlineStyle,
      };

      break;
    case 'filled':
      inputStyle = {
        ...inputStyle,
        ...inputFilledStyle,
      };

      break;
    case 'flushed':
      inputStyle = {
        ...inputStyle,
        ...inputFlushedStyle,
      };

      break;
    case 'unstyled':
      inputStyle = {
        ...inputStyle,
        ...inputUnstyledStyle,
      };

      break;
    default:
  }

  return (
    <input
      ref={inputRef}
      type="text"
      onClick={() => setIsFocused(true)}
      onBlur={() => setIsFocused(true)}
      style={inputStyle}
      {...eventHandlers}
      {...rest}
    />
  );
};

export const InputGroup = ({
  children,
  groupDirection = 'column',
  ...rest
}: InputGroupProps) => {
  const baseStylesWithDefault: CSSProperties = {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    flexDirection: groupDirection,
    width: '100%',
    position: 'relative',
    ...rest,
  };
  const [combinedStyles, { eventHandlers }] = useInteractiveStyles({
    baseStyles: {
      ...baseStylesWithDefault,
    },
  });

  return (
    <div style={combinedStyles} {...eventHandlers} {...rest}>
      {children}
    </div>
  );
};

export const InputLabel = ({ children, ...rest }: InputElementProps) => {
  const baseStylesWithDefault: CSSProperties = {
    fontSize: '1rem',
    fontWeight: 500,
    color: '#5a5f68',
    textAlign: 'left',
    padding: '0.7rem 0.2rem',
    fontFamily: 'sans-serif',
    ...rest,
  };
  const [combinedStyles, { eventHandlers }] = useInteractiveStyles({
    baseStyles: {
      ...baseStylesWithDefault,
    },
  });

  return (
    <label style={combinedStyles} {...eventHandlers} {...rest}>
      {children}
    </label>
  );
};
