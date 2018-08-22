import React from 'react';

import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span`
  animation: ${spin} 1250ms infinite linear;
  border: 5px solid #0770cd;
  border-right-color: transparent;
  border-radius: 16px;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  overflow: hidden;
  text-indent: -9999px;
  width: 32px;
  height: 32px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

function Wrapper({ center, children, ...props }) {
  if (center) {
    return <Center {...props}><Spinner /></Center>
  }
  return <Spinner {...props} />
}

export default Wrapper;