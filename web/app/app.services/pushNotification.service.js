(function() {
    "use strict";

    function PushNotificationService($http, configYouMovin) {
        var baseUrl = configYouMovin.apiUrl + 'bo-push-notification';

        this.getAvaliableFilters = function() {
            return $http.get(baseUrl + '/available-filters').then(function(response) { return response.data.data; });
        };

        this.send = function(data) {
            return $http.post(baseUrl + '/send', data).then(function(response) { return response.data.data; });
        };
    }

    module.exports = angular.module('pushNotificationService', [])
        .service('pushNotificationService', [
        	'$http',
        	'configYouMovin',
        	PushNotificationService
        ]).name;

})();
