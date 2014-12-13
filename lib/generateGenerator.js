var _ = require('lodash');
var yosay = require('yosay');
var chalk = require('chalk');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

_.mixin({ 'capitalize': capitalize });

function template (type, options) {
  var options = options || {};

  return {
    initializing: function () {
      this.argument('name', {
        required: true,
        type: String,
        desc: 'The name of your ' + type + '.'
      });

      this.log(yosay(
        'G-g-g-g-g-g-unit! ' +
        chalk.green('Generating ' + this.name + _.capitalize(type) + '.'
      )));
    },

    writing: function () {
      var folder = this.config.get(type + 's');
      var name = this.name;
      var dest = folder + '/' + name + _.capitalize(type) + '.js';

      this.fs.copyTpl(
        this.templatePath('template.js'),
        this.destinationPath(dest),
        _.extend({}, this.config.getAll(), { name: name })
      );
    }
  };
};

module.exports = template;
