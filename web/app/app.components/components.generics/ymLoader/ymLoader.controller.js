module.exports = [
    '$rootScope',
    '$timeout',
  function YmLoaderController($rootScope, $timeout) {

      $rootScope.$on('HTTP_REQUEST_START', function(data) {
          $timeout(function() {
              if ($rootScope.statusRequest === 1) {
                  $(".ym-loader").fadeIn();
              }
          }, 500);
      });

      $rootScope.$on('HTTP_REQUEST_END', function(data) {
          $(".ym-loader").fadeOut();
      });
  }
];
