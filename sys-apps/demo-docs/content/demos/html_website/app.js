/**
* very simple html website
*/
console.log(deskShell);
var running = deskShell.startApp({
	htdocs:__dirname+"/htdocs/"
	,openSocket:true
	,launchChromium:true
	,exitOnChromiumClose:true
	,width:400
});