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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var Title = _styledComponents2.default.h1(_templateObject);

var Wrapper = _styledComponents2.default.section(_templateObject2);

exports.default = function () {
  return _react2.default.createElement(Wrapper, null, '!important', _react2.default.createElement(Title, null, "Hello World, this is my !important styled component!"));
};
