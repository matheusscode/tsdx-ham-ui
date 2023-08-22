import styled, { keyframes } from 'styled-components';

export const skeletonLoading = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

export const StyledSkeleton = styled.div`
  background-image: linear-gradient(90deg, #f0f0f0, #e4e4e4, #f0f0f0);
  background-size: 200% 100%;
  border-radius: 8px;

  &.loading {
    animation: ${skeletonLoading} 1s ease-in-out infinite;
  }

  &.content-loaded {
    background-image: none;
  }

  .skeleton-content {
    opacity: 0;
  }

  &:not(.loading) .skeleton-content {
    opacity: 1;
  }
`;
