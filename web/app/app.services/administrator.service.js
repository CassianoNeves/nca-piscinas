(function() {
	'use strict';

	function AdministratorService($http, $q, $base64, configYouMovin) {
		this.create = function(administrator) {
			return $http.post(configYouMovin.apiUrl + "administrator/",	administrator);
		};

		this.delete = function(administrator) {
			return $http.put(configYouMovin.apiUrl + "administrator/inactive", administrator);
		};

		this.authorize = function(administrator) {
			var deferred = $q.defer();
			var password = CryptoJS.SHA1(administrator.Email + administrator.Password).toString();

			$http.post(configYouMovin.apiAuthUrl + "auth/web",{ Email: administrator.Email, Password: password })
				.success(function(response) {
					if (!response.error){
						localStorage.setItem('currentAdministrator',JSON.stringify( { Email: administrator.Email, Token: response.token }));

						$http.defaults.headers.common.Authorization = 'Basic ' + $base64.encode(administrator.Email + "|web|" + ':' + response.token);

						localStorage.setItem("lastAuth", JSON.stringify(new Date()));
						localStorage.setItem("authTimeout", response.timeout);
					}

					deferred.resolve(response);
				});

			return deferred.promise;
		};

		this.getAll = function() {
			return $http.get(configYouMovin.apiUrl + "administrator/");
		};

		this.update = function(administrator) {
			return $http.put(configYouMovin.apiUrl + "administrator/", administrator);
		};
	}

	module.exports = angular.module("administratorService", [])
		.service("administratorService", [
			"$http",
			"$q",
			"$base64",
			"configYouMovin",
			AdministratorService
		]).name;

})();
