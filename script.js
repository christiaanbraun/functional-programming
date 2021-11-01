function lowerCase(string) {
  if (typeof string === 'string') {
    return string.toLowerCase();
  } else {
    return string;
  }
}

function removeExtraWords(string) {
  if (typeof string === 'string') {
    return string.split(' '[0]);
  } else {
    return string;
  }
}

fetch('./data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) =>
    data.map((obj) => {
      Object.keys(obj).forEach((key) => {
        obj[key] = lowerCase(obj[key]);
        obj[key] = removeExtraWords(obj[key]);
      });

      return obj;
    })
  )
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]['Wat is je favoriete soort huisdier?']);
    }
  });
