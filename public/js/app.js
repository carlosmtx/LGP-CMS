var constants ={};
constants.apiUrl = 'api.lgp.dev';

var app = angular.module('arbanking', [
        'ngRoute',
        'arbanking-controllers']
);

app.constant('parameters',constants);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/channel', {
                controller: 'channelCtrl',
                templateUrl: 'partials/channel.html'
            })
            .when('/login', {
                controller: 'authCtrl',
                templateUrl: 'partials/login.html'
            })
            .when('/channelList', {
                controller: 'channelListCtrl',
                templateUrl: 'partials/channelList.html'
            })
    }]);

