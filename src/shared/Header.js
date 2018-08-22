import React from 'react';

import Plus from 'react-feather/dist/icons/plus';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 50px;
  background-color: #0770cd;
  color: white;

  display: flex;
  align-items: center;

  padding: 16px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;

  h1 {
    font-size: 2em;
    font-style: italic;
    opacity: .9;
  }

  svg {
    margin-left: auto;
  }
`

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <h1>PC Master Race</h1>
        <Plus size={22} />
      </StyledHeader>
    )
  }
}

export default Header;
