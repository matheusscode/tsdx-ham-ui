import React from 'react';
import { useInteractiveStyles } from '../../utils/useInteractiveStyles';
import { InputElementProps, InputGroupProps, InputProps } from './types';
import { GroupContainer, InputContainer, LabelContainer } from './styles';

export const Input = ({
  variant,
  backgroundColor,
  ...rest
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {


  return (
    <InputContainer  type="text" variant={variant} {...rest} />
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
