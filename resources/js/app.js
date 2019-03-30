const axios = require('axios');

let nasaURL = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.MIX_NASA_API_KEY;

axios.get(nasaURL)
    .then(function (response) {
        console.log(response);
        document.querySelector('.header').style.backgroundImage = `url(${response.data.hdurl})`;
    })
    .catch(function (error) {
        console.log(error);
    });
