var links = require('./ymDatetimepickerTimezone.link');

module.exports = function() {
    return {
    	restrict: 'A',
    	priority: 1,
    	require: 'ngModel',
    	link: links
    };
};
