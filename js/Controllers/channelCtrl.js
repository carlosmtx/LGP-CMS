'use strict';

var appControllers = angular.module('arbanking-controllers');

appControllers.controller("channelCtrl", ['$scope','$http', '$routeParams','$constants',
	function($scope, $http, $routeParams, $constants){
        var channel = $routeParams.name;

        $http({
            url: $constants.getUrl('/channel/'+channel+'/trackables')
        }).success(function(data){
            if(!(data instanceof Array)){
                data = [data];
            }
            $scope.trackables = data;
        });

        $http({
            url: $constants.getUrl('/channel/'+channel+'/scenes')
        }).success(function(data){
            if(!(data instanceof Array)){
                data = [data];
            }
            console.log(data);
            $scope.scenes = data;
        });

	}]);