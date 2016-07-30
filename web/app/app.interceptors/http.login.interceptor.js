function HttpLoginInterceptor ($q, $base64, $injector, $rootScope, loaderService) {
	return {
		request: function(request) {
			var currentAdministrator = JSON.parse(localStorage.getItem('currentAdministrator'));

			return request;
		},
		response: function(response) {
			// do something on success
			if (response.headers()['x-tokenrefreshed']) {
				var currentAdministrator = JSON.parse(localStorage.getItem('currentAdministrator'));
				var token = response.headers()['x-tokenrefreshed'];
				var basicAuth = 'Basic ' + $base64.encode(currentAdministrator.Email + '|web|:' + token);

				currentAdministrator.Token = token;

				localStorage.setItem('lastAuth', JSON.stringify(new Date()));
				localStorage.setItem('currentAdministrator', JSON.stringify(currentAdministrator));

				$injector.get('$http').defaults.headers.common.Authorization = basicAuth;
			}

			return response;
		},
		responseError: function(response) {
			// do something on error
			//we are logging the response error
			if (response !== undefined) {
				if (response.status === 401) {
					localStorage.setItem('currentAdministrator', null);
					localStorage.setItem('lastAuth', null);
					localStorage.setItem('authTimeout', null);
					loaderService.hide();
					$injector.get('$state').transitionTo('auth');
				} else {
					if (response.headers()['x-tokenrefreshed']) {
						var currentAdministrator = JSON.parse(localStorage.getItem('currentAdministrator'));
						var token = response.headers()['x-tokenrefreshed'];
						var basicAuth = 'Basic ' + $base64.encode(currentAdministrator.Email + '|web|:' + token);

						currentAdministrator.Token = token;

						localStorage.setItem('lastAuth', JSON.stringify(new Date()));
						localStorage.setItem('currentAdministrator', JSON.stringify(currentAdministrator));

						$injector.get('$http').defaults.headers.common.Authorization = basicAuth;
					}
				}
			}

			var deferred = $q.defer();
			deferred.reject(response);
			return deferred.promise;
		}
	};
}

module.exports = angular.module('httpLoginInterceptor', [])
.factory('httpLoginInterceptor', [
	'$q',
	'$base64',
	'$injector',
	'$rootScope',
	'loaderService',
	HttpLoginInterceptor
	])
	.name;
