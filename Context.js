'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

module.exports = function (contextDefinition) {

	var keys = Object.keys(contextDefinition);
	var c = keys.reduce(function (accum, key) {
		var def = contextDefinition[key];
		accum.context[key] = def[0];
		accum.childContextTypes[key] = _react2['default'].PropTypes[def[1]];
		return accum;
	}, {
		context: {},
		childContextTypes: {}
	});

	var mixin = {
		getChildContext: function getChildContext() {
			return c.context;
		},
		childContextTypes: c.childContextTypes
	};

	var wrapper = _react2['default'].createClass({
		displayName: 'wrapper',

		mixins: [mixin],
		render: function render() {
			return _react2['default'].createElement('span', null, this.props.children);
		}
	});

	return {
		Mixin: mixin,
		Wrapper: wrapper
	};
};

