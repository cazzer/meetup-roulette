angular.module('app')
	.controller('home', [
		'$http',
		'$scope',
		function($http, $scope) {

			var location = false;
			window.navigator.geolocation.getCurrentPosition(function(newLocation) {
				location = newLocation;
			});

			$scope.roulette = function() {
				if (!location) return alert('I need to know your location first!');

				$scope.event = false;
				$scope.loading = true;
				$http({
					method: 'GET',
					url: 'api/1/meetup/events',
					params: {
						lat: location.coords.latitude,
						lon: location.coords.longitude
					}
				})
					.success(function(data) {
						var date = new Date(data.time);
						data.time = date.toLocaleString();
						$scope.loading = false;
						$scope.event = data;
					});
			};
		}]);