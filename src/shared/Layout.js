import React from 'react';

import Header from './Header';
import styled from 'styled-components';

const Container = styled.div`
  padding: 50px 0 0;
`;

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>{this.props.children}</Container>
      </React.Fragment>
    );
  }
}

export default Layout;
