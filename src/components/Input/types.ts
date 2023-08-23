import { ReactNode, CSSProperties } from 'react';
import { ExtendedCSSProperties } from '../../utils/useInteractiveStyles';

export interface InputProps extends ExtendedCSSProperties {
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _focus?: CSSProperties;
  _active?: CSSProperties;
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
}

export interface InputElementProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _focus?: CSSProperties;
  _active?: CSSProperties;
}

export interface InputGroupProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _focus?: CSSProperties;
  _active?: CSSProperties;
  groupDirection?: 'row' | 'column';
}
