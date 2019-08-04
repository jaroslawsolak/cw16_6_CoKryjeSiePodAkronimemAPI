var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

function searchCountries() {
	var countryName = document.getElementById('country-name').value;
	if (!countryName.length) countryName = 'Poland';
	fetch(url + countryName)
		.then(function (resp) {
			return resp.json();
		})
		.then(showCountriesList);
}

function showCountriesList(resp) {
	countriesList.innerHTML = '';
	resp.forEach(function (item) {
		var liEl = document.createElement('li');
		liEl.innerText = item.name;
		countriesList.appendChild(liEl);
		
		var liEl2 = document.createElement('li');
		liEl2.innerText = 'Capital: ' + item.capital;
		countriesList.appendChild(liEl2);
	});
}
document.getElementById('search').addEventListener('click', searchCountries);