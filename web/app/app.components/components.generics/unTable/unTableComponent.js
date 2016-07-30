var controller = require('./unTableCtrl');

module.exports = {
	bindings: {
		options: '=',
		resource: '=',
		safeResource: '=',
		caller: '='
	},
	templateUrl: 'app/app.components/components.generics/unTable/unTable.html',
	controller: controller,
	controllerAs: 'ctrl'
};
