var controller = require('./unTableActionsCtrl');

module.exports = {
	restrict: 'E',
	bindings: {
		template: '=',
		caller: '='
	},
	controller: controller,
	controllerAs: 'ctrl'
};
