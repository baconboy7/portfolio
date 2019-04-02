const axios = require('axios');
const loadImage = require('image-promise');

let nasaURL = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.MIX_NASA_API_KEY;

axios.get(nasaURL)
    .then(function (response) {
        document.querySelector('.header').style.backgroundImage = `url(${response.data.hdurl})`;

        loadImage(response.data.hdurl)
            .then(function() {
                    removeRocket();
                }
            )
            .catch(function () {
                removeRocket();
            })

    })
    .catch(function (error) {
        console.log(error);
    });

function closeNavigation(){
    document.getElementById('navigation-toggle').checked = false;
}

function removeRocket(){
    document.getElementById('cover').classList.add("vanish");
    let rocket = document.getElementById("rocket");
    rocket.parentNode.removeChild(rocket);
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

