var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var tempTag = document.querySelector('.tempTag');;
var temp = document.querySelector('.temp');
var feel = document.querySelector('.feel');
var desc = document.querySelector('.desc');
var humi = document.querySelector('.humi');
var wind = document.querySelector('.wind');
var errM = document.querySelector('.errM');
var button= document.querySelector('.submit');

function weatherInfo() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=165f07ee17e1ddfc06b7a7f431cca58b')
    .then(response => response.json())
    .then(data => {
    var tempValue = data['main']['temp'];
    var humiValue = data['main']['humidity'];
    var nameValue = data['name'];
    var feelValue = data['main']['feels_like'];
    var descValue = data['weather'][0]['description'];
    var windValue = data['wind']['speed'];
    var descMain = data['weather'][0]['main'];


    main.innerHTML = nameValue;
    tempTag.innerHTML = "TEMP";
    temp.innerHTML = tempValue+"°K";
    input.value ="";
    feel.innerHTML = "FEELS LIKE: "+feelValue+"°K";
    humi.innerHTML = "HUMIDITY: "+humiValue+"%";
    desc.innerHTML = "Current weather in "+nameValue+" is "+descMain+", "+descValue+".";
    wind.innerHTML = "WIND: "+windValue+" mph";
    errM.innerHTML = "";
    console.log(data);
    })

    .catch(err => {
        errM.innerHTML = "PLEASE ENTER A VALID CITY NAME.";
        main.innerHTML = "";
        tempTag.innerHTML = "";
        temp.innerHTML = "";
        input.value ="";
        feel.innerHTML = "";
        humi.innerHTML = "";
        desc.innerHTML = "";
        wind.innerHTML = "";
    });
}