const baseURL = 'https://api.airvisual.com/v2/nearest_city?key=84fa7098-cc77-4c98-bea7-91d662989ce1';
const key = '84fa7098-cc77-4c98-bea7-91d662989ce1';

const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();

    fetch(baseURL)
        .then(function(result) {
            console.log(result)
            return result.json();
        }).then(function(json) {
            displayResults(json);
        });
}

function displayResults(json) {
    console.log(json);
    let city = json.data.city;
    let state = json.data.state;
    let country = json.data.country;
    let currentTemp = (json.data.current.weather.tp * 1.8 + 32);
    let currentHumid = json.data.current.weather.hu;

    printCity.innerHTML = city;
    printState.innerHTML = state;
    printCountry.innerHTML = country;
    printTemp.innerHTML = currentTemp;
    printHumid.innerHTML = currentHumid;
}

