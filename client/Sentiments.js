// We’ll add a tile layer to add to our map, in this case it’s a OSM tile layer.
// Creating a tile layer usually involves setting the URL template for the tile images
var osmUrl = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {
      maxZoom: 22,
      attribution: osmAttrib
    });

// initialize the map on the "map" div with a given center and zoom
var map = L.map('map').setView([54.13298915040403, 12.085149605756618], 11.5).addLayer(osm);


getData1();
async function getData1() {
    //     // const response = await fetch('testdata.csv');
    const response = await fetch('/insert');
    const data1 = await response.json();
    var Positive = [];
    var negative = [];
    var ortteil = [];
    var zahl = [];
    var NPositive = 0;
    var Nnegative = 0;
    var lt = [];
    var ln = [];
    var sc = [];
    var heat1 = [];
    L.geoJSON(data1, {
       
                onEachFeature: function (feature, layer) {
                         
                    heat1.push({lat:feature.geometry.coordinates[0],lng:feature.geometry.coordinates[1],count: feature.score});
                    lt.push(feature.geometry.coordinates[0]);
                    ln.push(feature.geometry.coordinates[1]);
                    sc.push(feature.score);
                    ortteil.push(feature.ortteil);
                    zahl.push(1);
                    
                    if (feature.score > 0){
                        Positive.push(1);
                        NPositive+=1;

                    }else if (feature.score < 0){
                        negative.push(1);
                        Nnegative+=1;

                    }   
                  
        
                     //feature.properties.gemeindeteil_name
                }});
               // console.log(data1);
               
            document.getElementById('total').textContent = data1.length;
            document.getElementById('positive').textContent = Positive.length;
            document.getElementById('negative').textContent = negative.length;
            
          
}


// getData();
// async function getData() {
//   const response = await fetch('/api');
//   const data = await response.json();
//   const pointList = [];
//   var datac = data;
//   validation(datac);
//   // pointList.push([data]);
//   // console.log(pointList);
//   // for (item of data) {
    
// //   data1.features = data;
// //   console.log(data1.features);
// //   data1.features = ['{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[12.066324,54.134349]},"_id":"6SnlowlCV8G6k8h8"}'
// // ];
//}
// const geojsonMarkerOptions = {
//   radius: 8,
//   fillColor: "#ff7800",
//   color: "#000",
//   weight: 1,
//   opacity: 1,
//   fillOpacity: 0.8,
// };

    
   
   //validation(datac);
   
  
  
  // marker clustering
  //map.addLayer(markers2);
 // map.addLayer(markers); 
  


// const markers = L.markerClusterGroup();

// // loading geojson
// function validation(datac){
//   console.log(datac);
//   L.geoJSON(datac, {
//     onEachFeature: function (feature, layer) {
//       const popupContent =
//         '<h4 class = "text-primary">Street Light</h4>' +
//         '<div class="container"><table class="table table-striped">' +
//         "<thead><tr><th>Properties</th><th>Value</th></tr></thead>" +
//         "<tbody><tr><td> Name </td><td>" +
//         feature.properties.Name +
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




// marker clustering
// map.addLayer(markers);
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








//add the icons the controls will draw

var icon0 = L.icon({
  iconName: 'Blank',
  iconUrl: 'images/Blank.png',
  iconSize: [20,20],
  });


var icon7 = L.icon({
iconName: 'icon7',
iconUrl: 'images/0.778.png',
iconSize: [20,20],
});

var icon6 = L.icon({
  iconName: 'icon6',
  iconUrl: 'images/0.644.png',
  iconSize: [20,20],
  });  
var icon5 = L.icon({
  iconName: 'icon5',
  iconUrl: 'images/0.557.png',
  iconSize: [20,20],
  }); 

