"use strict";
angular.module('sparFinder')
    .service('dataService', function ($http) {
       this.getUsers = function (cb) {
           $http.get('/api/users').then(cb);
       }
    });