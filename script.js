// JavaScript Document


fetch("https://api.spacexdata.com/v3/info")
	.then(function(response){
	return response.json();
	})
	.then(function(json){
	newInfo(json);
	})

	.catch(function(error){
	console.dir(error);
});

	
	function newInfo(info){
		console.dir(info);
		
		var infoSection = document.getElementById("content");
			infoSection.innerHTML +=
			`<div>
				<p>Name: ${info.name}</p>
				<p>Founder: ${info.founder}</p>
				<p>Founded: ${info.founded}</p>
				<p>Employees: ${info.employees}</p>
				<p>Vehicles: ${info.vehicles}</p>
				<p>Launch Sites: ${info.launch_sites}</p>
			</div>`
		}
	


