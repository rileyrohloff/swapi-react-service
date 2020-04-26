import React from 'react';
import { StyledSpinner } from './styled'

const LoadingSpinner = () => (
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="15"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);


export default LoadingSpinner;