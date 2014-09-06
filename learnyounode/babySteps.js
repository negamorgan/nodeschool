var args = process.argv.slice(2);

if(args.length > 0){ 
  var sum = args.reduce(function(a,b){ 
    return +a + +b; 
  }); 
  console.log(sum);
}