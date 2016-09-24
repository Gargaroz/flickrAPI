angular.module('flickrAPI').directive('searchPage', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'directive/search-page/search-page.html',
        controller: function($scope, flickrApi) {
          var vm = this;
          vm.tag = '';
          vm.userId = '';
          vm.photoResults = [];
          vm.getFlickrImage = function() {
            vm.errorMessage = '';
            flickrApi.getFlickrImage(vm.tag, vm.userId).then(function(ret){
              if (ret.message) {
                vm.errorMessage = ret.message;
              } else if (ret.photos.photo.length == 1) {
                var photo = ret.photos.photo.pop();
                photo.tag = vm.tag;
                vm.photoResults.unshift(photo);
              } else vm.errorMessage = 'No photos found'
              vm.clear();
            });
          };
          vm.clear = function() {
            vm.tag = '';
            vm.userId = '';
          };
        },
        controllerAs: 'search',
        link: function(scope, element, attrs, fn) {
        }
    };
});
