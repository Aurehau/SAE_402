var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/* var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
}); */
var greenIcon = L.icon({
  iconUrl: '../img/pointcarte.svg',
  shadowUrl: '../img/ombrepoint.svg',

  iconSize:     [60, 70], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [30, 65], // point of the icon which will correspond to marker's location
  shadowAnchor: [5, 57],  // the same for the shadow
  popupAnchor:  [0, -65] // point from which the popup should open relative to the iconAnchor
});

function onLocationFound(e) {
    console.log(e.latitude);
    console.log(e.longitude);
    console.log(e.latlng);


    //L.marker([47.43472, 7.18058], {icon: greenIcon}).addTo(map);
    L.marker([e.latitude,e.longitude], {icon: greenIcon}).addTo(map)//;

    //L.marker(e.latlng).addTo(map)
      .bindPopup("<div class='ecriture'>Your position</div>").openPopup();

    // GPS
    L.Routing.control({
      waypoints: [
        L.latLng(e.latlng),
        L.latLng(47.744824, 7.337170)
      ],
      createMarker: function(i, waypoint, n) {
        var marker = L.marker(waypoint.latLng, {
            draggable: true,
            icon: greenIcon // Utiliser la même icône personnalisée pour le départ et l'arrivée
        });
        return marker;
    }
    }).addTo(map);
  }

  function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);

  map.locate({ setView: true, maxZoom: 16 });

  L.marker([47.744824, 7.337170], {icon: greenIcon}).addTo(map).bindPopup("<div class='ecriture'>Steinbach Park</div>").openPopup();
