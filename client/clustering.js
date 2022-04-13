// We’ll add a tile layer to add to our map, in this case it’s a OSM tile layer.
// Creating a tile layer usually involves setting the URL template for the tile images
var osmUrl = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {
      maxZoom: 22,
      attribution: osmAttrib
    });

// initialize the map on the "map" div with a given center and zoom
var map = L.map('map').setView([54.13298915040403, 12.085149605756618], 13).addLayer(osm);

getData();
async function getData() {
  const response = await fetch('/insert');
  const data = await response.json();
  console.log(data);
  //const pointList = [];
 // var datac = data;
  makecluster(data);
  
//   // pointList.push([data]);
//   // console.log(pointList);
//   // for (item of data) {
    
// //   data1.features = data;
// //   console.log(data1.features);
// //   data1.features = ['{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[12.066324,54.134349]},"_id":"6SnlowlCV8G6k8h8"}'
// // ];
 }

//  var polygon = L.polygon([
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047]
// ]).addTo(map);

// console.log(polygon);

//  function validation(datac){
  
//   console.log('poly',polygon);
//   const clusterpoints = [];
//           for (var i = 0; i < Object.keys(datac).length; i++){
//           //for (var i = 0; i < 10; i++){
//             //clusterpoints.push(datac[i]);
           
//             if (polygon.contains(datac[i].geometry.coordinates) ){
//               console.log('tocluster', datac[i]);
//               clusterpoints.push(datac[i]);
//             }}
//             console.log('clusterpoints', clusterpoints);
//           if (clusterpoints !== []){
//             makecluster(clusterpoints);
//           }
// }

// var polygonData = L.geoJSON(polygonJson, {
//   onEachFeature: function (feature, layer) {
//   layer.bindPopup(`<b>Name: </b>` + layer._bounds._northEast.lat)

// }}).addTo(map);
  // function validation(datac){ 
  //   var j=0;
  // makecluster(datac);
  //    var polygonData = L.geoJSON(polygonJson, {
       
  //       onEachFeature: function (feature, layer) {
        
  //         const clusterpoints = [];
  //         for (var i = j; i < Object.keys(datac).length; i++){
  //         //for (var i = j; i < 10; i++){
  //           //clusterpoints.push(datac[i]);
           
  //           if (layer.contains(datac[i].geometry.coordinates) ){
  //             console.log('tocluster', datac[i]);
  //             clusterpoints.push(datac[i]);
  //           }}
  //           //console.log('tocluster', feature);
  //         if (clusterpoints !== []){
  //           makecluster(clusterpoints);
  //         }
  //          j+=10;
          

  //           layer.bindPopup(`<b>Name: </b>` + feature.properties.gemeindeteil_name)
  //       },
  //       style: {
  //           fillColor: 'yellow',
  //           fillOpacity: 0.1,
  //           color: '#c0c0c0',
  //       }
  //   }).addTo(map);
  //  }   
 // //add the icons the controls will draw
// var icon1 = L.icon({
// iconName: '1',
// iconUrl: 'images/kiss.png',
// iconSize: [20,20],
// });

// var icon2 = L.icon({
//   iconName: '2',
//   iconUrl: 'images/anger.png',
//   iconSize: [20,20],
//   });  
// var icon3 = L.icon({
//   iconName: '3',
//   iconUrl: 'images/garbage.png',
//   iconSize: [20,20],
//   }); 

// var icon4 = L.icon({
//   iconName: '4',
//   iconUrl: 'images/hand.png',
//   iconSize: [20,20],
//   });
// map.pm.Draw.MarkerCopy.setOptions({markerStyle: {icon: icon1}});
// map.pm.Draw.MarkerCopy1.setOptions({markerStyle: {icon: icon2}});
// map.pm.Draw.MarkerCopy2.setOptions({markerStyle: {icon: icon3}});
// map.pm.Draw.MarkerCopy3.setOptions({markerStyle:{icon: icon4}});

var icon0 = L.icon({
  iconName: 'Blank',
  iconUrl: 'images/Blank.png',
  iconSize: [20,20],
  });


var icon7 = L.icon({
iconName: '7',
iconUrl: 'images/0.778.png',
iconSize: [20,20],
});

var icon6 = L.icon({
  iconName: '6',
  iconUrl: 'images/0.644.png',
  iconSize: [20,20],
  });  
var icon5 = L.icon({
  iconName: '5',
  iconUrl: 'images/0.557.png',
  iconSize: [20,20],
  }); 

var icon4 = L.icon({
  iconName: '4',
  iconUrl: 'images/0.409.png',
  iconSize: [20,20],
  });

  var icon3 = L.icon({
    iconName: '3',
    iconUrl: 'images/0.332.png',
    iconSize: [20,20],
    });
  
  
  var icon2 = L.icon({
  iconName: '2',
  iconUrl: 'images/0.221.png',
  iconSize: [20,20],
  });
  
  var icon1 = L.icon({
    iconName: '1',
    iconUrl: 'images/0.123.png',
    iconSize: [20,20],
    });  
  var iconn5 = L.icon({
    iconName: '-5',
    iconUrl: 'images/-0.534.png',
    iconSize: [20,20],
    }); 
  
  var iconn4 = L.icon({
    iconName: '-4',
    iconUrl: 'images/-0.440.png',
    iconSize: [20,20],
    }); 
  
    var iconn3 = L.icon({
      iconName: '-3',
      iconUrl: 'images/-0.368.png',
      iconSize: [20,20],
      });  
    var iconn2 = L.icon({
      iconName: '-2',
      iconUrl: 'images/-0.209.png',
      iconSize: [20,20],
      }); 
    
    var iconn1 = L.icon({
      iconName: '-1',
      iconUrl: 'images/-0.142.png',
      iconSize: [20,20],
      }); 





 const geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};
  
