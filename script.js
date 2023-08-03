const cityName = document.getElementById('city-name');
const weatherNature = document.getElementById('weather-nature');
const temp = document.getElementById('temp');
const minTemp = document.getElementById('min-temp');
const maxTemp = document.getElementById('max-temp');
const img = document.querySelector('img')
const tip = document.getElementById('tip')
const tip_text = document.getElementById('tip-text')

let city = '';
const search = (city) =>{
    const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '93260372f0msh48d853ab72b884cp11fc8cjsnbbbbaf2d7b32',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cityName.innerHTML = response.name
        weatherNature.innerHTML = response.weather[0].main
        console.log(weatherNature.textContent)
        if(weatherNature.textContent === 'Clouds'){
            img.src="/img/cloudy (1).png"
            tip_text.innerText = 'Grab a '
            tip.src="/img/jacket.png"
        } else if(weatherNature.textContent ==="Rain"){
            img.src ="/img/rainy-day.png"
            tip.src= "/img/umbrella.png"
            tip_text.innerText = 'Grab an '
        } else{
            img.src = "/img/sun.png"
            tip_text.innerText = 'Grab a '
            tip.src = "/img/glasses.png"
        }

        let newtemp = response.main.temp
        newtemp = Math.floor((newtemp - 32) * 5/9)   
        temp.innerHTML = newtemp
        let min_temp = response.main.temp_min
        min_temp = Math.floor((min_temp - 32) * 5/9)
        minTemp.innerHTML = min_temp
        let max_temp = response.main.temp_max
        max_temp = Math.floor((max_temp - 32) * 5/9)
        maxTemp.innerHTML = max_temp
        console.log(response)
    })
    .catch((error) => console.error(error));
} 

const handleSearch = async () =>{
    const userCity = document.getElementById('city-input');
    city = userCity.value
    search(city);
}
