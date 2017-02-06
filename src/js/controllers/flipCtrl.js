angular
    .module('LearnGerman')
    .controller('flipCtrl', ['$log', '$scope', 'apiFactory', '$window',
        function flipCtrl($log, $scope, apiFactory, $window) {

            var index = 1;
            $scope.germanPhrase = "";
            $scope.englishPhrase = "";
            $scope.phrases = [];
            var urlBase = "http://localhost:8080";
            getPhrasesByCategory();

            function getPhrasesByCategory() {
                apiFactory.get(urlBase + "/phrases/getPhrases/Talking%20about%20yourself")
                    .then(function (response) {
                        $scope.phrases = response.data.record;
                        $scope.germanPhrase = response.data.record[0].germanPhrase;
                        $scope.englishPhrase = response.data.record[0].englishPhrase;
                    }, function (error) {
                        $log.debug("Get Phrases By Category Call Failed " + urlBase + "/phrases/getPhrases/Talking%20about%20yourself");
                    });
            }

            $scope.speakVoice = function () {
                responsiveVoice.speak($scope.germanPhrase, "Deutsch Female");
            };

            $scope.getNextPhrase = function (rating) {
                $scope.germanPhrase = $scope.phrases[index].germanPhrase;
                $scope.englishPhrase = $scope.phrases[index].englishPhrase;
                $scope.phrases[index - 1].rating = rating;
                index = index + 1;
            };

            $scope.isCategoryEnded = function () {
                return index === $scope.phrases.length;
            }
        }
]);