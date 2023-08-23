import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import { useInteractiveStyles } from '../../utils/useInteractiveStyles';
import  { InputElementProps, InputGroupProps, InputProps } from './types';
import { GroupContainer,InputContainer, LabelContainer } from "./styles"

export const Input = ({
  variant,
  backgroundColor,
  ...rest
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <InputContainer
      ref={inputRef}
      type="text"
      onClick={() => setIsFocused(true)}
      onBlur={() => setIsFocused(true)}
      isFocused={isFocused}
      variant={variant}
      {...rest}
    />
  );
};

export const InputGroup = ({
  children,
  groupDirection = 'column',
  ...rest
}: InputGroupProps) => {
  const [combinedStyles, { eventHandlers }] = useInteractiveStyles({
    baseStyles: {
      ...rest,
    },
  });

  return (
    <GroupContainer style={combinedStyles} {...eventHandlers} {...rest}>
      {children}
    </GroupContainer>
  );
};

export const InputLabel = ({ children, ...rest }: InputElementProps) => {
  const [combinedStyles, { eventHandlers }] = useInteractiveStyles({
    baseStyles: {
      ...rest,
    },
  });

  return (
    <LabelContainer style={combinedStyles} {...eventHandlers} {...rest}>
      {children}
    </LabelContainer>
  );
};
