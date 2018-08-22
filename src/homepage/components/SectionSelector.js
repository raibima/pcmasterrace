import React, { Component } from 'react';

import ChevronDown from 'react-feather/dist/icons/chevron-down';
import Section from '../sections';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  padding: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  width: 100%;
  background-color: white;
  z-index: 1;

  svg {
    margin-left: 2px;
  }
`;

const Select = styled.select`
  appearance: none;
  border: none;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: .8px;
  outline: none;
  text-transform: uppercase;
`;

class SectionSelector extends Component {
  render() {
    const { section } = this.props;

    return (
      <Container>
        <Select value={section} onChange={this.props.onChange}>
          {Object.entries(Section).map(([key, section]) => (
            <option key={key} value={key}>
              {section.title}
            </option>
          ))}
        </Select>
        <ChevronDown size={18} />
      </Container>
    );
  }
}

export default SectionSelector;
