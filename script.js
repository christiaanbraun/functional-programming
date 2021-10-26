let array = [];

fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      array.push(data[i]['Wat is je favoriete soort huisdier?'].toLowerCase());
      console.log(array[i]);
    }
  });
