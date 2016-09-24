angular.module('flickrAPI').directive('all', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'directive/all/all.html',
        controller: function($scope, selectedPhoto, flickrApi) {
        },
        controllerAs: 'all'
    };
});
