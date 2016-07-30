(function() {
    'use strict';

    function PartnerService($q, $http, configYouMovin) {
        var self = this;
        var baseUrl = configYouMovin.apiUrl + 'partner/';

        // PARTNER TYPE ==============

        self.savePartnerType = function(partnerType) {
            var d = $q.defer();

            var promise = {};
            var params = { partnerType: partnerType };

            if (partnerType.Id > 0) {
                promise = $http.put(baseUrl + 'type/' + partnerType.Id, params);
            } else {
                promise = $http.post(baseUrl + 'type', params);
            }

            promise
                .then(function(response) {
                    d.resolve(response.data);
                },
                function(err) {
                    d.reject(err.data);
                });

            return d.promise;
        };

        self.getAllPartnerTypes = function() {
            var d = $q.defer();

            $http.get(baseUrl + 'type')
                .then(function(resp) {
                    d.resolve(resp.data.data);
                }, function(err) {
                    d.reject(err.data);
                });

            return d.promise;
        };

        self.getPartnerTypeById = function(id) {
            var d = $q.defer();

            $http.get(baseUrl + 'type/' + id)
                .then(function(resp) {
                    d.resolve(resp.data);
                }, function(err) {
                    d.reject(err.data);
                });

            return d.promise;
        };

        self.deletePartnerType = function(id) {
            var d = $q.defer();

            $http.delete(baseUrl + 'type/' + id)
                .then(function(resp) {
                    d.resolve(resp.data);
                }, function(err) {
                    d.reject(err.data);
                });

            return d.promise;
        };

        // PARTNER ==============
        this.createPartner = function(partner) {
            var d = $q.defer();

            var request = {
                method: 'POST',
                url: baseUrl,
                data: partner,
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

        this.updatePartner = function(partner, id) {
            var d = $q.defer();

            var request = {
                method: 'PUT',
                url: baseUrl + id,
                data: partner,
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

        self.deletePartner = function(id) {
            var d = $q.defer();

            var request = {
              method: 'DELETE',
              url: baseUrl + id,
            };

            $http(request)
              .then(function(response) {
                  d.resolve(response.data);
              }, function(error) {
                  d.reject(error.data);
              });

              return d.promise;
        };

        // Metodo estava duplicado, a ação que ele executa é a mesma que o "self.searchPartners"
        // após garantirmos, apagar este metodo : By Cassiano.

        // this.searchPartner = function(filter) {
        //     var d = $q.defer();
        //     $http.get(baseUrl, { params: filter })
        //         .then(function(response) {
        //             d.resolve(response.data.data);
        //         }, function(error) {
        //             d.reject(error.data);
        //         });
        //
        //     return d.promise;
        // };

        self.getCurrentFeaturedPartner = function() {
            var d = $q.defer();

            $http.get(baseUrl + 'featured')
                .then(function(resp) {
                    d.resolve(resp.data.data);
                }, function(err) {
                    d.reject(err.data);
                });

            return d.promise;
        };

        self.searchPartners = function(filter) {
            var d = $q.defer();

            $http.get(baseUrl, { params: filter })
                .then(function(resp) {
                    d.resolve(resp.data.data);
                }, function(err) {
                    d.reject(err);
                });

            return d.promise;
        };

        self.getPartnerById = function(id) {
            var d = $q.defer();

            $http.get(baseUrl + id)
                .then(function(resp) {
                    d.resolve(resp.data.data);
                }, function(err) {
                    d.reject(err.data);
                });

            return d.promise;
        };

        self.getPartnersForSearch = function() {
            var d = $q.defer();

            $http.get(baseUrl + "forSelect")
                .then(function(resp) {
                    d.resolve(resp.data.data);
                }, function(err) {
                    d.reject(err.data);
                });

            return d.promise;
        };

        self.getAllPromtors = function() {
          return $http.get(baseUrl + "getAllPromoters")
              .then(function(resp) {
                  return resp.data.data;
              }, function(err) {
                  return err.data;
              });
        };

        self.getPromoterById = function(idPromoter) {
          return $http.get(baseUrl + "getPromoterById/" + idPromoter)
              .then(function(resp) {
                  return resp.data.data;
              }, function(err) {
                  return err.data;
              });
        };

    }

    module.exports = angular.module('partnerService', [])
        .service('partnerService', [
            '$q',
            '$http',
            'configYouMovin',
            PartnerService
        ])
        .name;

})();
