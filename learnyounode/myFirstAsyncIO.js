var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, function(err, data) { 
  if(err) throw err; 
  var file = data.toString();
  var newLines = file.split('\n').length - 1;
  console.log(newLines);
});
