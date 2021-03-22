

var record;
const url1 = "https://api.openweathermap.org/data/2.5/weather?q=";

const url2 = "&APPID=cb8fc3dcb891757d9b1dedcf41d1e1db";

document.querySelector('#checkWeather').onclick = () => {
    const cityName = document.querySelector("#cityName").value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url1 + cityName + url2);
    xhr.send();
    xhr.onprogress = function () {
        console.log("waiting");
    }
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            record = JSON.parse(this.responseText);
            // console.log(record);
            showWeather(record);
            console.log(record);
        }
    });
}



function showWeather(city) {
   var code = city.weather[0].id;
     console.log(city.name);
    console.log(`Temp : ${(city.main.temp - 273.15).toFixed(1)} C`);
   
    document.querySelector('#weatherReport').innerText = `${city.name} ${(city.main.temp - 273.15).toFixed(1)}C`;
    console.log(city.weather[0].id);
    document.querySelector('#desc').classList.remove('d-none');
    document.querySelector('#desc').innerText = `Forecast: ${city.weather[0].main}`;

}

cityName.onfocus = () => {
    document.querySelector('#desc').classList.add('d-none')
    document.querySelector('#weatherReport').innerText = "";
}