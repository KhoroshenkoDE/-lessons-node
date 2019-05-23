var fs = require('fs');

var file = fs.readFileSync('text.txt', 'utf-8');
console.log(file);

var mess = file + '\n' + 'Hello ';
var mess1 = mess + '\n' + 'Honda';

fs.writeFileSync('new_file.txt', mess );
fs.writeFileSync('new_file.txt', mess1 );

fs.readFile('new_file.txt', 'utf-8', function(err, data) {
	console.log(data)
});

fs.writeFile('new.txt', mess, function(err, data) {});

fs.appendFileSync("text.txt", "\nПривет ми ми ми!");
 
fs.appendFile("text.txt", "\nПривет МИP!", 'utf-8', function(error){

    var data = fs.readFileSync("text.txt", "utf8");
    console.log(data); 
});

console.log('Test');