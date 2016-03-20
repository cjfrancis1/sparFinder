"use strict";
angular.module('sparFinder')
    .service('dataService', ['$http', function ($http) {
       this.getUsers = function (cb) {
           $http.get('/api/users').then(cb);
       }
    }]);