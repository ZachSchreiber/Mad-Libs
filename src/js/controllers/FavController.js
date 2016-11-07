var app = angular.module('spielapp')
.service('favorites', getFavService)
  function getFavService($http) {
    function fetchForm() {
    return $http({
      method: 'GET',
      url: './src/data.json'
    });
  }
  return {
    get: fetchForm
  };
}

app.controller('FavController', function($scope, favorites, $q) {



  $scope.allFavs = null;


     $q.when(favorites.get()).then(function(response) {
       $scope.allFavs = response.data;
     });



    });
