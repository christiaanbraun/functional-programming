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
	let winnerNames = []
	for (let i = 0; i < input.nobelPrizes.length; i++) {
		for (let j = 0; j < input.nobelPrizes[i].laureates.length; j++) {
			if (input.nobelPrizes[i].laureates[j].knownName) {
				winnerNames.push(input.nobelPrizes[i].laureates[j].knownName.en)
			} else if (input.nobelPrizes[i].laureates[j].orgName) {
				winnerNames.push(input.nobelPrizes[i].laureates[j].orgName.en)
			}
		}
	}

	return winnerNames
}

// Eerst deed ik dit maar dat was omslachtig
// function getLaureatesInfo(input) {
// 	let laureates = []
// 	for (let i = 0; i < input.length; i++) {
// 		laureates.push(input[i].laureates)
// 	}
// 	return laureates
// }

// function putNamesInotArray(input) {
// 	let winnerNames = []
// 	for (let i = 0; i < input.length; i++) {
// 		winnerNames.push(input[i][0].knownName)
// 	}
// 	return winnerNames
// }

fetch(
	'https://api.nobelprize.org/2.0/nobelPrizes?limit=200&nobelPrizeYear=1999'
)
	.then(response => response.json())
	.then(data => pushItemsIntoArray(data))
	.then(data => console.log(data))
