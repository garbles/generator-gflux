var AppDispatcher = require('../<%= dispatcher %>/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var <%= name %>Constants = require('../<%= constants %>/<%= name %>Constants');
var CHANGE_EVENT = <%= name %>Constants.CHANGE_EVENT;

var <%= name %>Store = _.extend({}, EventEmitter.prototype, {

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function (payload) {

  var action = payload.action;

  switch (action.actionType) {
    default:
      return true;
  }

  <%= name %>Store.emitChange();

  return true;

});

module.exports = <%= name %>Store;
