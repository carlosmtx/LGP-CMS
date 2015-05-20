var appControllers = angular.module('arbanking-controllers');

appControllers.controller("trackableCtrl", ['$scope','$http', '$routeParams','$constants',
    function($scope, $http, $routeParams,$constants){
        $http({
            url: $constants.getUrl('/channel/'+$routeParams.name+'/scenes')
        })
        .success(function(data){
            if(!(data instanceof Array)){
                data = [data];
            }
                console.log(data);
            $scope.scenes = data;
            $scope.selectedScenes = [];
            $scope.selectedScenes[0] = "";

        });


        $scope.createNewSelect= function(){
            console.log("Here");
            $scope.selectedScenes.push("");
        }
    }]);
