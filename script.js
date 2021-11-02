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
	let winnerNames = [] // Create empty array
	// Loop over all the nobelprizes in the given year
	for (let i = 0; i < input.nobelPrizes.length; i++) {
		if (input.nobelPrizes[i].laureates) {
			// Loop over the laureates of said year
			for (let j = 0; j < input.nobelPrizes[i].laureates.length; j++) {
				// if there is a knownname execute this code
				if (input.nobelPrizes[i].laureates[j].knownName) {
					winnerNames.push(input.nobelPrizes[i].laureates[j].knownName.en)
					// if there isn't, use this code
				} else if (input.nobelPrizes[i].laureates[j].orgName) {
					winnerNames.push(input.nobelPrizes[i].laureates[j].orgName.en)
				}
			}
		} else {
			console.log('error')
		}
	}

	return winnerNames
}

fetch(
	'http://api.nobelprize.org/2.0/nobelPrizes?limit=2000nobelPrizeYear=1901&yearTo=2021'
)
	.then(response => response.json())
	.then(data => pushItemsIntoArray(data))
	.then(data => console.log(data))

// Eerst deed ik dit maar dat was omslachtig
//
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
