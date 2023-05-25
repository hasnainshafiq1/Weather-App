window.getWeather = function () {

    let cityName = document.querySelector("#cityName").value;
    let API_KEY = '2e4e1e0c27fa3bf005a6ecc866a70b85'

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)  //&units=metric
        .then(function (response) {
            // handle success
            console.log(response.data);
           document.querySelector("#image").innerHTML=`<img src='https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png'>`
           document.querySelector('#temp').innerHTML=`${response.data.main.temp}°C`
           document.querySelector('#country').innerHTML=`country : ${response.data.sys.country}`
           document.querySelector('#humidity').innerHTML=` Humidity:${response.data.main.humidity}%`
           document.querySelector('#max').innerHTML=`Today Max Temp:${response.data.main.temp_max}°C`
           document.querySelector('#min').innerHTML=`Today Min Temp:${response.data.main.temp_min}°C`
           document.getElementById('description').innerHTML =`Discribtion: :${response.data.weather[0].description}`
         
        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
           // document.querySelector("#result").innerHTML = "error in getting weather data"
        })



}