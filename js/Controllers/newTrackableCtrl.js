var appControllers = angular.module('arbanking-controllers');

appControllers.controller("newTrackableCtrl", ['$scope','$http', '$routeParams','$constants','Upload','$timeout',
    function($scope, $http, $routeParams,$constants,Upload,$timeout){
        var channel = $routeParams.name;
        $scope.trackable={};
        $http({
            url: $constants.getUrl('/channel/'+$routeParams.name+'/scenes')
        })
            .success(function(data){
                if(!(data instanceof Array)){
                    data = [data];
                }
                $scope.scenes = data;
                $scope.selectedScenes = [];
                $scope.selectedScenes.push({});

            });

        $scope.messages = [];
        $scope.createNewSelect= function(){
            $scope.selectedScenes.push({});
        };
        $scope.removeNewSelect= function(){
            if($scope.selectedScenes.length > 1)  $scope.selectedScenes.pop();
        };

        $scope.submit = function(){
            Upload.upload({
                url : $constants.getUrl('/channel/'+channel+'/trackable'),
                fields:{name:$scope.trackable.name,description:$scope.trackable.description},
                method: 'POST',
                file: $scope.files[0]
            })
            .success(function(data){
                $scope.messages.push({
                    type : 'success',
                    message: 'Trackable  '+data.trackable.name + ' created'
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
                    $scope.messages.shift()
                    $scope.$apply();
                },1500);
            });
        };
    }
]);