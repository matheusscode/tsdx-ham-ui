// CardStyles.js
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

export const CardHeaderContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 10px 10px 0 0;
`;

export const CardBodyContainer = styled.div`
  display: flex;
  padding: 1rem;
`;

export const CardFooterContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 0 0 10px 10px;
`;
