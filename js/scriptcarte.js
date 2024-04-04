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
  iconAnchor:   [16, 70], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [4, -70] // point from which the popup should open relative to the iconAnchor
});

function onLocationFound(e) {
    console.log(e.latitude);
    console.log(e.longitude);
    console.log(e.latlng);

    L.marker([e.latitude,e.longitude], {icon: greenIcon}).addTo(map)//;

    //L.marker(e.latlng).addTo(map)
      .bindPopup("Vous êtes à " + e.latlng + " mètres de ce point").openPopup();
  }

  function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);

  map.locate({ setView: true, maxZoom: 16 });

  L.marker([47.744824, 7.337170]).addTo(map).bindPopup("<div class='ecriture'>Parc Steinbach</div>").openPopup();