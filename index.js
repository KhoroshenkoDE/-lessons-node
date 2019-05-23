
var fs = require('fs');
// var nodemailer = require('nodemailer');

var file = fs.readFileSync('text.txt', 'utf-8');
console.log(file);

var mess = file + '\r\n' + 'Hello';

fs.writeFileSync('new_file.txt', mess );

fs.readFile('new_file.txt', 'utf-8', function(err, data) {
	console.log(data)
});

fs.writeFile('new.txt', mess, function(err, data) {});

fs.appendFileSync("text.txt", "\r\n" + "Привет ми ми ми!");
 
fs.appendFile("text.txt", "\r\n" + "Привет МИP!", 'utf-8', function(error){

    var data = fs.readFileSync("text.txt", "utf8");
    console.log(data); 
});





// var mailer = require("nodemailer");


// var smtpTransport = mailer.createTransport({
//     service: "Gmail",
//     auth: {
//         user: "vasilka275@gmail.com",
//         pass: "666demon666"
//     }
// });

// var mail = {
//     from: "vasilka275@gmail.com",
//     to: "dima2121988@gmail.com",
//     subject: "Send Email Using Node.js",
//     text: "Node.js New world for me",
//     html: "<b>Node.js New world for me</b>"
// }

// smtpTransport.sendMail(mail, function(error, response){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Message sent: " + response.message);
//     }

//     smtpTransport.close();
// });










// var transporter = nodemailer.createTransport({
// 	service: 'gmail',
// 	secure: true,
// 	port: 25,
// 	auth: {
// 		user: 'vasilka275@gmail.com',
// 		pass: "666demon666"
// 	}
// });

// var HelperOptions = {
// 	from: 'vasilka275@gmail.com',
// 	to: 'pushistik3457@gmail.com',
// 	subject: 'Hello World',
// 	text: 'test'
// };
// transporter.sendMail(HelperOptions, (error, info) => {
// 	if(error){
// 		return console.log(error);
// 	}
// 	console.log("Sent");
// });






// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
// 	service: 'gmail',
// 	secure: true,
// 	port: 25,
// 	auth: {
// 		user: 'vasilka275@gmail.com',
// 		pass: "666demon666"
// 	}
// });

// var HelperOptions = {
// 	from: '"Denis" <bugtestnode@gmail.com',
// 	to: 'pushistik3457@gmail.com',
// 	subject: 'Hello World',
// 	text: 'test'
// };
// transporter.sendMail(HelperOptions, (error, info) => {
// 	if(error){
// 		return console.log(error);
// 	}
// 	console.log("Sent");
// });
