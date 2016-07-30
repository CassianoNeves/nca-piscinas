var ymLogin = require('./ymLogin');
var ymHome = require('./ymHome');

module.exports = angular.module('you-movin.components.pages', [
  ymLogin,
  ymHome,
]).name;
