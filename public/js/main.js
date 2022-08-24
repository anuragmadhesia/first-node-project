const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal==""){
        city_name.innerText=`Plz enter city name`;
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=aea398a311129990b729d992bccad43c`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerHTML=`Temperature in ${arrData[0].name} is ${(arrData[0].main.temp - 273.15).toFixed(2)} <sup>o</sup> C`;
        } catch (error) {
            city_name.innerText=`Plz enter city name properly`;
        }
    }
}
submitBtn.addEventListener('click',getInfo);