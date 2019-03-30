
console.log(process.env);

let nasaURL = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.MIX_NASA_API_KEY;

console.log(nasaURL);