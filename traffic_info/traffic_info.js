document.addEventListener('DOMContentLoaded', () => {
  // Initial Location{India}
  const map = L.map('map').setView([20.5937, 78.9629], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  let currentMarker = L.marker([20.5937, 78.9629]).addTo(map).bindPopup('<strong>India</strong>');

  document.getElementById('location-btn').addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latLon = [position.coords.latitude, position.coords.longitude];

        // Set map view to the current location
        map.setView(latLon, 14);

        // Remove previous marker
        if (currentMarker) {
          map.removeLayer(currentMarker);
        }

        // Add new marker at current location
        currentMarker = L.marker(latLon).addTo(map).bindPopup('<strong>Your Current Location</strong>').openPopup();
      }, (error) => {
        alert('Unable to retrieve your location: ' + error.message);
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  });
});
