window.onload = function(){

  let weather = {    
    searchWeather: function(city) {
      let apiKey = "13e786b2255800d48474a6fdbcd071dc"
      axios.get("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" + 
        apiKey
      )
        .then( response => {
          this.showWeather(response.data)
          console.log(response.data);
        })
        
        
    },
    search: function(){
      this.searchWeather(document.querySelector('.search-bar').value)
    },
    showWeather: function(data){
      const { name } = data
      const { temp, humidity } = data.main
      const { icon, description } = data.weather[0]
      const { speed } = data.wind
      document.querySelector('.city').innerText = 'Weather in ' + name
      document.querySelector('.temp').innerText = temp + '°C'
      document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${icon}.png`
      document.querySelector('.description').innerText = description
      document.querySelector('.humidity').innerText = `湿度: ${humidity}%`
      document.querySelector('.wind').innerText = `风速: ${speed} km/h`
      document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?city ${name}')`
      document.body.style.backgroundRepeat = 'no-repeat'
      document.body.style.backgroundPosition = 'center'
      document.querySelector('.weather').style.display = 'block'
    }

  }
  
  
  document.querySelector('button').onclick = (e) => {
    weather.search()
    e.target.value = ''
  }
  document          
    .querySelector('.search-bar')
    .addEventListener('keyup',(e) => {
      if(e.key === 'Enter') { 
        weather.search()
        e.target.value = ''
      }
  })

  weather.searchWeather('ningbo');
}
