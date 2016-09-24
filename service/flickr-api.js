angular.module('flickrAPI').factory('flickrApi',['$http', 'flickrUtils', function($http, flickrUtils) {
    var url = 'https://api.flickr.com/services/rest/',
    methods = {
      'search': 'flickr.photos.search'
    },
    jsonCallback = 'JSON_CALLBACK',
    extras = 'date_upload,date_taken,owner_name,views,url_q',
    sort = 'interestingness-desc',
    perPage = 1,
    dataLoading = false;
    
    var _getFlickrImage = function(tag, userId) {
      if (dataLoading) return;
			dataLoading = true;
			return $http.jsonp(url + '?method=' + methods.search +
      '&api_key=' + flickrUtils.KEY +
      '&tags=' + tag +
			'&per_page=' + perPage +
      (userId ? '&user_id=' + userId : '') +
			'&sort=' + sort +
      '&extras=' + extras +
			'&format=json&' +
			'jsoncallback=' + 'JSON_CALLBACK')
				.then(function(response) {
          dataLoading = false;
          return response.data; 
        }, function(response) {
          dataLoading = false;
        });
    };
    
    var _getFlickrBatch = function(tag, userId) {
      if (dataLoading) return;
			dataLoading = true;
			return $http.jsonp(url + '?method=' + methods.search +
      '&api_key=' + flickrUtils.KEY +
      '&tags=' + tag +
      (userId ? '&user_id=' + userId : '') +
			'&sort=' + sort +
      '&extras=' + extras +
			'&format=json&' +
			'jsoncallback=' + 'JSON_CALLBACK')
				.then(function(response) {
          dataLoading = false;
          console.log("response.data", response.data);
          return response.data;
        }, function(response) {
          dataLoading = false;
        });
    };

    return {
      getFlickrImage: _getFlickrImage,
      getFlickrBatch: _getFlickrBatch
    };
}]);