var ymLoader = require('./ymLoader');
var ymBase = require('./ymBase');
var ymMenu = require('./ymMenu');
var ymHeader = require('./ymHeader');
var ymFooter = require('./ymFooter');
var unTable = require('./unTable');
var ymDateTimePicker = require('./ymDateTimePicker');
var ymInputCropImage = require('./ymInputCropImage');
var ymMapAddress = require('./ymMapAddress');
var ymInputMoneyPercent = require('./ymInputMoneyPercent');

module.exports = angular.module('you-movin.components.generics', [
  ymLoader,
  ymBase,
  ymMenu,
  ymHeader,
  ymFooter,
  unTable,
  ymDateTimePicker,
  ymInputCropImage,
  ymMapAddress,
  ymInputMoneyPercent
])
.name;
