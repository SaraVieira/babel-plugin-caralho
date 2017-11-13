import path from 'path';
import fs from 'fs';
import assert from 'assert';
import { transform } from 'babel-core';
import plugin from '../src';
import words from 'curse-words-common';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('Changes them words if not transpiled', () => {
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
      it(`should change ${word} compiled`, () => {
        const code = `
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['font-size: 1.5em; text-align: center;color: palevioletred;'], ['font-size: 1.5em;text-align: center;color: palevioletred;']),
    _templateObject2 = _taggedTemplateLiteral(["padding: 4em;background: papayawhip !important;"], ["padding: 4em;background: papayawhip !important;"]);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents2.default.h1(_templateObject);

var Wrapper = _styledComponents2.default.section(_templateObject2);

exports.default = function () {
  return _react2.default.createElement(
    Wrapper,
    null,
    "!fuck",
    _react2.default.createElement(
      Title,
      null,
      "Hello World, this is my !important styled component!"
    )
  );
};
`;

        const fixtureDir = path.join(fixturesDir, caseName);

        const expected = fs
          .readFileSync(path.join(fixtureDir, 'expected-compiled.js'))
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
