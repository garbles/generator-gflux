var React = require('react');
var ReactPropTypes = React.PropTypes;

var <%= name %>Component = React.createClass({

  propTypes: {
    something: ReactPropTypes.string.isRequired
  },

  render: function () {
    return (
      <div><%= name %>Component</div>
    );
  }

});

module.exports = <%= name %>Component;
