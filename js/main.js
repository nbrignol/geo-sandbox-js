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

	//accuracy circle
	var circle = L.circle([0, 0], 0);
	circle.bindPopup("Accuracy.");
	circle.addTo(map);

	function processPosition(event){
		status.innerHTML = "Lat : " + event.coords.latitude + "° Long : " + event.coords.longitude + "° Precision : " + event.coords.accuracy + "m.";
		marker.setLatLng( [event.coords.latitude, event.coords.longitude] );
		
		circle.setLatLng( [event.coords.latitude, event.coords.longitude] );
		circle.setRadius(event.coords.accuracy);

		if ( ! map.getBounds().contains( [event.coords.latitude, event.coords.longitude] ) ) {
			map.setView([event.coords.latitude, event.coords.longitude], 6);
		}
		
	}

	function errorPosition(){
		status.innerHTML = "No position.";
		marker.setLatLng( [0,0] );
		map.setView([0, 0], 3);
	}

	//location notifications
	var options = {"enableHighAccuracy": true, "maximumAge" : 0, "timeout" : Infinity};
	navigator.geolocation.watchPosition( processPosition, errorPosition, options );


});