(function() {
    "use strict";

    function BackOfficeUserService($q, $http, configYouMovin) {
        var self = this;
        var baseUrl = configYouMovin.apiUrl + 'administrator';

        self.getById = _getById;
        self.save = _save;
        self.delete = _delete;
        self.getAll = _getAll;

        
        function _getAll() {
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
        }

        function _delete(id) {
            var d = $q.defer();
            var url = baseUrl + '/' + id;

            $http.delete(url).then(
                function(result) {
                    d.resolve(result.data);
                },
                function(err) {
                    d.reject(err.data);
                }
            );

            return d.promise;
        }

        function _save(backOfficeUser) {
            if(backOfficeUser.Id > 0) {
                return _updateBackOfficeUser(backOfficeUser);
            }
            else {
                return _createBackOfficeUser(backOfficeUser);
            }
        }

        function _getById(id) {
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
        }

        function _createBackOfficeUser(backOfficeUser) {
            var d = $q.defer();
            var url = baseUrl + '/register';

            $http.post(url, backOfficeUser).then(
                function(result) {
                    d.resolve(result.data);
                },
                function(err) {
                    d.reject(err.data);
                }
            );

            return d.promise;
        }

        function _updateBackOfficeUser(backOfficeUser) {
            var d = $q.defer();
            var url = baseUrl + '/' + backOfficeUser.Id;

            $http.put(url, backOfficeUser).then(
                function(result) {
                    d.resolve(result.data);
                },
                function(err) {
                    d.reject(err.data);
                }
            );

            return d.promise;
        }

    }

    module.exports = angular.module('backOfficeUserService', [])
        .service('backOfficeUserService', [
            '$q',
            '$http',
            'configYouMovin',
            BackOfficeUserService
        ])
        .name;

})();
