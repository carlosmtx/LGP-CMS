"use strict";
var appControllers = angular.module('arbanking-controllers');

appControllers.controller("sceneCtrl", ['$scope','$http', '$constants','$routeParams',
    function($scope,$http , $constants,$routeParams){
        $http({
            url: $constants.getUrl('/channels'),
            method: 'GET'
        }).success(function(data){
            if(!(data instanceof Array)){
                data = [data];
            }
            $scope.channels = data;
        });


        $scope.selectedTrackables = [[]];


        $scope.collapse = function(){
            if($('body').hasClass('sidebar-collapse')){
                $('body').removeClass('sidebar-collapse');
                $('.main-header .logo').width('0px');
            }else{
                $('body').addClass('sidebar-collapse');
                $('.main-header .logo').attr('style','');

            }
        }
}]);