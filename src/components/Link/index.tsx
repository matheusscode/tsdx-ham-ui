import React, {
  CSSProperties,
  ReactNode,
  ComponentType,
  useState,
} from 'react';
import {
  useInteractiveStyles,
  ExtendedCSSProperties,
} from '../../utils/useInteractiveStyles';

type ComponentWithToProp = ComponentType<{ to: string }>;

interface LinkProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
  as?: ComponentWithToProp | 'a';
  to?: string;
}

export const Link = ({ children, as: Component = 'a', ...rest }: LinkProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const baseStylesWithDefault: CSSProperties = {
    fontSize: '1rem',
    fontWeight: 500,
    color: '#5a5f68',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
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

  const commonProps = {
    style: combinedStyles,
    ...eventHandlers,
    ...rest,
  };

  if (Component === 'a') {
    return (
      <a
        href={rest.to}
        {...commonProps}
        style={{ textDecoration: isHovered ? 'underline' : 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={beforeStyles} />
        {children}
        <div style={afterStyles} />
      </a>
    );
  } else if (React.isValidElement(Component)) {
    const ComponentWithProps = Component as ComponentType<any>; // Adjust the type here
    return (
      <ComponentWithProps
        to={rest.to}
        {...commonProps}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={beforeStyles} />
        <span style={{ textDecoration: isHovered ? 'underline' : 'none' }}>
          {children}
        </span>
        <div style={afterStyles} />
      </ComponentWithProps>
    );
  } else {
    return null; // Invalid 'as' prop provided
  }
};
