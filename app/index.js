'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

function generatePrompt (folder) {
  return {
    type: 'input',
    name: folder,
    message: 'Inside your root folder, what is your ' + chalk.red(folder) + ' folder?',
    default: this.config.get(folder) || folder
  }
}

module.exports = yeoman.generators.Base.extend({

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to ' + chalk.red("Gabe's Flux Components") + ' Generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'root',
        message: 'What is your root JavaScript folder?',
        default: this.config.get('root') || 'js'
      },
      generatePrompt.call(this, 'actions'),
      generatePrompt.call(this, 'components'),
      generatePrompt.call(this, 'constants'),
      generatePrompt.call(this, 'dispatcher'),
      generatePrompt.call(this, 'stores')
    ];

    this.prompt(prompts, function (props) {
      this.config.set(props);

      done();
    }.bind(this));
  }

});
