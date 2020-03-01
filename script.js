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
	

function myFunction() {
  var x = document.getElementById("content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/*---------------------timeline---------------*/
(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();


