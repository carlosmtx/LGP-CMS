(function() {
	var app = angular.module('app', [
		'ngRoute',
		'Controllers']);
	
	app.config(['$routeProvider',
	  	function($routeProvider) {
	    $routeProvider
	    .when('/', {
	    	templateUrl: 'Partials/home.html',
	    	controller: 'AppController'
	    })
	    .when('/channel/:channelId', {
	        templateUrl: 'Partials/channel.html',
	        controller: 'ChannelController'
	      }).
	      otherwise({
	        redirectTo: '/'
	      });
	  }]);
})();

myConstants = {apiUrl:"http://api.lgp.dev"}