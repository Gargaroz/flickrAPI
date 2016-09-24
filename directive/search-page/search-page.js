angular.module('flickrAPI').directive('searchPage', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'directive/search-page/search-page.html',
        controller: function($scope, flickrApi) {
          var vm = this;
          vm.tag = "";
          vm.userId = "";
          vm.getFlickrImage = function() {
            flickrApi.getFlickrImage(vm.tag, vm.userId);
          };
          vm.clear = function() {
            vm.tag = "";
            vm.userId = "";
          };
        },
        controllerAs: 'search',
        link: function(scope, element, attrs, fn) {
        }
    };
});
