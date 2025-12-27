var inputval=document.querySelector("#cityinput");
var btn=document.querySelector("#add");
var cityname=document.querySelector("#cityoutput");
var temp=document.querySelector("#temp");
var desc=document.querySelector("#description");
var humid=document.querySelector("#humid");
var windsp=document.querySelector("#wind");
var rain=document.querySelector("#rain");
var pressure=document.querySelector("#pressure");

apik = '6c6f0a22ad1aff16a9025e9eb4b17766';

btn.addEventListener("click",function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputval.value}&appid=${apik}&units=metric`)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        var nameval=data['name'];
        var tempval=data['main']['temp'];
        var descval=data['weather'][0]['description'];
        var humidval=data['main']['humidity'];
        var rainval=data['rain'];
         var pressureval=data['main']['pressure'];

        var windval=data['wind']['speed'];
        cityname.innerHTML=nameval;
        temp.innerHTML="Temperature: " + tempval + " °C";
        desc.innerHTML="Description: " + descval;
        windsp.innerHTML="Wind Speed: " + windval + " m/s";
        humid.innerHTML="Humidity: " + humidval + " %";
        rain.innerHTML="rain: " +rainval + "0 %";
        pressure.innerHTML="Pressure: " + pressureval + " hPa";
    })
    .catch(err => alert("Wrong city name!"));


});
