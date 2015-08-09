function zoomMap(zoomLevel, lat, lng) {
    map.setCenter(new google.maps.LatLng(lat,lng));
    map.setZoom(zoomLevel);
}

function find_properties_on_map(data) {
        data.List.forEach(function (tm) {
            var geo = tm.GeographicLocation;
            var myLatlng2 = new google.maps.LatLng(geo.Latitude, geo.Longitude);

            var addr = tm.Address;
            var price = tm.PriceDisplay;
            //var tit = tm.Title;


            var marker = new google.maps.Marker({
                position: myLatlng2,
                map: map,
                title: 'NewMarket House'

            });

            var contentString = addr + "<br>" + price + "<br>";
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            zoomMap(14,-36.8683083, 174.7766063); // Centre on Newmarket

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        });
    //});
}

google.maps.event.addDomListener(window, 'load', initialize);