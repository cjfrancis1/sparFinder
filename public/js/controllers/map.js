angular.module('sparFinder')
    .controller('mapCTRL', function ($scope) {
        var map;
        window.initMap = function () {
            var myLatLng = {lat: 27.258, lng: -80.352};

            // Create a map object and specify the DOM element for display.
            var map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                scrollwheel: true,
                zoom: 7
            });

            // Create a marker and set its position.
            var marker = new google.maps.Marker({
                map: map,
                position: myLatLng,
                title: 'Hello World!'
            });
        };
    });