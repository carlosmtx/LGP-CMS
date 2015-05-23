var appControllers = angular.module('arbanking-controllers');

appControllers.controller("newTrackableCtrl", ['$scope','$http', '$routeParams','$constants','Upload',
    function($scope, $http, $routeParams,$constants,Upload){
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


        $scope.createNewSelect= function(){
            if($scope.selectedScenes.length < $scope.scenes.length ) $scope.selectedScenes.push({});
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
            }).success(function(data){
                for(var i = 0 ; i < $scope.selectedScenes.length ; i++){
                    console.log('request:'+i);
                    $http({
                        url: $constants.getUrl('/channel/'+channel+'/scene/link'),
                        method: 'POST',
                        headers:{
                            'Content-Type':'multipart/form-data'
                        },
                        data:{
                            scene: $scope.selectedScenes[i].id,
                            trackable: data.trackable.id
                        }
                    }).success(function(){
                        console.log("Done 1");
                    });
                }
            });
        };
    }
]);