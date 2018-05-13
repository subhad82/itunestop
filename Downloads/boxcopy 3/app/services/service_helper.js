myApp.factory("helper",function($http, $q){
    var service = {};
    
    service.showAlert = function(){
        console.log("This is the helper class");
    }

    service.getSongs = function(){

        var deferred = $q.defer();

        $http({
            method: "GET",
            url: "https://itunes.apple.com/in/rss/topalbums/limit=100/json"
        }).then(function mySuccess(response) {
            deferred.resolve(response);
        }, function myError(response) {
            deferred.reject(response);
        });

        return deferred.promise;

        
    }
    
    return service;
});
