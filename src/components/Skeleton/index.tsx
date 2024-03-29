import React, { useEffect, useRef, useState } from 'react';
import { useInteractiveStyles } from '../../utils/useInteractiveStyles';
import { StyledSkeleton } from './Skeleton';
import { SkeletonProps } from './types';

export const Skeleton = ({
  isLoading: externalIsLoading,
  children,
  ...rest
}: SkeletonProps) => {
  const skeletonRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(
      typeof externalIsLoading === 'undefined' ? true : externalIsLoading
    );
  }, [externalIsLoading]);

  useEffect(() => {
    const contentLoadedTimeout = setTimeout(() => {
      setIsContentLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(contentLoadedTimeout);
    };
  }, []);

  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <StyledSkeleton
      style={combinedStyles}
      className={`${isLoading ? 'loading' : ''}${
        isContentLoaded ? 'content-loaded' : ''
      }`}
      ref={skeletonRef}
      {...rest}
      {...eventHandlers}
    >
      <div className="skeleton-content">
        <div style={beforeStyles} />
        {children}
        <div style={afterStyles} />
      </div>
    </StyledSkeleton>
  );
};

export default Skeleton;
