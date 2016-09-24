angular.module('flickrAPI').directive('searchPage', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'directive/search-page/search-page.html',
        controller: function($scope, flickrApi, selectedPhoto, $location) {
          var vm = this;
          vm.tag = '';
          vm.userId = '';
          vm.photoResults = [];
          vm.filterOpts = [
            {label: 'Views', expression: '-views'},
            {label: 'Taken', expression: '-ownername'},
            {label: 'Uploaded', expression: '-datetaken'},
            {label: 'Owner', expression: '-dateupload'},
          ];
          vm.filter = vm.filterOpts[0].expression;
          vm.getFlickrImage = function() {
            vm.errorMessage = '';
            flickrApi.getFlickrImage(vm.tag, vm.userId).then(function(ret){
              if (ret.message) {
                vm.errorMessage = ret.message;
              } else if (ret.photos.photo.length == 1) {
                var photo = ret.photos.photo.pop();
                photo.tag = vm.tag;
                photo.views = parseInt(photo.views);
                vm.photoResults.unshift(photo);
              } else vm.errorMessage = 'No photos found'
              vm.clear();
            });
          };
          vm.clear = function() {
            vm.tag = '';
            vm.userId = '';
          };
          vm.batch = function(img) {
            selectedPhoto.setTag(img.tag);
            selectedPhoto.setUser(img.user_id||'');
            $location.url('/all');
          };
        },
        controllerAs: 'search',
        link: function(scope, element, attrs, fn) {
        }
    };
});