var icon4 = L.icon({
  iconName: 'icon4',
  iconUrl: 'images/0.409.png',
  iconSize: [20,20],
  });

  var icon3 = L.icon({
    iconName: 'icon3',
    iconUrl: 'images/0.332.png',
    iconSize: [20,20],
    });
  
  
  var icon2 = L.icon({
  iconName: 'icon2',
  iconUrl: 'images/0.221.png',
  iconSize: [20,20],
  });
  
  var icon1 = L.icon({
    iconName: 'icon1',
    iconUrl: 'images/0.123.png',
    iconSize: [20,20],
    });  
  var iconn5 = L.icon({
    iconName: 'iconn5',
    iconUrl: 'images/-0.534.png',
    iconSize: [20,20],
    }); 
  
  var iconn4 = L.icon({
    iconName: 'iconn4',
    iconUrl: 'images/-0.440.png',
    iconSize: [20,20],
    }); 
  
    var iconn3 = L.icon({
      iconName: 'iconn3',
      iconUrl: 'images/-0.368.png',
      iconSize: [20,20],
      });  
    var iconn2 = L.icon({
      iconName: 'iconn2',
      iconUrl: 'images/-0.209.png',
      iconSize: [20,20],
      }); 
    
    var iconn1 = L.icon({
      iconName: 'iconn1',
      iconUrl: 'images/-0.142.png',
      iconSize: [20,20],
      }); 
  
    function geticon1(type){
    
    
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
    
     //await 
    //var pointData = L.geoJSON(pointJson).addTo(map)
    getpoints();
   async function getpoints() {
    const response = await fetch('/insert');
    const data = await response.json();
    console.log(data);
    showpoints(data)
    //L.geoJSON(data,{icon:icon1}).addTo(map)
    //var  marker = L.marker(latlng,{
     // title:gettitel(SentiTyp),icon:geticon(SentiTyp)
    //});
    //const pointList = [];
    //var datac = data;
    
    
   }

   customMarker = L.Marker.extend({
    options: { 
       someCustomProperty: '',
    }
   });
 function showpoints(data){
    
   
  L.geoJSON(data, {

    pointToLayer: function (feature, latlng) {
      var SentiTyp = feature.SentimentTyp;
      //console.log(feature.image);
      // const popupContent = "<tr><td>Elevation </td><td>" +
      // feature.coordinates[1] +
      // "</td></tr>"; //+'<img src="feature.image" height="35" />'
      
      //console.log(SentiTyp,geticon1(SentiTyp));
      var  marker = L.marker(latlng,{icon: geticon1(SentiTyp)
      });
      // var myMarker = new customMarker(latlng,{icon: geticon(SentiTyp)}, { 

      //   id: '',
      // });

    
      //12.11118,54.13027
      //marker.bindPopup(feature);
    // console.log(geticon(SentiTyp));
    marker.addTo(map)  
      //markers2.addLayer(marker2); 
    
    },
  });
}
   


// save the layers when click on savebutton
// var savebutton = L.easyButton({
//   position: 'topright',
//   states: [{
//           stateName: 'Save',        
//           icon:      '<i class="fa fa-save" style="font-size:25px;"></i>',
//           title:     'Save the layers',      
//           onClick: function(btn, map) {
//             const currentlayres = [];       
//             map.eachLayer((layer) => {
//               if (layer.pm) {
//                 const geojson = layer.toGeoJSON();
//                 geojson.SentimentTyp = layer.options.icon.options.iconName;
//                 //const image64 = layer.options.someCustomProperty;
//                 geojson.Word = layer.options.Word;
//                 //console.log('button', image64)
//                 //const data = {geojson, image64}
//                 layer.remove();
              
     
     
//                 currentlayres.push(geojson);
//               }
//             });
//             const options1 = {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(currentlayres)
//             };
//             const response =  fetch('/api', options1);
//             const json =  response.json();
//             console.log(json);  
          
//           }
      
//   }]
// });
// savebutton.button.style.padding = '0px';

//  savebutton.addTo(map);


 // //test
 var popLocation;
map.on('click', function(e) {        
   popLocation= e.latlng;
  //marker = new L.marker(popLocation, {icon: icon4}).addTo(map).bindPopup();
  var popup = L.popup(
     { 
      minWidth: 300,
      maxHeight: 200
   }
  )
  .setLatLng(popLocation)
  .setContent('<span><b>Positive</b></span><br/><img id="icon" src="images/0.778.png" height="35" onclick="saveIdIW(icon7,0.778)"/><img id="icon" src="images/0.644.png" height="35" onclick="saveIdIW(icon6,0.644)"/><img id="icon" src="images/0.557.png" height="35" onclick="saveIdIW(icon5,0.557)"/><img id="icon" src="images/0.409.png" height="35" onclick="saveIdIW(icon4,0.409)"/><img id="icon" src="images/0.332.png" height="35" onclick="saveIdIW(icon3,0.332)"/><img id="icon" src="images/0.221.png" height="35" onclick="saveIdIW(icon2,0.221)"/><img id="icon" src="images/0.123.png" height="35" onclick="saveIdIW(icon1,0.123)"/></span><br/><span><b>Negative</b></span><br/><img id="icon" src="images/-0.534.png" height="35" onclick="saveIdIW(iconn5,-0.534)"/><img id="icon" src="images/-0.440.png" height="35" onclick="saveIdIW(iconn4,-0.440)"/><img id="icon" src="images/-0.368.png" height="35" onclick="saveIdIW(iconn3,-0.368)"/><img id="icon" src="images/-0.209.png" height="35" onclick="saveIdIW(iconn2,-0.209)"/><img id="icon" src="images/-0.142.png" height="35" onclick="saveIdIW(iconn1,-0.142)"/></span><br/><input type="button" id="okBtn" value="Insert word" onclick="insertword()"/>')
  .openOn(map); 
  //class = "fa fa-spinner fa-spin"
  //console.log(popup);
          
});

 function onClick(e) {
  //var currentlayres = [];
  //alert(this.getLatLng());
  console.log(this.options.id);

  const geojson = this.toGeoJSON();
   geojson.id1=this.options.id

const options1 = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(geojson)
};
const response =  fetch('/remove', options1);
this.remove();
//const json =  response.json();
  //currentlayres=this.getLatLng();
//   getData();
// async function getData() {
//   const response = await fetch('/api');
//   const data = await response.text();
//   console.log('dataapi:',data);
// }
  
}

