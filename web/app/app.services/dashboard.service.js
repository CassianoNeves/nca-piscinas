(function() {
    'use strict';

    function DashboardSevice($http, configYouMovin) {
        var self  = this;
        var baseUrl = configYouMovin.apiUrl + 'bo/dashboard';

        self.getUrlReport = function(idEvent) {
            return baseUrl + '/report/' + idEvent;
        };

        self.getInitalData = function(idEvent) {
            return $http.get(baseUrl + '/' + idEvent)
                .then(function(result) {
                    return result.data;
                });
        };
    }

    module.exports = angular.module('dashboardSevice', [])
        .service('dashboardSevice', [
        	'$http',
        	'configYouMovin',
        	DashboardSevice
        ]).name;

})();
