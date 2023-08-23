import { ReactNode, CSSProperties } from 'react';
import { ExtendedCSSProperties } from '../../utils/useInteractiveStyles';

export interface MenuProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RippleProps {
  left: number;
  top: number;
  diameter: number;
}

export interface MenuListProps extends ExtendedCSSProperties {
  forPosition?: 'left' | 'right' | 'center';
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuItemProps {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
  rippleAnimation?: boolean;
}
