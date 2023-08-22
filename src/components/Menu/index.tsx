import React, {
  ReactNode,
  CSSProperties,
  useEffect,
  useState,
  useRef,
} from 'react';
import {
  ExtendedCSSProperties,
  useInteractiveStyles,
} from '../../utils/useInteractiveStyles';
import {
  MenuButtonContainer,
  MenuContainer,
  MenuDividerContainer,
  MenuItemContainer,
  MenuListContainer,
} from './styles';

interface MenuProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RippleProps {
  left: number;
  top: number;
  diameter: number;
}

interface MenuListProps extends ExtendedCSSProperties {
  forPosition?: 'left' | 'right' | 'center';
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuItemProps {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
  rippleAnimation?: boolean;
}

export const Menu = ({ children, ...rest }: MenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const clonedChildren = React.Children.map(children, child => {
    if (React.isValidElement<MenuItemProps>(child)) {
      return React.cloneElement(child, {
        isOpen,
        setIsOpen,
      });
    }
    return child;
  });

  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <MenuContainer ref={menuRef} style={combinedStyles} {...eventHandlers}>
      <div style={beforeStyles} />
      {clonedChildren}
      <div style={afterStyles} />
    </MenuContainer>
  );
};

export const MenuButton = ({
  children,
  isOpen,
  setIsOpen,
  ...rest
}: MenuProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    setIsOpen && setIsOpen(!isOpen);
  };

  const showRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
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
    rippleElement.style.borderRadius = '1000px';
    rippleElement.style.pointerEvents = 'none';
    rippleElement.style.position = 'absolute';
    rippleElement.style.top = ripple.top + 'px';
    rippleElement.style.left = ripple.left + 'px';
    rippleElement.style.transform = 'scale(0)';
    rippleElement.style.transition = 'transform 1s ease, opacity 0.6s ease';
    rippleElement.style.background = 'rgba(255, 255, 255, 0.3)';

    button.appendChild(rippleElement);

    setTimeout(() => {
      if (rippleElement) {
        rippleElement.style.transform = 'scale(1.4)';
      }
    }, 10);

    const removeRipple = () => {
      if (rippleElement && button.contains(rippleElement)) {
        if (rippleElement) {
          rippleElement.style.opacity = '0';
          setTimeout(() => {
            if (rippleElement && rippleElement.parentElement === button) {
              button.removeChild(rippleElement);
            }
          }, 400);
        }
      }
    };

    button.addEventListener('pointerup', removeRipple, { once: true });
    button.addEventListener('pointerout', removeRipple, { once: true });
  };

  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <MenuButtonContainer
      ref={buttonRef}
      aria-label="Options"
      onClick={handleOpen}
      style={combinedStyles}
      onMouseDown={showRipple}
      {...eventHandlers}
    >
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </MenuButtonContainer>
  );
};

export const MenuList = ({
  children,
  isOpen,
  forPosition = 'center',
  ...rest
}: MenuListProps) => {
  const [combinedStyles, { beforeStyles, afterStyles }] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  const getPositionStyles = () => {
    if (forPosition === 'left') {
      return { left: 0 };
    } else if (forPosition === 'right') {
      return { right: 0 };
    } else {
      return { left: '50%', transform: 'translateX(-50%)' };
    }
  };

  const positionStyles = getPositionStyles();

  return (
    <MenuListContainer isOpen={isOpen} forPosition={forPosition} style={{ ...combinedStyles, ...positionStyles }}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </MenuListContainer>
  );
};

export const MenuItem = ({ children, ...rest }: MenuProps) => {
  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <MenuItemContainer style={combinedStyles} {...eventHandlers}>
      {' '}
      <div style={beforeStyles} />
      {children} <div style={afterStyles} />
    </MenuItemContainer>
  );
};

export const MenuDivider = ({ children, ...rest }: MenuProps) => {
  const [combinedStyles] = useInteractiveStyles({
    baseStyles: rest,
  });

  return <MenuDividerContainer style={combinedStyles} />;
};