// map.on('popupopen', function(e) {
//   var px = map.project(e.target._popup._latlng); // find the pixel location on the map where the popup anchor is
//   px.y -= e.target._popup._container.clientHeight/2; // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
//   map.panTo(map.unproject(px),{animate: true}); // pan to new center
// });

var polygonData = L.geoJSON(polygonJson, {
     
  onEachFeature: function (feature, layer) {
  

    //for (var i = j; i < Object.keys(datac).length; i++){
    //for (var i = j; i < 10; i++){
      //clusterpoints.push(datac[i]);
     
      
   
  
    

      //layer.bindPopup(`<b>Name: </b>` + feature.properties.gemeindeteil_name)
  },
  style: {
      fillColor: 'yellow',
      fillOpacity: 0.1,
      color: '#c0c0c0',
  }
}).addTo(map);

var ortteil='';
async function getortteile(markercheck){ 
  //var j=0;
console.log('marker',markercheck);
   var polygonData = L.geoJSON(polygonJson, {
     
      onEachFeature: function (feature, layer) {
      
        const clusterpoints = [];
        //for (var i = j; i < Object.keys(datac).length; i++){
        //for (var i = j; i < 10; i++){
          //clusterpoints.push(datac[i]);
         
          if (layer.contains(markercheck) ){
            console.log('tocluster', feature.properties.gemeindeteil_name);
            ortteil=  feature.properties.gemeindeteil_name;
          }
       
      
        

          //layer.bindPopup(`<b>Name: </b>` + feature.properties.gemeindeteil_name)
      },
      style: {
          fillColor: 'yellow',
          fillOpacity: 0.1,
          color: '#c0c0c0',
      }
  });
 }   

 
 async function saveIdIW(iconid,score) {
  //var popLocation=marker._latlng;
// console.log(popLocation);
console.log(iconid);
const htmltext=document.getElementById("icon").src;

 console.log(htmltext);
 const searchTerm = 'images/';
 const searchTerm1 = '.png';
const indexOfFirst = htmltext.indexOf(searchTerm);
const indexOfSecond= htmltext.indexOf(searchTerm1);
const iconscore= htmltext.substring(indexOfFirst+7,indexOfSecond);
console.log(indexOfFirst,indexOfSecond);
console.log('if',iconscore);
// // customMarker = L.Marker.extend({
// //   options: { 
// //      someCustomProperty: '',
// //   }
// // });
// if (iconname1 == 'icon7'){
//   console.log('if',iconname1);
// }
 
// L.marker(popLocation, {icon: icon1}).addTo(map).bindPopup('<input id="upload" type="file" onChange="handleImageUpload()" /><img id="display-image" src="" width="250" height="200" /><input type="button" class = "fa fa-spinner fa-spin" id="okBtn" value="Save" onclick="saveIdIW()"/>');
// console.log(L.marker(popLocation, {icon: icon1}));

// map.closePopup();
customMarker = L.Marker.extend({
  options: { 
    id: '',
    ortteil: ''
  }
});


var myMarker = new customMarker(popLocation,{icon: iconid}, { 

  id: '',
  ortteil: ''
});

//console.log(myMarker);
myMarker.addTo(map).on('click', onClick);
await getortteile(popLocation);
console.log('ort',ortteil);
myMarker.options.ortteil=ortteil;


map.closePopup();
const geojson = myMarker.toGeoJSON();

geojson.SentimentTyp = myMarker.options.icon.options.iconName;
geojson.Word = myMarker.options.Word;
geojson.ortteil = myMarker.options.ortteil;
geojson.score = score;

const options1 = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(geojson)
};
const response = await  fetch('/insert', options1);
const db_json = await response.json();
  console.log('äresponseä',db_json._id);
  myMarker.options.id= db_json._id;
  console.log('coor',myMarker._latlng);

  //console.log('coor',myMarker.latlng);

 


  
  }


