var filterLS = require('./filteredLSMod');
var dir = process.argv[2];
var ext = process.argv[3];

filterLS(dir, ext, function(err, data){
  if (err) throw err;
  data.forEach(function(file){
    console.log(file);
  });
});
