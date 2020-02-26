// JavaScript Document
fetch("https://api.spacexdata.com/v3/launches/latest")
	.then(function(response) {
	return response.json();
})
	.then(function(json) {
	loopTroughResults(json);
})
	.catch(function(error){
	console.log(error);
});
