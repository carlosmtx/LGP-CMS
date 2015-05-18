
var appControllers = angular.module('arbanking-controllers', []);

appControllers.controller("AppController", ['$scope','$http','parameters',
	function($scope, $http,parameters){
		$scope.exemplo = parameters.apiUrl;
	}
]);


