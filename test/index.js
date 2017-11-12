import path from 'path';
import fs from 'fs';
import assert from 'assert';
import { transform } from 'babel-core';
import plugin from '../src';
import words from 'curse-words-common';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('Changes them words', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map(caseName => {
    words.map(word => {
      it(`should change ${word}`, () => {
        const code = `
import React from 'react';
import styled from 'style-components';

const Title = styled.h1\`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
\`;

const Wrapper = styled.section\`
  padding: 4em;
  background: papayawhip !${word};
\`;

render(
  <Wrapper>
    <Title>Hello World, this is my !caralho styled component!</Title>
  </Wrapper>
);`;
        const fixtureDir = path.join(fixturesDir, caseName);

        const expected = fs
          .readFileSync(path.join(fixtureDir, 'expected.js'))
          .toString();

        assert.equal(
          trim(
            transform(code, { plugins: [['../../../src'], 'syntax-jsx'] }).code
          ),
          trim(expected)
        );
      });
    });
  });
});
