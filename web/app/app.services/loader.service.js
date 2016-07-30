(function() {
	'use strict';

	function LoaderService() {
		this.show = function() {
			$(".blocker").removeClass("hide");
		};

		this.hide = function() {
			$(".blocker").addClass("hide");
		};

		this.toggle =function() {
			$(".blocker").toggleClass("hide");
		};
	}

	module.exports = angular.module('loaderService', [])
		.service('loaderService', LoaderService)
		.name;

})();
