let array = [];
let main = document.querySelector('main');

function fetchData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        array.push(
          data[i]['Wat is je favoriete soort huisdier?']
            .toLowerCase()
            .replaceAll(' ', '')
        );
        main.insertAdjacentHTML(
          'afterend',
          `<img src="./resources/${array[i]}.jpg"></img>`
        );
      }
    });
}

fetchData('./data.json');
