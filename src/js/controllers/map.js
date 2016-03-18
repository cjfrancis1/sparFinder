"use strict";
angular.module('sparFinder')
    .controller('mapCTRL', ["$scope", "dataService", function ($scope, dataService) {

        $scope.createMarkers = function (users) {
            for (var i = 0; i < users.length; i++) {
                new google.maps.Marker({
                    map: $scope.map,
                    position: {
                        lat: users[i]['lat'],
                        lng: users[i]['lng']
                    }
                });
            }
        };

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

                // Create markers and set they're position.
                $scope.createMarkers($scope.users);
            });
        };

    }]);