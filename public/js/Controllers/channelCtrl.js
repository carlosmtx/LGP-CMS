'use strict';

var appControllers = angular.module('arbanking-controllers');

appControllers.controller("channelCtrl", ['$scope','$http', '$routeParams',
	function($scope, $http, $routeParams){
		$scope.channelName = $routeParams.channelName;
		/*$http.get(myConstants.apiUrl+'/channel/'+$routeParams.channelName+'/version')
			.success(function (data) {
				console.log(data);
				$scope.versions = data;
			});

		$scope.createVersion = function (name) {
			console.log(name);
			$http.put(
				myConstants.apiUrl + '/channel/'+$scope.channelName+'/version/'+name)
				.success(function (data) {
					$scope.versions.push(data);
				})
				.error(function(){console.log("createChannel error")});
		};*/

		$scope.openModal1 = function() {
			$('#createNewTrackable').modal("show");
		}
	}])