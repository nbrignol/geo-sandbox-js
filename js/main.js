document.addEventListener('DOMContentLoaded', function(){
	
	//map (leaflet : http://leafletjs.com/examples/quick-start.html)
	var map = L.map('myMap');
	map.setView([0, 0], 3);

	//map pattern (WTMS). mapbox, ign, osm, ... 
	//var mapPatternUrl = "http://tile.stamen.com/toner/{z}/{x}/{y}.png";
    //var mapPatternUrl = "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg";
	
	var mapPatternUrl = 'http://tile.openstreetmap.org/{z}/{x}/{y}.png';
	var tileLayer = L.tileLayer(mapPatternUrl);
	tileLayer.addTo(map);

	//marker
	var marker = L.marker([0, 0]);
	marker.bindPopup("The marker.");
	marker.addTo(map);

	//shape circle
	var circle = L.circle([0, 0], 500000);
	circle.bindPopup("The circle.");
	circle.addTo(map);

	//shape polygon
	var polygon = L.polygon([
	    [-1, -1],
	    [1, -1],
	    [1, 1],
	    [-1, 1],
	]);
	polygon.bindPopup("The polygon.");
	polygon.addTo(map);

	/*
	function onMapClick(e) {
		marker.setLatLng(e.latlng);
	}
	map.on('click', onMapClick);
	*/

});