document.addEventListener('DOMContentLoaded', function(){
	
	var status = document.querySelector("#status");

	//map 
	var map = L.map('myMap');
	map.setView([0, 0], 3);

	//pattern
	var mapPatternUrl = 'http://tile.openstreetmap.org/{z}/{x}/{y}.png';
	var tileLayer = L.tileLayer(mapPatternUrl);
	tileLayer.addTo(map);

	//marker
	var marker = L.marker([0, 0]);
	marker.bindPopup("Me.");
	marker.addTo(map);

	function processPosition(event){
		status.innerHTML = "Lat : " + event.coords.latitude + "° Long : " + event.coords.longitude + "° Precision : " + event.coords.accuracy + "m.";
		marker.setLatLng( [event.coords.latitude, event.coords.longitude] );

	}

	function errorPosition(){
		status.innerHTML = "No position.";
		marker.setLatLng( [0,0] );
	}

	//location notifications
	var options = {"enableHighAccuracy": true, "maximumAge" : 0, "timeout" : Infinity};
	navigator.geolocation.watchPosition( processPosition, errorPosition, options );


});