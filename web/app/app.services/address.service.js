(function() {
  'use strict';

    function AddressService($http, configYouMovin) {
        var baseUrl = configYouMovin.apiUrl + 'address';

        this.getCountriesAll = function(origin) {
            return $http.get(baseUrl + '/getCountriesAll',{ params: origin } ).then(function(response) { return response.data; });
        };

        this.getStatesByCountry = function(params) {
            return $http.get(baseUrl + '/getStatesByCountry', { params: params }).then(function(response) { return response.data; });
        };

        this.getCitiesByState = function(params) {
            return $http.get(baseUrl + '/getCitiesByState', { params: params }).then(function(response) { return response.data; });
        };
    }

    module.exports = angular.module('addressService', [])
    .service('addressService', [
    	'$http',
    	'configYouMovin',
    	AddressService
    ])
    .name;

})();
