var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath ,'utf8',function(err,data){
    if(err) throw err;
    console.log(data);
})
