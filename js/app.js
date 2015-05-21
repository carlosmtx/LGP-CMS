var constants ={};
constants.apiUrl = 'api.lgp.dev';

var app = angular.module('arbanking', [
        'ngRoute',
        'arbanking-controllers',
        'arbanking-services',
        'ngFileUpload'
    ]
);

app.constant('parameters',constants);
app.config(function ($httpProvider) {
    $httpProvider.defaults.transformRequest = function(data){
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    }
});
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/channel/:name', {
                controller: 'channelCtrl',
                templateUrl: 'partials/channel.html'
            })
            .when('/channel/:name/trackable/new',{
                controller: 'trackableCtrl',
                templateUrl: 'partials/trackable_new.html'
            })
            .when('/login', {
                controller: 'authCtrl',
                templateUrl: 'partials/login.html'
            })
            .otherwise({
                controller: 'defaultCtrl',
                templateUrl:'partials/redirecting.html'
            })
    }]);

