fetch("noindex/games.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector(".games-wrap").innerHTML = data;
	});