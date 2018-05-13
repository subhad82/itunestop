myApp.controller('HomeCtrl',['$scope','helper','$http','$state','$timeout', '$q', '$log',function($scope, helper,$http,$state,$timeout, $q, $log){
    helper.showAlert();
    
 //console.log('a');	
  helper.getSongs().then(response => {
//	console.log(response.data.feed.entry);
    $scope.rSongs = response.data;
console.log($scope.rSongs);
      
  },error => {
    $scope.songs = response.statusText;
  });

  $scope.IsVisible = false;
            $scope.ShowHide = function () {
                
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }
  
}]);


