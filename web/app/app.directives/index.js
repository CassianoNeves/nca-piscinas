var ymdatetimepickerTimezone = require('./ymDatetimepickerTimezone');
var chosen = require('./chosen');

module.exports = angular.module('you-movin.directives', [
    ymdatetimepickerTimezone,
    chosen
]).name;
