import React from 'react';

import getRenderedComponent from './utils/getRenderedComponent';
import isValidSection from './utils/isValidSection';
import Layout from '../shared/Layout';
import memoize from 'lodash.memoize';
import SectionSelector from './components/SectionSelector';
import styled from 'styled-components';

import { AccioCacheProvider } from 'react-accio';
import { parse } from 'query-string';
import { Redirect } from 'react-router-dom';

const RenderTarget = styled.div`
  padding: 60px 0 8px;
`;

const parseQueryString = memoize(parse);

class Homepage extends React.Component {
  getQueryStrings = () => {
    const { location } = this.props;
    return parseQueryString(location.search);
  };

  handleSectionChange = e => {
    const { history } = this.props;
    history.push(`/?s=${e.target.value}`);
  };

  render() {
    const qs = this.getQueryStrings();
    const section = qs.s;

    // redirect if section is invalid
    if (!isValidSection(section)) {
      const { location } = this.props;
      return (
        <Redirect
          to={{
            pathname: '/',
            search: '?s=recommended',
            state: location.state,
          }}
        />
      );
    }

    // section is valid
    const RenderedComponent = getRenderedComponent(section);
    return (
      <Layout>
        <SectionSelector
          section={section}
          onChange={this.handleSectionChange}
        />
        <AccioCacheProvider>
          <RenderTarget>
            <RenderedComponent />
          </RenderTarget>
        </AccioCacheProvider>
      </Layout>
    );
  }
}

export default Homepage;
