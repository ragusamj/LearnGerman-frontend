/**
 * Alerts Controller
 */

angular
    .module('LearnGerman')
    .controller('AlertsCtrl', ['$scope', AlertsCtrl]);

function AlertsCtrl($scope) {
    $scope.alerts = [{
        type: 'success',
        msg: 'Welcome! This Dashboard gives you an overview about all the lessons available'
    }];

    $scope.addAlert = function () {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
}