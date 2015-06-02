var newsApp = angular.module('arbanking-services');

newsApp.factory('$constants', function() {
    var baseUrl = 'http://www.api.'+document.domain;
    // factory function body that constructs shinyNewServiceInstance
    return {
        getUrl: function(relativeUrl){
            return baseUrl+relativeUrl;
        }

    };
});