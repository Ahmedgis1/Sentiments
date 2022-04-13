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
    var subject = ortteil;
    
    var score =zahl;
    // console.log('subject',ortteil);
    // console.log('score',ortteil);
    // console.log('subject',subject);
    // console.log('score',score);
     
     var data = [{
       type: 'bar',
       x: ortteil,
       y: zahl,
       mode: 'markers',
       transforms: [{
         type: 'aggregate',
         groups: ortteil,
         aggregations: [
           {target: 'y', func: 'count', enabled: true},
         ]
       }]
     }]
     var layout = {
       title: '<b>Number of Entries in the Districts of Hanse- und Universitätsstadt Rostock',
       xaxis: {title: 'District'},
       yaxis: {title: 'Number of Entries'},
       height: 400,
       width: 1400,
     
   
     }
     
     Plotly.newPlot('myDiv', data, layout)

     // line chart
     var trace1 = {
        x: ortteil,
        y: Positive,
        mode: 'lines+markers',
        name: 'Positive',
        transforms: [{
            type: 'aggregate',
            groups: ortteil,
            aggregations: [
              {target: 'y', func: 'count', enabled: true},
            ]
          }]
      };
      
      var trace2 = {
        x: ortteil,
        y: negative,
        mode: 'lines+markers',
        name: 'Negative',
        transforms: [{
            type: 'aggregate',
            groups: ortteil,
            aggregations: [
              {target: 'y', func: 'count', enabled: true},
            ]
          }]
      };
      
      var PNdata = [trace1, trace2];
      var layout2 = {
        title: '<b>Number of Positive and Negative Entries in the Districts of Hanse- und Universitätsstadt Rostock',
        xaxis: {title: 'District'},
       yaxis: {title: 'Number of positive and Negative Entries'},
      };
      Plotly.newPlot('PN', PNdata,layout2);


      // var data3 = [{
      //   values: [NPositive,Nnegative],
      //   labels: ['Postive', 'negative'],
      //   type: 'pie'
      // }];
      
      // var layout3 = {
      //   title:'Total Postive and Negative Entries',
      //   height: 400,
      //   width: 400
      // };
      
      // Plotly.newPlot('pn1', data3, layout3);


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


      
    }
