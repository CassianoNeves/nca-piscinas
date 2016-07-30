(function() {
    "use strict";

    function TipsService($q, $http, configYouMovin) {
        var self = this;
        var baseUrl = configYouMovin.apiUrl + 'tip';

        self.getAllTipTags = function() {
            var d = $q.defer();
            var url = baseUrl + '/tipTags';

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

            $http.get(baseUrl).then(
                function(result) {
                    d.resolve(result.data.data);
                },
                function(err) {
                    d.reject(err.data);
                }
            );

            return d.promise;
        };

        self.getActiveTips = function() {
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

        self.getTipById = function(id) {
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

        self.createTip = function(tipData) {
            var d = $q.defer();

            var request = {
                method: 'POST',
                url: baseUrl,
                data: tipData,
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

        self.updateTip = function(tipData, tipId) {
            var d = $q.defer();

            var request = {
                method: 'PUT',
                url: baseUrl + "/" + tipId,
                data: tipData,
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
    }

    module.exports = angular.module('tipsService', [])
        .service('tipsService', [
            '$q',
            '$http',
            'configYouMovin',
            TipsService
        ])
        .name;

})();
