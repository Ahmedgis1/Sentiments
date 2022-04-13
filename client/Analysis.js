// We’ll add a tile layer to add to our map, in this case it’s a OSM tile layer.
// Creating a tile layer usually involves setting the URL template for the tile images
var osmUrl = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {
      maxZoom: 22,
      attribution: osmAttrib
    });

//initialize the map on the "map" div with a given center and zoom
var map = L.map('map').setView([54.13298915040403, 12.085149605756618], 11).addLayer(osm);



getData();
async function getData() {
  const response = await fetch('/insert');
  const data = await response.json();
  //console.log(data);
  const pointList = [];
  var datac = data;
  validation(datac);
  
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
var polygon = L.polygon([[12.0934565, 54.1246374], [ 12.0938946, 54.1290981 ], [ 12.095053, 54.1315548 ], [ 12.094461, 54.1344203 ], [ 12.0938502, 54.1356899 ], [ 12.0938533, 54.1356923 ], [ 12.0922091, 54.1391018 ], [ 12.0914386, 54.1440398 ], [ 12.0832557, 54.1438737 ], [ 12.0827865, 54.1438825 ], [ 12.0822477, 54.1438233 ], [ 12.0816268, 54.1436844 ], [ 12.0810978, 54.1435719 ], [ 12.0805687, 54.1433958 ], [ 12.0801537, 54.1432479 ], [ 12.0800024, 54.1432192 ], [ 12.079842, 54.1432047 ], [ 12.0794661, 54.1432122 ], [ 12.0792487, 54.1432374 ], [ 12.0790955, 54.1432793 ], [ 12.0785586, 54.1435126 ], [ 12.0782093, 54.1436264 ], [ 12.0778693, 54.1437074 ], [ 12.0772207, 54.1437321 ], [ 12.076795, 54.1437136 ], [ 12.0764641, 54.1436413 ], [ 12.0759006, 54.1436136 ], [ 12.075324, 54.1436489 ], [ 12.075092, 54.1436328 ], [ 12.0742287, 54.1436712 ], [ 12.0730385, 54.1436741 ], [ 12.072713, 54.1436162 ], [ 12.0725054, 54.143529 ], [ 12.0718808, 54.1433907 ], [ 12.0718303, 54.1433232 ], [ 12.0718252, 54.1432549 ], [ 12.0712514, 54.1428165 ], [ 12.0708906, 54.1424423 ], [ 12.0707328, 54.1422136 ], [ 12.0707066, 54.1420258 ], [ 12.0707661, 54.1418357 ], [ 12.0711289, 54.1412365 ], [ 12.0711736, 54.1411442 ], [ 12.0710158, 54.1409563 ], [ 12.0709414, 54.1407198 ], [ 12.0707957, 54.1404841 ], [ 12.070671, 54.1401751 ], [ 12.0706383, 54.1400262 ], [ 12.070522, 54.1397023 ], [ 12.0704521, 54.1394535 ], [ 12.0703938, 54.1392125 ], [ 12.0702469, 54.1391375 ], [ 12.0700077, 54.1390508 ], [ 12.0698144, 54.13897 ], [ 12.0696417, 54.1387935 ], [ 12.0695615, 54.1386437 ], [ 12.069558, 54.1385643 ], [ 12.0695185, 54.1384842 ], [ 12.0695016, 54.1383854 ], [ 12.0694834, 54.1383677 ], [ 12.0694998, 54.1382486 ], [ 12.0686043, 54.1380667 ], [ 12.0680521, 54.1379628 ], [ 12.0677629, 54.1379197 ], [ 12.0674482, 54.13788 ], [ 12.0671855, 54.1378584 ], [ 12.0668032, 54.1378448 ], [ 12.0664384, 54.1378489 ], [ 12.065975, 54.137865 ], [ 12.0648504, 54.1379228 ], [ 12.0647866, 54.1363995 ], [ 12.0648289, 54.1351321 ], [ 12.0648379, 54.1340672 ], [ 12.064905, 54.1331843 ], [ 12.0649579, 54.1326121 ], [ 12.0650466, 54.1321722 ], [ 12.0652981, 54.1307415 ], [ 12.065575, 54.1293138 ], [ 12.0657294, 54.1284232 ], [ 12.0658385, 54.1279476 ], [ 12.0659622, 54.1274796 ], [ 12.0660818, 54.1271032 ], [ 12.0663372, 54.1264397 ], [ 12.066602, 54.1259285 ], [ 12.0667849, 54.1256274 ], [ 12.0673686, 54.1248759 ], [ 12.067822, 54.1242242 ], [ 12.0692668, 54.1224049 ], [ 12.0696408, 54.1219211 ], [ 12.0700315, 54.1214453 ], [ 12.0709979, 54.1204481 ], [ 12.0715738, 54.1198798 ], [ 12.0748851, 54.1167249 ], [ 12.0758649, 54.1157855 ], [ 12.0763752, 54.115286 ], [ 12.0776249, 54.1140949 ], [ 12.0779733, 54.1137414 ], [ 12.0779771, 54.1137372 ], [ 12.0798266, 54.11178 ], [ 12.0804357, 54.1112006 ], [ 12.0808667, 54.1108364 ], [ 12.0814755, 54.1102844 ], [ 12.0822906, 54.1095836 ], [ 12.0847821, 54.1072219 ], [ 12.0859454, 54.1060663 ], [ 12.0876647, 54.1067384 ], [ 12.0874385, 54.1070339 ], [ 12.0873372, 54.1071459 ], [ 12.0867848, 54.1076871 ], [ 12.0872917, 54.107988 ], [ 12.0874398, 54.108166 ], [ 12.0875969, 54.1083336 ], [ 12.0894152, 54.1096957 ], [ 12.0893207, 54.109741 ], [ 12.0907697, 54.110827 ], [ 12.0908763, 54.1111238 ], [ 12.0923694, 54.111575 ], [ 12.0956716, 54.1125 ], [ 12.0933375, 54.1162086 ], [ 12.0934097, 54.124162 ], [ 12.0934565, 54.1246374 ]]).addTo(map);
  var polygon1 = L.polygon([
    [12.102637,54.094313],
    [12.085954,54.136953],
    [12.082964,54.133733]
  ]).addTo(map);
 function validation(datac){
  
  console.log('poly',polygon);
  const clusterpoints = [];
          for (var i = 0; i < Object.keys(datac).length; i++){
          //for (var i = 0; i < 10; i++){
            //clusterpoints.push(datac[i]);
           
            if (polygon.contains(datac[i].geometry.coordinates) ){
              console.log('tocluster', datac[i]);
              clusterpoints.push(datac[i]);
            }}
            console.log('clusterpoints', clusterpoints);
          if (clusterpoints !== []){
            makecluster(clusterpoints);
          }
}

// var polygonData = L.geoJSON(polygonJson, {
//   onEachFeature: function (feature, layer) {
//   layer.bindPopup(`<b>Name: </b>` + layer._bounds._northEast.lat)

// }}).addTo(map);
  function validation(datac){ 
    var j=0;
  //makecluster(datac);
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
   }   
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

// var markers2 = L.DonutCluster({
//   chunkedLoading: true,
//   disableClusteringAtZoom: 11
  
// }, {
//   key: 'title'
//   , arcColorDict: {
//                 Postive: 'white',
//                 Negative: 'yellow',   
                 
//               }
// })
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
        var title = feature.SentimentTyp; 
        console.log('pop',feature.properties.coordinates);
        //layer.bindPopup(`<b>coordinates: </b>` + feature.geometry.coordinates);
    },
    pointToLayer: function (feature, latlng) {
      var SentiTyp = feature.SentimentTyp;
      //console.log(feature.image);
      // const popupContent = "<tr><td>Elevation </td><td>" +
      // feature.coordinates[1] +
      // "</td></tr>"; //+'<img src="feature.image" height="35" />'
      
      ///console.log(SentiTyp);
      var  marker = L.marker(latlng,{
        title:gettitel(SentiTyp),icon:geticon(SentiTyp)
      }).bindPopup(`<b>coordinates: </b>` + feature.geometry.coordinates);;

      var  marker2 = L.marker(latlng,{
        title:gettitel(SentiTyp),icon:geticon(SentiTyp)
      }).bindPopup(`<b>coordinates: </b>` + feature.geometry.coordinates);
      //12.11118,54.13027
      //marker.bindPopup(feature);
      //console.log(geticon(SentiTyp));
      markers.addLayer(marker);  
      //markers2.addLayer(marker2); 
    
    },
  });
  
  // marker clustering
  //map.addLayer(markers2);
  map.addLayer(markers); 
  
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