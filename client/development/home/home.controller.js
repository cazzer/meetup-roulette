angular.module('app')
	.controller('home', [
		'$http',
		'$scope',
		function($http, $scope) {

			$scope.roulette = function() {
				$http.get('api/1/meetup/events')
					.success(function(data) {
						var date = new Date(data.time);
						data.time = date.toLocaleString();
						$scope.event = data;
					});
			};
		}]);