var componentsGenerics = require('./components.generics');
var componentsPages = require('./components.pages');

module.exports = angular.module('you-movin.components', [
  componentsGenerics,
  componentsPages
])
.name;
