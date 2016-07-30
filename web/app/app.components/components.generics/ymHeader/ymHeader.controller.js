module.exports = [
  '$injector',
  'loaderService',
  function YmHeaderController($injector, loaderService) {
    var self = this;

    this.logout = function() {
      localStorage.setItem("currentAdministrator", null);
      localStorage.setItem("lastAuth", null);
      localStorage.setItem("authTimeout", null);
      loaderService.hide();
      $injector.get('$state').transitionTo("auth");
  };
  }
];
