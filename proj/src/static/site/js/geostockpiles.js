function addMap() {
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        // id: 'cjrh.bbcd18d4',
        id: 'mapbox.dark',
        accessToken: 'pk.eyJ1IjoiY2pyaCIsImEiOiJDcEhBLS1VIn0.0if7MOAtSb23XP_-1h9VjQ'
    }).addTo(map);
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
        [51.509, -0.047]
    ]).addTo(map);
    var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
    window.myrect = L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
    map.fitBounds(bounds);
}