const lokasi = document.getElementById('lokasi');
const kota = document.getElementById('kota');

const cuacaUtamaIcon = document.getElementById('cuaca-utama-icon');
const cuacaUtamaTemp = document.getElementById('cuaca-utama-temp');
const cuacaUtamaWind = document.getElementById('cuaca-utama-wind');
const cuacaUtamahumidity = document.getElementById('cuaca-utama-humidity');
const cuacaUtamaPressure = document.getElementById('cuaca-utama-pressure');

const cuaca1Icon = document.getElementById('cuaca-1-icon');
const cuaca1Temp = document.getElementById('cuaca-1-temp');
const cuaca1Wind = document.getElementById('cuaca-1-wind');
const cuaca1humidity = document.getElementById('cuaca-1-humidity');

const cuaca2Icon = document.getElementById('cuaca-2-icon');
const cuaca2Temp = document.getElementById('cuaca-2-temp');
const cuaca2Wind = document.getElementById('cuaca-2-wind');
const cuaca2humidity = document.getElementById('cuaca-2-humidity');

const cuaca3Icon = document.getElementById('cuaca-3-icon');
const cuaca3Temp = document.getElementById('cuaca-3-temp');
const cuaca3Wind = document.getElementById('cuaca-3-wind');
const cuaca3humidity = document.getElementById('cuaca-3-humidity');

async function getWeather(city = 'purwokerto') {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d8b21c07ae373d57cedb303d944e393e&units=metric`;

    return await fetch(url, {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    }).then((result) => {
        const cuacaUtamaDate = new Date(result.list[0].dt * 1000)
        console.log(cuacaUtamaDate.getHours());
        cuacaUtamaIcon.src = getImage(result.list[0].weather[0].main);
        cuacaUtamaTemp.innerText = result.list[0].main.temp + "°C"
        cuacaUtamaWind.innerText = result.list[0].wind.speed + " km/hr";
        cuacaUtamahumidity.innerText = result.list[0].main.humidity + "%";
        cuacaUtamaPressure.innerText = result.list[0].main.pressure + "hPa";

        cuaca1Icon.src = getImage(result.list[1].weather[0].main);
        cuaca1Temp.innerText = result.list[1].main.temp + "°C"
        cuaca1Wind.innerText = result.list[1].wind.speed + " km/hr";
        cuaca1humidity.innerText = result.list[1].main.humidity + "%";

        cuaca2Icon.src = getImage(result.list[2].weather[0].main);
        cuaca2Temp.innerText = result.list[2].main.temp + "°C"
        cuaca2Wind.innerText = result.list[2].wind.speed + " km/hr";
        cuaca2humidity.innerText = result.list[2].main.humidity + "%";

        cuaca3Icon.src = getImage(result.list[3].weather[0].main);
        cuaca3Temp.innerText = result.list[3].main.temp + "°C"
        cuaca3Wind.innerText = result.list[3].wind.speed + " km/hr";
        cuaca3humidity.innerText = result.list[3].main.humidity + "%";

    });    
}

function getImage(weather) {
    let src = 'img/clear.png';
    weather = weather.toLowerCase();

    if (weather == 'clear') {
        src = 'img/clear.png';
    } else if (weather == 'clouds') {
        src = 'img/clouds.png';
    } else if (weather == 'drizzle') {
        src = 'img/drizzle.png';
    } else if (weather == 'mist') {
        src = 'img/mist.png';
    } else if (weather == 'rain') {
        src = 'img/rain.png';
    } else if (weather == 'snow') {
        src = 'img/snow.png';
    }

    return src;
}

function getByCity() {
    const lokasiValue = lokasi.value;
    kota.innerText = lokasiValue;

    getWeather(lokasiValue)
}

getWeather()