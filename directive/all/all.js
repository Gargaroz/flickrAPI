angular.module('flickrAPI').directive('all', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'directive/all/all.html',
        controller: function($scope, selectedPhoto, flickrApi) {
          var vm = this;
          vm.allPhotos = [];
          vm.displayedPhotos = [];
          vm.totalItems = 0;
          vm.currentPage = 1;
          vm.maxItems = 18;
          var getPhotos = function() {
            flickrApi.getFlickrBatch(selectedPhoto.getTag(), selectedPhoto.getUser()).then(function(response){
              vm.allPhotos = response.photos.photo;
              vm.currentPage = response.photos.page; 
              vm.totalItems = response.photos.photo.length;
              vm.stepPage();
            });
          };
          vm.stepPage = function() {
            vm.displayedPhotos = vm.allPhotos.slice(vm.maxItems * (vm.currentPage - 1), vm.maxItems * vm.currentPage);
            vm.displayedPhotos;
            
          };
          vm.$onInit = function () {
            getPhotos();
          };
        },
        controllerAs: 'all'
    };
});