function insertword()
{
  var popup = L.popup()
  .setLatLng(popLocation)
  .setContent('<span><b>Word</b></span><br/><input id="iword" maxlength="20" type="text"/><input type="button" id="okBtn" value="Save" onclick="SaveWord()"/>')
  .openOn(map); 
  //class = "fa fa-spinner fa-spin"
          
};

function geticon(s){
      
  
  console.log('case',s);   
  switch (true) {
    case (s > 6):
      return icon7 
    case (s == 6):
      return icon6
    case (s == 5):
      return icon5
    case (s == 4):
      return icon4
    case (s == 3):
      return icon3
    case (s ==2):
      return icon2  
    case (s == 1):
      return icon1  
    case (s == 0):
      return icon0
    case (s == -0):
      return icon0
    case (s < -4):
      return iconn5
    case (s == -4):
      return iconn4  
    case (s == -3):
      return iconn3
    case (s == -2):
      return iconn2  
    case (s == -1):
      return iconn1  
  } 
}
var  score=0;
//const shifters={};
async function SaveWord() {
  
  var words=(document.getElementById("iword").value).toLowerCase();
  
  await getData(words);
var s=0;
if (score== 0) {
alert('Wort nicht gefunden');

}else {
  if (score > 0) {
    s =Math.floor(score*10);
 } else {
   s =Math.ceil(score*10);
 }
 
 console.log('return',score);
 console.log('icons',s,score);
 var iconid= geticon(s);
 console.log('icon',iconid);
 
 customMarker = L.Marker.extend({
   options: { 
      Word: document.getElementById("iword").value,
   }
 });
 
 
 var myMarker = new customMarker(popLocation,{icon: iconid}, { 
   title: 'unselected',
   radius: 20,
   Word: document.getElementById("iword").value,
 });
 
 console.log(myMarker);
 myMarker.addTo(map).on('click', onClick);

 map.closePopup();
 const geojson = myMarker.toGeoJSON();
 geojson.SentimentTyp = myMarker.options.icon.options.iconName;
 geojson.Word = myMarker.options.Word;
 geojson.score = score;
 
 const options1 = {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(geojson)
 };
 const response = await  fetch('/insert', options1);
 const db_json = await response.json();
   console.log('äresponseä',db_json._id);
   myMarker.options.id= db_json._id;
   console.log(myMarker);
}

  
    
}

async function getshifters() {
  
  const response = await fetch('shifters.json');
  const shifters = await response.json();
  //console.log('nag:',shifters)
  return shifters;
}

async function getIntensifires() {
  
  const response = await fetch('Intensifires.json');
  const Intensifires = await response.json();
  //console.log('nag:',shifters)
  return Intensifires;
}

