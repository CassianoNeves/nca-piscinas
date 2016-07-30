(function() {
    "use strict";

    function SportService($http, configYouMovin) {
        var baseUrl = configYouMovin.apiUrl + 'sport';

        this.getSportAll = function() {
            return $http.get(baseUrl + '/all').then(function(response) { return response.data.data; });
        };
    }

    module.exports = angular.module('sportService', [])
        .service('sportService', [
        	'$http',
        	'configYouMovin',
        	SportService
        ]).name;

})();
