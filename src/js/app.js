"use strict";
angular.module('sparFinder', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);