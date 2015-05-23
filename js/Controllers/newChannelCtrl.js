/**
 * Created by carlos on 23/05/2015.
 */
var appControllers = angular.module('arbanking-controllers');

appControllers.controller("newChannelCtrl", ['$scope','$http', '$constants','$routeParams',
    function($scope, $http , $constants,$routeParams){
        var channel = $routeParams.name;

        $scope.channel={};
        $scope.submit = function(){

            $http({
                url: $constants.getUrl('/channel/'+$scope.channel.name),
                data: {description:$scope.channel.description},
                method: 'POST'
            })
            .success(function(data){

            });


        };




    }]);