'use strict';
(function() {
	var appControllers = angular.module('Controllers');

	appControllers.controller("ChannelController", ['$scope','$http', '$routeParams',
	 	function($scope, $http, $routeParams){
			$scope.channelId = $routeParams.channelId;
			$http.get(myConstants.apiUrl+'/channel/list/versions?channel='+$routeParams.channelId)
			.success(function (data) {
				console.log(data);
				$scope.versions = data;
			});

			$scope.createVersion = function (name) {
				console.log(name);
				$http.post( 
				myConstants.apiUrl + '/version/create', 
				{channel:$routeParams.channelId, name:name}, {
					headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
				}).success(function (data) {console.log(data);
				}).error(function(){console.log("createChannel error")});
			};

			$scope.openModal = function() {
				$('#createVersionModal').appendTo("body").modal("show");
			}
	}])
})();