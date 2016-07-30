(function() {
    'use strict';

    module.exports = [
      '$scope',
      '$rootScope',
      '$state',
      'loaderService',
      'toastrService',
      'administratorService',
      function YmLoginController($scope, $rootScope, $state, loaderService, toastrService, administratorService) {
        // properties
        this.administrator = {};
        this.showPassword = false;

        // functions
        this.doLogin = doLogin;

        //calls
        _init();

        // implements
        function _init(){
          // $('.menu').hide();
          if (JSON.parse(localStorage.getItem("currentAdministrator"))){
            $state.go('base.secured.home');
          } else {
            $rootScope.$broadcast('isNotLogged');
          }
        }

        function doLogin(administrator){
          administrator.tried = true;
          var isMandatoryComplete = administrator.Email && administrator.Password;
          if (!isMandatoryComplete) {
            return;
          }

          loaderService.show();

          administratorService.authorize(administrator)
            .then(function(response) {
              var isAuthentic = !response.error;
              if (!isAuthentic){
                toastrService.warning("emailOrPasswordInvalids");
                loaderService.hide();
              } else {
                $rootScope.$broadcast('isLogged');
                $state.go('base.secured.home');
                loaderService.hide();
              }
          });
        }
      }
    ];
})();
