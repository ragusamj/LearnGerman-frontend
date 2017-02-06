angular.module('LearnGerman')
    .factory('apiFactory', ['$http', function ($http) {

        var apiFactory = {};

        apiFactory.get = function (url) {
            return $http.get(url);
        };

        apiFactory.post = function (url, object) {
            return $http.post(url, object);
        };

        apiFactory.update = function (url, object) {
            return $http.put(url, object);
        };

        apiFactory.delete = function (url) {
            return $http.delete(url);
        };

        return apiFactory;
}]);