
fetch("https://restcountries.eu/rest/v2/all"). then (response => response.json())
.then(function(data){
	for(i=0;i<data.length;i++){
		addToDOM(data[i]);
	}
});

let mainContainer = document.createElement("div");
mainContainer.classList.add("container");
document.body.appendChild(mainContainer);

let mainRow = document.createElement("div");
mainRow.classList.add("row");
mainContainer.appendChild(mainRow);

function addToDOM(country){
	//console.log(country);
	let mdiv = document.createElement("div");
	mdiv.setAttribute("class","col-lg col-sm-12");
	mainRow.appendChild(mdiv);
	let card = document.createElement("div");
	card.classList.add("card");
	card.setAttribute("style","width: 18rem;");
	mdiv.appendChild(card);
	let cardHeader = document.createElement("div");
	cardHeader.classList.add("card-header");
	cardHeader.innerText = country.name;
	card.appendChild(cardHeader);
	let flag = document.createElement("img");
	flag.setAttribute("src", country.flag);
	flag.classList.add("card-img-top");
	card.appendChild(flag);	
	let cardBody = document.createElement("div");
	cardBody.classList.add("card-body");
	card.appendChild(cardBody);
	let cardTitle = document.createElement("h5");
	cardTitle.classList.add("card-title");
	cardTitle.innerText ="Details";
	cardBody.appendChild(cardTitle);
	let cardText = document.createElement("p");
	cardText.classList.add("card-text");
	cardBody.appendChild(cardText);
	let unorderedList = document.createElement("ul");
	cardText.appendChild(unorderedList);
	let capital = document.createElement("li");
	capital.innerText = "Capital: "+ country.capital;
	unorderedList.appendChild(capital);
	let region = document.createElement("li");
	region.innerText = "Region: "+country.region;
	unorderedList.appendChild(region);
	let countryCode = document.createElement("li");
	countryCode.innerText = "Country Code: "+ country.alpha3Code;
	unorderedList.appendChild(countryCode);
	let latLong = document.createElement("li");
	latLong.innerText = "latLong: "+country.latlng;
	unorderedList.appendChild(latLong);
	let weatherButton = document.createElement("button");
	//weatherButton.setAttribute("href","#");
	weatherButton.setAttribute("class","btn btn-primary");
	weatherButton.addEventListener("click", function() {
		getWeather(country.capital);
	});
	weatherButton.innerText = "Get Weather";
	cardBody.appendChild(weatherButton);
}



	async function  getWeather(cityName) {
	//console.log(cityName);
	let weather = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid=eb67f6966933acd14cca52e58219f756');
	let weatherJSON = await weather.json();
	alert("Weather in "+ cityName + " is "+ weatherJSON.main.temp + " degreeCelsius")

}