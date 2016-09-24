angular.module('flickrAPI', ['ui.bootstrap','ngRoute','ngAnimate']);

angular.module('flickrAPI').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider
    .when('/search', {
      template: '<search-page></search-page>'
    })
    .otherwise({redirectTo:'/search'});

});

angular.module('flickrAPI').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
