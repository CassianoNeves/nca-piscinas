function HttpLoaderInterceptor ($rootScope, $q) {
    function canRaiseEvent(config) {
        return config.url.indexOf('http://') >= 0;
    }

    return {
        request: function(config) {
            if (canRaiseEvent(config)) {
                $rootScope.$broadcast("HTTP_REQUEST_START", {});
                $rootScope.statusRequest = 1;
            }

            return config;
        },

        requestError: function(config) {
            if (canRaiseEvent(config)) {
                $rootScope.$broadcast("HTTP_REQUEST_END", {});
                $rootScope.statusRequest = 0;
            }

            return config;
        },

        response: function(response) {
            if (canRaiseEvent(response.config)) {
                $rootScope.$broadcast("HTTP_REQUEST_END", {});
                $rootScope.statusRequest = 0;
            }

            return response;
        },

        responseError: function(response) {
            if (canRaiseEvent(response.config)) {
                $rootScope.$broadcast("HTTP_REQUEST_END", {});
                $rootScope.statusRequest = 0;
            }

            return $q.reject(response);
        }
    };
}

module.exports = angular.module('httpLoaderInterceptor', [])
    .factory('httpLoaderInterceptor', [
        '$rootScope',
        '$q',
        HttpLoaderInterceptor ])
    .name;
