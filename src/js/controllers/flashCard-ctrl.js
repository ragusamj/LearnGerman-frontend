/*global angular */
angular
    .module('LearnGerman')
    .controller('flashCardDashboardCtrl', ['$log', '$scope', 'apiFactory',
        function flashCardDashboardCtrl($log, $scope, apiFactory) {
            var urlBase = "http://localhost:8080";
            $scope.categories = [];
            getCategories();

            function getCategories() {
                apiFactory.get(urlBase + "/phrases/getCategories")
                    .then(function (response) {
                        $scope.categories = response.data.record;
                    }, function (error) {
                        $log.debug("Get Phrases By Category Call Failed " + urlBase + "/phrases/getCategories");
                    });
            }

            $scope.getLink = function (category) {
                return "#/flashCards/" + category;
            }
        }
        ]);
