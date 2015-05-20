var newsApp = angular.module('arbanking-services');

newsApp.factory('$constants', function() {
    var baseUrl = 'http://api.lgp.dev/app_dev.php';
    // factory function body that constructs shinyNewServiceInstance
    return {
        getUrl: function(relativeUrl){
            return baseUrl+relativeUrl;
        }

    };
});