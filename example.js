var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequestServer1(request, response) {

	response.end("You are always awesome!");

}

function handleRequestServer2(request, response){

	response.end("Why are you even trying?");

}



var server1 = http.createServer(handleRequestServer1);

var server2 = http.createServer(handleRequestServer2);

server1.listen(PORT1, function(){
	console.log("Wow it's on");
});

server2.listen(PORT2, function(){
	console.log("yay!");
});