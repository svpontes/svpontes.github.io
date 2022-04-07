const apiURL = "hhttps://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=64a077ede0594723caa3d5ad20669634";
fetch(apiURL)
  .then((response) => response.json())
  .then((myObject) => {
    console.log(myObject);
    document.getElementById('current-temp').textContent = myObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + myObject.weather[0].icon + '.png';  // note the concatenation
    const desc = myObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });
fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (myObject) {
    // console.table(myObject); // temporary checking for valid response and data parsing
	
	if(document.querySelector("#temperature-Currently") !== null) {
    document.querySelector("#description").textContent = myObject.weather[0].main;
    document.querySelector("#windChill1").textContent = windChillFormula(myObject.main.temp, myObject.wind.speed);
		document.querySelector("#temperature-Currently").textContent = myObject.main.temp;
		document.querySelector("#high-temperature1").textContent = myObject.main.temp_max;
		document.querySelector("#humidity1").textContent = myObject.main.humidity;
		document.querySelector("#wind-speed1").textContent = myObject.wind.speed;
	}
	
	if(document.querySelector("#imagesrc") !== null) {
		const imagesrc = "https://openweathermap.org/img/w/" + myObject.weather[0].icon + ".png";
		const desc = myObject.weather[0].description;
		document.getElementById('temperature-Currently').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
	}


  
  });



const windChillFormula = function (temperature,speed) {
    return (35.74 + (0.6215*temperature) - (35.75*(speed**0.16)) + (0.4275*(temperature)*(speed**0.16))).toFixed(1);
  };