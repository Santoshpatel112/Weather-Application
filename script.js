const apikey ="1a58a11e48e00948c93fe0e5a068cf4a";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";//we are taken api from external website
const searchBox=document.querySelector(".serach-bar input");
const searchbtn=document.querySelector("#search");
const weatherphoto=document.querySelector(".images");
const body=document.querySelector(".body");
async function checkweather(city){
    const response =await fetch(apiUrl + city +  `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector('#city').innerHTML=data.name;
        document.querySelector('#humper').innerHTML=data.main.humidity+"&#x25;";
    document.querySelector('#windper').innerHTML=data.wind.speed+" km/h";
    document.querySelector('#temp').innerHTML=Math.round(data.main.temp)+ "&#176;c";

    if(data.weather[0].main=="Clouds")
    {
        weatherphoto.src="clouds.png";
    }
    
    
    else if(data.weather[0].main =="Rain")
        weatherphoto.src="rain.png";
    
    else if(data.weather[0].main =="Drizzle")
        weatherphoto.src="drizzle.png";
    
    else if(data.weather[0].main =="Mist")
       weatherphoto.src="mist.png";
    
    else if(data.weather[0].main==="Clear")
        weatherphoto.src="clear.png";
    
    else if(data.weather[0].main =="Haze")
        weatherphoto.src="snow.png";
    
    else if (data.weather[0].main =="Snow")
        weatherphoto.src="snow.png";
    
}

//we are use async await with fetch api in javascript allow to write asynchronous code
//asynchronous code in javascript allow to certain operation to be perform 
//1.Fatching data from api
//2.handaling user input 
//file operation to be performed
//when we are use async await then a promise return
//.jason use because the data in a string formate jason is basically chang in obeject  formate ...


//apiURL: we are taken form api.openweathermap.org 
//api -key we are taken api.openweathermap.org