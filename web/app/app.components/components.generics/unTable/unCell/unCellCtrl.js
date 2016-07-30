module.exports = [
	'$scope',
	'$element',
	'$compile',
	function UnCellCtrl($scope, $element, $compile) {
			var elementCompiled = $compile(this.cellTemplate)($scope);
			$element.replaceWith(elementCompiled);
	}
];
