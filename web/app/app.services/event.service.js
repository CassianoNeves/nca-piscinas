(function() {
  "use strict";

  function EventService($q, $http, configYouMovin) {
    var baseUrl = configYouMovin.apiUrl + 'event';

    this.save = function(event) {
      var request = {
          method: 'POST',
          url: baseUrl,
          data: event,
          headers: {
              'Content-Type': undefined
          }
      };

      return $http(request);
    };

    this.update = function(event) {
      var request = {
          method: 'POST',
          url: baseUrl + '/update',
          data: event,
          headers: {
              'Content-Type': undefined
          }
      };

      return $http(request);
    };

    this.delete = function(idEvent) {
      return $http.post(baseUrl + '/delete/' + idEvent);
    };

    this.getAll = function() {
      return $http.get(baseUrl + '/all');
    };

    this.getById = function(idEvent) {
      return $http.get(baseUrl + '/get/' + idEvent);
    };

    this.getByFilter = function(params) {
      return $http.get(baseUrl + '/search', { params: params });
    };

    this.verifyHighlight = function(idEvent) {
      idEvent = idEvent ? idEvent : '';
      return $http.get(baseUrl + '/verifyHighlight?' + idEvent);
    };

    this.getEventPartners = function(idEvent) {
      return $http.get(baseUrl + '/eventPartners/' + idEvent);
    };

    this.verifyIfTicketHasSubcriber = function(idTicket) {
      return $http.get(baseUrl + '/verifyTicket/' + idTicket);
    };
  }

  module.exports = angular.module('eventService', [])
    .service('eventService', [
      '$q',
    	'$http',
    	'configYouMovin',
    	EventService
    ])
    .name;

})();
