var search = document.querySelector('#search');
search.addEventListener('submit', searchData);
function searchData(e) {
	//
	e.preventDefault();
	//
	// CALL API ---
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(xhttp.responseText);
			var stockData = response;
			console.log(stockData);
		}
	};
	var symbol = document.querySelector('#input').value;
	const demoAPI = 'demo'; // Not sure what this is for
	const API_KEY = 'PDXHO7LG7Z8VCMZR';
	xhttp.open(
		'GET',
		`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`,
		true
	);
	xhttp.send();
}
