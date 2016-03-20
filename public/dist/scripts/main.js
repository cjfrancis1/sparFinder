"use strict";
angular.module('sparFinder', []);
"use strict";
angular.module('sparFinder')
    .service('dataService', ['$http', function ($http) {
       this.getUsers = function (cb) {
           $http.get('/api/users').then(cb);
       }
    }]);
"use strict";
angular.module('sparFinder')
    .controller('mapCTRL', ["$scope", "$timeout", "dataService", function ($scope, $timeout, dataService) {

        $scope.initMap = function () {

            var locationUSA = {
                "lat": 37.09024,
                "lng": -95.712891
            };

            $scope.map = new google.maps.Map(document.getElementById('map'), {
                center: locationUSA,
                scrollwheel: false,
                zoom: 3
            });
        };

        $scope.createMarkers = function (users) {
            var markers = [];
            for (var i = 0; i < users.length; i++) {
                markers.push(
                    new google.maps.Marker({
                        map: $scope.map,
                        position: {
                            lat: users[i]['lat'],
                            lng: users[i]['lng']
                        },
                        title: users[i]['first_name']+' '+users[i]['last_name']
                    })
                );
            }
            return markers;
        };

        $scope.reFocusMap = function (markers) {
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < markers.length; i++) {
                bounds.extend(markers[i].getPosition());
            }
            $scope.map.fitBounds(bounds);
            $scope.map.setZoom(10);
        };

        $scope.updateMap = function (users) {
            $scope.reFocusMap($scope.createMarkers(users));
        };

        $scope.initMap();

        /*
        Delete once actual functionality is implemented
        *****************************************************/

        $scope.simulateQuery = function () {
            dataService.getUsers(function (obj) {
                var users = obj.data.response;
                $scope.updateMap(users);
            });
        };

        $timeout(3000).then($scope.simulateQuery);

    }]);