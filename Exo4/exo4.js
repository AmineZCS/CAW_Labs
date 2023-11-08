var fs = require('fs');
var destination = process.argv[2];
var text = process.argv[3];
fs.writeFile(`${destination}.txt`,text, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
fs.readFile(`${destination}.txt`,'utf8',function(err,data){
    if(err) throw err;
    console.log('The file contains: ',data);
})