async function getData(words) {
  
  const response = await fetch('all_M_sim.json');
  const afinn = await response.json();
  score=0;
  
//var txt = select('#txt');
//txt.input(typing);
//console.log(afinn);

// function typing(){

  //var words= 'nicht schlecht schade';
  const neg_words = 'nicht|kein|keine|keines|keinen|keinem|keiner';
  var hasshifter= false;
  var hasintensifier= false;
  var intensifier_score=0;
  const shifters=await getshifters();
  const Intensifires=await getIntensifires();
  
  console.log('nag:',shifters)
  if (words.includes(' ')){
    const wordparts = words.split(' ');
    for (var i = 0; i < wordparts.length; i++){
      if (afinn[wordparts[i]]){
        score += Number(afinn[wordparts[i]]);
        console.log('bad:',wordparts[i],score);

      }else if (shifters[wordparts[i]]) {
        hasshifter= true;
          // if (afinn[wordparts[i+1]]){
          // score += (Number(afinn[wordparts[i+1]])*-1);
          //   i+=1;
            console.log('nag:',hasshifter)
         // }  
      } else if (Intensifires[wordparts[i]]) {
        hasintensifier= true;
        intensifier_score+=Intensifires[wordparts[i]]

          // if (afinn[wordparts[i+1]]){
          // score += (Number(afinn[wordparts[i+1]])*-1);
          //   i+=1;
            console.log('nag:',hasintensifier)
         // }  
      }
      
      //const neg_words = neg_words1.split('|');
      //console.log(wordparts[i]);
      
      //for (var j = 0; j < neg_words.length; j++){
        //console.log(neg_words[j])
        
      //}
            
      

        
    


    }
    
  } else {
    
    if (afinn[words]){
    score += Number(afinn[words]);
    }
  } 
  if (hasintensifier) {  
   score = score*intensifier_score;
  
  } 

  if (hasshifter) {
    
    if (score>0){
      //score = score-1;
      score = 1 - score;
    }else if (score<0){
      //score = 1 - score;
      score = 1 - Math.abs(score);
      console.log(score);
    }
    //score = 1-score;
    //console.log(score);
  } 
  
    console.log('return',score);
  

  
} 




function imageload() 
{
  var popup = L.popup()
  .setLatLng(popLocation)
  .setContent('<input id="upload" type="file" onChange="handleImageUpload()" /><img id="display-image" icon="-image" src="" height="200" />')
  .openOn(map); 
  //class = "fa fa-spinner fa-spin"
          
};



function handleImageUpload() 
{
console.log(document.getElementById("upload").icon)
var image = document.getElementById("upload").files[0];

    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("display-image").src = e.target.result;
      //console.log(e.target.result);
    }
       
    
    reader.readAsDataURL(image);
    

} 

// map.on('draw:created', function (e) {
//   var idIW = L.popup();
//   var content = '<span><b>Shape Name</b></span><br/><input id="shapeName" type="text"/><br/><br/><span><b>Shape Description<b/></span><br/><textarea id="shapeDesc" cols="25" rows="5"></textarea><br/><br/><input type="button" class = "fa fa-spinner fa-spin" id="okBtn" value="Save" onclick="saveIdIW()"/>';
//   idIW.setContent(content);
//   idIW.setLatLng(latlng); //calculated based on the e.layertype
//   idIW.openOn(map);
// });


function saveImg() {
  //document.getElementById("display-image").src


  map.eachLayer((layer) => {
    if (layer.isPopupOpen) {
      layer.options.someCustomProperty = document.getElementById("display-image").src;
      
    


      console.log(layer.options.someCustomProperty);
    }
  });
  //this.options.someCustomProperty=document.getElementById("display-image").src;
  
  
  //markers.eachLayer(function (marker) {
   // if (!e.layer.contains(marker.getLatLng())) {
    
    //}
}




//   var drawings = drawnItems.getLayers();  //drawnItems is a container for the drawn objects
//   drawings[drawings.length - 1].title = sName;
//   drawings[drawings.length - 1].content = sDesc;

//   if (idIW) {
//      map.closePopup();
//   }
// //test

// var table;
// function preload() {

//   table = loadTable('SentiWS_v2.0_Negative.txt');
//   //console.log(table);
// }

// function setup() {

//   noCanvas();
//   console.log(table);
// }