// import { createRequire } from 'module'
// const require = createRequire(import.meta.url);
const express = require('express');
const Datastore = require('nedb');
//const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
app.use(express.static('client'));
app.use(express.json({ limit: '1mb' }));


const database = new Datastore('databa.db');
database.loadDatabase();




app.get('/insert', (request, response) => {
  
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    } 
    response.json(data);

  });
});

// import json

// with open('map.json') as f:
//   data2 = json.load(f)



app.post('/insert', (request, response) => {
  
  
  const data = request.body;
  //data = data.json();
  //data1.features.append(data);
   const timestamp = Date.now();
   data.timestamp = timestamp;

   
  
    const Doc1=[];
  database.insert(data, function (err, Doc1) {   // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
    //console.log(newDoc);
    //Doc1.push(newDoc);
    response.json(Doc1);
  //console.log(Doc1);
  

    
  });
  database.find({}).sort({ timestamp: 1 }).skip(1).exec(function (err, docs) {
    // docs is [doc3, doc1]
  });
  
});

app.post('/remove', (request, response) => {
  
  const data = request.body;
  //data = data.json();
  //data1.features.append(data);

   //console.log(data.id1);
  
    
  database.remove({_id: data.id1}, {}, function (err, numRemoved) {
    // numRemoved = 1
  });
  database.persistence.compactDatafile()
  //response.json(data); 
});

// create filename and path
  // data.filename = timestamp+'.png';
  // data.filepath = 'client/images/';

  // // create and write file from base64
  // const base64Data = data.image64.replace(/^data:image\/\w+;base64,/, "");
  // fs.writeFile(data.filepath+data.filename, base64Data, 'base64', error => {
  //     console.log(error);
  //     delete data.image64;
  //   });

// app.get('/api', (request, response) => {
  
//   const data = request.body;
//   //data = data.json();
//   //data1.features.append(data);
//   // const timestamp = Date.now();
//   // data.timestamp = timestamp;
//   database.insert(data);
//   response.json(data); 
//   console.log(data);
//   const string2 = data; 
//   var fs = require('fs');
//     fs.writeFile('map (1).json', string2, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("JSON data is saved.");
// });
// });


// # Write JSON file with new data
// with open('test.json', 'w') as f:
//   f.write(json.dumps(data))


// var fs = require('fs');
// var rdata = fs.readFileSync('database.db');
// var myGeoJSON = {};
// myGeoJSON.type = "FeatureCollection";
// //var rdata = '{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[12.077301,54.125905]},"_id":"0ol9MlyDJwxcyGlk"}';
// var geoj = JSON.parse(rdata);
// console.log(geoj);
// myGeoJSON.features = [geoj];
// console.log(myGeoJSON);

// fs.writeFile('words.json', json, finished);

// function finished() {
//   var reply = {
//     status: "success",
//     word: data.word,
//     score: data.score
//   }
 
