angular.module('Instagram')
  .factory('API', function($http) {

    return {
      getFeed: function() {
        return $http.get('http://localhost:3000/api/feed');
      },
      getMediaById: function(id) {
        return $http.get('http://localhost:3000/api/media/' + id);
      },
      likeMedia: function(id) {
        return $http.post('http://localhost:3000/api/like', { mediaId: id });
      }
    }

  })

  .run(function($rootScope, $window, $auth) {
  if ($auth.isAuthenticated()) {
    $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
  }
});
