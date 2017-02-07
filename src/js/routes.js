'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('LearnGerman').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('flashCards', {
                url: '/flashCards/:category',
                templateUrl: 'templates/flashCards.html'
            })
            .state('flashCardDashboard', {
                url: '/flashCardDashboard',
                templateUrl: 'templates/flashCardDashboard.html'
            });
    }
]);
