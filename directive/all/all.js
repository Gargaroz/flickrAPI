angular.module('flickrAPI').directive('all', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'directive/all/all.html',
        controller: function($scope, selectedPhoto, flickrApi) {
          var vm = this;
          vm.allPhotos = [];
          var getPhotos = function() {
            flickrApi.getFlickrBatch(selectedPhoto.getTag(), selectedPhoto.getUser()).then(function(response){
              vm.allPhotos = response.photos.photo;
              vm.displayedPhotos = vm.allPhotos.slice(0,vm.maxItems);
              vm.currentPage = response.photos.page; 
              vm.totalItems = response.photos.photo.length;
            });
          };
          vm.$onInit = function () {
            getPhotos();
          };
        },
        controllerAs: 'all'
    };
});
