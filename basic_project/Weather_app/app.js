let inp=document.querySelector('input');
let temp=document.querySelector('.temp');
let wind=document.querySelector('.wind');
let humidity=document.querySelector('.humidity');
let city=document.querySelector('.city');
let btn=document.querySelector('.btn');
let weather_icon=document.querySelector('.weather-icon');
let weather=document.querySelector('.weather');
let error=document.querySelector('.error');
const apikey="a88ac59ebc2d0d647fdce26900a0842c";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function manipulate(val){
    const response=await fetch(apiurl+val+`&appid=${apikey}`);
    if(response.status==404){
        error.style.display="block"
    }
    else{
        error.style.display="none"
    }
    var data=await response.json();
    
    city.innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp) +"°c";
    wind.innerHTML=data.wind.speed +"km/h";
    humidity.innerHTML=data.main.humidity +"%";
    if(data.weather[0].main=='Clouds'){
        weather_icon.src="./assests/images/clouds.png";
    }
    else if(data.weather[0].main=='Clear'){
        weather_icon.src="./assests/images/clear.png";
    }
    else if(data.weather[0].main=='Rain'){
        weather_icon.src="./assests/images/rain.png";
    }
    else if(data.weather[0].main=='Drizzle'){
        weather_icon.src="./assests/images/drizzle.png";
    }
    else if(data.weather[0].main=='Mist'){
        weather_icon.src="./assests/images/mist.png";
    }
    weather.style.display="block"; 
    
}



btn.addEventListener('click',()=>{
    let val=inp.value;
    manipulate(val);
    inp.value="";
})

