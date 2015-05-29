var appControllers = angular.module('arbanking-controllers');

appControllers.controller("newSceneCtrl", ['$scope','$http', '$constants','$routeParams','Upload','$trackableScene','$timeout',
    function($scope, $http , $constants,$routeParams,Upload,$trackableScene,$timeout){
        var channel = $routeParams.name;
        $scope.messages = [];

        $scope.scene={};
        $scope.loading = {};
        $scope.loading.visible = false;
        $scope.loading.progress = 0;
        $scope.selectedTrackables = [[]];


        $scope.createNewSelect= function(){
            if($scope.selectedTrackables.length < $scope.trackables.length ) $scope.selectedTrackables.push({});
        };

        $scope.removeNewSelect= function(){
            if($scope.selectedTrackables.length > 1)  $scope.selectedTrackables.pop();
        };


        $http({
            url: $constants.getUrl('/channel/'+$routeParams.name+'/trackables')
        })
        .success(function(data){
            if(!(data instanceof Array)){
                data = [data];
            }
            $scope.trackables = data;
            $scope.selectedTrackables = [];
            $scope.selectedTrackables.push({});

        });
        var i = 0;
/*        var link = function(){
            if(i >= $scope.selectedTrackables.length) return;
            new $trackableScene.linkSceneToTrackable($scope.scene,$scope.selectedTrackables[i],channel)
                .success(function(){
                    $scope.loading.progress += (50 / $scope.selectedTrackables.length) % 100;
                    i++;
                    $scope.$apply();
                    link();
                })
                .error(function(){
                    console.log("Deu Erro");
                });
        };*/
        $scope.submit = function(){
            $scope.loading.visible = true;
            $scope.loading.progress= 0;

            Upload.upload({
                url : $constants.getUrl('/channel/'+channel+'/scene'),
                fields:{name:$scope.scene.name,description:$scope.scene.description},
                method: 'POST',
                file: $scope.files[0]
            }).success(function(data) {
                $scope.messages.push({
                    type : 'success',
                    message: 'Scene  '+ $scope.scene.name + ' created'
                });
                $scope.loading.visible = false;
                $scope.loading.progress= 0;
                //i = 0;
                //link();
            }).progress(function(evt){
                $scope.loading.progress = parseInt(100.0 * evt.loaded / (evt.total));
            }).error(function(data) {
                $scope.messages.push({
                    type: 'error',
                    message: data
                });
                $scope.loading.visible = false;
                $scope.loading.progress= 0;

            }).finally(function(){
                $timeout(function(){
                    $scope.messages.shift();
                    $scope.$apply();
                },1500);
            });
        };




}]);