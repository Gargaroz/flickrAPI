angular.module('flickrAPI').factory('selectedPhoto',function() {

    var selectedTag = '';
    var selectedUserId = '';
    
    var _getTag = function() {
      return selectedTag;
    };
    
    var _getUser = function() {
      return selectedUserId;
    };
    
    var _setTag = function(tag) {
      selectedTag = tag;
    };
    
    var _setUser = function(user) {
      selectedUserId = user;
    };

    return {
      getTag: _getTag,
      getUser: _getUser,
      setTag: _setTag,
      setUser: _setUser
    };
});