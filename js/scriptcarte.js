var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function onLocationFound(e) {
    console.log(e.latitude);
    console.log(e.longitude);
    console.log(e.latlng)

    L.marker([e.latitude,e.longitude]).addTo(map);

    L.marker(e.latlng).addTo(map)
      .bindPopup("Vous êtes à " + e.latlng + " mètres de ce point").openPopup();
  }

  function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);

  map.locate({ setView: true, maxZoom: 16 });