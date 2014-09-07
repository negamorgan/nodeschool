var fs = require('fs');
var path = require('path');

module.exports = function filterLS(dir, ext, cb){
  ext = ext[0] === '.' ? ext : '.' + ext;
  fs.readdir(dir, function(err, data) { 
    if(err) { return cb(err); }
    var files = data.filter(function(file){
      return ext === path.extname(file);
    });
    cb(null, files);
  });
}