function geticon(type){
      
      
      switch (type) {
        case 'icon7': return icon7
        case 'icon6': return icon6
        case 'icon5': return icon5
        case 'icon4': return icon4
        case 'icon3': return icon3
        case 'icon2':return icon2
        case 'icon1':return icon1
        case 'iconn5': return iconn5
        case 'iconn4': return iconn4
        case 'iconn3': return iconn3
        case 'iconn2':return iconn2
        case 'iconn1':return iconn1
         
        
      } 
}

function gettitel(type){
      
      
  switch (type) {
    case 'icon7': case 'icon6': case 'icon5':case 'icon4': case 'icon3': case 'icon2':case 'icon1':
      return 'Postive';  
    default:
      return 'Negative'
  } 
}
          
 var markers = L.DonutCluster({
  chunkedLoading: true,
  
}, {
  key: 'title'
  , arcColorDict: {
                Postive: 'blue',
                Negative: 'red',   
                 
              }
})

var markers2 = L.DonutCluster({
  chunkedLoading: true,
  
}, {
  key: 'title'
  , arcColorDict: {
                Postive: 'blue',
                Negative: 'red',   
                 
              }
})
console.log('cluster',markers);
//const markers = L.markerClusterGroup();

// loading geojson
function makecluster(clusterpoints){
  L.geoJSON(clusterpoints, {
    onEachFeature: function (feature, layer) {
      
      const popupContent =
        '<img src="feature.image" height="35" />'
        '<h4 class = "text-primary">Street Light</h4>' +
        '<div class="container"><table class="table table-striped">' +
        "<thead><tr><th>Properties</th><th>Value</th></tr></thead>" +
        "<tbody><tr><td> Name </td><td>" +
        feature.properties.Name +
        "</td></tr>" +
        "<tr><td>Elevation </td><td>" +
        feature.properties.ele +
        "</td></tr>" +
        "<tr><td> Power (watt) </td><td>" +
        feature.properties.Power_Watt +
        "</td></tr>" +
        "<tr><td> Pole Height </td><td>" +
        feature.properties.pole_hgt +
        "</td></tr>" +
        "<tr><td> Time </td><td>" +
        feature.properties.time +
        "</td></tr>";
        //var title = feature.SentimentTyp; 
        //console.log('pop',feature.properties.coordinates);
        //layer.bindPopup(`<b>coordinates: </b>` + feature.geometry.coordinates);
    },
    pointToLayer: function (feature, latlng) {
      var SentiTyp = feature.SentimentTyp;
      var ortt = feature.ortteil;
      //console.log(feature.image);
      // const popupContent = "<tr><td>Elevation </td><td>" +
      // feature.coordinates[1] +
      // "</td></tr>"; //+'<img src="feature.image" height="35" />'
      
      //if (ortt== '0009'){
        console.log(ortt);
        console.log(SentiTyp);
        var  marker = L.marker(latlng,{
          title:gettitel(SentiTyp),icon:geticon(SentiTyp)
        }).bindPopup(`<b>coordinates: </b>` + feature.ortteil);

        markers.addLayer(marker); 
      //}
      

      if (ortt== '0012'){
        console.log(ortt);
        console.log(SentiTyp);
        var  marker2 = L.marker(latlng,{
          title:gettitel(SentiTyp),icon:geticon(SentiTyp)
        }).bindPopup(`<b>coordinates: </b>` + feature.ortteil);

        markers2.addLayer(marker2); 
      }
      
       
      //markers2.addLayer(marker2); 
      //markers.addLayer(marker); 
    
    },
  });
  
  // marker clustering
  //map.addLayer(markers2);
  map.addLayer(markers); 
  map.addLayer(markers2);
  
}




// const geojsonMarkerOptions = {
//   radius: 8,
//   fillColor: "#ff7800",
//   color: "#000",
//   weight: 1,
//   opacity: 1,
//   fillOpacity: 0.8,
// };


// function handleImageUpload() 
// {


     
//       //console.log(e.target.result);
// }
       

    


// const markers = L.markerClusterGroup();

// // loading geojson
// function validation(datac){
  
//   L.geoJSON(datac, {
//     onEachFeature: function (feature, layer) {
//       console.log(latlng);
//       const popupContent =
//         '"Potomac Overlook Park <br> The second line <br> <img src=" + feature.image64 + "/>"'
//         '<h4 class = "text-primary">Street Light</h4>' +
//         '<div class="container"><table class="table table-striped">' +
//         "<thead><tr><th>Properties</th><th>Value</th></tr></thead>" +
//         "<tbody><tr><td> Name </td><td>" +
//         feature.geometry.coordinates +
//         "</td></tr>" +
//         "<tr><td>Elevation </td><td>" +
//         feature.properties.ele +
//         "</td></tr>" +
//         "<tr><td> Power (watt) </td><td>" +
//         feature.properties.Power_Watt +
//         "</td></tr>" +
//         "<tr><td> Pole Height </td><td>" +
//         feature.properties.pole_hgt +
//         "</td></tr>" +
//         "<tr><td> Time </td><td>" +
//         feature.properties.time +
//         "</td></tr>";
//       layer.bindPopup(popupContent);
//     },
//     pointToLayer: function (feature, latlng) {
      
//       return markers.addLayer(L.circleMarker(latlng, geojsonMarkerOptions));
//     },
//   }).addTo(map);
  
//   // marker clustering
//   map.addLayer(markers); 
// }