// We’ll add a tile layer to add to our map, in this case it’s a OSM tile layer.
// Creating a tile layer usually involves setting the URL template for the tile images
var osmUrl = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {
      maxZoom: 22,
      attribution: osmAttrib
    });

// initialize the map on the "map" div with a given center and zoom
var map = L.map('map').setView([54.13298915040403, 12.085149605756618], 11).addLayer(osm);


// var data = Street;


// 	var featuresLayer = new L.GeoJSON(data, {
// 			style: function(feature) {
// 				return {color: feature.properties.color };
// 			},
// 			onEachFeature: function(feature, marker) {
// 				marker.bindPopup('<h4 style="color:'+feature.properties.color+'">'+ feature.properties.strasse_name +'</h4>');
//       }
// 		});

// 	map.addLayer(featuresLayer);

// 	var searchControl = new L.Control.Search({
// 		layer: featuresLayer,
// 		propertyName: 'strasse_name',
// 		marker: false,
// 		moveToLocation: function(latlng, title, map) {
// 			//map.fitBounds( latlng.layer.getBounds() );
// 			var zoom = map.getBoundsZoom(latlng.layer.getBounds());
//   			map.setView(latlng, zoom); // access the zoom
// 		}
// 	});

// 	searchControl.on('search:locationfound', function(e) {
		
// 		//console.log('search:locationfound', );

// 		//map.removeLayer(this._markerSearch)

// 		e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
// 		if(e.layer._popup)
// 			e.layer.openPopup();

// 	}).on('search:collapsed', function(e) {

// 		featuresLayer.eachLayer(function(layer) {	//restore feature color
// 			featuresLayer.resetStyle(layer);
// 		});	
// 	});
	
// 	map.addControl( searchControl );  //inizialize search control



// map.addControl(new L.Control.Search({
//   url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
//   jsonpParam: 'json_callback',
//   propertyName: 'display_name',
//   propertyLoc: ['lat','lon'],
//   marker: L.circleMarker([0,0],{radius:30}),
//   // moveToLocation: [L.circleMarker([0,0],{radius:30})],
  
//   //function(latlng, title, map) {
//   //   map.setZoom(17);
//   // map.panTo(propertyLoc);
//   // //   //map.fitBounds( latlng.layer.getBounds() );
//   // //   var zoom = map.getBoundsZoom(marker.latlng);
//   // //     map.setView(latlng, zoom); // access the zoom
//   // },
  
//   autoCollapse: true,
//   autoType: false,
//   minLength: 2,

//   //moveToLocation: [L.circleMarker([0,0],{radius:30})],
// }) );


var options = {
  position: 'topright', // toolbar position, options are 'topleft', 'topright', 'bottomleft', 'bottomright'
  drawMarker: false,  // adds button to draw markers
  drawPolygon: false,  // adds button to draw a polygon
  drawPolyline: false,  // adds button to draw a polyline
  drawCircle: false,  // adds button to draw a cricle
  drawCircleMarker: false,  // adds button to draw a cricleMarker
  drawRectangle: false,  // adds button to draw a rectangle
  cutPolygon: false,   // adds a button to cut layers
  dragMode: true,  // adds button to toggle global move mode
  deleteLayer: true,   // adds a button to delete layers
  editMode: false,  // adds button to toggle global edit mode
  rotateMode: false,
  saveLayer: true,
  Search: true,
  
  
};

// add leaflet.pm controls to the map
map.pm.addControls(options);

//add the icons the controls will draw
var icon1 = L.icon({
iconName: '1',
iconUrl: 'images/kiss.png',
iconSize: [20,20],
});

var icon2 = L.icon({
  iconName: '2',
  iconUrl: 'images/anger.png',
  iconSize: [20,20],
  });  
var icon3 = L.icon({
  iconName: '3',
  iconUrl: 'images/garbage.png',
  iconSize: [20,20],
  }); 

var icon4 = L.icon({
  iconName: '4',
  iconUrl: 'images/hand.png',
  iconSize: [20,20],
  });
  
  
map.pm.Toolbar.copyDrawControl('Marker', {
  name: 'MarkerCopy',
  block: 'custom',
  title: 'Display text on hover button',
  className: 'icon1-button'
});
map.pm.Draw.MarkerCopy.setOptions({markerStyle: {icon: icon1}});


map.pm.Toolbar.copyDrawControl('Marker', {
  name: 'MarkerCopy1',
  block: 'custom',
  title: 'Display text on hover button',
  className: 'icon2-button'
});
map.pm.Draw.MarkerCopy1.setOptions({markerStyle: {icon: icon2}});

map.pm.Toolbar.copyDrawControl('Marker', {
  name: 'MarkerCopy2',
  block: 'custom',
  title: 'Display text on hover button',
  className: 'icon3-button'
});
map.pm.Draw.MarkerCopy2.setOptions({markerStyle: {icon: icon3}});


map.pm.Toolbar.copyDrawControl('Marker', {
  name: 'MarkerCopy3',
  block: 'custom',
  title: 'Display text on hover button',
  className: 'icon4-button'
});
map.pm.Draw.MarkerCopy3.setOptions({markerStyle:{icon: icon4}});



window.onbeforeunload = function () {

  const currentlayres = [];       
  map.eachLayer((layer) => {
    if (layer.pm) {
      const geojson = layer.toGeoJSON();

      

      currentlayres.push(geojson);
    }
  });
  const options1 = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(currentlayres)
  };
  const response =  fetch('/api', options1);
    //const json =  response.json();
  //console.log(geoJ);  
console.log(shapes); 

};