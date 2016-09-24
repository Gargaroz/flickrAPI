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
              } else {
                console.log("ret", ret);
                ret.photos.photo.length == 1 ? vm.photoResults = ret.photos.photo.concat(vm.photoResults) : vm.errorMessage = 'No photos found';
              }
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
