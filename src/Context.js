import React from 'react';

module.exports = function(contextDefinition){

	var keys = Object.keys(contextDefinition);
	var c = keys.reduce((accum,key) => {
		let def = contextDefinition[key];
		accum.context[key] = def[0];
		accum.childContextTypes[key] = React.PropTypes[def[1]];
		return accum;
	},{
		context: {},
		childContextTypes: {}
	});

	var mixin = {
		getChildContext(){
			return c.context;
		},
		childContextTypes: c.childContextTypes
	};

	var wrapper = React.createClass({
		mixins: [mixin],
		render(){
			return React.createElement('span',null,this.props.children);
		}
	});

	return {
		Mixin: mixin,
		Wrapper: wrapper
	};
}
