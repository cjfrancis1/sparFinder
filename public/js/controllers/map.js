"use strict";
angular.module('sparFinder')
    .controller('mapCTRL', function ($scope, dataService) {
        var map;

        window.initMap = function () {
            dataService.getUsers(function (response) {
                $scope.users = response.data.users;
                $scope.centerLatLng = {
                    lat: $scope.users[0]['lat'],
                    lng: $scope.users[0]['lng']
                };

                // Create a map object and specify the DOM element for display.
                $scope.map = new google.maps.Map(document.getElementById('map'), {
                    center: $scope.centerLatLng,
                    scrollwheel: false,
                    zoom: 10
                });

                // Create markers and set its position.
                for (var i = 0; i < $scope.users.length; i++) {
                    new google.maps.Marker({
                        map: $scope.map,
                        position: $scope.users[i],
                        title: 'Hello World!'
                    });
                }
            });


        };
    });