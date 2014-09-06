var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3][0] === '.' ? process.argv[3] : '.'+process.argv[3];

fs.readdir(dir, function(err, data) { 
  if(err) throw err; 
  data.forEach(function(file){
    // file ends with ext
    if (ext === path.extname(file)){
      console.log(file);
    }
  });
});