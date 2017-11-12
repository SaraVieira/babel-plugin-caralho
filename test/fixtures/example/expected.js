import React from 'react';
import styled from 'style-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip !important;
`;

render(<Wrapper>
    <Title>Hello World, this is my !caralho styled component!</Title>
  </Wrapper>);
