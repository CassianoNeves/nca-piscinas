module.exports = [
	'$stateProvider',
	'$urlRouterProvider',
	 '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise("/home");
		$locationProvider.hashPrefix('!');

		$stateProvider
			.state('auth', {
				url: '/auth',
				views: {
					'container@': {
						template: '<ym-login title="testee">'
					}
				},
				data: {
				}
			})

			// ---------------------------------------------------------------------------
			// base
			// ---------------------------------------------------------------------------
			.state('home', {
				url: '/home',
				views: {
					'container@': {
						template: '<ym-home>'
					}
				},
				data: {
				}
			});

	}
];
