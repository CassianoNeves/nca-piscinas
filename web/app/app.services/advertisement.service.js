(function() {
    'use strict';

    function AdvertisementService($q, $http, configYouMovin) {
        var self = this;
        var baseUrl = configYouMovin.apiUrl + 'advertisement';

        self.create = function(advertisementData) {
            var d = $q.defer();

            var request = {
                method: 'POST',
                url: baseUrl,
                data: advertisementData,
                headers: {
                    'Content-Type': undefined
                }
            };

            $http(request)
                .then(function(response) {
                    d.resolve(response.data);
                }, function(error) {
                    d.reject(error.data);
                });

            return d.promise;
        };

        self.update = function(advertisementData, advertisementId) {
            var d = $q.defer();

            var request = {
                method: 'PUT',
                url: baseUrl + "/" + advertisementId,
                data: advertisementData,
                headers: {
                    'Content-Type': undefined
                }
            };

            $http(request)
                .then(function(response) {
                    d.resolve(response.data);
                }, function(error) {
                    d.reject(error.data);
                });

            return d.promise;
        };

        self.delete = function(id) {
            var d = $q.defer();
            var url = baseUrl + '/' + id;

            $http.delete(url).then(
                function(result) {
                    d.resolve(result.data.data);
                },
                function(err) {
                    d.reject(err.data);
                }
            );

            return d.promise;
        };

        self.getById = function(id) {
            var d = $q.defer();
            var url = baseUrl + '/' + id;

            $http.get(url).then(
                function(result) {
                    d.resolve(result.data.data);
                },
                function(err) {
                    d.reject(err.data);
                }
            );

            return d.promise;
        };

        self.getActive = function() {
            var d = $q.defer();
            var url = baseUrl + '/allActive';

            $http.get(url).then(
                function(result) {
                    d.resolve(result.data.data);
                },
                function(err) {
                    d.reject(err.data);
                }
            );

            return d.promise;
        };

        self.getAll = function() {
            var d = $q.defer();
            var url = baseUrl + '/';

            $http.get(url).then(
                function(result) {
                    d.resolve(result.data.data);
                },
                function(err) {
                    d.reject(err.data);
                }
            );

            return d.promise;
        };

        self.search = function(filter) {
            var d = $q.defer();
            var url = baseUrl + '/search';

            $http.get(url, { params: filter }).then(
                function(result) {
                    d.resolve(result.data.data);
                },
                function(err) {
                    d.reject(err.data);
                }
            );

            return d.promise;
        };
    }

    module.exports = angular.module('advertisementService', [])
        .service('advertisementService', [
            '$q',
            '$http',
            'configYouMovin',
            AdvertisementService
        ])
        .name;

})();
