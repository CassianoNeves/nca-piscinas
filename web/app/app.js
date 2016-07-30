(function() {
    'use strict';

    var appInterceptors = require('./app.interceptors');
    var appServices = require('./app.services');
    var appConfig = require('./app.config');
    var configYouMovin = require('./app.constants/configYouMovin.constant');
    var filters = require('./app.filters');
    var directives = require('./app.directives');
    var components = require('./app.components');

angular.module('you-movin', [
  'pascalprecht.translate',
  'ui.router',
  'base64',
  'ui.bootstrap',
  'ngAnimate',
  'datatables',
  'smart-table',
  'ngBootbox',
  'uiGmapgoogle-maps',
  'ngFileUpload',
  'angular-img-cropper',
  'ngCropper',
  'ngTagsInput',
  'textAngular',
  appConfig,
  appInterceptors,
  appServices,
  filters,
  directives,
  components
])
  .constant('configYouMovin', configYouMovin)
  .run([
		"$rootScope",
		"$state",
		"configYouMovin",
		"$timeout",
		"$injector",
		"$base64",
		function($rootScope, $state, configYouMovin, $timeout, $injector, $base64) {
			toastr.options.preventDuplicates = true;

    			_checkAdminOnline();

    			function _checkAdminOnline() {
    				var currentAdministrator = JSON.parse(localStorage.getItem('currentAdministrator'));

    				if (currentAdministrator) {
    					var basicAuth = 'Basic ' + $base64.encode(currentAdministrator.Email + '|web|:' + currentAdministrator.Token);
    					$injector.get('$http').defaults.headers.common.Authorization = basicAuth;
    				}
    			}

    			$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    				$rootScope.currentPage = toState.name;

    				var storeLast = moment(JSON.parse(localStorage.getItem('lastAuth')));
    				var sessionTimeout = moment(storeLast).add(configYouMovin.SessionTimeoutSeconds, 'seconds');
    				var sessionTimeoutIsValid = (sessionTimeout > moment());

    				if (!sessionTimeoutIsValid){
    					localStorage.setItem('currentAdministrator', null);
    					localStorage.setItem('lastAuth', null);
    					localStorage.setItem('authTimeout', null);
    				}

    				var requireLogin = toState.data.requireLogin;
    				var currentAdministrator = JSON.parse(localStorage.getItem('currentAdministrator'));
    				var isAuthPage = toState.name === 'auth';
    				var haveToGoAuth = requireLogin && !currentAdministrator && !isAuthPage;

    				if (haveToGoAuth) {
    					event.preventDefault();
    					$state.go('auth');
    				}

    			});
    		}
    ]);

})();
