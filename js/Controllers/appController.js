(function() {
	var appControllers = angular.module('Controllers', []);

	appControllers.controller("AppController", ['$scope','$http',
		function($scope, $http){
			$http.get(myConstants.apiUrl+'/channel/list').success(function (data) {
				$scope.channels = data;
			});
			$scope.createChannel = function (name) {
				$http.put( 
				myConstants.apiUrl + '/channel/', 
				{cname:name}, {
					headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
				}).success(function () {
				}).error(function(){console.log("createChannel error")});
			};

			$scope.deleteChannel = function (name) {
				$http.delete( 
				myConstants.apiUrl + '/channel/', 
				{cname:name}, {})
				.success(function () {
				}).error(function(){console.log("deleteChannel error")});
			};

			$scope.changeView = function(id) {
				};

			$scope.launch = function(which){
				dlg = null;
				switch(which){
					case 'createChannel':
						$('#createChannelModal').appendTo("body").modal("show");
						break;
				};
			};
		}
	])	
})();