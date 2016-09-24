angular.module('flickrAPI').directive('searchPage', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'directive/search-page/search-page.html',
        controller: function($scope) {
          
        },
        controllerAs: 'search',
        link: function(scope, element, attrs, fn) {
        }
    };
});
