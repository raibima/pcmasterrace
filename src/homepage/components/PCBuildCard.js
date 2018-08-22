import React from 'react';

import Check from 'react-feather/dist/icons/check';
import More from 'react-feather/dist/icons/more-vertical';
import styled from 'styled-components';
import truncate from '../../shared/truncateString';

const Container = styled.div`
  height: 180px;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 2px;
  background-color: white;
  position: relative;

  display: flex;

  img {
    display: block;
    width: 94px;
    height: 100%;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
`;

const Content = styled.div`
  flex: 1;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
`;

const General = styled.div`
  padding: 8px 40px 8px 8px;
`;

const Title = styled.div`
  font-weight: bold;
  color: hsl(0, 0%, 13%);
`;

const Description = styled.div`
  margin-top: 2px;
  color: hsl(0, 0%, 29%);
`;

const Ancillary = styled.div`
  color: hsl(0, 0%, 45%);
  margin-top: 2px;
  background-color: hsl(0, 0%, 97%);
  padding: 8px;
  border-bottom-right-radius: inherit;
  flex: 1;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.9em;
    line-height: 1.75em;
    margin-left: 4px;
  }
`;

const StyledMore = styled(More)`
  position: absolute;
  top: 8px;
  right: 0;
`;

class PCBuildCard extends React.Component {
  render() {
    return (
      <Container>
        <img src={this.props.thumbnail} alt="thumbnail" />
        <Content>
          <General>
            <Title>{this.props.title}</Title>
            <Description>{truncate(this.props.description)}</Description>
          </General>
          <Ancillary>
            {this.props.features.map(feature => (
              <Feature key={feature}>
                <Check size={14} color="#00A651" />
                <span>{feature}</span>
              </Feature>
            ))}
          </Ancillary>
        </Content>
        <StyledMore size={20} />
      </Container>
    );
  }
}

export default PCBuildCard;
