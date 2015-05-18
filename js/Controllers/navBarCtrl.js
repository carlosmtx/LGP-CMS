/**
 * Created by rafiki on 17-05-2015.
 */
var appControllers = angular.module('arbanking-controllers');

appControllers.controller("navBarCtrl", ['$scope','$http', '$routeParams',
    function($scope, $http, $routeParams){
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
