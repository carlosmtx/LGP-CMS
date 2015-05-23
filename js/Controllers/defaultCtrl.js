/**
 * Created by carlos on 20/05/2015.
 */
'use strict';
var appControllers = angular.module('arbanking-controllers');

appControllers.controller("defaultCtrl", ['$scope','$http', '$routeParams','$constants','$location',
    function($scope, $http, $routeParams, $constants,$location){
        $http({
            url: $constants.getUrl('/channels')
        }).success(function(data){
            if(!(data instanceof Array)){
                data = [data];
            }
            console.log("redirecting");
            $location.path('/app/'+data[0].name);
            $location.replace();
        });


    }]);