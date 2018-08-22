import React, { Component } from 'react';

import PCBuildCard from './PCBuildCard';
import RawSpinner from '../../shared/Spinner';
import styled from 'styled-components';

import { Accio } from 'react-accio';

const ListView = styled.div`
  > *:not(:first-child) {
    margin-top: 8px;
  }
`;

const Spinner = styled(RawSpinner)`
  margin-top: 16px;
`;

class Recommended extends Component {
  render() {
    return (
      <ListView>
        <Accio url="/api/builds/recommended" timeout={300}>
          {({ loading, response }) => (
            <React.Fragment>
              {loading && <Spinner center />}
              {response &&
                response.map((build, index) => <PCBuildCard key={index} {...build} />)}
            </React.Fragment>
          )}
        </Accio>
      </ListView>
    );
  }
}

export default Recommended;
