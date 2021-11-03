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

function pushWinnersIntoArray(input) {
	let winnerNames = [] // Create empty array
	// Loop over all the nobelprizes
	for (let i = 0; i < input.nobelPrizes.length; i++) {
		// If someone won the prize that year do this
		if (input.nobelPrizes[i].laureates) {
			// Loop over the laureates
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
			// console.log(input.nobelPrizes[i])
		}
	}

	return winnerNames
}

function countWins(winners) {
	// Create an empty object
	let counts = {}
	// For each Nobel Prize winner do this
	winners.forEach(winner => {
		// Add one to the counst of each winner for everytime it finds one
		counts[winner] = (counts[winner] || 0) + 1
	})
	// Return the object
	console.log(counts)
	return counts
}

function logMultipleWinners(winners) {
	// Create an array
	let multiplePrizeWinners = []
	// For every value and key in the object
	for (let [key, value] of Object.entries(winners)) {
		// If the value is more than one, push it into the multiplePrizeWinners array
		if ([value] > 1) {
			multiplePrizeWinners.push({
				name: key,
				amount: value,
			})
		}
	}
	return multiplePrizeWinners
}

function displayInfo(winners) {
	const node = document.querySelector('main')
	console.log(winners)
	winners.forEach(winner => {
		node.insertAdjacentHTML(
			'afterend',
			`<p>${winner.name} won ${winner.amount} Nobel prizes</p>`
		)
	})
}

// function getInfo(winners) {
// 	winners.forEach(winner => {
// 		fetch(`http://api.nobelprize.org/2.0/laureates?name=${winner.name}`)
// 			.then(response => response.json())
// 			.then(data => console.log(data))
// 	})
// 	return winners
// }

fetch(
	'http://api.nobelprize.org/2.0/nobelPrizes?limit=5000nobelPrizeYear=1901&yearTo=2020'
)
	.then(response => response.json())
	.then(data => pushWinnersIntoArray(data))
	.then(data => countWins(data))
	.then(data => logMultipleWinners(data))
	.then(data => displayInfo(data))
	.then(data => console.log(data))

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
