var AppDispatcher = require('../<%= dispatcher %>/AppDispatcher');
var <%= name %>Constants = require('../<%= constants %>/<%= name %>Constants');

var <%= name %>Actions = {
  something: function (params) {
    AppDispatcher.handleViewAction({
      actionType: <%= name %>Constants.SOMETHING,
      params: params
    });
  }
};

module.exports = <%= name %>Actions;
