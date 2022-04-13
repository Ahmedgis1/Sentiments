getData();
async function getData() {
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
            //return {Ortteil, zahl};
          

   
    //  var subject = ['Moe','Larry','Curly','Moe','Larry','Curly','Moe','Larry','Curly','Moe','Larry','Curly']
    //  var score = [1,6,2,8,2,9,4,5,1,5,2,8]
    

      //heat map

      // console.log('heat111',lt);
      // var data = [{type: 'densitymapbox', lon: lt, lat: ln, z: sc}];

      //   var layout = {width: 600, height: 400, mapbox: {center: {lon: 12.085149605756618 , lat: 54.13298915040403},style: 'outdoors', zoom: 13}};
       
      //   var layout = {
      //       mapbox: {center: {lon: 12.085149605756618 , lat: 54.13298915040403}, style: "outdoors", zoom: 9},
      //       coloraxis: {colorscale: "Viridis"}, title: {text: "Earthquake Magnitude"},
      //       width: 800, height: 600, margin: {t: 30, b: 0}};
        
      //   var config = {mapboxAccessToken: "pk.eyJ1IjoiYWhtZWRqZ2lzIiwiYSI6ImNsMWFyMjFiODIweDAzaXF6MWMwYnNhenkifQ.7DR80uzMVm-j2vN0RkOSvApk.eyJ1IjoiYWhtZWRqZ2lzIiwiYSI6ImNsMWFyMjFiODIweDAzaXF6MWMwYnNhenkifQ.7DR80uzMVm-j2vN0RkOSvA"};
        
      //   Plotly.newPlot('map', data, layout,config);


      var testData = {
        max: 2,
        data: heat1
      };
      var baseLayer = L.tileLayer(
        'https://{s}.tile.osm.org/{z}/{x}/{y}.png',{
          attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
          maxZoom: 18
        }
      );

    //   var osmUrl = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    // osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // osm = L.tileLayer(osmUrl, {
    //   maxZoom: 22,
    //   attribution: osmAttrib
    // });

// initialize the map on the "map" div with a given center and zoom
//var map = L.map('map').setView([54.13298915040403, 12.085149605756618], 12).addLayer(osm);

      var cfg = {
        // radius should be small ONLY if scaleRadius is true (or small radius is intended)
        "radius": 0.01,
        "maxOpacity": 0.4, 
        // scales the radius based on map zoom
        "scaleRadius": true, 
        // if set to false the heatmap uses the global maximum for colorization
        // if activated: uses the data maximum within the current map boundaries 
        //   (there will always be a red spot with useLocalExtremas true)
        "useLocalExtrema": true,
        // which field name in your data represents the latitude - default "lat"
        latField: 'lng',
        // which field name in your data represents the longitude - default "lng"
        lngField: 'lat',
        // which field name in your data represents the data value - default "value"
        valueField: 'count'
      };


      
      var heatmapLayer = new HeatmapOverlay(cfg);

      var map = new L.Map('map', {
        center: new L.LatLng(54.13298915040403, 12.085149605756618),
        zoom: 12,
        layers: [baseLayer, heatmapLayer]
      });

      heatmapLayer.setData(testData);

      // make accessible for debugging
      layer = heatmapLayer;
      


    //   var map = new L.Map('map', {
    //     center: new L.LatLng(54.13298915040403, 12.085149605756618),
    //     zoom: 11,
    //     layers: [baseLayer, heatmapLayer]
    //   });

    //   console.log(heatmapLayer);

    //   heatmapLayer.setData(testData);
    //   var heat = L.heatLayer(heat1, 
    //     {radius: 25}).addTo(map);
    }
