var fs = require('fs');

var path = process.argv[2];
var file = fs.readFileSync(path).toString();
var newLines = file.split('\n').length - 1;
console.log(newLines);
