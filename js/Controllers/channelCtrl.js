'use strict';

var appControllers = angular.module('arbanking-controllers');

appControllers.controller("channelCtrl", ['$scope','$http', '$routeParams','$constants','$timeout',
	function($scope, $http, $routeParams, $constants,$timeout){
        var channel = $routeParams.name;
        var fetchTrackables = function(){
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
        };

        var fetchScenes = function(){

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
        };


        $scope.messages = [];
        $scope.deleteTrackable= function(trackable){
                $http({
                    url : $constants.getUrl('/channel/'+channel+'/trackable?trackable='+trackable.id),
                    method: 'DELETE'
                })
                .success(function(data){
                    fetchTrackables();
                    $scope.messages.push({
                        type : 'success',
                        message: 'Trackable  '+ trackable.name + ' removed'
                    });
                })
                .error(function(data){
                    $scope.messages.push({
                        type : 'error',
                        message: data
                    });
                })
                .finally(function(){
                    $timeout(function(){
                        $scope.messages.shift();
                        $scope.$apply();
                    },1500);
                });
        };
        fetchScenes();
        fetchTrackables();

	}]);