var fs = require("fs");
var faker = require("faker/index");

var songsArray = []; // empty Array, song Objects are push()-ed here
var key = "120Ksongs";

for (var songCount = 1; songCount < 120001; songCount++) {
  //song
  var song = {
    id: songCount,
    name: `${songCount}`, 
    artist: `${songCount + 1}`, 
    album: `${songCount + 2}`, 
    genre: "Alternative",
    time: 284,
    trackNumber: 1,
    year: 1995
  };

  songsArray.push(song);
}

fs.writeFile(`./${key}.data.json`, JSON.stringify(songsArray), err => {
  if (err) throw err;
  console.log(key + " data successfully written to file!");
});
