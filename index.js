// Initialize the map
const map = L.map('map').setView([20.5937, 78.9629], 5); // India centered

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example hotspots
const hotspots = [
  { name: 'Delhi', coords: [19.35, 71.025] },
  { name: 'Mumbai', coords: [18, 71.005] },
  { name: 'Chennai', coords: [18.775, 71.205] }
];

// Add markers
hotspots.forEach(h => {
  L.marker(h.coords)
    .addTo(map)
    .bindPopup(`<b>Eco Score: 90/100</b><br><b>Location:(${h.coords})</b><br>Time:13:11<br>Number of species: 7<br>Weight: 190kg`);
});

// Optional: Highlight region with circle
// L.circle([18, 71.5], {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.4,
//   radius: 30000
// }).addTo(map).bindPopup("High activity area!");

// Example hotspot in the Indian Ocean
L.marker([19.5, 71.225])
  .addTo(map)
  .bindPopup(`<b>Eco Score: 87/100</b><br><b>Location:(19.5, 71.225)</b><br>Time:12:41<br>Number of species: 7<br>Weight: 200kg`)
  .openPopup();

L.marker([19.75, 71.75])
  .addTo(map)
  .bindPopup(`<b>Eco Score: 82/100</b><br><b>Location:(19.75, 71.75)</b><br>Time:10:01<br>Number of species: 9<br>Weight: 75kg`)
  .openPopup();

L.marker([20, 70.5])
  .addTo(map)
  .bindPopup(`<b>Eco Score: 89/100</b><br><b>Location:(20, 70.5)</b><br>Time:13:25<br>Number of species: 9<br>Weight: 150kg`)
  .openPopup();

L.marker([19, 71.95])
  .addTo(map)
  .bindPopup(`<b>Eco Score: 90/100</b><br><b>Location:(19, 71.95)</b><br>Time:13:11<br>Number of species: 7<br>Weight: 190kg`)
  .openPopup();

// Optional: circle overlay
L.circle([19.5, 71.5], {
  color: 'green',
  fillColor: 'rgba(1, 98, 38, 1)',
  fillOpacity: 0.3,
  radius: 50000 // meters
}).addTo(map);

// L.circle([18.5, 70.975], {
//   color: 'orange',
//   fillColor: 'rgba(251, 154, 8, 1)',
//   fillOpacity: 0.3,
//   radius: 50000 // meters
// }).addTo(map);