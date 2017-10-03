myApp.factory('getPhotoList', ['$http', function($http){
    $http.defaults.useXDomain = true;

    var factory = {};

	factory.getList = function(){
		return $http.get("http://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json");
	};

	return factory;
}]);