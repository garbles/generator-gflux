'use strict';
var yeoman = require('yeoman-generator');
var generateGenerator = require('../lib/generateGenerator');

var generator = generateGenerator('action');
module.exports = yeoman.generators.Base.extend(generator);
