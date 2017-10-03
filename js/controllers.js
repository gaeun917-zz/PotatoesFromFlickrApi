myApp.controller('ListController', ['$scope', '$routeParams', 'getPhotoList', function($scope, $routeParams, getPhotoList) {
    getPhotoList.getList().success(function(response){
            // data is returned as a string: parse the data
            response = response.replace('jsonFlickrFeed(', '');
            response = response.replace('})', '}');
            response = response.replace(/\\'/g, "'");
            response = JSON.parse(response);

            $scope.photoList = response.items;
            $scope.authorid =
            console.log(response.items);
    });
}]);

myApp.controller('DetailsController', ['$scope', '$routeParams','getPhotoList', function($scope, $routeParams, getPhotoList) {
    getPhotoList.getList().success(function(response){
        // data is returned as a string: parse the data
        response = response.replace('jsonFlickrFeed(', '');
        response = response.replace('})', '}');
        response = response.replace(/\\'/g, "'");
        response = JSON.parse(response);

        $scope.photoList = response.items;
        $scope.tagList = response.items[$routeParams.itemId].tags.split(' ');
        $scope.whichItem = $routeParams.itemId;
        console.log(response.items[$routeParams.itemId].tags);
    });
}]);


