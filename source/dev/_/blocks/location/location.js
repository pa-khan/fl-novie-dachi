let locationMap = document.getElementById('location-map');


document.addEventListener('DOMContentLoaded', ()=>{
	ymaps.ready(init);
	function init(){
		var myMap = new ymaps.Map(locationMap, {
			center: [locationMap.getAttribute('data-l'), locationMap.getAttribute('data-c')],
			zoom: 14,
			controls: []
		});

		myPlacemark = new ymaps.Placemark(myMap.getCenter());
		myMap.geoObjects.add(myPlacemark);
		myMap.behaviors.disable('scrollZoom');
	}
})