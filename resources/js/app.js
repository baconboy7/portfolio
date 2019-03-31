const axios = require('axios');

let nasaURL = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.MIX_NASA_API_KEY;

axios.get(nasaURL)
    .then(function (response) {
        document.querySelector('.header').style.backgroundImage = `url(${response.data.hdurl})`;
    })
    .catch(function (error) {
        console.log(error);
    });

function closeNavigation(){
    document.getElementById('navigation-toggle').checked = false;
}

document.getElementById("about-link").addEventListener('click', () => {
    closeNavigation();
});
document.getElementById("languages-link").addEventListener('click', () => {
    closeNavigation();
});
document.getElementById("portfolio-link").addEventListener('click', () => {
    closeNavigation();
});
document.getElementById("contact-link").addEventListener('click', () => {
    closeNavigation();
});

