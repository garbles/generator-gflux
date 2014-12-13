var _ = require('lodash');
var yosay = require('yosay');
var chalk = require('chalk');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

_.mixin({ 'capitalize': capitalize });

function template (type, options) {
  var options = options || {};

  var capType = _.capitalize(type);
  if (options.pluralizeFile) capType += 's';

  return {
    initializing: function () {
      this.argument('name', {
        required: true,
        type: String,
        desc: 'The name of your ' + type + '.'
      });

      this.log(yosay(
        'G-g-g-g-g-g-unit! ' +
        chalk.green('Generating ' + this.name + capType + '.js'
      )));
    },

    writing: function () {
      var folder = this.config.get(type + 's');
      var name = this.name;

      var dest = folder + '/' + name + capType + '.js';

      this.fs.copyTpl(
        this.templatePath('template.js'),
        this.destinationPath(dest),
        _.extend({}, this.config.getAll(), { name: name })
      );
    }
  };
};

module.exports = template;
