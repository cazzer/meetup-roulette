angular.module('app')
	.config([
		'$urlRouterProvider',
		'$sceProvider',
		function($urlRouterProvider, $sceProvider) {

			$urlRouterProvider
				.otherwise('/');

			$sceProvider.enabled(false);
		}]);