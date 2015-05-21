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
            for(var i = 0 ; i < data.length ;i++){
                data[i].url = $constants.getUrl('/channel/'+channel+'/trackable?trackable='+data[i].id);
            }
            $scope.trackables = data;

        });

        $http({
            url: $constants.getUrl('/channel/'+channel+'/scenes')
        }).success(function(data){
            if(!(data instanceof Array)){
                data = [data];
            }
            for(var i = 0 ; i < data.length;i++){
                data[i].url = $constants.getUrl('/channel/'+channel+'/scene?scene='+data[i].id)
            }
            $scope.scenes = data;
        });

	}]);