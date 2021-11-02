function lowerCase(string) {
	if (typeof string === 'string') {
		return string.toLowerCase()
	} else {
		return string
	}
}

function removeExtraWords(string) {
	if (typeof string === 'string') {
		return string.split(' ')[0]
	} else {
		return string
	}
}

function pushItemsIntoArray(input) {
	let wins = []
	for (let i = 0; i < input.nobelPrizes.length; i++) {
		wins.push(input.nobelPrizes[i])
	}
	return wins
	// console.log(echteData.nobelPrizes[0].laureates[0].knownName.en)
}

function getLaureatesInfo(input) {
	let laureates = []
	for (let i = 0; i < input.length; i++) {
		laureates.push(input[i].laureates)
	}
	return laureates
}

function putNamesInotArray(input) {
	let winnerNames = []
	for (let i = 0; i < input.length; i++) {
		winnerNames.push(input[i][0].knownName)
	}
	return winnerNames
}

fetch(
	'https://api.nobelprize.org/2.0/nobelPrizes?limit=200&nobelPrizeYear=1999'
)
	.then(response => response.json())
	.then(data => pushItemsIntoArray(data))
	.then(data => getLaureatesInfo(data))
	.then(data => putNamesInotArray(data))
	.then(data => console.log(data))
