function fetchAndSortData(url) {
  let array = [];
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        array.push(
          data[i]['Wat is je favoriete soort huisdier?']
            .toLowerCase()
            .replaceAll(' ', '')
        );
      }
    })
    .then(() => array.sort())
    .then((array) => {
      let main = document.querySelector('main');
      for (let i = 0; i < array.length; i++) {
        main.insertAdjacentHTML(
          'afterend',
          `<img src="./resources/${array[i]}.jpg"></img>`
        );
      }
    });
}

fetchAndSortData('./data.json');
